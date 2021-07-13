import axios from 'axios'
import React, { Component,state } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'

export default class ViewUsers extends Component {
    state = {
        name:localStorage.getItem('name'),
        userss: [],
        config: {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }}

        componentDidMount() {
            axios.get("http://localhost:3000/user/all" , this.state.config)
                .then((response) => {
                    this.setState({
                        userss: response.data.data
                    })
                })
                .catch((err) => {
                    console.log(err.response)
                })
        }
        
    render() {
        return (
            <div>
                <Container>
                    <Row><Col><h2 className="headTest">Listed Users</h2></Col></Row>
                </Container>
                {((this.state.userss.length) === 0) ? <Container>
                    <Row><Col><h2>No Users Registered till now. </h2></Col></Row>
                </Container> : <>{
                    this.state.userss.map((user) => {
                        const type = user.Usertype
                        return (<div className="listuser" key={user._id}>
                            <Container><Row><Col><Card className="listcard"><Card.Body>
                            
                                    <Card.Title>{type}</Card.Title>
                                    <Card.Text className="ccd">Name : {user.Fullname}</Card.Text>
                                    <Card.Text className="ccd">Email : {user.Email}</Card.Text>
                                    <Card.Text className="ccd">Username : {user.Username}</Card.Text>
                            </Card.Body>
                            </Card>
                    
                            </Col></Row></Container>

                        </div>
                        )
                    })
                }</>
                }
            </div>
        )
    }
}