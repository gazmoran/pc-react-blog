import { useState } from "react";
import { useHistory } from "react-router-dom"
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Create = () => {
    const [title, setTitle ] = useState('');
    const [body, setBody ] = useState('');
    const [author, setAuthor] = useState('Gary');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blog',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new article added');
            setIsPending(false);
            history.push('/');
        });
    }
    return ( 
        <Container className="create">
            <Row className="mb-5">
                <Col className="mt-5">
                <h2>Create Article</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Article Title:</Form.Label>
                        <Form.Control type="text" required 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Article body:</Form.Label>
                        <Form.Control as="textarea" rows="3" required 
                        value={body}
                        onChange={(e) => setBody(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Article author:</Form.Label> 
                        <Form.Select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}>
                            <option value="Gary">Gary</option>
                            <option value="Someone Else">Someone Else</option>
                        </Form.Select>
                    </Form.Group>
                    { !isPending && <Button variant="primary" type="submit">Add Article</Button>}
                    { isPending && <Button variant="primary" type="submit" disabled>Adding Article...</Button>}
                    
                </Form>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Create