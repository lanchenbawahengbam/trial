import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";


function NavBar() {
  return (
   
      <div>
        <Navbar bg="success" variant="dark" expand="xl">
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Academics">Academics</Nav.Link>
              <NavDropdown title="Administration" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Vice-chancellor">
                  Vice-chancellor
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/principal">Principal</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/institute">
                  Institute Administration
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/hostel">
                  Hostel Administration
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Department" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/civil">
                  Department of Civil Engineering
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/computerScience">
                  Department of Computer Science & Engineering
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/electronics">
                  Department of Electronics & Communication Engineering
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/electronics">
                  Department of Basic Science & Humanity
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/electronics">
                  Department of Mechanical Engineering
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/electronics">
                  Department of Electrical Engineering
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Facility">Facility</Nav.Link>
              <Nav.Link href="/Gallery">Gallery</Nav.Link>
              <Nav.Link href="/Contactus">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/Login">Login</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
  
  );
}

export default NavBar;
