import React,{useState,useEffect} from 'react'
import Videocard from './Videocard'
import { getVideos } from '../services/allApis'

function Videos(addstatus) {

  const [allvideos,setAllvideos]=useState([])
 const [delstatus,setDelstatus]=useState({})


  useEffect(()=>{
    getData()
  },[addstatus,delstatus])

  const getData=async()=>{
    const res=await getVideos()
    // console.log(res.data);
    setAllvideos(res.data)
    // console.log(allvideos);
  }

  return (
    <div className='border border-2 row border-light p-5 rounded'>
      {
        allvideos ?
        allvideos.map(items=>(
          <Videocard video={items} setDelstatus={setDelstatus}/>
        ))
        :
        <h2>No Videos</h2>
      }
    </div>
  )
}

export default Videos