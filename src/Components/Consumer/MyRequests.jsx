import React from 'react'
import ConsumerNavbar from '../../NavBar/ConsumerNavbar'
import "./AvailableDonations.css"
import "./MyRequests.css"

const MyRequests = () => {
    const req = JSON.parse(localStorage.getItem("requests"));
    return (
        <div>
            <ConsumerNavbar />
            <div className="R-cont">
                <h1 style={{ justifySelf: "center", marginTop: "40px" }}>Manage Your Requests</h1>
                <p style={{ fontSize: "25px" }}>You can view all your requested items along with their latest updates. Once a request is approved, you can coordinate with the donor to receive the item. This page ensures transparency and keeps your donation journey smooth and organized.</p>
                <h1 style={{ marginLeft: "45px" }}>Status Explanation</h1>
                <ul style={{ marginLeft: "75px", marginTop: "20px", fontSize: "20px" }}>
                    <li>Pending → Your request is sent and waiting for donor approval</li>
                    <li>Approved → The donor has accepted your request</li>
                    <li>Rejected → The donor has declined your request</li>
                    <li>Delivered → You have received the item</li>
                </ul>
                <h1 style={{margin:"40px"}}>Your Requests</h1>
            <div className="donations-grid">
                {req.length!=0 && req.map((item)=>(
                    <div key={item.id} className="card">
                        <img src={item.img} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p><b>Type:</b> {item.type}</p>
                            <p><b>Condition:</b> {item.condition}</p>
                            <p><b>Status :</b> {item.status}</p>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}

export default MyRequests