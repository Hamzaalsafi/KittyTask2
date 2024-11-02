
import {List} from './List';
import { useState,useRef,useEffect} from 'react';
import { collection, onSnapshot } from 'firebase/firestore'; 
import { onAuthStateChanged } from 'firebase/auth'; 
import { doc,getDocs,getDoc , setDoc,updateDoc ,deleteDoc} from 'firebase/firestore';
import { auth } from './firebase2'; 
import { useLocation } from 'react-router-dom';
import { db } from './firebase2';
import {ShareMenu} from './ShareMenu'
import { motion, AnimatePresence } from 'framer-motion';
import { DndContext,TouchSensor, closestCenter, useSensor, useSensors, MouseSensor } from '@dnd-kit/core';
import { ThreeDot } from 'react-loading-indicators';
import { useNavigate } from 'react-router-dom';import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { useInView } from 'react-intersection-observer';
export function Bord() {
  const [boardMenu,setBoardMenu]=useState(false);
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
  const navigate = useNavigate();
  const [BoardTitle,setBoardTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [Boards2,setBoards2]=useState(Board);
  const [visibility, setVisibility] = useState(Board.boardVisibility);
  const [sharedWith,setsharedWith]=useState(Board.sharedWith);
  const [background,setBackground] = useState("");
  const [backgroundImage,setBackgroundImage] = useState("");
  const [deleteMenu,setDeleteMenu] = useState(false);
  const deleteRef=useRef(null);
  const handleClickOutsideForDelete = (event) => {
    if (deleteRef.current && !deleteRef.current.contains(event.target)) {
      setDeleteMenu(false);
    }
  };
  useEffect(() => {
     
    document.addEventListener('mousedown', handleClickOutsideForDelete);
    return () => {
      
      document.removeEventListener('mousedown', handleClickOutsideForDelete);
    };
  }, []);
  const menuVariants = {
    hidden: { opacity: 0, x: '100%' }, 
    visible: { opacity: 1, x: '0%' }, 
    exit: { opacity: 0, x: '100%' }     
  };
  const imgBackground=[
    "./BoardBackground/1.jpg",
    "./BoardBackground/2.jpg",
    "./BoardBackground/3.jpg",
    "./BoardBackground/4.jpg",
    "./BoardBackground/5.jpg",
    "./BoardBackground/6.jpg",
    "./BoardBackground/7.jpg",
    "./BoardBackground/8.jpg",
    "./BoardBackground/9.jpg",
    "./BoardBackground/10.jpg",
    "./BoardBackground/11.jpg",
    "./BoardBackground/12.jpg",
    "./BoardBackground/13.jpg",
    "./BoardBackground/14.jpg",
    "./BoardBackground/15.jpg",
    "./BoardBackground/16.jpg",
    "./BoardBackground/17.jpg",
    "./BoardBackground/18.png",
    "./BoardBackground/19.jpg",
    ]
    const backgroundOptions = [
  { className: "bg-gradient-to-r from-teal-400 to-blue-500" },
  { className: "bg-gradient-to-r from-blue-800 to-blue-400" },
  { className: "bg-gradient-to-r from-purple-500 to-pink-500" },
  { className: "bg-gradient-to-r from-purple-400 to-blue-300" },
  { className: "bg-gradient-to-r from-orange-400 to-yellow-300" },
  { className: "bg-gradient-to-r from-pink-400 to-pink-200" },
  { className: "bg-gradient-to-r from-teal-400 to-green-500" },
  { className: "bg-gradient-to-r from-blue-800 to-blue-400" },
  { className: "bg-gradient-to-r from-red-800 to-brown-500" },
  { className: "bg-blue-500" },
  { className: "bg-orange-500" },
  { className: "bg-green-500" },
  { className: "bg-red-500" },
  { className: "bg-purple-500" },
  { className: "bg-pink-500" },
  { className: "bg-green-300" },
  { className: "bg-cyan-500" },
  { className: "bg-gray-500" },
];
const handleClickOutsideForUserDetails = (event) => {
  if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    setBoardMenu(false);
  }
};
useEffect(() => {
   
  document.addEventListener('mousedown', handleClickOutsideForUserDetails);
  return () => {
    
    document.removeEventListener('mousedown', handleClickOutsideForUserDetails);
  };
}, []);
const handleBackgroundClick = async (bgClass) => {
  // Set the background state
  setBackground(bgClass);

  const user = auth.currentUser;
  if (user) {
    try {
      // Directly use the bgClass for the database update
      await updateDoc(doc(db, `users/${user.uid}/Boards/${Board.id}`), {
        background: bgClass,
        backgroundImage: "",  
      });

      // Update shared users' backgrounds
      const sharedTitleUpdatePromises = sharedWith.map((sharedUser) =>
        updateDoc(doc(db, `users/${sharedUser.id}/Boards/${Board.id}`), {
          background: bgClass,
          backgroundImage: "",   
        })
      );

      await Promise.all(sharedTitleUpdatePromises);
   
    } catch (error) {
      console.error("Error updating list title: ", error);
    }
  } else {
    console.error("User is not authenticated.");
  }
};
const handleBackgroundImgClick = async (bgClass) => {
  // Set the background state
  setBackground("");
  setBackgroundImage(bgClass)

  const user = auth.currentUser;
  if (user) {
    try {

      await updateDoc(doc(db, `users/${user.uid}/Boards/${Board.id}`), {
        backgroundImage: bgClass, 
        background: "",
      });

      const sharedTitleUpdatePromises = sharedWith.map((sharedUser) =>
        updateDoc(doc(db, `users/${sharedUser.id}/Boards/${Board.id}`), {
          backgroundImage: bgClass, 
          background: "",
        })
      );

      await Promise.all(sharedTitleUpdatePromises);
   
    } catch (error) {
      console.error("Error updating list title: ", error);
    }
  } else {
    console.error("User is not authenticated.");
  }
};
  useEffect(()=>{
    const timer=setTimeout(()=>{
      setLoading(false)
    },1240);
 
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
    const handleListDeletion = async (deletedListId) => {
      const user = auth.currentUser;
    
      // Step 1: Update the local state
      setlists((prevTitle) => {
        return prevTitle
          .filter((list) => list.id !== deletedListId)
          .map((list, index) => ({ ...list, order: index }));
      });
    
      if (user) {
        try {
          // Step 2: Filter out the deleted list and update the remaining list order
          const updatedCards = lists.filter((list) => list.id !== deletedListId);
    
          // Step 3: Delete the document in Firestore for the current user
          await deleteDoc(doc(db, `users/${user.uid}/Boards/${Board.id}/Lists`, deletedListId));
    
          // Step 4: Update the remaining lists' order for the current user
          const updateCurrentUserPromises = updatedCards.map((List, index) =>
            updateDoc(doc(db, `users/${user.uid}/Boards/${Board.id}/Lists/`, List.id), {
              order: index,
              title: List.title,
            })
          );
    
      
          const sharedUpdatePromises = sharedWith.flatMap((sharedUser) => {
            const sharedDeletePromise = deleteDoc(doc(db, `users/${sharedUser.id}/Boards/${Board.id}/Lists/`, deletedListId));
    
            const sharedOrderUpdatePromises = updatedCards.map((List, index) =>
              updateDoc(doc(db, `users/${sharedUser.id}/Boards/${Board.id}/Lists`, List.id), {
                order: index,
                title: List.title,
              })
            );
    
            return [sharedDeletePromise, ...sharedOrderUpdatePromises];
          });
    
          // Wait for all updates to complete
          await Promise.all([...updateCurrentUserPromises, ...sharedUpdatePromises]);
    
          
    
        } catch (error) {
          console.error("Error deleting list : ", error);
        }
      } else {
        console.error("User is not authenticated");
      }
    };
    
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
              setBoardTitle(specificBoard.data.title);
              setBackground(specificBoard.data.background)
              setBackgroundImage(specificBoard.data.backgroundImage)
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
        
        if (sharedWith.length >= 2) {
          console.error("Cannot change visibility to private: the board is shared with multiple users.");
          return;
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
    

  const style = background === "" ? {
    backgroundImage: `url('${backgroundImage}')`,
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
  const DeleteBoard=async()=>{
    const user = auth.currentUser;
    if (user) {
      try {
     
    
        const listDocRef = doc(db, `users/${user.uid}/Boards/${Board.id}`);
        await deleteDoc(listDocRef);
  
        const sharedDeletePromises = sharedWith.map((sharedUser) => {
          const sharedListDocRef = doc(db, `users/${sharedUser.id}/Boards/${Board.id}`);
          return deleteDoc(sharedListDocRef);
        });
  

        await Promise.all(sharedDeletePromises);

        navigate('/Home');
      } catch (error) {
        console.error("Error deleting card: ", error);
      }
    } else {
      console.error("User is not authenticated");
    }
  }
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
  const BoardInputUpdate = async (e) => {
    const newTitle = e.target.value; 
    setBoardTitle(newTitle);
    
    const user = auth.currentUser; 
    if (user) {
      try {
 
        await updateDoc(
          doc(db, `users/${user.uid}/Boards/${Board.id}`),
          { title: newTitle }
        );

        const sharedTitleUpdatePromises = sharedWith.map((sharedUser) =>
          updateDoc(
            doc(db, `users/${sharedUser.id}/Boards/${Board.id}`),
            { title: newTitle }
          )
        );
  
        await Promise.all(sharedTitleUpdatePromises);
  
      } catch (error) {
        console.error("Error updating list title: ", error);
      }
    } else {
      console.error("User is not authenticated.");
    }
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
        delay: 100,
        tolerance: 5 
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5 
      },
    })
  )
  return (
    <div>
       {loading && (
  <div className='flex h-screen w-screen overflow-hidden flex-col justify-center items-center gap-6 p-4 '>
    <ThreeDot variant="bounce" color="#d33dad" size="large" text="" textColor="#f8f8f8" />
    <p className='text-[1.3rem] font-bold text-center text-gray-900' style={{ maxWidth: '350px' }}>
      Hang tight! We're preparing everything for you...
    </p>
  </div>
)}
   {!loading&&(<div style={style} className= {`h-screen max-h-screen overflow-hidden flex flex-col box-border ${background} `}>
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
<nav className='bg-gray-400 bg-opacity-55 sm:bg-opacity-50 py-2 pl-3.5 pr-2 sm:pr-5 text-md  absolute w-screen items-center top-11'> 
  <div className='flex justify-between'>
    <div className='flex gap-5'>
      <p className='text-white font-bold text-2xl cursor-pointer'>{BoardTitle}</p>
      <div className="relative inline-block text-left" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:text-lg text-slate-100 text-md px-1.5 mt-1 sm:mt-0.5 flex gap-1  hover:text-gray-900 rounded-md hover:bg-slate-100 items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
          </svg>
         <p className=''> {window.innerWidth>650?"Workspace visible":"Visibility"}</p>
     
        </button>
      </div>
    </div>
    <div className='flex items-center gap-2'>
      <div onClick={() => setIsOpen2(!isOpen2)} className='bg-slate-100 text-zinc-950 flex items-center gap-1 px-1.5 rounded-md hover:bg-slate-200 cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.4" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
        </svg>
        Share
      </div>
      <button onClick={()=>{setBoardMenu(!boardMenu)}} className=' text-zinc-100 flex items-center ml-2  rounded-md hover:text-zinc-300 cursor-pointer'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" 
    />
  </svg>
      </button>
    </div>
  </div>
</nav>
{deleteMenu&&(<div  className='flex justify-center items-center w-screen h-screen fixed bg-gray-700 bg-opacity-35 z-[1000000]'>
<div ref={deleteRef} className=' relative flex flex-col z-[10000] justify-center items-center  border-t-2 border-red-600 p-2 pb-5 px-4 sm:px-5 rounded-lg bg-gray-900 w-fit max-w-[90%] h-fit'>
<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5} 
      stroke="currentColor"
      className="size-16 z-50 text-gray-200 bg-red-600 rounded-full p-1.5 absolute top-[-33px] " 
    >
      <path
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
    </svg>
    <h1 className="text-xl text-center mb-2 font-bold mt-10 text-gray-300">Delete Board?</h1>
    <p mb-5 className="text-sm text-center text-gray-300">Are you sure? This action will delete the board for all shared users and cannot be undone.</p>
    <div className='flex justify-center mt-7 gap-10'>
      <button onClick={()=>{setDeleteMenu(false)}} className='px-8 rounded-lg p-1.5 hover:bg-zinc-600 text-gray-100 bg-zinc-500 '>Cancel</button>
      <button onClick={DeleteBoard} className='px-8 rounded-lg p-1.5 text-gray-100 bg-red-600 hover:bg-red-800'>Delete</button>
    </div>
   </div>
</div>)}
<AnimatePresence>
      {boardMenu && (
        <motion.div
          ref={dropdownRef}
          className='h-full p-4 px-3 top-11 flex flex-col w-60 sm:w-72 fixed z-[10000] right-0 bg-gray-800'
          initial="hidden"       
          animate="visible"      
          exit="hidden"         
          variants={menuVariants} 
          transition={{ duration: 0.3 }} 
        >
          <div className='w-full relative flex items-start justify-between '>
            <h1 className='text-center text-xl flex-grow text-gray-300 '>Menu</h1>
            <button onClick={() => { setBoardMenu(false) }} className="absolute right-0 top-0 text-slate-300 py-1 px-1 rounded-md text-md hover:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <hr className='border-0 border-b bg-gray-300 w-full opacity-35 my-2' />
          <input 
            onChange={BoardInputUpdate} 
            value={BoardTitle} 
            className='text-xl my-2 p-1.5 px-2 rounded-md text-center w-full border-solid border-slate-400 focus:border-solid focus:border-blue-500 focus:box-shadow border-2 focus:outline-none bg-gray-900 text-slate-300'
          />
          <h3 className='text-center my-3 text-lg text-gray-300 '>Change Background</h3>
          <div className='color max-h-[20vh] sm:max-h-[17vh] mb-4 rounded-md px-3 pt-1 overflow-y-auto bg-gray-900'>
            <div className='grid grid-cols-2 mt-1 p-1 gap-5'>
              {backgroundOptions.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleBackgroundClick(option.className)}
                  className={`py-6 sm:py-7 cursor-pointer rounded-sm ${option.className}`}
                />
              ))}
            </div>
          </div>
      
          <div className='color max-h-[20vh] mt-1 sm:max-h-[17vh] pt-1 rounded-md sm:px-3 px-2 overflow-y-scroll bg-gray-900'>
            <div className='grid grid-cols-2 mt-1 p-1 gap-5'>
              {imgBackground.map((img) => (
                <div
                  key={img}
                  onClick={() => { handleBackgroundImgClick(img) }}
                  className='cursor-pointer'
                >
                  <img
                    src={img}
                    loading="lazy"
                    alt="Background" 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      visibility: 'hidden',
                    }}
                    onLoad={(e) => {
                   
                      const highResImg = e.target.src.replace('-lowres.jpg', '.jpg'); 
                      const imgElement = new Image();
                      imgElement.src = highResImg;
                      imgElement.onload = () => {
                        e.target.src = highResImg;
                        e.target.style.visibility = 'visible'; 
                      };
                    }}
                  />
                </div>
              ))}
              
            </div>

          </div>
          <div className='flex mt-8 justify-center'><button onClick={()=>{setDeleteMenu(!deleteMenu); setBoardMenu(false)}} className='text-gray-300 text-md flex gap-1 p-1.5 px-4 rounded-xl shadow-lg  bg-gray-900 border-2 border-slate-400 hover:border-red-600 hover:bg-slate-800'> <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5} 
      stroke="currentColor"
      className="size-5 mr-0.5 text-red-600" 
    >
      <path
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
    </svg>Delete</button></div>
        </motion.div>
      )}
    </AnimatePresence>

