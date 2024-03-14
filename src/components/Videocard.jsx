import React,{ useState } from 'react'
// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { deleteVideo,addHistory } from '../services/allApis';
import { toast } from 'react-toastify';


function Videocard({video,setDelstatus,cat}) {
    const [show, setShow] = useState(false);

    const [history,setHistory]=useState({
        caption:video.caption,url:video.url,datetime:''
    })

    const handleDelete=async(id)=>{
      console.log(id);
      const res=await deleteVideo(id)
      console.log(res);
      if (res.status>=200 && res.status<300) {
        setDelstatus(res)
        toast.success("Video Deleted Successfully !!!")
      }
      else{
          toast.error("Video Deletion Failed !!!")
      }
    }

    const handleDrag=(e,id)=>{
      console.log("video is draging : "+id);
      e.dataTransfer.setData("videoid",id)
    }


  const handleClose = () => {
    addHistory(history)
    setShow(false)
  };
  const handleShow = () => {
    const dt=new Date()
    setHistory({...history,datetime: Date()})
    setShow(true)
  };


  return (
    <>
    <Card style={cat?{ width: '9rem' }:{ width: '18rem' }} className='mt-3 mb-2 mx-2 ' draggable onDragStart={(e)=>{handleDrag(e,video ?.id)}}>
      <Card.Img variant="top" src={video.image} onClick={handleShow} className='img-fluid' />
      <Card.Body className='d-flex flex-row justify-content-between' >
        <Card.Title className='text-white'>{video.caption}</Card.Title>
        {
          ! cat &&
        <i className="fa-solid fa-trash"  onClick={()=>{handleDelete(video.id)}} style={{color:"#d7dae0"}}></i>
        }
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <iframe width="100%" height="315" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    
    
    
    </>
  )
}

export default Videocard