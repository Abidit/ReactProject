import { Component, state, submitUSER, } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import { Container, Form} from "react-bootstrap";

//Registration for all users

export default class Register extends Component {
  state = {
    Fullname: "",
    Email: "",
    Username: "",
    Usertype: "",
    Password: "",
  }

  submitUSER = (e) => {
    e.preventDefault();
    const data = {
      Fullname: this.state.Fullname,
      Email: this.state.Email,
      Username: this.state.Username,
      Usertype: this.state.Usertype,
      Password: this.state.Password,
    }
    console.log(data)

    axios.post("http://localhost:3000/user/insert", data)
      .then((response) => {
        if (response.data.success === true) {
          swal({
            title: "Great Job",
            text: "You have registered successfully.",
            icon: "success",
          })
          window.location.href = "/login"
        }
        else {
          swal("Error Registering!!")
        }
      }
      )
      .catch((err) => {
        swal("Please Recheck the entered details")
      })
  }
  render() {

    return (
      <Container className="regg">
        <div className="registration-form">
    <Form>
      <div className="form-icon">
        
        <span><i className="fa fa-user" /></span>
      </div>
     
              <div className="form-group">
              <input type="text" className="form-control item" placeholder="Fullname" value={this.state.Fullname}
                  onChange={(event) => { this.setState({ Fullname: event.target.value }) }} />
              </div> 
              <div className="form-group">
        <input type="text" className="form-control item"  placeholder="Email" value={this.state.Email}
                  onChange={(event) => { this.setState({ Email: event.target.value }) }} />
      </div> 
      <div className="form-group">
        <input type="text" className="form-control item"  placeholder="Username" value={this.state.Username}
                  onChange={(event) => { this.setState({ Username: event.target.value }) }} />
      </div> 
      <div className="form-group">
        <input type="Password" className="form-control item"  placeholder="Password" value={this.state.Password}
                  onChange={(event) => { this.setState({ Password: event.target.value }) }} />
      </div>
      <Form.Control 
          as="select" 
          custom
          onChange={(event) => {this.setState({Usertype: event.target.value})}} value = {this.state.Usertype}
        >
          <option value="Applicant">Applicant</option>
          <option value="Job Owner">Job Owner</option>
        </Form.Control>
     
      <div className="form-group">
        <button type="button" className="btn btn-block create-account" onClick={this.submitUSER}>Create Account</button>
      </div>
      <p className="forgot-Password text-right">
                  Already registered! <a href="login">Sign in?</a>
                </p>
    </Form>
    <div className="social-media">
      <h5>Sign up with social media</h5>
      <div className="social-icons">
      <i className="fa fa-facebook mr-3" />
                  <i className="fa fa-google mr-3" />
                  <i className="fa fa-twitter mr-3" />
         </div>
    </div>
  </div>
      </Container>
    );
  };
}