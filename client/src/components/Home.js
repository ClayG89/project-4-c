import { Link } from 'react-router-dom'
import React, { Component } from 'react'


export default class Home extends Component {
    render() {
        return (
            
            <div className="homeContainer">
                <div className="homeHeader">
                    <div className="Title">
                        <h1>Providence Transport</h1>
                    </div>
                    <div className="locater">
                        <input type="text" placeholder="Enter Location" />
                    </div>
                    <div className="locater2">
                        <input type="text" placeholder="Enter Radius" />
                    </div>
                    
                </div>
                <div className="About">
                    <h3>About Us</h3>
                    <p>Providence lets you manage routes for trucks, buses, delivery vehicles, and more. Instead of manually calling drivers to see where they are, Providence lets you instantly track vehicle location, route progress, and late or missed stops.</p>
                    <p>Let customers and outside stakeholders track route progress and receive alerts automatically. Authorized users can anticipate arrivals or delays, which improves customer service, reduces calls, and can become a differentiator for your business.</p>
                    <p>Adapt on the go by remotely re-routing vehicles and sending messages to drivers through the Providence Driver app.</p>
                </div>
                <div className="homeBody">
                    <div className="homeImg">
                        <div className="truckImg">
                            <div>
                                <Link to="/truck">
                                    <img src="https://t4.ftcdn.net/jpg/03/01/80/43/240_F_301804370_bRziBCscumx272ERewFW8IzHNI5VRGCs.jpg" alt="truck" width="250px" />
                                    <div className="truckText"><h4>Find a Truck</h4></div>
                                </Link>
                            </div>
                        </div>
                        <div className="freightImg">
                            <div>
                                <Link to="/load">
                                    <img src="https://img.freepik.com/free-photo/forklift-black-background_110488-911.jpg?size=626&ext=jpg" alt="load" width="250px" />
                                    <div className="freightText"><h4>Find a Load</h4></div>
                                </Link>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="homeFooter">
                    <div><p>Page created by Clayborn Guess using React, Django REST and PostgreSQL.</p></div>
                    <div><p>claybornguess@yahoo.com</p></div>
                    <Link to="/dispatch"> <div className="dispatchButton">
                    <button>Current Dispatch</button>
                    </div></Link>
                </div>
            </div>
        )
    }
}