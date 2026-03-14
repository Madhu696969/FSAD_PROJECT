import React, { useState } from 'react'
import "./DonateItem.css"
import DonorNavbar from '../../NavBar/DonorNavbar'

const DonateItem = () => {
    const [data, setData] = useState({
        donationType: "Clothes",
        itemName: "",
        quantity: "",
        condition: "good"
    });

    const [err, setErr] = useState("");

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!data.donationType || !data.itemName || !data.quantity || !data.condition) {
            setErr("Please fill all fields");
            return;
        }

        if (data.quantity <= 0) {
            setErr("Quantity must be greater than 0");
            return;
        }

        setErr("");

        const existingItems = JSON.parse(localStorage.getItem("donations")) || [];
        existingItems.push(data);
        localStorage.setItem("donations", JSON.stringify(existingItems));

        alert("Item donated successfully");

        setData({
            donationType: "Clothes",
            itemName: "",
            quantity: "",
            condition: "good"
        });
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
                <input
                    type="text"
                    name="itemName"
                    placeholder="ex: Winter Jacket"
                    value={data.itemName}
                    onChange={handleChange}
                    required
                />

                <p>Select The Quantity :</p>
                <input
                    type="number"
                    placeholder="Enter Quantity"
                    name="quantity"
                    value={data.quantity}
                    onChange={handleChange}
                    required
                />
                <p>Upload Item Image:</p>
                <input type="file"/>
                <p>Select The Item Condition:</p>
                <select name="condition" value={data.condition} onChange={handleChange}>
                    <option value="bad">Bad</option>
                    <option value="average">Average</option>
                    <option value="good">Good</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default DonateItem
