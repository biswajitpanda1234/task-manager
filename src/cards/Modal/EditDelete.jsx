import React, {useState} from 'react'
import EditTask from './EditTask'
import DeleteTask from './DeleteTask'

export default function EditDelete({setEditDelete, value}) {

    const [editTask, setEditTask] = useState(false)
    const [deleteTask, setDeleteTask] = useState(false)

    const handleEdit = ()=>{
        
        setEditTask(true)
    }
    const handleDelete = ()=>{
        setDeleteTask(true)
    }
    return (
        <>
            <div className='fixed top-0 left-0 right-0 bottom-0 bg-gray-400 opacity-50'> </div>
            <div className='flex flex-col absolute top-[0%] left-[-265%] bg-white'>
                <button className='p-2 hover:bg-gray-200' onClick={handleEdit}>Edit</button>
                <button className='p-2 hover:bg-gray-200' onClick={handleDelete}>Delete</button>
            </div>

            {editTask && <EditTask setEditDelete={setEditDelete} value={value}/>}
            {deleteTask && <DeleteTask setEditDelete={setEditDelete} value={value}/>}
        </>
    )
}
