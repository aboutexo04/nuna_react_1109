import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
  import Container from 'react-bootstrap/Container';
  import Form from 'react-bootstrap/Form';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import logo from '../images/logo.png';
const AppLayout = () => {
  return(
    <>
    <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      <Navbar expand="lg" variant="dark" style={{ backgroundColor: 'black' }}>
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" height="50" className="me-2" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
              <Nav.Link as={Link} to="/movies" className="text-white">Movies</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 bg-secondary border-dark"
                size="sm"
                aria-label="Search"
              />
              <Button variant="outline-danger" size="sm">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
    </>
  );
};

export default AppLayout;
