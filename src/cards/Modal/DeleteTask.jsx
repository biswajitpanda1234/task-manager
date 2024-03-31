import React from 'react'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useDispatch, useSelector } from 'react-redux';
import {update} from "../../action/index"
export default function DeleteTask({setEditDelete, value}) {
    let myData = useSelector((state) => state.changeStore)
    const dispatch = useDispatch();
    const handleClick = ()=>{
        setEditDelete(false)
    }

    const handleYes = ()=>{
        myData = myData.filter((ele)=>{
            return (ele.id !== value.id)
        })
        dispatch(update(myData))
        setEditDelete(false)
    }
    const handleNo = ()=>{
        setEditDelete(false)
    }
    return (
        <>
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-gray-400 opacity-50 z-30' onClick={handleClick}> </div>
            <div className='fixed bottom-[50%] right-[50%] translate-x-[50%] translate-y-[50%] bg-gradient-to-br from-[#F4DBF9] to-[#DFDBFC] w-[400px] max-w-[90vw] z-50'>
                <div className='flex justify-between items-center bg-white px-6 py-4 '>
                    <h2 className='font-semibold text-lg'>DELETE TASK</h2>
                    <CancelOutlinedIcon onClick={handleClick}/>
                </div>

                <p className='pl-5 text-xl my-2'>Do You Wish To Delete Task</p>
                <div className='flex flex-col justify-between items-center px-5 text-xl my-2 sm:flex-row'>
                    <p>Task 1</p>
                    <div className='flex justify-end pr-6 my-2'>
                        <button className='bg-[#25689C] text-white rounded-md mx-2 px-5' onClick={handleYes}>Yes</button>
                        <button className='bg-[#25689C] text-white rounded-md  px-5' onClick={handleNo}>No</button>
                    </div>
                </div>


            </div>

        </>
    )
}
