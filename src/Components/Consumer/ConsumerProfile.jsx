import React from 'react'
import { useNavigate } from 'react-router-dom'

const ConsumerProfile = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("consumer");
        localStorage.removeItem("requests");
        alert("Logged out successfully");
        navigate("/");
    }
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default ConsumerProfile