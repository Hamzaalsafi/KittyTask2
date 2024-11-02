import { useState, useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import { doc, getDoc,getDocs,collection } from 'firebase/firestore';
import { db, auth } from './firebase2';
import {onAuthStateChanged} from "firebase/auth";
import { CatLogo } from './CatLogo';
import { UserMenu } from './UserMenu';
import {MiniBoardsForNav} from './MiniBoardsForNav';
export function NavBar() {
  const dropdownRef = useRef(null);
  const [Board, setBoard] = useState([]);
  const [boardMenu,setBoardMenu]=useState(false);
  const boardMenuRef=useRef(null);
  const [userInformation, setUserInformation] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const fetchCards = async () => {
          const BoardRef = collection(db,`users/${user.uid}/Boards`);
          const snapshot = await getDocs(BoardRef);
          const BoardsTemp = snapshot.docs.map((doc) => ({
            id: doc.id,
              data: doc.data(),
              

          }))
  
          setBoard(BoardsTemp);
        };
  
        fetchCards().catch((error) => console.error('Error fetching lists:', error));
      } else {
        setBoard([]);
      }
    });
  
    return () => unsubscribeAuth();
  }, []);
  const handleClickOutsideForBoards = (event) => {
    if (boardMenuRef.current && !boardMenuRef.current.contains(event.target)) {
      setBoardMenu(false);
    }
  };
  useEffect(() => {
     
    document.addEventListener('mousedown', handleClickOutsideForBoards);
    return () => {
      
      document.removeEventListener('mousedown', handleClickOutsideForBoards);
    };
  }, []);
  const handleClickOutsideForUserDetails = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
     
    document.addEventListener('mousedown', handleClickOutsideForUserDetails);
    return () => {
      
      document.removeEventListener('mousedown', handleClickOutsideForUserDetails);
    };
  }, []);
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const fetchBoard = async () => {
          try {
            const boardRef = doc(db, `users`, user.uid);
            const boardSnap = await getDoc(boardRef);

            if (boardSnap.exists()) {
              const specificBoard = {
                id: boardSnap.id,
                data: boardSnap.data(),
              };
              setUserInformation(specificBoard.data);
   
            } else {
              console.log("No such board!");
            }
          } catch (error) {
            console.error('Error fetching board:', error);
          }
        };

        fetchBoard();
      } 
    });

    return () => unsubscribeAuth();
  }, []);


  const avatarColor = userInformation.avatar ? userInformation.avatar.color : '#111827'; 
  const avatarInitials = userInformation.avatar ? userInformation.avatar.initials : 'A'; 
  const userName = userInformation.name || 'Guest'; 
  const userEmail = userInformation.email || 'example@example.com';

  return (
    <div>
 
   {isOpen&&(  <div ref={dropdownRef}> <UserMenu 
        avatarColor={avatarColor} 
        avatarIn={avatarInitials}  
        userName={userName} 
        userEmail={userEmail} 
      /></div>)}
      <nav className='border-b-2 border-gray-500 h-[46px] sm:h-[47.5px] bg-zinc-800 text-lg absolute w-screen z-10'>
        <div className='flex justify-between items-center'> 
          <div className='flex items-center gap-5'>
            <Link to="/Home">
              <div className='text-zinc-50 cursor-pointer flex gap-5 cat catlogo items-center font-bold'>
                <CatLogo />
                KittyTask
              </div>
            </Link> 
           <div className='text-gray-200 relative text-md flex items-center '>
           {boardMenu&&( <div ref={boardMenuRef} className='w-[200px] h-fit left-[-55px]   absolute p-2 px-3 rounded-md shadow-xl  bg-zinc-700 top-10'> 
              <div className='flex flex-col '> 
                <h1 className='text-center'> All Boards</h1>
                <hr className='w-full border-0 border-b border-gray-300 border-opacity-85 my-2'/>
                <div className='max-h-[200px] overflow-y-auto '>
                {
        Board.map((item) => (
          <div  key={item.id} className='hover:bg-neutral-600 rounded-md p-1'>
          <MiniBoardsForNav 
          key={item.id}
          id={item.id}
          title={item.data.title}
          background={item.data.background}
          backgroundImage={item.data.backgroundImage}
          boardVisibility={item.data.boardVisibility}
          />
           </div>
        ))}
                </div>

              </div>
            </div>)}
            
            
           <div className=' px-3 flex items-center cursor-pointer rounded-md py-.5 hover:bg-zinc-700' onClick={()=>{setBoardMenu(!boardMenu)}} >Boards<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.4"
      stroke="currentColor"
      className="size-5 ml-0.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg></div> </div>
    <Link to="/CreateBoard"><button className='ml-[-.5em] px-3 py-.5 bg-pink-500 hover:bg-pink-700 text-gray-50 rounded-md'>Create</button></Link>
          </div>
          <div onClick={()=>{setIsOpen(!isOpen)}} className='flex mr-2 justify-center items-center hover:opacity-85 cursor-pointer'> 
            <div className='select-none mb-1 border-2'
              style={{
                backgroundColor: avatarColor,
                color: 'rgb(39, 39, 42)',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '20px',
                border: '0 solid #555'
              }}
            >
              {avatarInitials.toUpperCase()}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
