/*import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import Cart from './Cart';

function Navbars() {
  const total = 25000;
  const token = true;

  return (
    <Navbar bg="dark" expand="md" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" className="text-white">Pizzería Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Button variant="outline-warning" className="text-white">🍕 Home</Button></Nav.Link>
            {token ? (
              <Nav.Link href="#Profile"><Button variant="outline-warning" className="text-white">🔒 Profile</Button></Nav.Link>
            ) : (
              <Nav.Link href="#Login"><Button variant="outline-warning" className="text-white">🔒 Login</Button></Nav.Link>
            )}
            {token ? (
              <Nav.Link href="#Logout"><Button variant="outline-warning" className="text-white">🔒 Logout</Button></Nav.Link>
            ) : (
              <Nav.Link href="#Register"><Button variant="outline-warning" className="text-white">🔒 Register</Button></Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex me-4">
          <Button variant="outline-primary">Total: ${total.toLocaleString()}</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Navbars; */
import React from 'react'
function Navbars() {
  const total = 25000; 
  const token = false;
  return (
    <section className='container-navbar'>
    <div className='Nav_Button'>
      <p className='title'>Pizzería Mamma Mía!</p>
      <nav className='menu'>
        <button>🍕 Home</button>
        {
        token? 
        (<div className='bottons' >
        <button >🔓 Profile</button>
        <button>🔒 Logout</button>
      </div>) : 
        ( <div className='bottons'>
        <button >🔑 Login</button>
        <button >🔐 Register</button>
        </div>)
        }
        </nav>
     </div>
        <div className='total'>  
        <button >🛒${total.toLocaleString()}</button>
        </div>
    </section>
  )
}

export default Navbars