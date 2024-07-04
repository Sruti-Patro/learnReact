import { useEffect, useState } from "react"

export default function Github() {
    const [data, setdata] = useState([])
    // useEffect(()=>{},[])
    useEffect(()=>{
        fetch('https://api.github.com/users/Sruti-Patro')
        .then((response=>response.json()))
        .then(data=>{
            console.log(data);
            setdata(data)
        })
    },[])

    return(
        <>
            {/* <div className="bg-blue-100 text-white p-4 text-2xl">GitHub</div>
            <img src={data.avatar_url} alt="" className="rounded-full p-8 m-9" />
            <p>NAME : {data.name}</p>
            <h2>BIOGRAPHY : {data.bio}</h2> */}
            <div className=" bg-gray-100 flex flex-col items-center">
      <div className="bg-gray-500 text-white py-6 w-full text-center text-3xl font-semibold">
        GitHub Profile
      </div>
      <div className="bg-white rounded-lg shadow-md p-8 m-6 max-w-md w-full">
        <img 
          src={data.avatar_url} 
          alt="Profile" 
          className="rounded-full w-32 h-32 mx-auto mb-6"
        />
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
          <p className="text-lg text-gray-700">{data.bio}</p>
        </div>
      </div>
    </div>
        </>
    )
}