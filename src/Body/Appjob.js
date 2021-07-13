import React, { Component, state } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import axios from 'axios'
import swal from 'sweetalert'


// for Job Owner
export default class Appjob extends Component {
    state = {
        name:localStorage.getItem('name'),
        applications: [],
        Approved:'',
        config: {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }}

        componentDidMount() {
            axios.get("http://localhost:3000/application/owner/" +this.state.name, this.state.config)
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
        acceptApp(idd){
            console.log(idd)
            const data = {
                Accepted:true
            }
            axios.put("http://localhost:3000/application/update/" + idd, data,this.state.config)
            .then((response)=>{
                console.log(response)
                swal('The application is Accepted')
                this.props.history.push('/appjob')
                this.componentDidMount()
            }).catch((err)=>{
                console.log(err)
            })

        } 
        rejectjob(idd){
            console.log(idd)
            const data = {
                Accepted: 'rejected'
            }
            axios.put("http://localhost:3000/application/update/" + idd, data,this.state.config)
            .then((response)=>{
                console.log(response)
                swal('The application is Rejected')
                this.props.history.push('/appjob')
                this.componentDidMount()
            }).catch((err)=>{
                console.log(err)
            })

        }
    render() {
        return (
            <div>
                <Container>
                    <Row><Col><h2 className="headTest">Applications Received</h2></Col></Row>
                </Container>
                {((this.state.applications.length) === 0) ? <Container>
                    <Row><Col><h2>No Applications Till Now. </h2></Col></Row>
                </Container> : <>{
                    this.state.applications.map((app) => {
                        const approve = app.Accepted
                        return (<div className="jobsGain" style={!(approve === "true") ? { color:'brown', } : {color : 'green', background:'greenyellow'}} key={app._id}>

                            <Card>
                                <Card.Body>
                                    <Card.Title>Applied Job Title : {app.JobName}</Card.Title>
                                    <Card.Text className="ccd">Applicant Name : {app.UserName}</Card.Text>
                                    <Card.Text className="ccd">Applicant's Email : {app.Email}</Card.Text>
                                    {(approve === "false") ? <><Card.Text className="ccd">Approved : {app.Accepted} (Application In Progress)</Card.Text>
                                    <Button className='appbtn' variant='primary' onClick={this.acceptApp.bind(this,app._id)}>Accept Application</Button>
                                    <Button className='appbtn' variant='primary' onClick={this.rejectjob.bind(this,app._id)}>Reject Application</Button>

                                    </> : <></>}
                                    {(approve === "true") ? <>
                                        <Card.Text className="ccd">Approved: {app.Accepted} </Card.Text>
                                        <Card.Text className="ccd">This Application is Approved. Further Communications to be done Through Email. </Card.Text>
                                       </>:<></>
                                    } 
                                    {(approve === "rejected") ? <>
                                    <Card.Text className="ccd">Approved: {app.Accepted} </Card.Text>
                                    <Card.Text className="ccd">This Application is Rejected </Card.Text>
                                   </>:<></>
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
