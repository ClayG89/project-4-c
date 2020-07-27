import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


export default class Load extends Component {
    state = {
        load: [],       
}
componentDidMount() {
    const loadId = this.props.match.params.id;
    this.fetchLoad(loadId)
}

fetchLoad = async (loadId) => {
    try {
        const loadResponse = await axios.get(`/api/v1/loads/${loadId}/`)
        this.setState({
            load: loadResponse.data,
            truck: loadResponse.data.trucks,
        })
    }
    catch (error) {
        console.log(error)
        this.setState({error: error.message})
    }
}
render() {
    return (
        <div>
            <header>
                
            </header>

            <h2>Load Detail</h2>
            <h3>Load Number:  {this.state.load.loadnum}</h3>
            <h3>Pick up Number:  {this.state.load.pickupnum}</h3>
            <h3>Delivery Number:  {this.state.load.deliverynum}</h3>
            <h3>Pick up Time: {this.state.load.pickuptime}</h3>
            <h3>Delivery Time:  {this.state.load.deliverytime}</h3>
            <h3>Rate: {this.state.load.rate}</h3>
            <h3>Miles:  {this.state.load.miles}</h3>
            <h3>Pick up Location: {this.state.load.pickuploc}</h3>
            <h3>Delivery Location: {this.state.load.deliveryloc}</h3>
            <h3>DH/pick:  {this.state.load.droppick}</h3>
            <h3>DH/delivery:  {this.state.load.dropdel}</h3>

            {/* {this.state.loads.map(load => (
                <div key={load.id}>
                    <h4>{load.loadnum}</h4>
                </div>
                
            ))} */}
        </div>
    );
    }
}