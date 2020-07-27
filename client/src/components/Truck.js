import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'



export default class Truck extends Component {
    state = {
        truck: [],      
}
componentDidMount() {
    const truckId = this.props.match.params.id;
    this.fetchTruck(truckId)
}

fetchTruck = async (truckId) => {
    try {
        const truckResponse = await axios.get(`/api/v1/trucks/${truckId}/`)
        this.setState({
            truck: truckResponse.data,
            load: truckResponse.data.loads,
        })
    }
    catch (error) {
        console.log(error)
        this.setState({error: error.message})
    }
}
render() {
    // console.log(this.state.truck.name)
    return (
        <div>
            

            <h2>Truck Detail</h2>           
            <h3>Driver Name: { this.state.truck.name }</h3>
            <h3>Trailer Type:  {this.state.truck.trailertype}</h3>
            <h3>Trailer Number:  {this.state.truck.trailernum}</h3>
            <h3>Available hours: {this.state.truck.hours}</h3>
            <h3>Phone:  {this.state.truck.Phone}</h3>
            <h3>Truck Number: {this.state.truck.trucknum}</h3>
            <h3>Driver Number:  {this.state.truck.drivernum}</h3>
            <h3>email: {this.state.truck.email}</h3>

            {/* {this.state.loads.map(load => (
                <div key={load.id}>
                    <h4>{load.loadnum}</h4>
                </div>
                
            ))} */}
        </div>
    );
    }
}