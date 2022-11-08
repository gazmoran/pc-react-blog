import { Nav } from "react-bootstrap"

const Navbar = () => {
    return ( 
        <Nav className="justify-content-end">
            <Nav.Item>
                <Nav.Link href="#">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/creat">Create Article</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/blog">View Articles</Nav.Link>
            </Nav.Item>
        </Nav>
     );
}
 
export default Navbar;