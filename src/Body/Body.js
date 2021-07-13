import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Register from "./Register";
import { Route } from "react-router-dom";
import Login from "./Login";
import Addjob from "./Addjob";
import Profile from "./Profile";
import Update from './Update';
import Findjobs from "./findjobs";
import Header from "../Header/header";
import Application from './Application';
import Appjob from './Appjob';
import ViewUsers from './ViewUsers';
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here

//Select What to render from path

export default class Body extends React.Component {
   
    render() {
        return (
            <Container><Row>
                <Col>
                    <Header></Header>
                    <Route path='/viewuser' component={ViewUsers} />
                    <Route path='/findjob' component={Findjobs} />
                    <Route path='/appjob' component={Appjob} />
                    <Route path='/myapplications' component={Application} />
                    <Route path='/register' component={Register} />
                    <Route path='/login' component={Login} />
                    <Route path='/addjob' component={Addjob} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/update/:id' component={Update} />
                    <ScrollUpButton/> 

                </Col>
               
            </Row></Container>
        )
    }
}