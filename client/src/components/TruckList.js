import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import Truck from './Truck'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default class TruckList extends Component {
    state = {
        trucklist: [],
        newTruckList: {}
    }
    getTruckList = () => {
        axios.get('/api/v1/trucks/').then((response) => {
            const foundTruckList = response.data;
            this.setState({
                trucklist: foundTruckList
            })
        })
    }
    toggleCreateForm = () => {
        const newShowCreateForm = !this.state.showCreateForm;
        this.setState({
            showCreateForm: newShowCreateForm,
        });
    }
    updateTruck = (event) => {
        const updatedNewTruckList = { ...this.state.newTruckList };
        updatedNewTruckList[event.target.name] = event.target.value;
        this.setState({
            newTruckList: updatedNewTruckList,
        });
    }
    submitCreateTruck = (event) => {
        event.preventDefault();
        axios.post('/api/v1/trucks/', this.state.newTruckList).then(() => {
            this.toggleCreateForm();
            this.getTruckList();
        });
    }
    componentDidMount() {
        this.getTruckList()
    }
    render() {
        return (
            <div className="truckListWrapper">
                <div className="truckListHeader">
                    <h2>Trucks</h2>
                </div>
                <div className="truckListMain">
                    <div className="truckListInput">
                        <form id="tlform">
                            <div className="tlinput1">
                                <input type="text" name="name" placeholder="Driver name" onChange={this.updateTruck} />
                            </div>
                            <div className="tlinput2">
                                <input type="text" name="trailertype" placeholder="Trailer Type" onChange={this.updateTruck} />
                            </div>
                            <div className="tlinput3">
                                <input type="number" name="trailernum" placeholder="Trailer Number" onChange={this.updateTruck} />
                            </div>
                            <div className="tlinput4">
                                <input type="number" name="hours" placeholder="Hours Available" onChange={this.updateTruck} />
                            </div>
                            <div className="tlinput5">
                                <input type="tel" name="Phone" placeholder="Phone" onChange={this.updateTruck} />
                            </div>
                            <div className="tlinput6">
                                <input type="number" name="trucknum" placeholder="Truck Number" onChange={this.updateTruck} />
                            </div>
                            <div className="tlinput7">
                                <input type="number" name="drivernum" placeholder="Driver Number" onChange={this.updateTruck} />
                            </div>
                            <div className="tlinput8">
                                <input type="email" name="email" placeholder="Email" onChange={this.updateTruck} />
                            </div>
                            <button onClick={this.submitCreateTruck}>Submit</button>
                        </form>
                    </div>
                    <div className="availableTrucks">
                        {
                            this.state.trucklist.map((truck, i) => {
                                return (
                                    <div key={i}>
                                        <Link className="text-link" to={`/truck/${truck.id}`}>{truck.name}</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}