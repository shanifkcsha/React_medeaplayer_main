import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allApis';
import { toast } from 'react-toastify';


function Addvideos(setAddstatus) {
    const [show, setShow] = useState(false);
    const [video,setVideo]=useState({
        caption:'',url:'',image:''
    })

    
    const getdata=(e)=>{
        const {name,value}=e.target

        if(name=="caption"){
            setVideo({...video,caption:value})
        }
        if(name=="url"){
            let furl=value
            furl=furl.split("v=")
            let vurl=`https://www.youtube.com/embed/${furl[1]}?si=_hmZx2fV0WzVCRhP`
            setVideo({...video,url:vurl})
        }
        if(name=="image"){
            setVideo({...video,image:value})
        }
    }
    const handleupload=async()=>{
        const {caption,url,image}=video 
        if(!caption || !url || !image){
            toast.warning("Enter Valid Details !!!")
        }
        else{
            // console.log(video);
            const res=await uploadVideo(video)
            console.log(res);
            if (res.status>=200 && res.status<300) {
                handleClose()
                toast.success("Video uploaded Successfully !!!")
                setAddstatus(res.data)
            }
            else{
                toast.error("Video uploaded Failed !!!")
            }
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <span className='btn' onClick={handleShow}>
               <div className='border border-1 border-white p-1 rounded'>Add  <i class="fa-solid fa-circle-plus"></i></div> 
            </span>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='text-white'>Video Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Caption </Form.Label>
                            <Form.Control type="text" placeholder="Enter Video Caption :" name='caption' onChange={(e)=>{getdata(e)}}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Video URL</Form.Label>
                            <Form.Control type="text" placeholder="Enter Youtube Video URL :" name='url' onChange={(e)=>{getdata(e)}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control type="text" placeholder="Enter Thumbnail Image URL :" name='image' onChange={(e)=>{getdata(e)}}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleupload}>Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Addvideos