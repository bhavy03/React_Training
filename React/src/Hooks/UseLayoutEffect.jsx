import { useLayoutEffect, useState } from "react"

const UseLayoutEffect = () => {

    // useEffect(() => {
    // console.log("first")
    // })
    // useLayoutEffect(() => {
    // console.log("second")
    // })
    // useEffect(() => {
    // console.log("third")
    // })

    const [num, setNum] = useState(0);
    useLayoutEffect(() => {
        if (num == 0) setNum(5 + Math.random() * 50);
        console.log('Effect triggered with num:', num);
    }, [num])
    return (
        <div>
            <h2>{num}</h2>
            <button onClick={() => { setNum(0) }}>check</button>
        </div>
    )
}

export default UseLayoutEffect

// useLayoutEffect ,runs synchronously after a
// render but before the screen is updated

// useEffect runs asynchronously and after
// a render is painted to the screen (0 shown in slowmo)

// question why no infinite loop