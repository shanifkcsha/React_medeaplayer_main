import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import {addCategory} from '../services/allApis'
import CategoryList from './CategoryList';

function Categories() {

  const [addstatus,setAddstatus]=useState({})
   
  const [show, setShow] = useState(false);
  const [category,setCategories]=useState({
    name:'',videos:[]
  });

  function getdata(val)
  {
    if(val){
      setCategories({...category,name:val})
    }
  }
  
  const handleAdd=async()=>{
      console.log(category);
      if(category.name){
        const res=await addCategory(category)
          if (res.status>=200 && res.status<300) {
            toast.success("Category Added Successfully !!!")
            handleClose()
            setAddstatus(res.data)

          }
          else{
              toast.error("Category Added Failed !!!")
            }
        }
      else{
          toast.info("Enter Valid Data !!!")
      }
    }
        
  const handleClose=()=>{
    setShow(false);
    setCategories({
      name:'',videos:[]
    })
  }
  const handleShow=()=>setShow(true);

  return (
    <>
    <div className='grid ps-4' >
    <Button variant="primary" className='btn' onClick={handleShow}>Add Category</Button>
    </div>

    <Modal show={show} onHide={handleClose} backdrop="static"  keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category Name</Form.Label>
              <Form.Control type="text" name='category' onChange={(e)=>getdata(e.target.value)} placeholder="Enter category name" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleAdd}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

     <CategoryList Status={addstatus}/>
    </>
  )
}

export default Categories
