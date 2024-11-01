import { useState, useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from './firebase2';
import { onAuthStateChanged } from 'firebase/auth';
import { CatLogo } from './CatLogo';
import { UserMenu } from './UserMenu';

export function NavBar() {
  const dropdownRef = useRef(null);
  const [userInformation, setUserInformation] = useState({});
  const [isOpen, setIsOpen] = useState(false);
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
            <p className='text-zinc-50 cursor-pointer'>Boards</p>
            <p className='text-zinc-50 cursor-pointer'>Settings</p>
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
