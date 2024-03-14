
import React,{useEffect,useState} from 'react'
import { getHistory } from '../services/allApis'

function History() {
  const [his,setHis]=useState([])
  

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
    const res=await getHistory()
    console.log(res.data)
    setHis(res.data)
  }

  return (

    <>
    <div className='p-5'>
      <h2>Watch History</h2>
      <table className='table table-borderd'>
        <tr>
          <th>Caption</th>
          <th>Url</th>
          <th>Date & Time</th>
          <th></th>
        </tr>
        {
          his ?
            his.map(item=>(
              <tr>
                <td>{item.caption}</td>
                <td>{item.url}</td>
                <td>{item.datetime}</td>
                <td>
                <i className="fa-solid fa-trash"  style={{color:"#d7dae0"}}></i>
                </td>
              </tr>
            ))
            :
            <p className='text-danger'>No History</p>
        }
      </table>
    </div>
    
    </>
  )
}

export default History