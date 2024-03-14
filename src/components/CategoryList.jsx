import React,{useEffect,useState} from 'react'
import { getCategory,getSpecificVideo,updatecategory } from '../services/allApis';
import {toast} from "react-toastify"
import Videocard from './Videocard';

function CategoryList({Status}) {
  const [cat,setCat]=useState([])

  useEffect(()=>{
    getCat()
  },[Status])

  const getCat=async()=>{
    const res=await getCategory()
    // console.log(res.data);
    setCat(res.data)
  }

const handleDrop=async(e,id)=>{
  console.log("category  id  "+id);
  const vid=e.dataTransfer.getData("videoid")
  console.log("droped videon id :" +id);
  let category=cat.find(item=>item.id==id)
  console.log(category);
  const res=await getSpecificVideo(vid)
  // console.log(res.data);
  category.videos.push(res.data)
  console.log(category);
  const rescat=await updatecategory(category,id)
  if (rescat.status>=200 && rescat.status<300) {
    toast.success(`${res.data.caption} is added to ${category.name}`)
    getCat()
  }
  else{
    toast.error("Video adding to category is Failed !!!")
  }

}

const handleDragOver=(e)=>{
  e.preventDefault()
  console.log("dragging Over Category");
}

  return (
    <>
    <div className=' border border-light p-3 mt-3 text-white'>
      {cat ?
        cat.map(item=>(
          <div className=' rounded shadow mb-3 p-3' style={{backgroundColor:"#4e7d01"}} onDragOver={e=>{handleDragOver(e)}} droppable onDrop={e=>{handleDrop(e,item?.id)}}> 
            <div>
              <span>{item.name}</span>
              <i className="fa-solid fa-trash float-end"   style={{color:"#d7dae0"}}></i>
            </div>
            <div className='row'>
              {
                item?.videos.map(v=>(
                  <Videocard video={v} cat={true}/>
                ))
              }
            </div>
          </div>
        )) 
        :
        <h2>No Categories</h2>
      }
    </div>
    </>
  )
}

export default CategoryList