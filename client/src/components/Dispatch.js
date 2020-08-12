import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

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

    render() {
        return (

            <div className="dispatchWrapper">
                <div className="dispatchHeader">
                    <h2>Dispatch Detail</h2>
                </div>
                <div className="dispatchMain">

                    <div className="dispatchTruckInfo">
                    <h3>Truck Info</h3>
                        <h4>Driver Name:  {this.state.dispatch.truckinfo.name}</h4>
                        <h4>Trailer Type:  {this.state.dispatch.truckinfo.trailertype}</h4>
                        <h4>Trailer Number:  {this.state.dispatch.truckinfo.trailernum}</h4>
                        <h4>Available hours: {this.state.dispatch.truckinfo.hours}</h4>
                        <h4>Phone:  {this.state.dispatch.truckinfo.Phone}</h4>
                        <h4>Truck Number: {this.state.dispatch.truckinfo.trucknum}</h4>
                        <h4>Driver Number:  {this.state.dispatch.truckinfo.drivernum}</h4>
                        <h4>email: {this.state.dispatch.truckinfo.email}</h4>
                        <button>Create Dispatch</button>
                    </div>
                    <div className="dispatchLoadInfo">
                    <h3>Load Info</h3>
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
                <div className="dispatchFooter">
                    <div><p>Page created by Clayborn Guess using React, Django REST and PostgreSQL.</p></div>
                    <Link to="/"> <div className="homeButton">
                        <button>Home</button>
                    </div></Link>
                    <Link to="/dispatch"> <div className="dispatchButton">
                        <button>Current Dispatch</button>
                    </div></Link>
                </div>
            </div>
        )
    }
}