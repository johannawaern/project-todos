import React from "react"
import { useDispatch } from "react-redux"
import { todoList } from "reducers/todoList"

export const TodoItem = props => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(todoList.actions.completeTodo(props.item.id))
  }

  const handleRemoveClick = () => {
    dispatch(todoList.actions.removeTodo(props.item.id))
  }

  return (
    <li className='unchecked'>
      <label className='container'>
        <input type='checkbox' checked={false} onChange={handleCheckboxClick} />
        <span class='checkmark'></span>
      </label>
      <div>{props.item.name}</div>
      <button
        className='remove'
        type='button'
        onClick={handleRemoveClick}
        aria-label='remove todo'
      >
        🗑️
      </button>
    </li>
  )
}
