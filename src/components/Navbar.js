
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgProfile } from "react-icons/cg";

function NavScrollExample() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#33107a', color: '#ffffff' }}>
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: '#ffffff' }}><span className="badge text-bg-secondary fs-6">IndigoLearn.com </span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-auto"
            style={{ maxHeight: '100px', color: '#ffffff' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ color: '#ffffff' }} className='text-white fw-semibold'>Home</Nav.Link>
            <Nav.Link href="#action2" style={{ color: '#ffffff' }} className='text-white fw-semibold'>ACC</Nav.Link>
            <Nav.Link href="#action2" style={{ color: '#ffffff' }} className='text-white fw-semibold'>Placements</Nav.Link>
            <Nav.Link href="#action2" style={{ color: '#ffffff' }} className='text-white fw-semibold'>Alumni</Nav.Link>
            <Nav.Link href="#action2" style={{ color: '#ffffff' }} className='text-white fw-semibold'>About Us</Nav.Link>
            
           
          </Nav>
          <div className="d-flex align-center border rounded p-1 bg-white text-black" variant="outline-primary">
            <div className='me-2'>
            <CgProfile/>
            </div>
            <div className=' fw-bold'>Login/SignUp</div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