{isOpen2&&( <div ref={dropdown2Ref} ><ShareMenu visibility={visibility} id={Board.id} Board={Boards2} BoardMember={sharedWith}/></div>)}
    <div  ref={BordContainer} className={`ml-6 sm:pl-6 md:ml-0 overflow-x-auto BOARDS  overflow-y-hidden   h-screen max-h-screen over px-3    sm:gap-10  flex gap-12 pt-28  ${!isDragging?'BordContainer':" "}`}>
    <DndContext  onDragStart={handleDragStart} sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
    <SortableContext items={lists} strategy={verticalListSortingStrategy}>
     
    {lists.map((item,index)=>(
      
      <List 
      BoardId={Board.id}
      item={item}
      sharedWith={sharedWith}
      key={item.id}
      lists={lists}
      onDeleteList={handleListDeletion}
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
      <div className='mt-1'><input onChange={(e)=>{settitle(e.target.value)}} type='text' placeholder='Enter List name...' className='text:xl p-1 px-2.5 rounded-md w-full border-solid border-slate-400 focus:border-solid focus:border-blue-500 focus:box-shadow border-2  focus:outline-none bg-gray-800 text-md text-slate-300' />
      <div className='mt-3 flex justify-start gap-1.5'>
      <button onClick={AddLists}  className='bg-blue-600 hover:bg-blue-700 mr-1.5 text-gray-950 py-1 px-2 rounded-md text-m'>
       Add List
</button>
<button onClick={ExitFromAddingList} className=" justify-self-end  text-slate-300  py-1 px-1  rounded-md  text-md hover:bg-gray-800">
<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
</button>

      </div>

      </div>
      
      </div>)}
     
    </div>

  </div>)}
  </div>
  );
}