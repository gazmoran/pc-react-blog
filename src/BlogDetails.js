import { Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data:blog, error, isPending } = useFetch('http://localhost:8000/blog/' + id);
    return ( 
        <Container>
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <Row>
                        <Col className="blog-details mt-5">
                            <h2>{ blog.title }</h2>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col className="mt-4">
                            <p>{ blog.body }</p>
                            <p>Written by <b>{ blog.author }</b></p>
                        </Col>
                    </Row>
                </article>
            )}
            
        </Container>
     );
}
 
export default BlogDetails;