
import { useState,useEffect,useRef} from 'react';
import { doc, updateDoc,deleteDoc,setDoc ,collection,getDocs} from "firebase/firestore"; 
import { db } from './firebase2'; 
import { auth } from './firebase2';
import { useSortable } from '@dnd-kit/sortable';

import { useMenuContext } from './MenuProvider';
export function Card({title,id,listid,labels,item,BoardId,onDeleteCard,BG ,sharedWith,lists}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { menuOpen, setMenuOpen, toggleMenu } = useMenuContext();
  const [position2, setPosition2] = useState({ x: 0, y: 0 });
  const [menu,setmenu]=useState(false);
  const [lablemenu,setlablemenu]=useState(false);
  const [cardLable, setcardLable] = useState(labels);
const labelmenuRef=useRef(null)
  const menuRef=useRef(null);
  const backref=useRef(null);
  const cardRef=useRef(null);
  const moveMenuRef=useRef(null);
  const moveRef=useRef(null);
  const label=useRef(null);
  const [backgroundMenu, setBackgroundMenu] = useState(false);
  const [moveMenu, setMoveMenu] = useState(false);
  const backgroundMenuRef = useRef(null);
  const [menuflexend,setmenuflexend]=useState(false);
  const [menuForphone,setmenuForphone]=useState(false);
  const [cardTitle,setcardTitle]=useState(title);
  const cardinputRef=useRef(null);
  const [copyButton,setCopyButton]=useState(false);
  const [background,setBackground]=useState(BG);

  const getColorClass=(backgroundOption)=> {
    switch (backgroundOption) {
      case "background1": return 'bg-green-700';
      case "background2": return 'bg-yellow-800';
      case "background3": return 'bg-amber-700';
      case "background4": return 'bg-red-800';
      case "background5": return 'bg-indigo-800';
      case "background6": return 'bg-blue-800';
      case "background7": return 'bg-pink-900';
      case "background8": return 'bg-gray-800';
    }
  }
  const { attributes, listeners, setNodeRef, transform, transition,isDragging } = useSortable({ id:item.id ,
  
  
  });
  
  const style = {
    transform:transform?`translate3d(${transform.x}px, ${transform.y}px,0) rotate(${isDragging ? -2 : 0}deg)`:undefined,
    transition,
    opacity: isDragging? 0.8 : 1,
    cursor: isDragging? 'grabbing' : 'pointer',
    zIndex:isDragging?10:'auto'
  };
  const combinedRef = (element) => {
    setNodeRef(element); 
    cardRef.current = element;
  };


  const cardMenu=(e)=>{
    e.preventDefault();
  
  
    setMenuOpen(true);
    const rect = cardRef.current.getBoundingClientRect();
    const menux=rect.left + window.scrollX + 270; 
    const menuy=rect.top + window.scrollY-6;
    const windowWidth = window.innerWidth;
    
    if(menux + 200 > windowWidth ){
      setmenuflexend(true);
    }
    else{
      setmenuflexend(false);
    }
    if(windowWidth<650){
      setmenuForphone(true);
    }
    else{
      setmenuForphone(false);
    }
    const finalmenuX = menux + 200 > windowWidth ? menux - 535 : menux; 
    const finalmenuY = menuy < 0 ? 0 : menuy;
    setPosition({
      x: finalmenuX, 
      y:finalmenuY 
    });
    document.body.classList.add('MenuisOpen');
    setmenu(true);
    
  }
  useEffect(()=>{
    labelUpdate();
  },[cardLable])
  useEffect(()=>{
    backgroundUpdate();
  },[background])
  const backgroundUpdate = async () => {
    const user = auth.currentUser;

    if (user) {
        try {
           
            await updateDoc(
                doc(db, `users/${user.uid}/Boards/${BoardId}/Lists/${listid}/cards`, id),
                {background:background } 
            );

            // Update the background color for shared users
            const sharedBackgroundUpdatePromises = sharedWith.map((sharedUser) =>
                updateDoc(
                    doc(db, `users/${sharedUser.id}/Boards/${BoardId}/Lists/${listid}/cards`, id),
                    {background:background } 
                )
            );

            await Promise.all(sharedBackgroundUpdatePromises);

        } catch (error) {
            console.error("Error updating background: ", error);
        }
    } else {
        console.error("User is not authenticated.");
    }
};
  const labelUpdate = async () => {
    const user = auth.currentUser;
  
    if (user) {
      try {
     
        await updateDoc(
          doc(db, `users/${user.uid}/Boards/${BoardId}/Lists/${listid}/cards`, id),
          { labels: cardLable }
        );
  

        const sharedLabelUpdatePromises = sharedWith.map((sharedUser) =>
          updateDoc(
            doc(db, `users/${sharedUser.id}/Boards/${BoardId}/Lists/${listid}/cards`, id),
            { labels: cardLable }
          )
        );
  
        
        await Promise.all(sharedLabelUpdatePromises);
  

  
      } catch (error) {
        console.error("Error updating labels: ", error);
      }
    } else {
      console.error("User is not authenticated.");
    }
  };
  

  const deletecard = async () => {
    const user = auth.currentUser;
  
    if (user) {
      try {
     
        onDeleteCard(id); 
        const listDocRef = doc(db, `users/${user.uid}/Boards/${BoardId}/Lists/${listid}/cards`, id);
        await deleteDoc(listDocRef);
  
        const sharedDeletePromises = sharedWith.map((sharedUser) => {
          const sharedListDocRef = doc(db, `users/${sharedUser.id}/Boards/${BoardId}/Lists/${listid}/cards`, id);
          return deleteDoc(sharedListDocRef);
        });
  

        await Promise.all(sharedDeletePromises);

  
      } catch (error) {
        console.error("Error deleting card: ", error);
      }
    } else {
      console.error("User is not authenticated");
    }
  };
  const copyToClipboard = () => {
    const user = auth.currentUser;
    const textarea = document.createElement('textarea');
    textarea.value = `users/${user.uid}/Boards/${BoardId}/Lists/${listid}/cards/${id}`; 
    document.body.appendChild(textarea); 
    textarea.select(); 
    document.execCommand('copy'); 
    document.body.removeChild(textarea); 
    setCopyButton(true);
    setTimeout(() => {
      setCopyButton(false);
  }, 1500);
 
};
  const moveCardTo = async (list) => {
    const user = auth.currentUser;
  
    if (user) {
      try {
        const cardsCollectionRef = collection(db, `users/${user.uid}/Boards/${BoardId}/Lists/${list.id}/cards`);
        const snapshot = await getDocs(cardsCollectionRef);
        const count = snapshot.size;
  
        // Create a reference to the new card document for the user
        const cardDocRef = doc(db, `users/${user.uid}/Boards/${BoardId}/Lists/${list.id}/cards`, id);
        await setDoc(cardDocRef, {
          id: id,
          title: cardTitle,
          labels: cardLable,
          background: background,
          order: count,
        });
  
       
        const sharedAddPromises = sharedWith.map((sharedUser) => {
          const sharedListDocRef = doc(db, `users/${sharedUser.id}/Boards/${BoardId}/Lists/${list.id}/cards`, id);
          return setDoc(sharedListDocRef, {
            id: id,
            title: cardTitle,
            labels: cardLable,
            background: background,
            order: count,
          });
        });
  
        await Promise.all(sharedAddPromises);
  

        await deletecard();  

        window.location.reload();
      } catch (e) {
        console.error("Error moving card to list: ", e);
      }
    } else {
      console.error("User is not authenticated");
    }
  };
  
  const cardInputUpdate = async (e) => {
    const newTitle = e.target.value; 
    setcardTitle(newTitle);
    
    const user = auth.currentUser; 
    if (user) {
      try {

        await updateDoc(
          doc(db, `users/${user.uid}/Boards/${BoardId}/Lists/${listid}/cards`, id),
          { title: newTitle }
        );
       

        const sharedTitleUpdatePromises = sharedWith.map((sharedUser) =>
          updateDoc(
            doc(db, `users/${sharedUser.id}/Boards/${BoardId}/Lists/${listid}/cards`, id),
            { title: newTitle }
          )
        );
 
        await Promise.all(sharedTitleUpdatePromises);
  
     
  
      } catch (error) {
        console.error("Error updating card title: ", error);
      }
    } else {
      console.error("User is not authenticated.");
    }
  };

  const Lablemenu=()=>{
    setlablemenu(true);

    const rect = label.current.getBoundingClientRect();
    setPosition2({
      x: rect.left, 
      y:rect.top 
    });
  
    
  }
  const backgroundmenu=()=>{
    setBackgroundMenu(true);

    const rect = backref.current.getBoundingClientRect();
    setPosition2({
      x: rect.left, 
      y:rect.top 
    });
  
    
  }
  const moveMenuToList=()=>{
    setMoveMenu(true);

    const rect = moveRef.current.getBoundingClientRect();
    setPosition2({
      x: rect.left, 
      y:rect.top 
    });
  
    
  }
  useEffect(() => {
   const handleClickOutside = (event) => {

    if (menuRef.current && !menuRef.current.contains(event.target) && !cardinputRef.current.contains(event.target)) {

        if (
            (!labelmenuRef.current || !labelmenuRef.current.contains(event.target)) &&
            (!backgroundMenuRef.current || !backgroundMenuRef.current.contains(event.target))&&
            (!moveMenuRef.current || !moveMenuRef.current.contains(event.target))
        ) {
            setmenu(false);
            setMenuOpen(false);
            document.body.classList.remove('MenuisOpen');
        }
    }

  
    if (labelmenuRef.current && !labelmenuRef.current.contains(event.target) && !label.current.contains(event.target)) {
        setlablemenu(false);
    }

    if (backgroundMenuRef.current && !backgroundMenuRef.current.contains(event.target) && !backref.current.contains(event.target)) {
        setBackgroundMenu(false);
    }
    if (moveMenuRef.current && !moveMenuRef.current.contains(event.target) && !moveRef.current.contains(event.target)) {
      setMoveMenu(false); 
  }
};

// Add the event listener
document.addEventListener("click", handleClickOutside);

// Cleanup
return () => {
    document.removeEventListener("click", handleClickOutside);
};
  }, [menu, lablemenu,setMenuOpen]);


  return (
   
    <div className="w-full">
       {backgroundMenu && (
        <div
          style={{
            top: window.innerHeight > position2.y + 350 ? `${position2.y}px` : `${position2.y - 170}px`,
            left: !menuForphone ? `${position2.x - 70}px` : '52%',
            maxWidth: menuForphone ? '170px' : " ",
          }}
          ref={backgroundMenuRef} 
          className='flex absolute flex-col z-[10001] p-1.5 rounded-md text-gray-300 pt-2 bg-gray-800 gap-1.5'
        >
          <div className='flex justify-end align-top'>
            <button
              onClick={(event) => {
                event.stopPropagation();
                setBackgroundMenu(false);
              }}
              className="m-1 text-slate-300 px-1 rounded-md text-sm hover:bg-gray-600"
            >
              &#x2715;
            </button>
          </div>
          <div className='flex justify-center gap-6'>
            <h3 className='mb-3 -mt-[1.9rem] text-center'>Background Cover</h3>
          </div>
          <div className='flex flex-col gap-1.5'>
            {["background1", "background2", "background3", "background4", "background5", "background6", "background7", "background8"].map((backgroundOption, index) => (
              <div className='flex gap-1.5' key={backgroundOption}>
                <input
                  checked={background === getColorClass(backgroundOption)} 
                  onChange={() =>{ setBackground(getColorClass(backgroundOption))}} 
                  id={`radio-group-${index + 1}`} 
                  type="radio" 
                  className="w-5 h-4 cursor-pointer border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                />
                <label
                  htmlFor={`radio-group-${index + 1}`}
                  className={`w-44 rounded-sm mr-4 cursor-pointer border-2 border-opacity-40 border-gray-500 hover:bg-opacity-80 ${getColorClass(backgroundOption)}`} // Use a function to get the color class
                >
                
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
        {moveMenu&&(<div
          style={{
            top: window.innerHeight > position2.y + 350 ? `${position2.y}px` : `${position2.y - 170}px`,
            left: !menuForphone ? `${position2.x - 70}px` : '52%',
            maxWidth: menuForphone ? '170px' : " ",
          }}
         ref={moveMenuRef}
          className='flex absolute flex-col z-[10001] w-[200px]  rounded-md text-gray-300 pt-2 bg-gray-800 gap-1.5'
        >
        
          <div className='flex justify-end align-top'>
            <button
             onClick={(event) => {
              event.stopPropagation();
              setMoveMenu(false);
            }}
              className="m-1 text-slate-300 px-1 rounded-md text-sm hover:bg-gray-600"
            >
              &#x2715;
            </button>
          </div>
          <div className='flex justify-center gap-6'>
            <h3 className='mb-3 -mt-[1.9rem] text-center'>To List</h3>
          </div>
          <div className='flex flex-col gap-1'>
          {lists.map((item,index)=>(
            <div  key={index}   onClick={() => moveCardTo(item)} className='flex py-1 justify-start ga-1 text-gray-300 hover:bg-gray-700  px-4'>
              <p className='text-lg'>{index+1}</p>
              <p className='text-lg'>. {item.title}</p>
             
            </div>
          ))}
          </div>
          </div>)}
        {lablemenu&&( <div
        style={{
     
          top:window.innerHeight>position2.y+350? `${position2.y}px`:`${position2.y-170}px`,
          left:!menuForphone? `${position2.x-70}px`:'52%',
          maxWidth:menuForphone? '170px':" "
        }}
         ref={labelmenuRef} className='flex absolute flex-col z-[10001] p-1.5 rounded-md text-gray-300 pt-2 bg-gray-800  gap-1.5'>
          <div className='flex justify-end align-top'><button onClick={(event)=>{
            event.stopPropagation();
            setlablemenu(false);
    
          }}
            className=" m-1 text-slate-300  px-1  rounded-md  text-sm hover:bg-gray-600">
&#x2715;
</button></div>
          <div className='flex justify-center gap-6'>
      <h3 className='mb-3 -mt-[1.9rem] text-center'>Labels</h3>
      
</div>
      <div className='flex gap-1.5'>
       <input
        checked={cardLable.label1}
      onChange={()=>{
        setcardLable((prevCardLabel) => ({
          ...prevCardLabel,        
          label1: !prevCardLabel.label1, 
          
        }));
      }}
        id="checkbox-group-1"
        type="checkbox"
        className="w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
      />
      <label
        htmlFor="checkbox-group-1"
        className='w-44 bg-green-600 rounded-sm mr-4 cursor-pointer hover:bg-green-500'
      >
      </label>
      </div>
      <div className='flex gap-1.5'>
       <input
        checked={cardLable.label2}
         onChange={()=>{
          setcardLable((prevCardLabel) => ({
            ...prevCardLabel,        
            label2: !prevCardLabel.label2, 
          }));
        }}
        id="checkbox-group-2"
        type="checkbox"
        className="w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
      />
      <label
        htmlFor="checkbox-group-2"
        className='w-44 bg-yellow-800 rounded-sm mr-4 cursor-pointer hover:bg-yellow-700'
      >
      </label>
      </div>
      <div className='flex gap-1.5'>
       <input
        checked={cardLable.label3}
        onChange={()=>{
          setcardLable((prevCardLabel) => ({
            ...prevCardLabel,        
            label3: !prevCardLabel.label3, 
          }));
        }}
        id="checkbox-group-3"
        type="checkbox"
        className="w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
      />
      <label
        htmlFor="checkbox-group-3"
        className='w-44 bg-amber-600  rounded-sm mr-4 cursor-pointer hover:bg-amber-500'
      >
      </label>
      </div>
      <div className='flex gap-1.5'>
       <input
       checked={cardLable.label4}
        onChange={()=>{
          setcardLable((prevCardLabel) => ({
            ...prevCardLabel,        
            label4: !prevCardLabel.label4, 
          }));
        }}
        id="checkbox-group-4"
        type="checkbox"
        className="w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
      />
      <label
        htmlFor="checkbox-group-4"
        className='w-44 bg-red-700 rounded-sm mr-4 cursor-pointer hover:bg-red-600'
      >
      </label>
      </div>
      <div className='flex gap-1.5'>
       <input
        checked={cardLable.label5}
        onChange={()=>{
          setcardLable((prevCardLabel) => ({
            ...prevCardLabel,        
            label5: !prevCardLabel.label5, 
          }));
        }}
        id="checkbox-group-5"
        type="checkbox"
        className="w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
      />
      <label
        htmlFor="checkbox-group-5"
        className='w-44 bg-indigo-800 rounded-sm mr-4 cursor-pointer hover:bg-indigo-800'
      >
      </label>
      </div>
      <div className='flex gap-1.5'>
       <input
          checked={cardLable.label6}
        onChange={()=>{
       
          setcardLable((prevCardLabel) => ({
            ...prevCardLabel,        
            label6: !prevCardLabel.label6, 
          }));
        }}
        id="checkbox-group-6"
        type="checkbox"
        className="w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
      />
      <label
        htmlFor="checkbox-group-6"
        className='w-44 bg-blue-700 rounded-sm mr-4 cursor-pointer hover:bg-blue-600'
      >
      </label>
      </div>
      <div className='flex gap-1.5'>
       <input
        checked={cardLable.label7}
        onChange={()=>{
          setcardLable((prevCardLabel) => ({
            ...prevCardLabel,        
            label7: !prevCardLabel.label7, 
          }));
        }}
        id="checkbox-group-7"
        type="checkbox"
        className="w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
      />
      <label
        htmlFor="checkbox-group-7"
        className='w-44 bg-pink-800 rounded-sm mr-4 cursor-pointer hover:bg-pink-700'
      >
      </label>
      </div>
      <div className='flex gap-1.5 mb-6'>
       <input
        checked={cardLable.label8}
        onChange={()=>{
          setcardLable((prevCardLabel) => ({
            ...prevCardLabel,        
            label8: !prevCardLabel.label8, 
          }));
        }}
        id="checkbox-group-8"
        type="checkbox"
        className="w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
      />
      <label
        htmlFor="checkbox-group-8"
        className='w-44 bg-neutral-400 rounded-sm mr-4 cursor-pointer hover:bg-neutral-300'
      >
      </label>
      </div>
      
    </div>)}
       <div className={`overlay ${menu ? 'visible' : ''}`}></div>
       {menu&&(<div ref={menuRef}  className='card flex item  z-[1001]  absolute  flex-col gap-[2.5px] '  style={{

            top:window.innerHeight>position.y+350? `${position.y+7}px`:`${position.y-180}px`,
            left:!menuForphone? `${position.x+10}px`:'52.5%',
            alignItems: `${(menuflexend)? 'end' : 'start'

            }`
          }}>
     
<button ref={label} onClick={Lablemenu} className="flex text-gray-300 shadow-xl bg-gray-800 hover:bg-gray-700 rounded-sm font-bold p-3 pr-3.5 py-2.5 w-fit  text-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
</svg>
Edit labels </button>
 <button ref={backref} onClick={backgroundmenu} className="flex text-gray-300 shadow-xl bg-gray-800  hover:bg-gray-700  font-bold rounded-sm p-3 pr-3.5  w-fit py-2.5  text-sm">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25 1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 1 0-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25 12.75 9" />
</svg>
Change cover
 </button>

 <button ref={moveRef} onClick={moveMenuToList} className="flex text-gray-300 shadow-xl  bg-gray-800  hover:bg-gray-700  font-bold rounded-sm p-3 pr-3.5  w-fit py-2.5  text-sm">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
Move
 </button>
 <button onClick={copyToClipboard} className={`flex text-gray-300 shadow-xl ${copyButton?"bg-green-600":"bg-gray-800"}  ${copyButton?"hover:bg-green-700":"hover:bg-gray-700"}  font-bold  rounded-sm p-3 pr-3.5  w-fit py-2.5  text-sm`}>
{copyButton? <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
       className="size-5 mr-2"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
        />
    </svg>:(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
</svg>)}
{copyButton?"Copied!":"Copy"}
 </button>

 <button onClick={deletecard} className="flex text-gray-300  bg-gray-800  hover:bg-gray-700 font-bold  rounded-sm p-3 pr-3.5  w-fit py-2.5  text-sm">
 <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5} 
      stroke="currentColor"
      className="size-5 mr-2" 
    >
      <path
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
    </svg>
Delete
 </button>
    </div>)}
   
   
   <div
  ref={combinedRef}
  style={style}
  {...attributes}
  {...listeners}
  onContextMenu={cardMenu}
  className={`CARD relative justify-center flex flex-col cursor-pointer focus:border-solid focus:border-blue-500 select-none focus:outline-none  text-gray-300 text-md p-1 px-2.5 rounded-md w-full mx-0 my-1.5 ${background?background:"bg-gray-800"}`}
>
{menu&&(
      <div>
    <textarea
          ref={cardinputRef}
            className={`z-[1000]  absolute sm:w-full w-[70%] left-0  sm:right-0 top-0 pb-2 pt-3 ri text-start px-2.5 rounded-md  border-solid border-slate-400 border-0 focus:outline-none  text-slate-300 resize-none overflow-hidden ${background?background:"bg-gray-800"}`}
          onChange={cardInputUpdate}
            rows='1'
            value={cardTitle}
            onInput={(e) => { e.target.style.height = 'auto'; e.target.style.height = `${e.target.scrollHeight + 15}px`; }}
          />
      </div>
    )}
  <div className=' absolute right-0 pointer-events-auto text-md p-2 pt-1.5 text-[1.2rem] text-gray-300 hover:opacity-65'   onClick={(e) => {
    e.stopPropagation(); 
    cardMenu(e); 
  }}>   <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.3"
  stroke="currentColor"
  className="size-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
  />
</svg></div>
   <div className='flex flex-wrap gap-2'>
      {cardLable.label1&&(<span className='z-[1001]  bg-green-600 w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5' ></span>)}
      {cardLable.label2&&(<span className='z-[1001] bg-yellow-800 w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5' ></span>)}
      {cardLable.label3&&(<span className='z-[1001] bg-amber-600  w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5' ></span>)}
      {cardLable.label4&&(<span className='z-[1001] bg-red-700  w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5' ></span>)}
      {cardLable.label5&&(<span className='z-[1001]  bg-indigo-700 w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5' ></span>)}
      {cardLable.label6&&( <span className='z-[1001]  bg-blue-800 w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5' ></span>)}
      {cardLable.label7&&( <span className='z-[1001]  bg-pink-800 w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5' ></span>)}
      {cardLable.label8&&( <span className='z-[1001]  bg-neutral-400  w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5' ></span>)}
  </div>
  {cardTitle ? cardTitle : "Empty Card"}
</div>
    </div>
    
  
  )
}


