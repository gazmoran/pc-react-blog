import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogList = ({blogs,title}) => {

    return ( 
        <Row>
            <Col className="mt-5">
                <h2>{title}</h2>
                {blogs.map((blog) => (
                    <Card className="blog-preview mt-4" key={blog.id}>
                        <Card.Header className="d-flex align-items-center justify-content-between">
                            <Link to={`/blog/${blog.id}`}>
                                <h2>{blog.title}</h2>
                            </Link>
                        </Card.Header>
                        <Card.Body>
                            <p>Writen by {blog.author}</p>    
                        </Card.Body>
                    </Card>
                ))}     
            </Col>
        </Row>
     );
}


export default BlogList;