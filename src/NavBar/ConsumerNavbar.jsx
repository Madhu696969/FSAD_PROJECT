import React from 'react'
import { Link } from 'react-router-dom'
import "./HomeNavbar.css"

const ConsumerNavbar = () => {
    return (
        <div>
            <div className="cont">
                <ul>
                    <li><Link to="/consumer">Home</Link></li>
                    <li><Link to="/consumer/donations">Available Donations</Link></li>
                    <li><Link to="/consumer/requests">My Requests</Link></li>
                    <li><Link to="/consumer/Feedback">FeedBack</Link></li>
                    <li><Link to="/consumer/help">Help</Link></li>
                    <li><Link to="/consumer/profile">Profile</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default ConsumerNavbar