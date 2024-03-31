import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditDelete from './Modal/EditDelete';
import { data } from 'autoprefixer';
export default function Task({val, state}) {
    const [editDelete, setEditDelete] = useState(false)
    // to convert  status into capitalize
    const capitalizeStatus = (status) => {
        if (!status) return 'No Status';
        return status.toUpperCase().charAt(0) + status.slice(1);
      };

    return (
        <div className='p-4 hyphens-auto' style={{ textAlign: "justify" }}>
            
            <div className='flex justify-between pb-2'>
                <h2>{val.title}</h2>
                <button className='bg-[#25689C] w-6 text-white text-sm'>{val.priority}</button>
            </div>
            <hr className="border-1 border-solid border-black py-1" />
            <p className='text-sm'>{val.description}</p>
            <div className='flex justify-between my-2'>
                <p>@{val.assignee}</p>
                <div className='relative'>
                    {
                        (state!=="Completed")? <button className='bg-[#25689C] w-6 text-white' onClick={() => setEditDelete(true)}><MoreVertIcon />
                        </button> :
                        <button className='bg-[#25689C] w-6 text-white' onClick={() => setEditDelete(true)} disabled><MoreVertIcon />
                        </button>
                    }
                    

                    {/* To show Edit Delete option of particular Task */}
                    {editDelete && <EditDelete setEditDelete={setEditDelete} value = {val}/>}
                </div>

            </div>
            <button className='bg-[#25689C] px-6 text-white h-7 text-sm'>{capitalizeStatus(val.status)}</button>

        </div>

    )
}
