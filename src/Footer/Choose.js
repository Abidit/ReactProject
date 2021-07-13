import { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import wrk from "../Images/wrk.png";

export default class Choose extends Component {
    render() {
        return (
            <div className="choosesection">
                <Container>
                    <h3 className="headchoose">Why Choose Us?</h3>
                    <Row>
                        <Col md="4" lg="4" className="columnchoose">
                            <h5>Security</h5>
                            <p>This platform ensures security on every work transactions done.
                            The data is stored in encrypted form.
                    </p>
                            <p></p>


                            <h5>Support</h5>
                            <p>The server runs 24/7 and for any queries the, customer support is available.
                    </p>
                        </Col>
                        <Col md="4" lg="4" className="columnchoose">

                            <h5>Reliability</h5>
                            <p>This website is reliable about the sources from which the access is enabled.</p>

                            <h5>Flexibility</h5>
                            <p>We provide multiple Payment terms and flexible Agreements to enable you to work the way you want.</p>
                        </Col>
                        <Col md="4" lg="4">
                            <img src={wrk} alt="back" />
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}