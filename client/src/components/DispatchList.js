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
        newDispatchList: {},
        loadlist: []

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
        const updatedNewDispatchList = { ...this.state.newDispatchList };
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
            <div className="dispatchListWrapper">

                <div className="dispatchListHeader">
                    <h2>Dispatch </h2>
                </div>
                <div className="dispatchListMain">
                    {
                        this.state.dispatchlist.map((dispatch, i) => {
                            return (
                                <div key={i}>
                                    <Link className="text-link" to={`/dispatch/${dispatch.id}`}>{dispatch.loadinfo.pickuploc} to {dispatch.loadinfo.deliveryloc}</Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="dlFooter">
                    <div><p>Page created by Clayborn Guess using React, Django REST and PostgreSQL.</p></div>
                    <Link to="/"> <div className="homeButton">
                        <button>Home</button>
                    </div></Link>
                </div>
            </div>
        )
    }
}