import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./ConsumerProfile.css"
import ConsumerNavbar from '../../NavBar/ConsumerNavbar'

const ConsumerProfile = () => {
    const consumer = JSON.parse(localStorage.getItem("consumer"));
    const req = JSON.parse(localStorage.getItem("requests")) || [];
    console.log(consumer);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("consumer");
        localStorage.removeItem("requests");
        alert("Logged out successfully");
        navigate("/");
    }
    return (
        <div>
            <ConsumerNavbar />
            <div className="card">
                <div className="box">
                    <img style={{ width: "150px", height: "150px" }} src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png" alt="" />
                    <div className="p-Cont">
                        <p>Name :- {consumer.name}</p>
                        <p>email :- {consumer.email}</p>
                        <p>PhoneNo :- {consumer.phoneNumber}</p>
                        <p>Your Requests :- {req.length}</p>
                    </div>
                </div>
                <button style={{marginLeft:"290px"}} onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default ConsumerProfile