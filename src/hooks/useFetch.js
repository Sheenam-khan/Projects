import React, { useState ,useEffect } from 'react'
import axios from "axios"

const baseUrl='localhost:8000/api/'
const useFetch=(url,method='Get',payload={})=> {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
      const fetchData=async()=>{
        setLoading(true)
        try{
       const res=await axios({method,url,data:JSON.stringify(payload)})
       console.log("Data",res)
       setData(res.data)
        }
        catch(err){
            setError(err)
        }
       setLoading(false)
      }
    fetchData()
      
    }, [url])
    
    const refetch=async()=>{
        setLoading(true)
        try{
       const res=await axios({method,url:`${url}`,data:JSON.stringify(payload)})
       console.log("Data",res)
       setData(res.data)
        }
        catch(err){
            setError(err)
        }
       setLoading(false)
      }

    return {data,loading,error,refetch}
}

export default useFetch