import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      {/* <Navbar className="bg-body-tertiary" > */}
      <Navbar  style={{backgroundColor:"#006353"}} >
        <Container >
          <Navbar.Brand href="#home"  style={{color:"white"}} > 
            <i className='fa-solid fa-upload fa-bounce fa-lg me-3' style={{color:"white"}}></i>
            Media-Player
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
