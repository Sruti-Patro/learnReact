import { useParams } from "react-router-dom"

export default function User() {
    
    const {userid} = useParams()

    return(
        <>
            <h1 className="bg-black text-white p-4 m-4 text-2xl">User / ID : {userid} </h1>
            {/* same as in the link === /user/:userid*/}
        </>
    )
}