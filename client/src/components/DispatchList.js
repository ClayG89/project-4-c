import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import Truck from './Truck'
// import Load from './Load'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default class DispatchList extends Component {
    state = {
        dispatchlist: [],
        newDispatchList: {}
        
    }
        // dispatchlist: [],
        // loadlist: [],
   
    getDispatchList = () => {
        axios.get('/api/v1/dispatchs/').then((response) => {
            const foundDispatchList = response.data;
            this.setState({
                dispatchlist: foundDispatchList
            })
        })
    }
    toggleCreateForm = () => {
        const newShowCreateForm = !this.state.showCreateForm;
        this.setState({
            showCreateForm: newShowCreateForm,
        });
    }
    updateDispatch = (event) => {
        const updatedNewDispatchList = { ...this.state.newDispatchList};
        updatedNewDispatchList[event.target.name] = event.target.value;
        this.setState({
            newDispatchList: updatedNewDispatchList,
        });
    }
    submitCreateDispatch = (event) => {
        event.preventDefault();
        axios.post('/api/v1/dispatchs/', this.state.newDispatchList).then(() => {
            this.toggleCreateForm();
            this.getDispatchList();
        });
    }
    // getTruckList = () => {
    //     axios.get('/api/v1/trucks/').then((response) => {
    //         const foundTruckList = response.data;
    //         this.setState({
    //             trucklist: foundTruckList
    //         })
    //     })
    // }
    componentDidMount() {
        this.getDispatchList()
        // this.getLoadList()
    }

    render() {

        return (
            <div>
                <div>
                    <h2>Dispatch </h2>

                    <div>
                        {
                            this.state.dispatchlist.map((dispatch, i) => {
                                return (

                                    <div key={ i }>
                                        <Link to={`/dispatch/${dispatch.id}`}>{dispatch.id}</Link>
                                    </div>

                                )
                            })
                        }
                        {/* <div>
                            {
                                this.state.loadlist.map((load, i) => {
                                    return (
                                        <div>
                                            <Link to={`/load/${load.id}`}>{load.loadnum}</Link>
                                        </div>
                                    )
                                })
                            }
                        </div> */}
                    </div>
                  
                    {/* <h3>Driver Name: {this.state.trucklist.name}</h3>
                    <h3>Trailer Type: {this.state.trucklist.trailertype}</h3>
                    <h3>Trailer Number: {this.state.trucklist.trailernum}</h3>
                    <h3>Hours: {this.state.trucklist.hours}</h3>
                    <h3>Phone: {this.state.trucklist.Phone}</h3>
                    <h3>Truck Number: {this.state.trucklist.trucknum}</h3>
                    <h3>Driver Number: {this.state.trucklist.drivernum}</h3>
                    <h3>email: {this.state.trucklist.email}</h3>
                    <h3>Load Number:  {this.state.loadlist.loadnum}</h3>
                    <h3>Pick up Number:  {this.state.loadlist.pickupnum}</h3>
                    <h3>Delivery Number:  {this.state.loadlist.deliverynum}</h3>
                    <h3>Pick up Time: {this.state.loadlist.pickuptime}</h3>
                    <h3>Delivery Time:  {this.state.loadlist.deliverytime}</h3>
                    <h3>Rate: {this.state.loadlist.rate}</h3>
                    <h3>Miles:  {this.state.loadlist.miles}</h3>
                    <h3>Pick up Location: {this.state.loadlist.pickuploc}</h3>
                    <h3>Delivery Location: {this.state.loadlist.deliveryloc}</h3>
                    <h3>DH/pick:  {this.state.loadlist.droppick}</h3>
                    <h3>DH/delivery:  {this.state.loadlist.dropdel}</h3> */}
                </div>


            </div>
        )
    }
}