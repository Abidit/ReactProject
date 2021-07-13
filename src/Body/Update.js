import axios from "axios";
import { Component, state, updateJob } from "react";
import { Button, Form } from "react-bootstrap";

// For Update of Job by Job Owners

export default class Update extends Component {
    state = {
        JobTitle: "",
        Description: "",
        SkillsNeeded: "",
        BudgetTime: "",
        id: this.props.match.params.id,
        config: {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/job/one/' + this.state.id)
            .then((result) => {
                this.setState({
                    JobTitle: result.data.JobTitle,
                    Description: result.data.Description,
                    SkillsNeeded: result.data.SkillsNeeded,
                    BudgetTime: result.data.BudgetTime
                })
                console.log(result)
            })
            .catch()
    }
    updateJob = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/job/update/' + this.state.id, this.state, this.state.config)
            .then((response) => {
                console.log(response)
                this.props.history.push("/findjob")
                this.componentDidMount()
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        return (
            <div className="formlogin">
                <h3>Update</h3>
                <Form className="formme"><p><label>Title:</label>
                    <input type="text" name="JobTitle" className="form-control"
                        value={this.state.JobTitle} onChange={(event) => { this.setState({ JobTitle: event.target.value }) }} />
                </p>
                    <p><label>Description:</label><input type="text" name="Description" className="form-control"
                        value={this.state.Description} onChange={(event) => { this.setState({ Description: event.target.value }) }} />
                    </p>
                    <p><label>SkillsNeeded:</label><input type="text" name="SkillsNeeded" className="form-control"
                        value={this.state.SkillsNeeded} onChange={(event) => { this.setState({ SkillsNeeded: event.target.value }) }} />
                    </p>
                    <p><label>BudgetTime:</label><input type="text" name="budgettime" className="form-control"
                        value={this.state.BudgetTime} onChange={(event) => { this.setState({ BudgetTime: event.target.value }) }} />
                    </p>
                    <Button variant="primary" onClick={this.updateJob}>Submit</Button>
                </Form></div>
        )
    }
}