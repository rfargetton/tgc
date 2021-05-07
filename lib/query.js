import {useState, useEffect} from "react";
import axios from "axios";

export function useQuery(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [queried, setQueried] = useState(false);

  async function fetchData(){
    try {
      const res = await axios.get(url);
      setData(res.data);
      setError(false);
    } catch(error) {
      setData(null);
      setError(true);
    }
    setQueried(true);
  }

  useEffect(function(){
    fetchData()
  }, [url])

  return {
    data,
    error,
    queried
  }
}

export function useLazyQuery(url){
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [queried, setQueried] = useState(false);
  
  async function fetchData(){
    try {
      const res = await axios.get(url);
      setData(res.data);
      setError(false);
    } catch(error) {
      setData(null);
      setError(true);
    }
    setQueried(true);
  }

  return {
    fetchData,
    data,
    error,
    queried
  }

}