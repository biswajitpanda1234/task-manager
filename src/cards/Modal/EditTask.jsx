import React, { useEffect, useState } from 'react'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch, useSelector } from 'react-redux';
import {update} from "../../action/index"
export default function EditTask({ setEditDelete, value }) {
    // to get data from redux store;
    const myData = useSelector((state) => state.changeStore)
    const dispatch = useDispatch();
    const [change, setChange]= useState ({
        priority:value.priority, 
        status:value.status
    });
    
    useEffect(()=>{
        document.body.style.overflowY = "hidden";
        return ()=>{
            document.body.style.overflowY = "auto";
        }
    })
    const handleClick = ()=>{
        setEditDelete(false)
        
    }

    const submit = ()=>{
        let newVal = {...value, priority:change.priority, status:change.status}
        let updatedData = myData.map((ele)=>{
            if(ele.id === newVal.id){
                return newVal;
            }else{
                return ele;
            }
        })
        console.log(updatedData)
        dispatch(update(updatedData))
        setEditDelete(false)
    }
    const handleChange = (e)=>{
        const name = e.target.name;
        const val = e.target.value;
        setChange((pre)=>{
            return {...pre, [name]:val}
        });
    }
    return (
        <>
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-gray-400 opacity-50 z-30' onClick={handleClick}></div>
        <form action="">
            <div className='fixed top-[25%] left-[50%] translate-x-[-50%] translate-y-[-25%]  max-w-[98vw] max-h-[90vh] z-50 overflow-auto margin-none'>
                <div className='flex justify-between items-center bg-white py-2 px-4'>
                    <h2 className='font-semibold text-lg'>EDIT TASK</h2>
                    <CancelOutlinedIcon onClick={handleClick} />
                </div>

                <div className="flex flex-col gap-8 py-4 px-4 bg-gradient-to-br from-[#F4DBF9] to-[#DFDBFC] w-[400px]">
                    <div className='flex flex-col'>
                        <label htmlFor="">Title:</label>
                        <input type="text" className='input-container2' value={value.title}/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Description:</label>
                        <textarea name="" id="" cols="30" rows="2" className='input-container2' value={value.description}></textarea>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Team:</label>
                        <input type="text" className='input-container2' value={value.team} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Assignees:</label>
                        <input type="text" className='input-container2' value={value.assignee}/>
                    </div>
                    <div className='flex flex-col w-[97%] justify-between sm:flex-row'>
                        <div className='flex '>
                            <label htmlFor="">Priority:</label>
                            <div className='mx-2 relative '>
                                <select name="priority" className='h-7 px-2 border-2 border-gray-400 rounded-md bg-[#DADADA]' value={change.priority} onChange={handleChange}>

                                    <option value="P0">P0</option>
                                    <option value="P1">P1</option>
                                    <option value="P2">P2</option>
                                </select>
                                <ArrowDropDownIcon style={{ position: "absolute", right: "-.5rem", top: "-.2rem", fontSize: "2rem", color: "grey" }} />
                            </div>
                        </div>
                        <div className='flex'>
                            <label htmlFor="">Status:</label>
                            <div className='mx-2 relative '>
                                <select name="status" className='h-7 px-2 border-2 border-gray-400 rounded-md bg-[#DADADA]' value={change.status} onChange={handleChange}>

                                    <option value="pending">Pending</option>
                                    <option value="inProgress">InProgress</option>
                                    <option value="completed">Completed</option>
                                    <option value="deployed">Deployed</option>
                                    <option value="deffered">Deffered</option>
                                </select>
                                <ArrowDropDownIcon style={{ position: "absolute", right: "-.5rem", top: "-.2rem", fontSize: "2rem", color: "grey" }} />
                            </div>
                        </div>


                    </div>
                    
                </div>
                <div className='bg-white flex justify-end pr-6'>
                    <button className='bg-[#25689C] text-white rounded-md m-2 px-6' onClick={submit}>Submit</button>
                    <button className='bg-[#25689C] text-white rounded-md m-2 px-6'>Reset</button>
                </div>

            </div>
        </form>
            


        </>
    )
}
