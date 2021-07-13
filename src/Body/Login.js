import { Component, state, loggedin } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import swal from 'sweetalert';
import axios from 'axios';
import dd from '../Images/dd.jpg'

// LOgin For all users

export default class Login extends Component {

  state = {
    Username: "",
    Password: ""
  }

  loggedin = (e) => {
    e.preventDefault();
    console.log('yhjk')

    axios.post("http://localhost:3000/user/login", this.state)
      .then((response) => {
        if (response.data.success === true) {
          localStorage.setItem('token', response.data.token) 
          localStorage.setItem('Username',response.data.data.Username)
          localStorage.setItem('email',response.data.data.Email)
          localStorage.setItem('userid',response.data.data._id)         
          localStorage.setItem('usertype', response.data.data.Usertype)
          localStorage.setItem('name', response.data.data.Fullname)
          swal("Welcome " + response.data.data.Fullname)       
          window.userid = response.data.data._id
          this.props.history.push('/')
          window.location.reload()
        }
        if (response.success === false) {
          swal("Invalid Credentials")
        }
      }

      )
      .catch((err) => {
        swal("Invalid Credentials")
      })
  }

  render() {
    return (<>
      <Container className="loggpage"><Row>
        <Col md="6" lg="6"className="imglogin">
          <img src={dd} alt="images" />
        </Col>
        <Col md="4" lg="4" className="formlogin">
        <Form>
                <h3 className="signhead">Sign In</h3>
            <div className="form-group">
              <input type="text" className="form-control item" placeholder="Username" value={this.state.Username}
                onChange={(event) => { this.setState({ Username: event.target.value }) }} />
            </div>
            <div className="form-group">  <input type="password" className="form-control item" placeholder="Password" value={this.state.Password}
                onChange={(event) => { this.setState({ Password: event.target.value }) }} />
            </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <Button type="submit" className="btn btn-primary btn-block logbtn" onClick={this.loggedin}> Login </Button>
                <p className="forget=password text-right">
                    Forgot Password?
                </p>
            </Form>
         
        </Col>
      </Row></Container></>
    )
  }
}
