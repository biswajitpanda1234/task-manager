import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import PersonIcon from '@mui/icons-material/Person';
import Card from './cards/Card';
import CreateTask from './cards/Modal/CreateTask';

export default function App() {
  const myData = useSelector((state) => state.changeStore)

  const data = JSON.stringify(myData)
  localStorage.setItem("taskData", data)
  // use State for create Modal
  const [createTask, setCreateTask] = useState(false)


  // Here we assing tesk according to status
  let pending = [];
  let inProgress = [];
  let completed = [];
  let deffered = [];
  let deployed = [];

  


  // Define the update function
  const updateArrays = () => {

    for (let i = 0; i < myData.length; i++) {
      const item = myData[i];
      switch (item.status) {
        case "pending":
          pending.push(item);
          break;
        case "inProgress":
          inProgress.push(item);
          break;
        case "completed":
          completed.push(item);
          break;
        case "deffered":
          deffered.push(item);
          break;
        case "deployed":
          deployed.push(item);
          break;
        default:
          break;
      }
    }
  };

  // Call updateArrays on initial render and whenever myData changes
  updateArrays();

  // apply filter 
  const [filterElement, setFilterElement] = useState({
    assignee : "",
    priority:"",
    startDate:"",
    endDate:""
  })
  const filterChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setFilterElement((prev) => ({ ...prev, [name]: value }))
    
  }
  
  
  const [sortVal, setSortVal] = useState("priority")
  const sortFunc = (e)=>{
    setSortVal(e.target.value)
  }
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#F4DBF9] to-[#DFDBFC] lg:h-[135vh] '>
      {/* Title Bar */}

      <div className='flex items-center justify-between px-16 py-2'>
        <h1 className='text-2xl font-semibold font-sans'>Task Board</h1>
        <div className='w-16 h-16 rounded-full bg-white flex items-center justify-center'>
          <PersonIcon style={{ fontSize: "3rem" }} />
        </div>
      </div>

      {/* Working area */}

      <main className='w-[95vw] h-[80%] relative overflow-auto border-white border-2 mx-auto rounded-xl mb-2 margin-none pb-8'>

        {/* fileters bar */}
        <div className='my-4'>
          <h1 className='mt-4 p-2 text-xl'>Filter By:</h1>
          <div className='flex justify-between'>
          <div className='flex md:relative flex-wrap'>
            <input type="text" name='assignee' className='w-[10rem] mx-2 my-2' placeholder='assignee name' onChange={filterChange}/>
            <div className='mx-2 relative ' >
              <select name="priority" className='h-7 my-2' onChange={filterChange}>
                <option value="">Priority:</option>
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
              </select>
              
            </div>
        
            <input type="date" name='startDate' className='mx-2 my-2' onChange={filterChange}/>
            <input type="date" className='mx-2 my-2' name="endDate" onChange={filterChange}/>
          </div>
          
            <button className='bg-[#25689C] text-white text-sm h-7 lg:relative lg:m-2  lg:translate-x-0 lg:left-0 lg:w-[12%] absolute bottom-1 w-[80%] z-30 left-[50%] translate-x-[-50%]' onClick={() => setCreateTask(true)}>Add New Task</button>

            {createTask && <CreateTask createTask={createTask} setCreateTask={setCreateTask} />}
          </div>

        </div>
        {/* filter bar */}

        {/* sorted bar */}
        <div className='flex ml-2 '>
          <h2 className='text-xl'>Sorted By:</h2>
          <div className='mx-2'>
            <select name="mySelect" className='h-7 ' onChange={sortFunc}>
              <option value="priority">Priority</option>
              <option value="startDate">Start Date</option>
              <option value="endDate">End Date</option>
            </select>
          </div>

        </div>
        {/* sorted bar */}

        {/* Cards */}

        <section className='flex gap-4 lg:grid lg:grid-cols-5 lg:gap-4 mx-4 my-6 overflow-x-auto margin-none'>
          <Card title="Pending" background="#8C8B8F" dataList={pending} filters={filterElement} sort={sortVal}/>
          <Card title="In Progress" background="#E69A1F" dataList={inProgress} filters={filterElement} sort={sortVal}/>
          <Card title="Completed" background="#42A81E" dataList={completed} filters={filterElement} sort={sortVal}/>
          <Card title="Deployed" background="#353976" dataList={deployed} filters={filterElement} sort={sortVal}/>
          <Card title="Deffered" background="#F68871" dataList={deffered} filters={filterElement} sort={sortVal}/>

        </section>

        {/* Cards */}
      </main>

    </div>

  )
}
