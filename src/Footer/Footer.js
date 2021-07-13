import { Component } from "react";
import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBBtn } from "mdbreact";


class Footer extends Component{
    render(){
      const token = localStorage.getItem('token')
        return(
            <MDBFooter className="font-small lighten-3 pt-4 mt-4 mdFooter">
            <MDBContainer className="text-center text-md-left">
              <p className="footertop"></p>
              <MDBRow className="my-4 topfooter">
                <MDBCol md="4" lg="4" className="footdetails">
                  <h5 className="text-uppercase mb-4 font-weight-bold">
                    Work With Us.
                  </h5>
                  <p>
                  WORKhere, formerly freelancing, is a Nepali
                   freelancing platform where enterprises and 
                   individuals connect in order to conduct business.
                  </p>
                  <p>
                  Freelancing means to work as an independent company rather than be employed by others.
                  
                  </p>
                </MDBCol>
                <hr className="clearfix w-100 d-md-none" />
                <MDBCol md="2" lg="2" className="ml-auto flinks footdetails">
                  <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
                  <ul className="list-unstyled">
                    {!token?  <> <p>
                      <a href="#!">PROJECTS</a>
                    </p>
                    <p>
                      <a href="#!">ABOUT US</a>
                    </p>
                    <p>
                      <a href="#!">BLOG</a>
                    </p>
                    <p>
                      <a href="#!">PROFILE</a>
                    </p></>:<><p>
                    <a href="./findjob">VIEW JOBS</a>
                    </p>
                    <p>
                      <a href="#!">ABOUT US</a>
                    </p><p>
                      <a href="#!">BLOG US</a>
                    </p>
                    
                    <p>
                      <a href="./profile">PROFILE</a>
                    </p>
                    </>
                    }
                   
                  </ul>
                </MDBCol>
                <hr className="clearfix w-100 d-md-none" />
                <MDBCol md="5" lg="3" className="footdetails">
                  <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
                  <p>
                    <i className="fa fa-home mr-3" /> Maharajgunj, Kathmandu
                  </p>
                  <p>
                    <i className="fa fa-envelope mr-3" /> info@WORK_here.com
                  </p>
                  <p>
                    <i className="fa fa-phone mr-3" /> + 977 9844774477
                  </p>
                  <p>
                    <i className="fa fa-print mr-3" /> + 01 44 444 784
                  </p>
                </MDBCol>
                <hr className="clearfix w-100 d-md-none" />
                <MDBCol md="2" lg="2" className="text-center">
                  <h5 className="text-uppercase mb-4 font-weight-bold">
                    Follow us
                  </h5>
                  <div className="mt-2 ">
                  <MDBBtn color="primary" >
                  <i className="fa fa-facebook mr-3"></i> Facebook
        </MDBBtn>
        <MDBBtn color="info">
        <i className="fa fa-twitter mr-3"></i> Twitter
        </MDBBtn>
        <MDBBtn color="primary">
        <i className="fa fa-instagram mr-3"> </i>Instagram
        </MDBBtn>
                  </div>
                </MDBCol>
                <hr className="clearfix w-100 d-md-none" />
              </MDBRow>
            </MDBContainer>
            <div className="text-center py-3 footer-copyright">
              <MDBContainer fluid className="copyright"> &copy; Copyright:2021/03/01 || WORKhere.com
                
              </MDBContainer>
            </div>
          </MDBFooter>
              )
    }
}

export default Footer;