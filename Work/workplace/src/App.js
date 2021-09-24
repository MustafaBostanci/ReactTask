import {useState} from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";



const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Work #1',
      day: 'feb 5th 2:20',
      reminder: true,

    },

    {
      id: 2,
      text: 'Work #2',
      day: 'feb 5th 2:20',
      reminder: true,

    },

    {
      id: 3,
      text: 'Work #3',
      day: 'feb 5th 2:20',
      reminder: true,

    },
    
  ])

  //const {id , ...rest}

  const copyTasks = [...tasks];

 //Add Task
 const addTask = (task) =>{
   const id = Math.floor(Math.random() * 10000) + 1
   const newTask = {id, ...task}
   setTasks([...tasks, newTask])
 }
  
  //Delete Task
const deleteTask = (id) => {
    setTasks(copyTasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder:
     !task.reminder} : task)
  )
  
}


return (
  <div className="container">
    <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    {showAddTask && <AddTask onAdd={addTask} />}
     {tasks.length > 0 ? (
      <Tasks tasks={tasks}
        onDelete= {deleteTask} onToggle={toggleReminder}/> )
         : (
         'No Work to Show'
         )}

  </div>
);

  
}

export default App;