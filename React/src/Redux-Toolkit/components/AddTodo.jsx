import { useDispatch } from "react-redux"
import { addTodo } from "../feature/todo/todoSlice"
import { useState } from "react"

const AddTodo = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler}>
            <input type="text" placeholder="enter a todo" value={input}
                onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Add todo</button>
        </form>
    )
}

export default AddTodo

// dispatch reducers ko use karte hue store me values change karta hai
