import React from 'react'
import Task from './Task'
export default function Card({title, background, dataList, filters, sort}) {
    
    let data = dataList.filter((val)=>{
      return ((val.assignee.toLowerCase()).includes(filters.assignee.toLowerCase()) && (val.priority).includes(filters.priority) && (val.startDate).includes(filters.startDate) && (val.endDate).includes(filters.endDate))
    })
    console.log("data", data)
    data.sort((a,b)=> a[sort].localeCompare(b[sort]))
    console.log("sort", data)
  
  return (
    <div className=' rounded-md h-[25rem] lg:w-[100%] lg:flex-grow-[1] min-w-[200px]'>
      <div className={`text-white  h-[10%] flex items-center justify-center`} style={{backgroundColor: background}}>{title} </div>
      <div className='card-scroll bg-white h-[90%] overflow-y-auto '>
        {
          data.map((val)=>{
            return (
              <Task val={val} key={val.id} state={title}/>
            ) 
          })
        }
        
      </div>
    </div>
  )
}
