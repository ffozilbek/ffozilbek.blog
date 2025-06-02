import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [data,setData] = useState(null)
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)

  useEffect(()=> {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data.reverse());
        setError(null);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchData()
  },[url])


  return {data,loading,error}
}
