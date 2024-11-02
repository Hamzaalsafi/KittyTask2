import React from 'react'
import {CreateBoards} from "./CreateBoards"
export function CreateBoardForNav() {
  return (
    <div className='bg-zinc-800 overflow-x-hidden box-border   h-screen flex  overflow-y-hidden p-5 justify-center homecontiner'>
      <div className='flex sm:w-[100%] mb-2  items-center  mt-[40%] sm:shadow-xl  max-w-[900px] flex-col sm:mt-[10%]'>
       <CreateBoards/>
        </div>
        </div>
  )
}

