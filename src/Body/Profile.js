import { Component, state, photoupdate } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import aa from "../Images/aa.jpg"

// See Profile for all

export default class Profile extends Component {
    state = {
        Image: '',
        config: {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    }
    photoupdate = (e) => {
        e.preventDefault()
        console.log(localStorage.getItem('userid'))
        const data = new FormData()
        data.append('file', this.state.Image)
        axios.put('http://localhost:3000/photo/' + localStorage.getItem('userid'), data)
            .then((response) => {
                console.log(response)
                this.props.history.push("/profile")
                this.componentDidMount()
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    componentDidMount() {
        axios.get('http://localhost:3000/user/one/' + localStorage.getItem('userid'))
            .then((response) => {
                console.log(response)
                localStorage.setItem('image', response.data.Image)
                this.props.history.push("/profile")
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        const img = localStorage.getItem('image')
        return (
            <>

                <Container className="profiles"><Row><Col className="proff">
                    {!img ? <><img src={aa} alt="sds" /></> : <><img src={`http://localhost:3000/images/` + img} alt="sds" /></>}
                </Col>
                    <Col className="Profile">
                        <h3 className="profilehead">User Profile</h3>
                        <p>Fullname:{localStorage.getItem('name')} </p>
                        <p>Email: {localStorage.getItem('email')}</p>
                        <p>Username: {localStorage.getItem('Username')}</p>
                        <p>Usertype: {localStorage.getItem('usertype')}</p>
                        <div className="form-group">
                            <label>
                                UserImage
            <input type="file" className="form-control"
                                    onChange={(event) => { this.setState({ Image: event.target.files[0] }) }} /></label>
                        </div>

                        <Button onClick={this.photoupdate}>Change Picture</Button>


                    </Col></Row></Container>
            </>
        )
    }
}
