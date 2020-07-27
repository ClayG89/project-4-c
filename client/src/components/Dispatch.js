import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
// import Home from './Home'
// import Truck from './Truck'
// import Load from './Load'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default class Dispatch extends Component {
    state = {
        dispatch: {
            truckinfo: {
                name: '',
                trailertype: '',
                trailernum: 0,
                hours: 0,
                Phone: 0,
                trucknum: 0,
                drivernum: 0,
                email: '',
            },
            loadinfo: {
                loadnum: 0,
                pickupnum: 0,
                deliverynum: 0,
                pickuptime: 0,
                deliverytime: 0,
                rate: 0,
                miles: 0,
                pickuploc: '',
                deliveryloc: '',
                droppick: false,
                dropdel: false,
            },
            id: 0,
        },
        
    }
    componentDidMount() {
        const dispatchId = this.props.match.params.id;
        this.fetchDispatch(dispatchId)
    }

    fetchDispatch = async (dispatchId) => {
        try {
            const dispatchResponse = await axios.get(`/api/v1/dispatchs/${dispatchId}/`)
            this.setState({
                dispatch: dispatchResponse.data,
                truck: dispatchResponse.data.trucks,
                load: dispatchResponse.data.loads,
            })
        }
        catch (error) {
            console.log(error)
            this.setState({ error: error.message })
        }
    }
    // componentDidMount() {
    //     const truckId = this.props.match.params.id;
    //     this.fetchTruck(truckId)
    // }

    // fetchTruck = async (truckId) => {
    //     try {
    //         const truckResponse = await axios.get(`/api/v1/trucks/${truckId}/`)
    //         this.setState({
    //             truck: truckResponse.data,
    //             load: truckResponse.data.loads,
    //         })
    //     }
    //     catch (error) {
    //         console.log(error)
    //         this.setState({ error: error.message })
    //     }
    // }
    // componentDidMount() {
    //     const loadId = this.props.match.params.id;
    //     this.fetchLoad(loadId)
    // }

    // fetchLoad = async (loadId) => {
    //     try {
    //         const loadResponse = await axios.get(`/api/v1/loads/${loadId}/`)
    //         this.setState({
    //             load: loadResponse.data,
    //             truck: loadResponse.data.trucks,
    //         })
    //     }
    //     catch (error) {
    //         console.log(error)
    //         this.setState({ error: error.message })
    //     }
    // }
    render() {
        return (
            
            <div>
                <h2>Dispatch Detail</h2>
             

                <h3>Truck Info</h3>
                <div>
                    <h4>Driver Name:  {this.state.dispatch.truckinfo.name}</h4>
                    <h4>Trailer Type:  {this.state.dispatch.truckinfo.trailertype}</h4>
                    <h4>Trailer Number:  {this.state.dispatch.truckinfo.trailernum}</h4>
                    <h4>Available hours: {this.state.dispatch.truckinfo.hours}</h4>
                    <h4>Phone:  {this.state.dispatch.truckinfo.Phone}</h4>
                    <h4>Truck Number: {this.state.dispatch.truckinfo.trucknum}</h4>
                    <h4>Driver Number:  {this.state.dispatch.truckinfo.drivernum}</h4>
                    <h4>email: {this.state.dispatch.truckinfo.email}</h4>
                </div>
                <h3>Load Info</h3>
                <div>
                    <h4>Load Number:  {this.state.dispatch.loadinfo.loadnum}</h4>
                    <h4>Pick up Number:  {this.state.dispatch.loadinfo.pickupnum}</h4>
                    <h4>Delivery Number:  {this.state.dispatch.loadinfo.deliverynum}</h4>
                    <h4>Pick up Time: {this.state.dispatch.loadinfo.pickuptime}</h4>
                    <h4>Delivery Time:  {this.state.dispatch.loadinfo.deliverytime}</h4>
                    <h4>Rate: {this.state.dispatch.loadinfo.rate}</h4>
                    <h4>Miles:  {this.state.dispatch.loadinfo.miles}</h4>
                    <h4>Pick up Location: {this.state.dispatch.loadinfo.pickuploc}</h4>
                    <h4>Delivery Location: {this.state.dispatch.loadinfo.deliveryloc}</h4>
                    <h4>DH/pick:  {this.state.dispatch.loadinfo.droppick}</h4>
                    <h4>DH/delivery:  {this.state.dispatch.loadinfo.dropdel}</h4>
                </div>
            </div>
        )
    }
}