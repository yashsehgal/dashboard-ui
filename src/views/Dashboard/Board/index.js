import React, { useState } from 'react'
import './style.view.dashboard.board.css'

// importing dummy data for issue/ticket cards
import TodoTasksData from './__todo_tasks.json'
import UnderDevelopmentTasksData from './__under_development_tasks.json'
import CompletedTasksData from './__completed_tasks.json'
import TaskCard from '../../../styled-components/widgets/Card/TaskCard'

export default function Board () {
  const [_todoTasksData] = useState(TodoTasksData)
  const [_under_development_tasks] = useState(UnderDevelopmentTasksData)
  const [_completed_tasks] = useState(CompletedTasksData)

  return (
    <div className='board'>
      {/* to-do container section */}
      <div className='board-container board-container__todo'>
        <h5 className='board-container__title'>To do</h5>
        {_todoTasksData.map((data, index) => (
          <TaskCard
            TaskTitle={data.title}
            Assignments={data.assignments}
            Labels={data.labels}
            key={index}
          />
        ))}
      </div>
      {/* under-development section */}
      <div className='board-container board-container__under-development'>
        <h5 className='board-container__title'>Under development</h5>
        {_under_development_tasks.map((data, index) => (
          <TaskCard
            TaskTitle={data.title}
            Assignments={data.assignments}
            Labels={data.labels}
            key={index}
          />
        ))}
      </div>
      {/* completed tasks */}
      <div className='board-container board-container__completed'>
        <h5 className='board-container__title'>Completed</h5>
        {_completed_tasks.map((data, index) => (
          <TaskCard
            TaskTitle={data.title}
            Assignments={data.assignments}
            Labels={data.labels}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}
