import { useState } from "react"

const Input = () => {
    const [state, setstate] = useState("");
    // const [empty, setEmpty] = useState("")
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                hello world
                <input type="text" className="bg-slate-400" placeholder="enter the text" value={state} />
                <div>
                    <p onClick={() => { setstate("hari om") }}>haha</p>
                    <p onClick={() => { setstate("hari om") }}>hari om</p>
                    <p onClick={() => { setstate("hari om") }}>hari ha</p>
                    <p onClick={() => { setstate("hari om") }}>hari na</p>
                </div>
            </div>
        </div>
    )
}

export default Input
