import React from 'react'
import { Link } from 'react-router-dom'
import "./HomeNavbar.css"

const DonorNavbar = () => {
    return (
        <div>
            <div className="cont">
                <ul>
                    <li><Link to="/donor">Home</Link></li>
                    <li><Link to="/donor/donateitem">DonateItem</Link></li>
                    <li><Link to="/donor/Feedback">FeedBack</Link></li>
                    <li><Link to="/donor/help">Help</Link></li>
                    <li><Link to="/donor/profile">Profile</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default DonorNavbar