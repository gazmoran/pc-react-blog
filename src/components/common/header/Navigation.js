import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom";

const Navigation = () => {
    return ( 
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="/">Purechannels</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-nav" />
            <Navbar.Collapse id="main-nav">
                <Nav className="ms-auto">
                    <Nav.Item>  
                        <Link to="/" className="nav-link">
                        Home
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/create" className="nav-link">
                        Create Article
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/blog" className="nav-link">
                            View Articles
                        </Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
     );
}
 
export default Navigation;