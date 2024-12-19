import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../../Redux/todoSlice'
const Todo = () => {
    const todo = useSelector((state) => state.todo.value)

    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    return (<>
        <div>Todo</div>
        <input type="text" onChange={(e)=> setTitle(e.target.value)} value={title}/>
        <button onClick={()=> dispatch(addTodo(title))}>Add Todo</button>
        <div>
        {todo && todo.map((title, index) => {
            return <p key={index}>{todo[todo.length - 1 - index]}</p>

        })}
        </div>
        </>
    )
}

export default Todo