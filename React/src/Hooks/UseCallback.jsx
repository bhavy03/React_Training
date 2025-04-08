import { useCallback, useState } from 'react'
import Todos from './Todos';

const UseCallback = () => {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increament = () => {
        setCount(count + 1)
    }

    // const addTodo = () => {
    // setTodos((prev) => [...prev, 'new entry'])
    // }
    // here we use useCallback as we have to didn't want to render Todos component on clicking the button

    const addTodo = useCallback(() => {
        setTodos((prev) => [...prev, 'new entry'])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [todos])

    return (
        <>
            <div className='bg-yellow-500'>
                <Todos todos={todos} addTodo={addTodo} />
                <hr />
                <div>
                    <p> Count:{count}</p>
                    <button onClick={increament}>click me</button>
                </div>
            </div>
        </>
    )
}

export default UseCallback

// data ki value or expensive values ke sath khelne ke liye useMemo
// if function or child component ke sath kelna ho toh useCallback
// useCallback returns memoized function

// useMemo caches the result of calling your function.
// useCallback caches the function provided so that handleSubmit itself doesn’t change unless productId or referrer has changed. 