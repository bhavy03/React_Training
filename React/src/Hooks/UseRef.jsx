import { useState, useEffect, useRef } from 'react'

const UseRef = () => {

    const [mydata, setMydata] = useState('');

    // const [count, setCount] = useState(0);
    // useEffect(() => {
    // setCount(count + 1)
    // }, [mydata])
    // can also do with this but on clicking backspace the count still remains same like 53

    const count = useRef(0);
    useEffect(() => {
        count.current = count.current + 1
    })
    // here useRef just simply remembers everything even after rendering
    // also used for manipulating the DOM
    // can also do with this but on clicking backspace the count still remains same like 53
    // useRef returns an object with a single property:current


    const inputRef = useRef('');
    const changeStyle = () => {
        console.log(inputRef.current);
        inputRef.current.style.backgroundColor = "black"
    }

    return (
        <>
            <div className='bg-slate-400'>
                <input ref={inputRef} type="text" value={mydata} onChange={(e) => { setMydata(e.target.value) }} />
                {/* <p>this is the count:{count}</p> */}
                <p>this is the count:{count.current}</p>
                <button onClick={changeStyle}>click me</button>
                {/* here to note after clicking button there is no redering */}
            </div>
        </>
    )
}

export default UseRef
