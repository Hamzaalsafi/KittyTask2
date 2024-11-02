
import React, { useState, useEffect, useRef } from 'react';
import { auth } from './firebase2'; 
import { doc, setDoc,getDoc } from 'firebase/firestore';
import { useNavigate  } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { db } from './firebase2';
export function CreateBoards() {
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
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const [background,setBackground]=useState('');
  const [images,setImages]=useState('');
  const [boardTitle, setBoardTitle] = useState("");
  const dropdownRef = useRef(null);
  const [boardVisibility,setBoardVisibility]=useState("Board Visibility");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const style2 = isOpen? {
    borderColor:"lightblue",
   
  }:{}
const handleTitle=(e)=>{
  if (failed==="Make sure you fill the board title"){
    setFailed("");
  }
  setBoardTitle(e.target.value);
}
  const style = background === "" ? {
    backgroundImage: `url('${images}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "rgba(255,255,255,0)"
  } : {};
  const [failed,setFailed]=useState("");
  const createBoard=async ()=>{
    if(boardTitle===""){
      setFailed("Make sure you fill the board title");
    }
    else if(background==="" && images===""){
      setFailed("Make sure you choose a background or images")
    }
    else if(boardVisibility==="Board Visibility"){
      setFailed("Make sure you choose a visibility option")
    }
    else{
      const user = auth.currentUser;
      if (user) {
        try {
          // Reference to the user's document to get the name
          const userDocRef = doc(db, `users/${user.uid}`);
          const userSnapshot = await getDoc(userDocRef);
      
          let userName = '';
          let avatar={};
          if (userSnapshot.exists()) {
            const userData = userSnapshot.data();
            userName = userData.name; 
            avatar=userData.avatar;

          }
      
          const id = new Date().getTime().toString();
          const BoardDocRef = doc(db, `users/${user.uid}/Boards`, id);
      
          const Private = boardVisibility === "Shareable Board" ? "shareable" : "private";
          const newBoard = {
            id: id,
            title: boardTitle,
            background: background,
            backgroundImage: images,
            boardVisibility: Private,
            sharedWith: [
              {
                id: user.uid,
                email: user.email,
                name: userName, 
                avatar: avatar,
              },
            ],
          };
      
          await setDoc(BoardDocRef, newBoard);
          navigate(`/Board/${id}`, { state: newBoard });
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("Please Sign In First");
      }
    }
  }
  return (
<div className='flex  items-center z-10 sm:mt-10  w-screen h-screen px-7  flex-col justify-start '>
     
<img draggable={false}  style={style}   src="https://trello.com/assets/14cda5dc635d1f13bc48.svg" className={`w-[50%] p-1 px-2 max-w-[210px] mb-5 mt-[-27%]  select-none sm:mt-[-50px] ${background}`}/>

<div className="flex w-[80%] max-w-[470px] justify-center gap-4 md:gap-10 items-center ">
      <div className="main">
      <input 
      onChange={(e)=>{handleTitle(e)}}
   required={true}
        type="text" 
        className="input"
      />
      <label  >
        <span style={{ transitionDelay: '0ms', left: '10px' }}>B</span>
        <span style={{ transitionDelay: '75ms', left: '27px' }}>o</span>
        <span style={{ transitionDelay: '150ms', left: '42px' }}>a</span>
        <span style={{ transitionDelay: '225ms', left: '57px' }}>r</span>
        <span style={{ transitionDelay: '300ms', left: '66px' }}>d</span>
        <span style={{ transitionDelay: '375ms', left: '88px' }}>T</span>
        <span style={{ transitionDelay: '450ms', left: '104px' }}>i</span>
        <span style={{ transitionDelay: '525ms', left: '111px' }}>t</span>
        <span style={{ transitionDelay: '600ms', left: '120px' }}>l</span>
        <span style={{ transitionDelay: '675ms', left: '127px' }}>e</span>
        <p className=' absolute left-[18px]  top-[4px] text-2xl m-2 text-gray-300 transition duration-500 cursor-pointer pointer-events-none'
        >
          Board Title
        </p>
      </label>
    </div > 
    <div>
    <div className="relative inline-block text-left text-slate-300" ref={dropdownRef}>
      <button
     
        onClick={toggleDropdown}
        className="button2  ${boardVisibility==='Board Visibility"
       style={style2}
      >
        
        {boardVisibility}
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-[-10%] sm:right-[-15%]  mt-2 z-[1000] w-72 rounded-2xl shadow-lg bg-zinc-800  ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" >
            <button style={{
              
              borderColor:boardVisibility==="Private Board"?"lightblue" :""
            }} onClick={()=>{setBoardVisibility("Private Board")}} className="block w-full border-2 border-zinc-800 text-left px-4 py-2 text-sm bg-zinc-800 text-gray-300 hover:bg-zinc-700" >
              <span className='text-[1.1rem] text-gray-200'>Private Board</span> - A personal board where all tasks and data are private and only visible to you.
            </button>
            <button style={{
              
              borderColor:boardVisibility==="Shareable Board"?"lightblue" :""
            }}   onClick={()=>{setBoardVisibility("Shareable Board")}} className="block border-2 border-zinc-800 w-full text-left px-4 py-2 text-sm bg-zinc-800 text-gray-300 hover:bg-zinc-700" >
            <span className='text-[1.1rem] text-gray-200'>Shareable Board</span> - A collaborative board that allows you to share tasks with others for group work.
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
    </div >
    <div className=' self-center '>
      <h1 className='text-xl mt-4 mb-1 opacity-90 text-gray-300  text-center'>Background</h1>
      <div className='color max-h-[20vh] sm:max-h-[17vh] mb-4 rounded-md px-3 overflow-y-auto  bg-neutral-800'>
      <div className='grid grid-cols-3 sm:grid-cols-2  mt-1 md:grid-cols-3 p-1  lg:grid-cols-4 gap-5'>

      <div onClick={()=>{setBackground("bg-gradient-to-r from-teal-400 to-blue-500"); if(failed==="Make sure you choose a background and images"){setFailed("")}}} className='cursor-pointer bg-gradient-to-r from-teal-400 to-blue-500 py-6 sm:py-7  rounded-sm'>
  </div>
  <div onClick={()=>{setBackground("bg-gradient-to-r from-blue-800 to-blue-400"); if(failed==="Make sure you choose a background and images"){setFailed("")}}} className='bg-gradient-to-r cursor-pointer from-blue-800 to-blue-400 py-6 sm:py-7rounded-sm'>
  </div>
     <div onClick={()=>{setBackground("bg-gradient-to-r from-purple-500 to-pink-500"); if(failed==="Make sure you choose a background and images"){setFailed("")}}}  className='bg-gradient-to-r from-purple-500 to-pink-500 py-6 sm:py-7 cursor-pointer rounded-sm'>
  </div>
  <div onClick={()=>{setBackground("bg-gradient-to-r from-purple-400 to-blue-300"); if(failed==="Make sure you choose a background and images"){setFailed("")}}} className='bg-gradient-to-r from-purple-400 to-blue-300 py-6 sm:py-7 cursor-pointer rounded-sm'>
  </div>
  <div onClick={()=>{setBackground("bg-gradient-to-r from-orange-400 to-yellow-300"); if(failed==="Make sure you choose a background and images"){setFailed("")}}} className='bg-gradient-to-r from-orange-400 to-yellow-300 py-6 sm:py-7 cursor-pointer rounded-sm'>
  </div>
  <div onClick={()=>{setBackground("bg-gradient-to-r from-pink-400 to-pink-200"); if(failed==="Make sure you choose a background and images"){setFailed("")}}} className='bg-gradient-to-r from-pink-400 to-pink-200 py-6 sm:py-7 cursor-pointer rounded-sm'>
  </div>
  <div onClick={()=>{setBackground("bg-gradient-to-r from-teal-400 to-green-500"); if(failed==="Make sure you choose a background and images"){setFailed("")}}} className='bg-gradient-to-r from-teal-400 to-green-500 py-6 sm:py-7 cursor-pointer rounded-sm'>
  </div>
  <div onClick={()=>{setBackground("bg-gradient-to-r from-blue-800 to-blue-400"); if(failed==="Make sure you choose a background and images"){setFailed("")}}} className='bg-gradient-to-r from-blue-800 to-blue-400 py-6 sm:py-7 cursor-pointer rounded-sm'>
  </div>
  <div onClick={()=>{setBackground("bg-gradient-to-r from-red-800 to-brown-500"); if(failed==="Make sure you choose a background and images"){setFailed("")}}} className='bg-gradient-to-r from-red-800 to-brown-500 py-6 sm:py-7 cursor-pointer rounded-sm'>
  </div>
  <div onClick={()=>{setBackground("bg-blue-500");if(failed==="Make sure you choose a background and images"){setFailed("")}}} className='bg-blue-500 py-6 sm:py-7 cursor-pointer rounded-sm'>
  </div>
  <div onClick={()=>{setBackground("bg-orange-500"); if(failed==="Make sure you choose a background and images"){setFailed("")}}} className='bg-orange-500 py-6 sm:py-7 cursor-pointer rounded-sm'>
  </div>
  <div onClick={()=>{setBackground("bg-green-50"); if(failed==="Make sure you choose a background and images"){setFailed("")}}} className='bg-green-500 py-6 sm:py-7 cursor-pointer rounded-sm'>
  </div>
  <div onClick={()=>{setBackground("bg-red-500"); if(failed==="Make sure you choose a background and images"){setFailed("")}}} className='bg-red-500 py-6 sm:py-7 cursor-pointer rounded-sm'>
  </div>
  <div onClick={()=>{setBackground("bg-purple-500"); if(failed==="Make sure you choose a background and images"){setFailed("")}}} className='bg-purple-500 py-6 sm:py-7 cursor-pointer rounded-sm'>
  </div>
  <div onClick={()=>{setBackground("bg-pink-500"); if(failed==="Make sure you choose a background and images"){setFailed("")}}} className='bg-pink-500 py-6 sm:py-7 cursor-pointer rounded-sm'>   </div>
  <div onClick={()=>{setBackground("bg-green-300"); if(failed==="Make sure you choose a background and images"){setFailed("")}}} className='bg-green-300 py-6 sm:py-7 cursor-pointer rounded-sm'>
  </div>
  <div onClick={()=>{setBackground("bg-cyan-500"); if(failed==="Make sure you choose a background and images"){setFailed("")}}} className='bg-cyan-500 py-6 sm:py-7 cursor-pointer rounded-sm'>
  </div>
  <div onClick={()=>{setBackground("bg-gray-500"); if(failed==="Make sure you choose a background and images"){setFailed("")}}} className='bg-gray-500 py-6 sm:py-7 cursor-pointer rounded-sm'>
  </div>
    </div>
 </div>
 <div className='color max-h-[20vh]  sm:max-h-[17vh]  rounded-md sm:px-3 px-2 overflow-y-scroll  bg-neutral-800'>
      <div className='grid grid-cols-3 sm:grid-cols-2  mt-1 md:grid-cols-3 p-1  lg:grid-cols-4 gap-5'>
     
      {imgBackground.map((img) => {
        const { ref, inView } = useInView({
          threshold: 0.1, 
        });

        return (
          <div
            ref={ref}
            style={{
              backgroundImage: inView ? `url('${img}')` : 'none', // Load image only when in view
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "rgba(255,255,255,0)",
            }}
            key={img}
            onClick={() => {
              setBackground("");
              setImages(img);
              if (failed === "Make sure you choose a background and images") {
                setFailed("");
              }
            }}
            className='border-gray-100 cursor-pointer text-opacity-0 bg-black p-4 py-3 sm:py-4 px-5 sm:px-6 select-none rounded-sm'
          >
            Board
          </div>
        );
      })}
    </div>

 </div>

  <div className='flex items-center   justify-center'>
  <button onClick={createBoard} type='submit' className="bg-blue-600 hover:bg-blue-500 text-gray-100  mb-1 py-1.5 px-20 mt-[6%] sm:mt-8 rounded-lg  text-md">
          Create
</button>
</div>
<div className="text-red-600 text-sm text-center">{failed}</div>
</div>
    </div>
  )
}
