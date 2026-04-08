import React, { useState } from 'react'
import "./DonateItem.css"
import DonorNavbar from '../../NavBar/DonorNavbar'
import api from '../../api/axios';

const DonateItem = () => {
    const [data, setData] = useState({
        donationType: "Clothes", itemName: "", quantity: "", condition: "good", image: null
    });
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        if (e.target.type === "file") {
            setData({ ...data, image: e.target.files[0] });
        } else {
            setData({ ...data, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!data.itemName || !data.quantity || !data.condition) {
            setErr("Please fill all fields"); return;
        }
        if (data.quantity <= 0) { setErr("Quantity must be greater than 0"); return; }
        setErr("");
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append("donationType", data.donationType);
            formData.append("itemName", data.itemName);
            formData.append("quantity", data.quantity);
            formData.append("condition", data.condition);
            if (data.image) {
                formData.append("image", data.image);
            }

            await api.post("/donor/donateitem", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            alert("Item donated successfully!");
            setData({ donationType: "Clothes", itemName: "", quantity: "", condition: "good", image: null });

        } catch (error) {
            setErr(error.response?.data?.message || "Failed to submit donation.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <DonorNavbar />
            <div className="instruction-card">
                <h2>How to Donate an Item</h2>
                <ul>
                    <li>Select the type of item you want to donate.</li>
                    <li>Enter the item name and quantity.</li>
                    <li>Add a short description of the item.</li>
                    <li>Provide the pickup location.</li>
                    <li>Click the Donate button to submit your donation.</li>
                    <li>Approve requests from consumers when they request the item.</li>
                </ul>
                <p><b>Note:</b> Please donate items that are clean and in usable condition.</p>
            </div>
            <h1 style={{ paddingLeft: "400px" }}>Fill The Below Form</h1>
            <form className="form1" onSubmit={handleSubmit}>
                {err && <p style={{ color: "red" }}>{err}</p>}
                <p>Please Select The Item Type:</p>
                <select name="donationType" value={data.donationType} onChange={handleChange}>
                    <option value="Clothes">Clothes</option>
                    <option value="Food">Food</option>
                    <option value="Books">Books</option>
                    <option value="Medical">Medical Supplies</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Household">Household Items</option>
                    <option value="Toys">Toys</option>
                    <option value="Blood">Blood Donation</option>
                    <option value="Others">Others</option>
                </select>
                <p>Enter Item Name:</p>
                <input type="text" name="itemName" placeholder="ex: Winter Jacket"
                    value={data.itemName} onChange={handleChange} required />
                <p>Select The Quantity:</p>
                <input type="number" placeholder="Enter Quantity" name="quantity"
                    value={data.quantity} onChange={handleChange} required />
                <p>Upload Item Image:</p>
                {/* ✅ Fixed - added name and onChange */}
                <input type="file" name="image" accept="image/*" onChange={handleChange} />
                <p>Select The Item Condition:</p>
                <select name="condition" value={data.condition} onChange={handleChange}>
                    <option value="bad">Bad</option>
                    <option value="average">Average</option>
                    <option value="good">Good</option>
                </select>
                <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
            </form>
        </div>
    );
};

export default DonateItem;