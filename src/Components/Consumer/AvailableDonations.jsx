import React, { useState, useEffect } from 'react'
import ConsumerNavbar from '../../NavBar/ConsumerNavbar'
import "./AvailableDonations.css"
import api from '../../api/axios';

const AvailableDonations = () => {
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => { fetchDonations(); }, []);

    const fetchDonations = async () => {
        try {
            const res = await api.get("/consumer/donations");
            setDonations(res.data);
        } catch (err) {
            setError("Failed to load donations. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleRequest = async (donation) => {
        try {
            await api.post(`/consumer/request/${donation.id}`);
            alert("Request Sent Successfully!");
            fetchDonations();
        } catch (err) {
            alert(err.response?.data?.message || "Failed to send request.");
        }
    };

    if (loading) return <div><ConsumerNavbar /><p style={{ padding: "40px" }}>Loading donations...</p></div>;

    return (
        <div>
            <ConsumerNavbar />
            <div className="donations-container">
                <h1>Available Donations</h1>
                <div className="abt" style={{ marginTop: "40px", fontSize: "30px" }}>
                    Discover items donated by others and available for request. Each card provides clear information about the item, allowing you to quickly choose and request what you need.
                </div>
                {error && <p style={{ color: "red", padding: "20px" }}>{error}</p>}
                {donations.length === 0 && !error && (
                    <p style={{ padding: "40px", fontSize: "18px" }}>No donations available right now. Check back later!</p>
                )}
                <div className="donations-grid">
                    {donations.map((item) => (
                        <div key={item.id} className="card12">
                            {/* ✅ Fixed: backend returns imageBase64, not imageUrl */}
                            {item.imageBase64 && (
                                <img src={item.imageBase64} alt={item.itemName}
                                    style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }} />
                            )}
                            <h3>{item.itemName}</h3>
                            <p><b>Type:</b> {item.donationType}</p>
                            <p><b>Condition:</b> {item.condition}</p>
                            <p><b>Quantity:</b> {item.quantity}</p>
                            <p><b>Donor:</b> {item.donorName}</p>
                            <button onClick={() => handleRequest(item)}>Request</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AvailableDonations;