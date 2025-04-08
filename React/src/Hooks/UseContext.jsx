import { createContext } from "react"
import ConA from "./ConA"

const BioData = createContext();
// const LastName = createContext();

const UseContext = () => {
    return (
        <BioData.Provider value={"bhavya"}>
            {/* <LastName.Provider value={"soni"}> */}
            <div>
                <ConA />
            </div>
            {/* </LastName.Provider> */}
        </BioData.Provider>
    )
}

export default UseContext
export { BioData }
// export { LastName }

// here we have to pass the name prop all along the component tree
// useContext hook makes it easy to pass the data throughout
// the app without manually passing props down the tree
// in context api we have
// context
// provider
// consumer
// but the consumer part is lengthy and complicated
// therefore we use useContext in place of consumer in Context API
