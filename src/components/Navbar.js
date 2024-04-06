import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#33107a', color: '#ffffff' }}>
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: '#ffffff' }}>Navbar-scroll.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-auto"
            style={{ maxHeight: '100px', color: '#ffffff' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ color: '#ffffff' }}>Home</Nav.Link>
            <Nav.Link href="#action2" style={{ color: '#ffffff' }}>About</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown" style={{color: '#ffffff' }}>
              <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ color: '#ffffff' }}
            />
            <Button variant="outline-primary" style={{ color: '#ffffff' }}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
