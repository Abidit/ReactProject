import { MDBContainer,MDBRow, MDBCol } from "mdbreact";
import { Component } from "react";
import { CardDeck, Card } from 'react-bootstrap';

export default class Find extends Component {
  render() {
    return (
      <div>


        <MDBContainer>
          <MDBRow><MDBCol><h2 className="headTest">Find Top Skills of 2020</h2></MDBCol></MDBRow>
        </MDBContainer>
        <MDBContainer className="skillCard"><MDBRow>
          <MDBCol>
            <CardDeck>
              <Card>
                <Card.Body>
                  <Card.Title>Coding</Card.Title>
                  <Card.Text>2522 Jobs </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Databases</Card.Title>
                  <Card.Text>2242 Jobs </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>3D Printing</Card.Title>
                  <Card.Text>2342 Jobs </Card.Text>

                </Card.Body>
              </Card>
            </CardDeck>

          </MDBCol>
        </MDBRow></MDBContainer>
        <MDBContainer className="skillCard"><MDBRow>
          <MDBCol><CardDeck>
            <Card>
              <Card.Body>
                <Card.Title>Big Data</Card.Title>
                <Card.Text>562 Jobs </Card.Text>

              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Designing</Card.Title>
                <Card.Text>2122 Jobs </Card.Text>

              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Animations</Card.Title>
                <Card.Text>2212 Jobs </Card.Text>

              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Editors</Card.Title>
                <Card.Text>1522 Jobs </Card.Text>

              </Card.Body>
            </Card>

          </CardDeck></MDBCol>
        </MDBRow></MDBContainer>
      </div>
    )
  }
}