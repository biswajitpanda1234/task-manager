import React from 'react'
import Task from './Task'

export default function Pending() {
  return (
<div className='overflow-hidden rounded-md h-[25rem]'>
      <div className='bg-gray-400 text-white  h-[10%] flex items-center justify-center'>Pending</div>
      <div className='card-scroll bg-white h-[90%] overflow-y-auto '>
        <Task/>
        <Task/>
      </div>
    </div>    
  )
}
