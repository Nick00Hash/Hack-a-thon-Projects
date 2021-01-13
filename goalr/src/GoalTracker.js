import React, { useState } from 'react'
import EditGoalButton from './UI/EditGoalButton'

const GoalTracker = props => {

  const [Count, setCount] = useState(0)

  const handleClick = () => {
    setCount(Count + 1)
  }

  return(
  <div className="border-solid border-2 border-black w-96 rounded-md" onClick={handleClick}>
    <div className="grid gap-40 grid-cols-2">
        Goal
        <EditGoalButton className="" />
    </div>
  </div>)
}

export default GoalTracker