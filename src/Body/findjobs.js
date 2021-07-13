import { Component, state, deleteJob, insertApplication } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import {TextField } from "@material-ui/core";
import {Autocomplete } from "@material-ui/lab";

// For applicants to apply
//For job owners to delete and update job

export default class Findjobs extends Component {
    state = {
        name :localStorage.getItem('name'),
        jobs: [],
        clicked: false,
        config: {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    }
    insertApplication = (title, owner) => {
        console.log(title)

        const userdata = {
            JobName: title,
            JobOwner: owner,
            UserName: localStorage.getItem('name'),
            Email: localStorage.getItem('email')
        }
        axios.get(`http://localhost:3000/application/get/${localStorage.getItem('name')}/${title}`).then((response)=>{
            if(response.data.data===null){
                axios.post("http://localhost:3000/application/insert", userdata, this.state.config)
                .then((response) => {
    
                    this.props.history.push("/findjob")
                    this.componentDidMount()
    
                    if (response.data.success === true) {
                        swal({
                            title: "Great Job",
                            text: "You have applied Successully.",
                            icon: "success",
                        })
                    }
                    else {
                        swal("Error Registering!!")
                    }
                    if (this.state.clicked === true) {
                        swal("You have already registered.")
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
            }
            else{
                swal("Already Applied")
            }
        })
       
    }
    deleteJob = (job_id) => {
        confirmAlert({
            title: "Confirm to Delete",
            message: "Are you sure to delete this?",
            buttons: [
              {
                label: "Yes",
                onClick: () => {
                    axios.delete("http://localhost:3000/job/delete/" + job_id, this.state.config)
                    .then((response) => {
                        if (response.data.success === true) {
                            swal({
                                title: "Done",
                                text: "The job has been deleted."
                            })
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
    componentDidMount() {
        axios.get("http://localhost:3000/jobs/all")
            .then((response) => {
                this.setState({
                    jobs: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })

    }
    render() {
        const usertype = localStorage.getItem('usertype');
        const userid = localStorage.getItem('userid');

        return (
            <div>
                <Container>
                    <Row><Col><h2 className="headTest">Find Jobs</h2></Col></Row>
                </Container>

<Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={this.state.jobs}
        getOptionLabel={(option) => option.JobTitle}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Title"
            margin="normal"
            variant="outlined"
            width="500"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
 
        renderOption={(option) => {
 
return(
<>
<div class="card" >
                <div class="card-horizontal">
                   
                    <div class="card-body">
                        <h4 class="card-title">{option.JobTitle}</h4>
                        <p class="card-text">{option.SkillsNeeded}</p>
                    </div>
                </div>
                <div class="card-footer">
                    <small class="text-muted"></small>
                </div>
            </div>
</>
)
        }}
 
      />

                {
                    this.state.jobs.map((job) => {
                        return (<div className="jobsGain" key={job._id}>

                            <Card>
                                <Card.Body>
                                    <Card.Title>Job Title : {job.JobTitle}</Card.Title>
                                    <Card.Text className="ccd">Description : {job.Description}</Card.Text>
                                    <Card.Text className="ccd">Skills Required : {job.SkillsNeeded}</Card.Text>
                                    <Card.Text className="ccd">Budget and Time : {job.BudgetTime}</Card.Text>
                                    {(usertype === 'Applicant') ? <p className="btnjob"><Button varient="primary" onClick={this.insertApplication.bind(this, job.JobTitle, job.JobOwner)}>Apply</Button></p> :
                                        <>
                                            {(job.Userid === userid) ? <p> <Button varient="danger" onClick={this.deleteJob.bind(this, job._id)}>Delete</Button>
                                                <Button><Link to={"/update/" + job._id} className='updatebtn'>Update</Link></Button></p> : <></>}</>}
                                </Card.Body>
                            </Card>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}
