import React from 'react'
import { useNavigate } from 'react-router-dom';
import DonorNavbar from '../../NavBar/DonorNavbar';

const DonorProfile = () => {
    const donor=JSON.parse(localStorage.getItem("donor"));
  const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("donor");
        alert("Logged out successfully");
        navigate("/");
    }
    return (
        <div>
            <DonorNavbar/>
            <div className="card1">
                <div className="box">
                    <img style={{ width: "150px", height: "150px" }} src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png" alt="" />
                    <div className="p-Cont">
                        <p>Name :- {donor.name}</p>
                        <p>email :- {donor.email}</p>
                        <p>PhoneNo :- {donor.phoneNumber}</p>
                    </div>
                </div>
                <button style={{marginLeft:"290px"}} onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default DonorProfile