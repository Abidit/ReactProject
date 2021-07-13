import React, { Component, state, deleteapplication } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import axios from 'axios';
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";

//Specially for Applicant But Admin Also Can Use It

export default class Application extends Component {
    state = {
        name:localStorage.getItem('name'),
        applications: [],
        config: {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3000/application/apply/" +this.state.name, this.state.config)
            .then((response) => {
                this.setState({

                    applications: response.data.data
                })
                console.log(response)
            })
            .catch((err) => {
                console.log(err.response)
            })

    }
    deleteapplication = (app) => {
        confirmAlert({
            title: "Confirm to Delete",
            message: "Are you sure to delete this?",
            buttons: [
              {
                label: "Yes",
                onClick: () => {
                    axios.delete("http://localhost:3000/application/delete/" + app, this.state.config)
                    .then((response) => {
                        if (response.data.success === true) {
                            alert('The application is cancelled.')
                            console.log(response)
                            this.props.history.push("/findjob")
                            this.componentDidMount()
                            return false;
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                },
              },
              {
                label: "No",
              },
            ],
          });
       
    }
    render() {
        return (
            <div>
                <Container>
                    <Row><Col><h2 className="headTest">My Applications</h2></Col></Row>
                </Container>
                {((this.state.applications.length) === 0) ? <Container>
                    <Row><Col><h2>No Applications (Please Apply)</h2></Col></Row>
                </Container> : <>{
                    this.state.applications.map((app) => {
                        const approve = app.Accepted
                        return (<div className="jobsGain" style={!(approve === "true") ? { color:'brown', } : {color : 'green', background:'greenyellow'}} key={app._id} >

                            <Card>
                                <Card.Body>
                                    <Card.Title>Applied Job Title : {app.JobName}</Card.Title>
                                    <Card.Text className="ccd">Job Owner : {app.JobOwner}</Card.Text>
                                    {(approve === "false") ? <><Card.Text className="ccd">Approved : {app.Accepted} (Application In Progress)</Card.Text>
                                        <p><Button className='appbtn' varient="danger" onClick={this.deleteapplication.bind(this, app._id)}>Cancel Application</Button></p>

                                    </> : <> {(approve === "true") ? <>
                                        <Card.Text className="ccd">Approved: {app.Accepted} </Card.Text>
                                        <Card.Text className="ccd">Your Application has been Approved. Check mail for further details </Card.Text></>:<>
                                        <Card.Text className="ccd">Approved: {app.Accepted} </Card.Text>
                                        <Card.Text className="ccd">Your Application has been rejected.  </Card.Text>
                                        <p><Button className='btn-danger appbtn' onClick={this.deleteapplication.bind(this, app._id)}>Delete Application</Button></p>

                                        </>}
                                       </>
                                    }

                                </Card.Body>
                            </Card>
                        </div>
                        )
                    })
                }</>
                }

            </div>
        )
    }
}
