import React, { useState, useEffect } from 'react'
import ConsumerNavbar from '../../NavBar/ConsumerNavbar'
import "./MyRequests.css"
import api from '../../api/axios';

const MyRequests = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/consumer/requests")
            .then(res => setRequests(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    const statusColor = (status) => {
        if (status === "APPROVED") return "green";
        if (status === "REJECTED") return "red";
        return "orange";
    };

    if (loading) return <div><ConsumerNavbar /><p style={{ padding: "40px" }}>Loading your requests...</p></div>;

    return (
        <div>
            <ConsumerNavbar />
            <div style={{ padding: "40px" }}>
                <h1>My Requests</h1>
                {requests.length === 0 ? (
                    <p style={{ fontSize: "18px", marginTop: "20px" }}>You have not made any requests yet.</p>
                ) : (
                    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
                        <thead>
                            <tr style={{ background: "#f4f4f4" }}>
                                <th style={th}>Item</th>
                                <th style={th}>Type</th>
                                <th style={th}>Condition</th>
                                <th style={th}>Donor</th>
                                <th style={th}>Status</th>
                                <th style={th}>Requested On</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map(req => (
                                <tr key={req.id}>
                                    <td style={td}>{req.itemName}</td>
                                    <td style={td}>{req.donationType}</td>
                                    <td style={td}>{req.condition}</td>
                                    <td style={td}>{req.donorName}</td>
                                    <td style={{ ...td, color: statusColor(req.status), fontWeight: "bold" }}>{req.status}</td>
                                    <td style={td}>{new Date(req.requestedAt).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

const th = { padding: "12px", textAlign: "left", borderBottom: "2px solid #ddd" };
const td = { padding: "12px", borderBottom: "1px solid #eee" };

export default MyRequests;
