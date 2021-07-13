import React, { Component } from 'react'
import Find from '../Footer/Find'
import Testimonals from '../Footer/Testimonals'
import Parallex from './Parallex'

export default class Home extends Component {
    render() {
        return (
            <>
            <Parallex/>
            <Find/>
            <Testimonals/>
            
            </>
        )
    }
}
