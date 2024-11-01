
import {List} from './List';
import { useState,useRef,useEffect} from 'react';
import { collection, onSnapshot } from 'firebase/firestore'; 
import { onAuthStateChanged } from 'firebase/auth'; 
import { doc,getDocs,getDoc , setDoc,updateDoc } from 'firebase/firestore';
import { auth } from './firebase2'; 
import { useLocation } from 'react-router-dom';
import { db } from './firebase2';
import {ShareMenu} from './ShareMenu'
import { DndContext,TouchSensor, closestCenter, useSensor, useSensors, MouseSensor } from '@dnd-kit/core';
import { ThreeDot } from 'react-loading-indicators';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
export function Bord() {
  const BordContainer=useRef(null);
  const dropdownRef = useRef(null);
  const [createList,setcreateList]=useState(false);
  const AddingListRef=useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const listRefs = useRef([]);
  const [isDragging, setIsDragging] = useState(false);
  const [title,settitle]=useState('');
  const [lists, setlists] = useState([]);
  const location=useLocation();
  const Board=location.state;
  const [loading, setLoading] = useState(true);
  const [Boards2,setBoards2]=useState(Board);
  const [visibility, setVisibility] = useState(Board.boardVisibility);
  const [sharedWith,setsharedWith]=useState(Board.sharedWith);

  useEffect(()=>{
    const timer=setTimeout(()=>{
      setLoading(false)
    },700);
 
    return()=>{clearTimeout(timer);}
  }),[]
  const [isOpen2, setIsOpen2] = useState(false);
  const dropdown2Ref = useRef(null);
  const handleClickOutsideForShare2 = (event) => {
      if (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) {
        setIsOpen2(false);
      }
    };
    useEffect(() => {
     
      document.addEventListener('mousedown', handleClickOutsideForShare2);
      return () => {
        
        document.removeEventListener('mousedown', handleClickOutsideForShare2);
      };
    }, []);
    useEffect(() => {
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutsideForShare);
      return () => {
        
        document.removeEventListener('mousedown', handleClickOutsideForShare);
      };
    }, []);
  useEffect(() => {
   
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const fetchBoard = async () => {
          try {
            const boardRef = doc(db, `users/${user.uid}/Boards/${Board.id}`); 
            const boardSnap = await getDoc(boardRef);
  
            if (boardSnap.exists()) {
              const specificBoard = {
                id: boardSnap.id,
                data: boardSnap.data(),
              };
              setBoards2(specificBoard); 
             
              setVisibility(specificBoard.data.boardVisibility); 
              setsharedWith(specificBoard.data.sharedWith);
            } else {
              console.log("No such board!");
              setBoards2({}); 
            }
          } catch (error) {
            console.error('Error fetching board:', error);
          }
        };
  
        fetchBoard();
      } else {
        setBoards2({});
      }
    });
  
    return () => unsubscribeAuth();
  }, []);


  const handleClickOutsideForShare = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  const privateButton = async () => {
    if (visibility === "shareable") {
      const user = auth.currentUser; 
      if (user) {
        // Check the number of users in the sharedWith array
        if (sharedWith.length >= 2) {
          console.error("Cannot change visibility to private: the board is shared with multiple users.");
          return; // Exit the function if there are 2 or more shared users
        }
        
        try {
          setVisibility("private");
          await updateDoc(doc(db, `users/${user.uid}/Boards/${Board.id}`), { boardVisibility: "private" });
        } catch (error) {
          console.error("Error updating document: ", error);
        }
      } else {
        console.error("User is not authenticated.");
      }
    }
  };
  const shareableButton=async()=>{
    if(visibility==="private")
    {
      setVisibility("shareable");
    
 const user = auth.currentUser; 
 if (user) {
  try {
    await updateDoc( doc(db, `users/${user.uid}/Boards/${Board.id}`), { boardVisibility: "shareable" });
  }
  catch (error) {
    console.log("Error updating document: ", error);
  }
}
  } else {
    console.error('User is not authenticated.');
  }
  }
    

  const style = Board.background === "" ? {
    backgroundImage: `url('${Board.backgroundImage}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",

  height: "auto",
  width: "100%",
  
  color: "rgba(255,255,255,0)"
  } : {};
  const AddAnotherList=(event)=>{
    setIsDragging(false);
    event.stopPropagation();
    setcreateList(true);
  
    
  }
  const ExitFromAddingList=()=>{
    setcreateList(false);
  }
 
 
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const fetchCards = async () => {
          const ListsRef = collection(db,`users/${user.uid}/Boards/${Board.id}/Lists`);
          const snapshot = await getDocs(ListsRef);
          const listTemp = snapshot.docs.map((doc) => ({
            id: doc.id,
              title: doc.data().title,
              order: doc.data().order
          })).sort((a, b) =>a.order - b.order);
  
          setlists(listTemp);
        };
  
        fetchCards().catch((error) => console.error('Error fetching lists:', error));
      } else {
        setlists([]);
      }
    });
  
    return () => unsubscribeAuth();
  }, []);
  useEffect(()=>{
    if(!createList){
     return;
    }
       document.addEventListener("click", handleClickOutside);
   return()=>{
     document.removeEventListener("click", handleClickOutside);
 
   };
  },[createList]);
  const AddLists = async () => {
    const user = auth.currentUser;
  
    if (user) {
      ExitFromAddingList(); 
  
      try {
        const id = new Date().getTime().toString(); 
        const newlist = { id: id, title: title };
  
        setlists((prevLists) => {
          const updatedLists = [...prevLists, newlist];
          
     
          const listDocRef = doc(db, `users/${user.uid}/Boards/${Board.id}/Lists`, id);
          setDoc(listDocRef, {
            title: title,
            id: id,
            order: updatedLists.length - 1 
          });
  
          return updatedLists; 
        });
  
  
       console.log(sharedWith)
        const sharedUpdatePromises = sharedWith.map((sharedUser) => {
          const sharedListDocRef = doc(db, `users/${sharedUser.id}/Boards/${Board.id}/Lists`, id);
          return setDoc(sharedListDocRef, {
            title: title,
            id: id,
            order: lists.length 
          });
        });
  
        await Promise.all(sharedUpdatePromises);

        const windowWidth = window.innerWidth;
        if (windowWidth <= 650 && listRefs.current.length > 0) {
          const lastRef = listRefs.current[listRefs.current.length - 1];
          if (lastRef) {
            lastRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
        
      } catch (error) {
        console.error('Error adding to Firestore: ', error);
      }
    } else {
      console.error('User is not authenticated');
    }
  };
  
  const handleClickOutside = (event) => {
    
    if (
      AddingListRef.current &&
      !AddingListRef.current.contains(event.target) 
     
    ) {
      console.log('Click was outside, closing input');
      ExitFromAddingList();
    }
  };
  const handleDragStart = () => {
    setIsDragging(true);
  };
  const handleDragEnd = async (event) => {
    const { active, over } = event;
    setIsDragging(false);
    
    if (active.id && over?.id) {
      const user = auth.currentUser;
  
      if (user) {
        const oldIndex = lists.findIndex((item) => item.id === active.id);
        const newIndex = lists.findIndex((item) => item.id === over.id);
  
        if (oldIndex !== -1 && newIndex !== -1) {
          const updatedItems = arrayMove(lists, oldIndex, newIndex);
  
          try {
            setlists(updatedItems);
  
        
            const updateCurrentUserPromises = updatedItems.map((item, index) =>
              updateDoc(doc(db, `users/${user.uid}/Boards/${Board.id}/Lists`, item.id), {
                order: index,
                title: item.title,
              })
            );
  
            const sharedUpdatePromises = sharedWith.map((sharedUser) => {
              return updatedItems.map((item, index) =>
                updateDoc(doc(db, `users/${sharedUser.id}/Boards/${Board.id}/Lists`, item.id), {
                  order: index,
                  title: item.title,
                })
              );
            }).flat(); 
  
            
            await Promise.all([...updateCurrentUserPromises, ...sharedUpdatePromises]);
  
          } catch (error) {
            console.error('Error updating cards:', error);
          }
        }
      } else {
        console.error('User is not authenticated');
      }
    }
  };
  
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        delay: 50,
        tolerance: 5 
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 50,
        tolerance: 5 
      },
    })
  )
  return (
    <div>
       {loading && (
  <div className='flex h-screen w-screen flex-col justify-center items-center gap-6 p-4 '>
    <ThreeDot variant="bounce" color="#d33dad" size="large" text="" textColor="#f8f8f8" />
    <p className='text-[1.3rem] font-bold text-center text-gray-900' style={{ maxWidth: '350px' }}>
      Hang tight! We're preparing everything for you...
    </p>
  </div>
)}
   {!loading&&(<div style={style} className= {`h-screen max-h-screen overflow-hidden flex flex-col box-border ${Board.background} `}>
 {isOpen && (
        <div ref={dropdownRef} className=" absolute top-[5.3em] left-[2.3%]  mt-1.5 shareMenu z-[1000000] w-72 rounded-2xl  bg-zinc-800   ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" >
            <button onClick={privateButton} style={{
              
              borderColor:visibility==="private"?"lightblue" :""
            }}  className="block  w-full border-2 border-zinc-800 rounded-2xl text-left px-4 py-2 text-sm bg-zinc-800 text-gray-300 hover:bg-zinc-700" >
              <span className='text-[1.1rem] text-gray-200'>Private Board</span> - A personal board where all tasks and data are private and only visible to you.
            </button>
            <button onClick={shareableButton} style={{
              
              borderColor:visibility==="shareable"?"lightblue" :""
            }}    className="block border-2 border-zinc-800 w-full text-left px-4 rounded-2xl py-2 text-sm bg-zinc-800 text-gray-300 hover:bg-zinc-700" >
            <span className='text-[1.1rem] text-gray-200'>Shareable Board</span> - A collaborative board that allows you to share tasks with others for group work.
            </button>
          </div>
        </div>
      )}
<nav className='bg-gray-400 bg-opacity-55  sm:bg-opacity-50  py-2.5  pl-3.5 pr-2 sm:pr-5 text-md absolute w-screen items-center top-11'>
  <div className='flex justify-between  '>
    <div className='flex gap-5'>
      <p className='text-white font-bold text-md sm:text-xl cursor-pointer'>{Board.title}</p>
      <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
     
     onClick={()=>{setIsOpen(!isOpen)}}
        className="sm:text-lg text-slate-100 text-md px-1.5 flex gap-1  hover:text-gray-900 rounded-md hover:bg-slate-100 items-center"
      >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
    Workspace visible
      </button>
     
    </div>

    </div>
    <div onClick={()=>{setIsOpen2(!isOpen2)}} className='  bg-slate-100 text-zinc-950 flex items-center gap-1 px-1.5 rounded-md  hover:bg-slate-200  cursor-pointer'>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.4" stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
  </svg>
  Share</div>
  </div>
</nav>


{isOpen2&&( <div ref={dropdown2Ref} ><ShareMenu visibility={visibility} id={Board.id} Board={Boards2} BoardMember={sharedWith}/></div>)}
    <div  ref={BordContainer} className={`ml-7 sm:pl-6 md:ml-0 overflow-x-auto BOARDS  overflow-y-hidden   h-screen max-h-screen over px-3    sm:gap-10  flex gap-16 pt-28  ${!isDragging?'BordContainer':" "}`}>
    <DndContext  onDragStart={handleDragStart} sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
    <SortableContext items={lists} strategy={verticalListSortingStrategy}>
     
    {lists.map((item,index)=>(
      
      <List 
      BoardId={Board.id}
      item={item}
      sharedWith={sharedWith}
      key={item.id}
      lists={lists}
      id={item.id}
      Dragging={isDragging}
      ref={(el) => (listRefs.current[index] = el)}
      title={item.title}
      />))}
      
       </SortableContext>
       </DndContext>
       {!createList&& (<button  onClick={AddAnotherList} className='btn p-4 text-md   py-2.5 rounded-lg bg-zinc-800 bg-opacity-50 text-left text-zinc-50 self-start mt-1'>
        + Add another list
      </button>)}
      {createList&&(<div  className='bg-black mr-10  btn p-5 px-3 pt-3 rounded-xl h-fit'>
      <div className='mt-1'><input onChange={(e)=>{settitle(e.target.value)}} type='text' placeholder='Enter List name...' className='text:xl p-1.5 px-2.5 rounded-md w-full border-solid border-slate-400 focus:border-solid focus:border-blue-500 focus:box-shadow border-2  focus:outline-none bg-gray-800 text-sm text-slate-300' />
      <div className='mt-3 flex justify-start gap-1.5'>
      <button onClick={AddLists} className="bg-blue-500 hover:bg-blue-600 text-gray-900  py-1 px-2 rounded-md  text-m">
       Add List
</button>
<button onClick={ExitFromAddingList} className=" justify-self-end  text-slate-300  py-1 px-2  rounded-md  text-md hover:bg-gray-800">
&#x2715;
</button>

      </div>

      </div>
      
      </div>)}
     
    </div>

  </div>)}
  </div>
  );
}