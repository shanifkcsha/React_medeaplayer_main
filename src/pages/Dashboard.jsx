import React,{useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import Addvideos from '../components/Addvideos'
import Videos from '../components/Videos'
import Categories from '../components/Categories'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'




function Dashboard() {
  const [addstatus,setAddstatus]=useState({})
  
  return (
    <>
      <div>
        {/* <h3>Dashboard</h3> */}
        <Row className='p-4'>
          <Col sm="1" md="1">
            <Addvideos setAddstatus={setAddstatus}/>
            <Link to='/his' className='btn btn-primary border border-white'>
              History <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </Link>
          </Col>
          <Col sm="2" md="8">
            <Videos addstatus={addstatus}/>
          </Col>
          <Col sm="2" md="3">
            <Categories/>
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </>
  )
}

export default Dashboard
