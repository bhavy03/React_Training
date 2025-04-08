import { useMemo, useState } from "react";

const UseMemo = () => {

    const [myNum, setMyNum] = useState(0)
    const [show, setShow] = useState(true)

    const getValue = () => {
        return setMyNum(myNum + 1)
    }

    const countNumber = (num) => {
        console.log(num)
        for (let i = 0; i <= 10000; i++) {
            // return num;
        }
        return num;
    }

    // useMemo is used as we don't want to re-render the countnumber function
    // const checkData = countNumber(myNum)
    const checkData = useMemo(() => {
        return countNumber(myNum);
    }, [myNum])

    // we can use useEffect here but the problem is we can't
    // return a value in useEffect and store it in 

    return (
        <>
            <div className="bg-blue-500">
                <button onClick={getValue} style={{ background: 'red' }}>counter</button>
                <p>My new number:{checkData}</p>
                <button onClick={() => setShow(!show)}>{show ? "click me plz" : "you clicked me"}</button>
            </div>
        </>
    )
}

export default UseMemo

// to increase the performance of react application
// it returns the memoized value
// Memoization is an optimization feature in React which,when used in
// the right place,increased the performance of the program
