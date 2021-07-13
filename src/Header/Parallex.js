import React, { Component } from 'react'
import { Parallax } from "react-parallax";
import bg from '../Images/aas.jpg';
const pppp = {
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '15px',
    transform: 'translate(-40%, -40%)',
}

export default class Parallex extends Component {
    render() {
        return (

            <Parallax className="parallel" bgImage={bg}>
                <div style={{ height: 600 }}>
                    <span style={pppp} className="getit" >Get The Work Done</span>
                </div>
            </Parallax>

        )
    }
}
