import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../img/netflix_logo.png";
import avatar from "../img/avatar.png";
import kids from "../img/kids_icon.png";
import { Search, Bell } from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";

const MyNav = () => {
  const location = useLocation();
  return (
    <Navbar expand="lg" variant="dark" className="px-4">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Netflix Logo" width="140px" />
        </Navbar.Brand>

        <Navbar.Collapse id="mainNav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Link href="#" className={`nav-link ${location.pathname === "/" ? "active fw-bold" : ""}`} to="/">
              Home
            </Link>
            <Link
              href="#"
              className={`nav-link ${location.pathname === "/tv-shows" ? "active fw-bold" : ""}`}
              to="/tv-shows"
            >
              TV Shows
            </Link>
            <Link
              href="#"
              className={`nav-link ${location.pathname === "/movies" ? "active fw-bold" : ""}`}
              to="/movies"
            >
              Movies
            </Link>
            <Link
              href="#"
              className={`nav-link ${location.pathname === "/recently-added" ? "active fw-bold" : ""}`}
              to="/recently-added"
            >
              Recently Added
            </Link>
            <Link
              href="#"
              className={`nav-link ${location.pathname === "/my-list" ? "active fw-bold" : ""}`}
              to="/my-list"
            >
              My List
            </Link>
          </Nav>
        </Navbar.Collapse>
        <div id="right-icons" className="d-flex gap-3 align-items-center text-light">
          <Search size={20}></Search>
          <span>KIDS</span>
          <Bell size={20}></Bell>
          <div className="dropdown">
            <NavDropdown title={<img src={avatar} alt="User Avatar" width="35px" />} id="basic-nav-dropdown">
              <NavDropdown.Item href="#">
                {" "}
                <img src={kids} alt="User Avatar" width="35px" /> Kids
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Manage Profiles</NavDropdown.Item>

              <hr className="dropdown-divider" />

              <NavDropdown.Item href="#">Edit Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Account</NavDropdown.Item>
              <NavDropdown.Item href="#">Help Center</NavDropdown.Item>

              <hr className="dropdown-divider" />

              <NavDropdown.Item href="#"> Sign out of netflixs</NavDropdown.Item>
            </NavDropdown>
          </div>

          <Navbar.Toggle />
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNav;
