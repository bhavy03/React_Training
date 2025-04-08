import { useContext } from "react"
import { BioData } from "./UseContext"
// import { LastName } from "./UseContext"

const ConC = () => {
    const myname = useContext(BioData)
    return (
        <>
            {/* <BioData.Consumer> */}
            {/* {(myname) => { */}
            {/* return ( */}
            {/* <LastName.Consumer>{(lname) => { */}
            {/* return ( */}
            {/* <p>hello {myname} {lname}</p> */}
            {/* ) */}
            {/* }} */}
            {/* </LastName.Consumer> */}
            {/* ) */}
            {/* }} */}
            {/* </BioData.Consumer> */}

            {/* this is the consumer part of context API */}
            {/* consumer only takes function */}
            <div>
                hello {myname}
            </div>
        </>
    )
}

export default ConC
