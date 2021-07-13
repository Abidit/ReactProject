
import React from "react";
import { Container, Nav, Navbar, Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";

class Header extends React.Component {

  logout() {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to delete this?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            localStorage.clear()
            window.location.href = "/"
          },
        },
        {
          label: "No",
        },
      ],
    });
   
  }
  render() {
    const tokens = localStorage.getItem('token');
    const usertype = localStorage.getItem('usertype');
    // const name = localStorage.getItem('name');

    return (
      <>
        <Container>
          <Row>
            <Col>

              <Navbar collapseOnSelect fixed="top" expand="lg" className="lowhead">
                <Navbar.Brand className="heading"><span className="here">WORK</span><span className="heee">.here</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto"></Nav>
                  <Nav className="mr-auto linked">


                    <Link className="link" to="../home">Home</Link>
                    {!tokens ? (<><Link className="link" to="../login">Login</Link>
                      <Link className="link" to="../register">Register</Link></>)
                      : (<>
                        {(usertype === 'Applicant') ?
                          <>
                            <Link className="link" to="../findjob">Find Jobs</Link>
                            <Link className="link" to="../myapplications">My Applications</Link></>
                          :<></>}
                           {(usertype === 'Job Owner') ?
                          <> <Link className="link" to="../addjob">AddJobs</Link>
                            <Link className="link" to="../findjob">Jobs</Link>
                            <Link className="link" to="../appjob">View Applications</Link>
                          </>: <></>
                          }
                          {(usertype === 'Admin') ?<>
                          <Link className="link" to="../viewuser">View Users</Link>
                          <Link className="link" to="../findjob">Jobs Listed</Link>
                          </>:<></>}
                        <Link className="link" to="../profile">Profile</Link>
                        <Link className="link" to="../" onClick={this.logout}>Logout</Link> </>)
                    }
                  </Nav>
                  <Form inline>
                  <i className="fa fa-facebook mr-3 lala" />
                  <i className="fa fa-google mr-3 lala" />
                  <i className="fa fa-instagram mr-3 lala" />
                  <i className="fa fa-twitter mr-3 lala" />
                  <i className="fa fa-linkedin mr-3 lala" />
                  
  </Form>
                </Navbar.Collapse>
                
              </Navbar>
            </Col>
           
          </Row>

        </Container>

      </>
    )
  }
}

export default Header;