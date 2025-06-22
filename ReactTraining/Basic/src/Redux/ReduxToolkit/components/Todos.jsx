import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../feature/todo/todoSlice";
import { useGetPokemonByNameQuery } from "../services/newapi";
import { useGetPokemonByName2Query } from "../services/new2api";

const Todos = () => {
    // const todos = useSelector((state) => state.todos)
    const todos = useSelector((state) => state.baba.todos);


    const { data, isFetching, error } = useGetPokemonByNameQuery();
    console.log("fetching", isFetching)
    console.log("data", data)
    // const datat = JSON.parse(data)
    console.log(data.tracks[0].title)
    console.log("errror", error)


    const { data: data2, isFetching: isFetching2, error: error2 } = useGetPokemonByName2Query();
    console.log("data2", data2)
    // console.log(data2.data.browseStart)
    console.log("fetching", isFetching2)
    console.log("errror", error2)


    const dispatch = useDispatch();
    // console.log(todos)
    return (
        <>
            <div>Todos</div>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.text}
                    <button onClick={() => { dispatch(removeTodo(todo.id)) }} className="bg-black">click</button>
                </li>
            ))}
        </>
    )
}

export default Todos
