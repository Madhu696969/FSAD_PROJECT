import React, { useEffect, useState } from 'react'
import DonorNavbar from '../../NavBar/DonorNavbar'
import "./Feedback.css"
import api from '../../api/axios';

const Feedback = () => {
    const text = "It helps improve the platform by collecting valuable suggestions, identifying problems, and understanding donor satisfaction."
    const [data, setData] = useState({ rating: "", message: "" });
    const [txt, settxt] = useState("");
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        if (idx < text.length) {
            const t = setTimeout(() => {
                settxt((prev) => prev + text[idx]);
                setIdx(prev => prev + 1);
            }, 20);
            return () => clearTimeout(t);
        }
    }, [txt]);

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!data.rating || !data.message) { setError("Please fill all fields"); setSuccess(""); return; }
        setError("");
        setLoading(true);
        try {
            await api.post("/donor/feedback", { message: data.message, rating: parseInt(data.rating) });
            setSuccess("Feedback submitted successfully!");
            setData({ rating: "", message: "" });
        } catch (err) {
            setError(err.response?.data?.message || "Failed to submit feedback.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <DonorNavbar />
            <div className="card">
                <h1>Please give feedback</h1>
                <h3>{txt}</h3>
                <div className="form1" style={{ marginLeft: "350px" }}>
                    <h1 style={{ paddingLeft: "0px" }}>Feedback Form</h1>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {success && <p style={{ color: "green" }}>{success}</p>}
                    <form onSubmit={handleSubmit}>
                        <p>Select Rating:</p>
                        <select name="rating" value={data.rating} onChange={handleChange} style={{ margin: "10px" }}>
                            <option value="">Choose Rating</option>
                            <option value="1">1 - Poor</option>
                            <option value="2">2 - Average</option>
                            <option value="3">3 - Good</option>
                            <option value="4">4 - Very Good</option>
                            <option value="5">5 - Excellent</option>
                        </select>
                        <p>Write Your Feedback:</p>
                        <textarea name="message" placeholder="Enter your feedback"
                            value={data.message} onChange={handleChange} rows="5" cols="30" />
                        <br /><br />
                        <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit Feedback"}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
