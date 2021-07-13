import { Component, state, insertjob } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';

// For Admin and Job Owner

export default class Addjob extends Component {
        state = {
                Userid: localStorage.getItem('userid'),
                JobOwner: localStorage.getItem('name'),
                JobTitle: "",
                Description: "",
                SkillsNeeded: "",
                BudgetTime: "",
                config: {
                        headers: {
                                authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                }
        }

        insertjob = (e) => {
                e.preventDefault();
                axios.post("http://localhost:3000/jobs/insert", this.state, this.state.config)
                        .then((response) => {
                                if (response.data.success === true) {
                                        swal({
                                                title: "New Job",
                                                text: "The job has been Inserted.",
                                                icon: "success",
                                        })
                                        console.log(response)
                                        this.props.history.push("/findjob")
                                        this.forceUpdate()

                                }
                                else if (response.data.success === false) {
                                        swal("Invalid Input;")
                                }
                        }
                        )
                        .catch()
        }

        render() {
                return (
                        <div className="adddata">
                                <Container>
                    <Row><Col><h2 className="headTest">Add New Job Oppertunity</h2></Col></Row>
                </Container>
                                <Form className="formme"><p>
                                <input type="text" name="JobTitle" className="form-control item" placeholder="Provide a job title"
                                        value={this.state.JobTitle} onChange={(event) => { this.setState({ JobTitle: event.target.value }) }} />

                        </p>
                                <p><input type="text" name="Description" className="form-control item" placeholder="Description"
                                        value={this.state.Description} onChange={(event) => { this.setState({ Description: event.target.value }) }} />
                                </p>
                                <p><input type="text" name="SkillsNeeded" className="form-control item" placeholder="Skills Required"
                                        value={this.state.SkillsNeeded} onChange={(event) => { this.setState({ SkillsNeeded: event.target.value }) }} />
                                </p>
                                <p><input type="text" name="BudgetTime" className="form-control item" placeholder="Budget and time"
                                        value={this.state.BudgetTime} onChange={(event) => { this.setState({ BudgetTime: event.target.value }) }} />
                                </p>
                                <Button variant="primary" className="logbtn" onClick={this.insertjob}>Submit</Button>
                        </Form></div>
                )
        }
}