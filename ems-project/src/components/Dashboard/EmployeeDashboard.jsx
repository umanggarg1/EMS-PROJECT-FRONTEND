import React from 'react'
import Header from '../other/Header'
import TaskBlock from '../other/TaskBlock'
import TaskListBlock from '../TaskList/TaskListBlock'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      {/* EmployeeDashboard  */}
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskBlock data={props.data}/>
      <TaskListBlock data={props.data}/>
      
    </div>
  )
}

export default EmployeeDashboard