import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {create} from "../../action/index"
import ReactDOM from 'react-dom';

import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function CreateTask({ setCreateTask }) {
    
    const dispatch = useDispatch()
    
    
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "auto";
        }
    })
    const submit = (e)=>{
        if(createData.endDate>= createData.startDate){
            dispatch(create(createData))
            setCreateTask(false);
            
        }
        else{
            e.preventDefault();
            alert("Your end date must be gtreater or equal to start date")
            
        }
    }
    function getFormattedDate() {
        const today = new Date();
        const year = today.getFullYear();
        let month = String(today.getMonth() + 1).padStart(2, '0'); // Add leading zero for single-digit months
        let day = String(today.getDate()).padStart(2, '0'); // Add leading zero for single-digit days
      
        return `${year}-${month}-${day}`;
    }
    const getID = ()=>{
        return String(Date.now().toString(32) + Math.random().toString(16)).replaceAll(".", "")
    }
    const [createData, setCreateData] = useState({
        id:getID(), 
        title:"", 
        description:"", 
        team:"", 
        assignee:"", 
        priority:"P0",
        startDate:getFormattedDate(), 
        endDate:getFormattedDate(), 
        status:"pending"
    })
    const handleChange = (event) => {
        const name = event.target.id
        const value = event.target.value
        setCreateData((pre)=>{
            return {...pre, [name]: value}
        })
        
    }
    
    
    
    return (
        <>
            <div className='fixed top-0 left-0 right-0 bottom-0 bg-gray-400 opacity-50 z-30' onClick={() => setCreateTask(false)}> </div>
            <form action="">

            <div className='fixed left-[50%] translate-x-[-50%] translate-y-[-25%] bg-gradient-to-br from-[#F4DBF9] to-[#DFDBFC] w-[400px] max-w-[98vw] max-h-[90vh] overflow-auto margin-none z-50'>
                <div className='flex justify-between items-center bg-white p-2'>
                    <h2 className='font-semibold text-lg'>CREATE A TASK</h2>
                    <CancelOutlinedIcon onClick={() => setCreateTask(false)} />
                </div>

                <div className="flex flex-col gap-8 my-4 px-4">
                    <div className='flex items-center justify-between'>
                        <label htmlFor="title">Title:</label>
                        <input type="text" id='title'  className='input-container' onChange={handleChange}/>
                    </div>
                    <div className='flex items-start justify-between'>
                        <label htmlFor="description">Description:</label>
                        <textarea id="description" cols="30" rows="2" className='input-container' onChange={handleChange}></textarea>
                    </div>
                    <div className='flex items-center justify-between'>
                        <label htmlFor="team">Team</label>
                        <input type="text" id='team' className='input-container' onChange={handleChange}/>
                    </div>
                    <div className='flex items-center justify-between'>
                        <label htmlFor="assignee">Assignees:</label>
                        <input type="text" id='assignee' className='input-container' onChange={handleChange}/>
                    </div>
                    {/* for priority and last date */}
                    <div className='flex justify-between'>
                        <div className='flex items-center justify-between '>
                            <label htmlFor="priority">Priority:</label>
                            <div className='mx-2 relative ' >
                                <select name="mySelect" className='h-7 px-2 border-2 border-gray-400 rounded-md bg-[#DADADA]' id='priority' onChange={handleChange}>

                                    <option value="P0" selected>P0</option>
                                    <option value="P1">P1</option>
                                    <option value="P2">P2</option>
                                </select>
                                <ArrowDropDownIcon style={{ position: "absolute", right: "-.3rem", top: "-.1rem", fontSize: "2rem", color: "grey" }} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="endDate">End Date:</label>
                            <input type="date" id='endDate' className='h-7 px-2 border-2 border-gray-400 rounded-md bg-[#DADADA]' onChange={handleChange}/>
                        </div>
                    </div>

                </div>
                <div className='bg-white flex justify-end pr-3'>
                    <button className='bg-[#25689C] text-white rounded-md m-2 px-6 h-8' onClick={submit}>Create</button>
                    
                </div>

            </div>

            </form>
            

        </>
    )
}
