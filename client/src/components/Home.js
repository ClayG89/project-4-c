import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

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
                        <button>Submit</button>
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
                                    <img src="https://www.pinclipart.com/picdir/big/199-1999460_semi-spotted-on-its-st-cargo-trip-tesla.png" alt="Truck" width="250" height="125" />
                                <Link to="/truck">
                                    <div className="truckText"><button>Find a Truck</button></div>
                                </Link>
                            </div>
                        </div>
                        <div className="freightImg">
                            <div>
                                    <img src="https://www.nfiindustries.com/wp-content/uploads/2015/08/home-services-icon-forklift.png" alt="Truck" width="275" height="125" />
                                <Link to="/load">
                                    <div className="freightText"><button>Find a Load</button></div>
                                </Link>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="homeFooter">
                    <div><p>Page created by Clayborn Guess using React, Django REST and PostgreSQL.</p></div>
                    <div><p>claybornguess@yahoo.com</p></div>
                    <div></div>
                </div>
            </div>
        )
    }
}