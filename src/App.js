import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Header from './components/shared/Header/header.component';
import Registration from './components/registration/registration.component';
import Footer from './components/shared/Footer/footer.component';


function App() {
    return (
        <Container>
            <Row>
                <Col>
                <Header/>
                </Col>
            </Row>

            <Row>
                <Col md={3}>
                <Registration/>
                </Col>
            </Row>


            <Row>
                <Col>
                <Footer/>
                </Col>
            </Row>

        </Container>
    );
}

export default App;