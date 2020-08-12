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
    getLoadList = () => {
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
        const updatedNewLoadList = { ...this.state.newLoadList };
        updatedNewLoadList[event.target.name] = event.target.value;
        this.setState({
            newLoadList: updatedNewLoadList,
        });
    }
    submitCreateLoad = (event) => {
        event.preventDefault();
        axios.post('/api/v1/loads/', this.state.newLoadList).then(() => {
            this.toggleCreateForm();
            this.getLoadList();
            document.forms['llform'].reset()
        });
    }
    componentDidMount() {
        this.getLoadList()
    }
    render() {
        return (
            <div className="loadListWrapper">
                <div className="loadListHeader">
                    <h2>Loads</h2>
                </div>
                    <form id="llform">
                <div className="loadListMain">
                        <div className="loadListmain1">
                            <div className="llinput1">
                                <h4>P/U</h4>
                                <input type="datetime-local" name="pickuptime" onChange={this.updateLoad} />
                            </div>
                            <div className="llinput2">
                                <input type="number" name="loadnum" placeholder="Load Number" onChange={this.updateLoad} />
                            </div>
                            <div className="llinput3">
                                <input type="number" name="pickupnum" placeholder="Pick up Number" onChange={this.updateLoad} />
                            </div>
                            <div className="llinput4">
                                <input type="number" name="rate" placeholder="Rate" onChange={this.updateLoad} />
                            </div>
                            <div className="llinput5">
                                <input type="number" name="miles" placeholder="Miles" onChange={this.updateLoad} />
                            </div>
                            <div className="llinput6">
                                <input type="text" name="pickuploc" placeholder="Pick up Location" onChange={this.updateLoad} />
                            </div>
                        </div>
                        <div className="loadListMain2">
                            <div className="llinput7">
                                <h4>Del</h4>
                                <input type="datetime-local" name="deliverytime" onChange={this.updateLoad} />
                            </div>
                            <div className="llinput8">
                                <input type="number" name="deliverynum" placeholder="Delivery Number" onChange={this.updateLoad} />
                            </div>
                            <div className="llinput9">
                                <input type="text" name="deliveryloc" placeholder="Delivery Location" onChange={this.updateLoad} />
                            </div>
                            <div className="llinput10">
                                <h4>DH / Pick Up</h4>
                                <input type="checkbox" name="droppick" onChange={this.updateLoad} />
                            </div>
                            <div className="llinput11">
                                <h4>DH / Delivery</h4>
                                <input type="checkbox" name="dropdel" onChange={this.updateLoad} />
                            </div>
                            <button onClick={this.submitCreateLoad}>Submit</button>
                        </div>
                        <div className="availableLoads">
                            {
                                this.state.loadlist.map((load, i) => {
                                    return (
                                        <div key={i}>
                                            <Link className="text-link" to={`/load/${load.id}`}>{load.pickuploc}</Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                </div>
                    </form>
                <div className="llFooter">
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