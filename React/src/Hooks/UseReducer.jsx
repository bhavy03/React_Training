import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
    console.log(state, action);
    if (action.type == "increment") return state + 1
    if (action.type == "decrement") return state - 1
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
    return (
        <div>
            <p>{state}</p>
            <div>
                <button onClick={() => { dispatch({ type: "increment" }) }}>Inc</button>
                <button onClick={() => { dispatch({ type: "decrement" }) }}>Dec</button>
            </div>
        </div>
    )
}

export default UseReducer

// useReducer returns an array with exactly two values:
// The current state
// The dispatch function that lets you update the state
// to a different value and trigger a re-render.

// reducer is a pure function that take in a state and action and return a new state
// in which the two parameters are current state and action method

// work of dispatch is to trigger the action method
// The dispatch function that lets you update the state to a
// different value and trigger a re-render

// we call dispatch() in our code when we want to change state
// we already gave a reducer set up to do the legwork of changing
// the state , we just need to be able to trigger how to change it
