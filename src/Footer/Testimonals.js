import { Component } from "react";
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap';
import t1 from '../Images/t1.png';
import t2 from '../Images/t2.png';
import t3 from '../Images/t3.png';


export default class Testimonals extends Component {
  render() {
    return (
      <>

        <div className="testt">
          <Container>
            <Row><Col><h2 className="lowTest">Testimonals</h2></Col></Row>
          </Container>
          <Container>
            <Row>
              <CardDeck>
                <Card>
                  <Card.Img variant="top" src={t1} />
                  <Card.Body>
                    <Card.Title>Project Manager</Card.Title>
                    <Card.Text>
                      I found this platform very helpful to carry out my project activities, as the
                      persons are highly skilled and prices are affordables. It’s been a life-saver.
      </Card.Text>
                  </Card.Body>

                </Card>
                <Card>
                  <Card.Img variant="top" src={t2} />
                  <Card.Body>
                    <Card.Title>Managing Director</Card.Title>
                    <Card.Text>
                      As the MD of ITSolutions, I looked all around for someone I could trust
                      to handle our servers and databases. This platforn helped in it alot.
      </Card.Text>
                  </Card.Body>

                </Card>
                <Card>
                  <Card.Img variant="top" src={t3} />
                  <Card.Body>
                    <Card.Title>Worker</Card.Title>
                    <Card.Text>
                      It has been so helpful in growing my skills in an industry that is tough to get into.
      I apply for endless amounts of gigs that I feel I am a match. </Card.Text>
                  </Card.Body>
                </Card>

              </CardDeck>

            </Row>
          </Container>
        </div>


      </>
    )
  }
}