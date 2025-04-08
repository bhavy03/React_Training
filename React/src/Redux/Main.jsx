import { useDispatch, useSelector } from "react-redux"
import { decNum, incNum } from "./action/action";

const Main = () => {
    const myState = useSelector((state) => state.changeNumber)
    const dispatch = useDispatch();
    console.log(myState)
    return (
        <div>
            <p>Increment/Decrement counter</p>
            <p>{myState}</p>
            <div>
                <button onClick={() => { dispatch(incNum(5)) }}>Inc</button>
                <button onClick={() => { dispatch(decNum()) }}>Dec</button>
            </div>
        </div>
    )
}

export default Main

// redux store stores all the states of the application
// redux is a pattern and library for managing and updating application state,using 
// events called 'actions'.It serves as a centralized store for state that 
// needs to be used across your entire application
// with rules ensuring that the state can only be updated in a predictable fashion

// actions are plain javascript objects that have a type field
// actions only tell what to do ,but they don't tell how to do
// action creator is the pure function which creates an action which is reusable,portable and easy to test

// reducers are the functions that take the current state and an action as arguments,and return a new state result

// the redux store brings together the state,actions and reducers that make up your app
// there can be only single store in a redux application
// every redux store has a single root reducer function

// redux principle
// single source of truth(global state inside single store)
// state is read only(only way to change is to dispatch and action)
// immutability,one - way data flow predictibility of outcome
// changes are made with pure reducer functions
