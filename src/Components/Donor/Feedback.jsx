import React, { useEffect, useState } from 'react'
import DonorNavbar from '../../NavBar/DonorNavbar'
import "./Feedback.css"
const Feedback = () => {
    const text = "It helps improve the platform by collecting valuable suggestions, identifying problems, and understanding donor satisfaction."
    const [data, setData] = useState({
        name: "",
        email: "",
        rating: "",
        message: ""
    });
    const [txt, settxt] = useState("");
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        if (idx < text.length) {
            const t = setTimeout(() => {
                settxt((prev) => prev + text[idx]);
                setIdx(prev => prev + 1);
            }, 20)
            return () => clearTimeout(t);
        }
    }, [txt])

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!data.name || !data.email || !data.rating || !data.message) {
            setError("Please fill all fields");
            setSuccess("");
            return;
        }

        localStorage.setItem("feedback", JSON.stringify(data));
        setSuccess("Feedback submitted successfully!");
        setError("");

        setData({
            name: "",
            email: "",
            rating: "",
            message: ""
        });
    };

    return (
        <div>
            <DonorNavbar />
            <div className="card1">
                <h1>Please give feedback</h1>
                <p>{txt}</p>
                <div className="form1" style={{marginLeft:"350px"}}>
                      <h1 style={{paddingLeft:"0px"}}>Feedback Form</h1>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}
                <form onSubmit={handleSubmit}>
                    <p>Enter Your Name:</p>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={data.name}
                        onChange={handleChange}
                    />

                    <p>Enter Your Email:</p>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={data.email}
                        onChange={handleChange}
                    />

                    <p>Select Rating:</p>
                    <select name="rating" value={data.rating} onChange={handleChange}>
                        <option value="">Choose Rating</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Average</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                    </select>

                    <p>Write Your Feedback:</p>
                    <textarea
                        name="message"
                        placeholder="Enter your feedback"
                        value={data.message}
                        onChange={handleChange}
                        rows="5"
                        cols="30"
                    ></textarea>
                    <br /><br />
                    <button type="submit">Submit Feedback</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Feedback
