import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


export default class LoadList extends Component {
    state = {
        loadlist: [],
        newLoadList: {}
    }
    getLoadList= () => {
        axios.get('/api/v1/loads/').then((response) => {
            const foundLoadList = response.data;
            this.setState({
                loadlist: foundLoadList
            })
        })
    }
    toggleCreateForm = () => {
        const newShowCreateForm = !this.state.showCreateForm;
        this.setState({
            showCreateForm: newShowCreateForm,
        });
    }
    updateLoad = (event) => {
        const updatedNewLoadList = { ...this.state.newLoadList};
        updatedNewLoadList[event.target.name] = event.target.value;
        this.setState({
            newLoadList: updatedNewLoadList,
        });
    }
    submitCreateLoad= (event) => {
        event.preventDefault();
        axios.post('/api/v1/loads/', this.state.newLoadList).then(() => {
            this.toggleCreateForm();
            this.getLoadList();
        });
    }
    componentDidMount() {
        this.getLoadList()
    }
    render() {
        return (
            <div>
                
                <h2>Loads</h2>
                <div>
                
                {
                    this.state.loadlist.map((load, i) => {
                        return (

                            <div key={ i }>
                                <Link to={`/load/${load.id}`}>{load.pickuploc}</Link>
                            </div>
                        )
                    })
                }
                </div>

                <div>
                    <h4>Load Number</h4>
                    <input type="number" name="loadnum" onChange={ this.updateLoad }/>
                </div>
                <div>
                <h4>Pick up Number</h4>
                    <input type="number" name="pickupnum" onChange={ this.updateLoad }/>
                </div>
                <div>
                <h4>Delivery Number</h4>
                    <input type="number" name="deliverynum" onChange={ this.updateLoad }/>
                </div>
                <div>
                <h4>Pick up Time</h4>
                    <input type="datetime-local" name="pickuptime" onChange={ this.updateLoad }/>
                </div>
                <div>
                <h4>Delivery Time</h4>
                    <input type="datetime-local" name="deliverytime" onChange={ this.updateLoad }/>
                </div>
                <div>
                <h4>Rate</h4>
                    <input type="number" name="rate" onChange={ this.updateLoad }/>
                </div>
                <div>
                <h4>Miles</h4>
                    <input type="number" name="miles" onChange={ this.updateLoad }/>
                </div>
                <div>
                <h4>Pick up Location</h4>
                    <input type="text" name="pickuploc" onChange={ this.updateLoad }/>
                </div>
                <div>
                <h4>Delivery Location</h4>
                    <input type="text" name="deliveryloc" onChange={ this.updateLoad }/>
                </div>
                <div>
                    <h4>DH / Pick Up</h4>
                    <input type="checkbox" name="droppick" onChange={ this.updateLoad}/>
                </div>
                <div>
                    <h4>DH / Delivery</h4>
                    <input type="checkbox" name="dropdel" onChange={ this.updateLoad}/>
                </div>

                <button onClick={ this.submitCreateLoad }>Submit</button>
                       
                

            </div>
        )
    }
}