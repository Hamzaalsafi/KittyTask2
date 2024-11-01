import React from 'react'
import { useNavigate } from 'react-router-dom';
import {signOut } from 'firebase/auth';
import { auth } from './firebase2';
export function UserMenu({avatarColor, avatarIn,userEmail,userName}) {
  const navigate = useNavigate();
    const handleLogout = async () => {
 
      try {
        await signOut(auth);  
        navigate('/');    
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };
  const handleSignIn=()=>{
    navigate('/');
  }
  return (
    <div style={{backgroundColor:"#37393C"}} className='h-fit  gap-2 flex flex-col w-64 text-gray-300   py-4  shadow-xl  fixed z-[10000] rounded-md top-12 right-1'>
       <p className='text-sm mb-2 px-5'>ACCOUNT</p>
      <div className='flex px-4'>
      <div className='flex   justify-center items-center  hover:opacity-85 cursor-pointer '> 
                 <div className=' pointer-events-none mr-2 select-none  mb-1 '
                  style={{
                     backgroundColor:`${avatarColor}`,
                     color: 'rgb(39, 39, 42)',
                     width: '40px',
                     height: '40px',
                     borderRadius: '50%',
                      display: 'flex',
                     alignItems: 'center',
                      justifyContent: 'center',
                     fontWeight: 'bold',
                      fontSize: '20px',
                    border: '1px solid #555'
                    }}
                >
                 {avatarIn.toUpperCase()}
                  </div>
                  </div>
                  <div>
                    <p className='text-md mb-[-4px]'>{userName}</p>
                    <p className='text-sm opacity-90'>{userEmail}</p>
                  </div>
               
          
        </div>
       <div className='flex items-center cursor-pointer px-5 py-2 hover:bg-zinc-800  w-full justify-between'>
  <p className='text-[.9rem]'>Manage account</p>
  <div className='flex items-center'>   
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  </div>
</div>
<div className='flex justify-center'>
<hr className='border-0 border-b w-[95%]  opacity-25 ' />
</div>
<div className='flex items-center cursor-pointer px-5 py-1.5 hover:bg-zinc-800  w-full justify-between'>
<p className='text-[.9rem]'>Cards Archive</p></div>
<div className='flex items-center cursor-pointer px-5 py-1.5 hover:bg-zinc-800  w-full justify-between'>
<p className='text-[.9rem]'>Settings</p></div>
<div className='flex items-center cursor-pointer px-5 py-1.5 hover:bg-zinc-800  w-full justify-between'>
<p className='text-[.9rem]'>Theme</p></div>
<div className='flex justify-center'>
<hr className='border-0 border-b w-[95%]  opacity-25 ' />
</div>
{userName!=="Guest"&&(<div className='flex items-center cursor-pointer px-5 py-1.5 hover:bg-zinc-800  w-full justify-between'>
<p onClick={handleLogout} className='text-[.9rem]'>Log out</p></div>)}
{userName==="Guest"&&(<div className='flex items-center cursor-pointer px-5 py-1.5 hover:bg-zinc-800  w-full justify-between'>
    <p onClick={handleSignIn} className='text-[.9rem]'>Sign in</p></div>)}
        </div>
   
  )
}

