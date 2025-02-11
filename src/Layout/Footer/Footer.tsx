import { Col, Container, Row } from 'reactstrap'
import { P } from '../../AbstractElements'

export default function FooterLayout() {
    return (
        <footer className="footer">
            <Container fluid>
                <Row className='gy-1'>
                    <Col lg={6} md={7} className="footer-copyright">
                        <P className="mb-0 f-light f-w-500">{'Copyright 2024 © 24 Táxi por Iode Desenvolvimento'}</P>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
