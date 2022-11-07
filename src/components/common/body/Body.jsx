import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Body(){
    return (
        <section className="my-5">
            
            <Container>
                <Row className="justify-content-center">
                    <Col md="6" className="text-center">
                        <h2>Body</h2>
                    </Col>
                </Row>
                
            </Container>
        </section>
    )
}

export default Body;