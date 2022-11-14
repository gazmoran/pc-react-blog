import React from "react";
import {Button, Container, Row, Col} from 'react-bootstrap';
import Navigation from "./Navigation";

function Header(){
    return(
        <section className="bg-dark">
            <Container className="pt-4">
                <Navigation />
            </Container>
            <Container>
                <Row className="pb-5">
                    <Col className="text-center mt-5">
                        <h1 className="text-light display-3 mb-4">Purechannels Admin</h1>  
                        <Button href="/">View Blog</Button>    
                    </Col>
                </Row>    
            </Container>
        </section>
    )
}

export default Header;