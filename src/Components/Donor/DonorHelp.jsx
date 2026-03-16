import React, { useEffect, useState } from 'react'
import DonorNavbar from '../../NavBar/DonorNavbar';
import "./DonorHelp.css"

const DonorHelp = () => {
    const text="Donation Support Center - A Guide for Donors";
    const [txt, setTxt] = useState("");
    const [idx, setIdx] = useState(0);
    useEffect(() => {
        if (idx < text.length) {
            const t = setTimeout(() => {
                setTxt((prev) => prev + text[idx])
                setIdx((prev) => prev + 1)
            }, 10)
            return () => clearTimeout(t)
        }
    }, [idx]);
    return (
        <div>
            <DonorNavbar/>
            <div className="cont" style={{backgroundColor:"white"}}>
                <h1 >{txt}</h1>
            </div>
            <div className="intro" style={{display:"flex"}}>
                <img style={{marginTop:"40px", cursor:"pointer"}} src="https://static.vecteezy.com/system/resources/thumbnails/011/976/274/small/stick-figures-welcome-free-vector.jpg" alt="" />
                <p style={{marginTop:"40px" , fontSize:"25px"}}>Welcome to the Donation Support Center. This section is designed to help donors understand how to use the platform effectively and make the donation process simple and meaningful. Whether you are donating clothes, food, books, or other useful items, our goal is to ensure that your contribution reaches the right people in need. The information below will guide you through the steps involved in donating items and managing your donations.</p>
            </div>
            <div className="DoPro">
                <h1 style={{marginLeft:"50px"}}>How the Donation Process Works</h1>
                <div className="ProCont" style={{display:"flex"}}>
                    <p style={{marginTop:"40px" , fontSize:"25px"}}>Our platform connects generous donors with individuals or organizations who need essential items. Once you add a donation item, it becomes visible to consumers on the platform. Consumers can request the item if they need it. As a donor, you will receive the request and can choose to approve or decline it. This process ensures transparency and allows donors to stay in control of their contributions.</p>
                    <img style={{marginTop:"40px", cursor:"pointer", width:"700px"}} src="https://fastercapital.com/i/Blood-Bank-Mobile-App-Revolutionizing-Blood-Donation--The-Power-of-Mobile-Apps--Streamlining-the-Donation-Process.webp" alt="" />
                </div>
            </div>
            <div className="DoPro">
                <h1 style={{marginLeft:"50px"}}>Steps to Donate an Item</h1>
                <div className="ProCont" style={{display:"flex"}}>
                    <img style={{marginTop:"40px", cursor:"pointer",margin:"50px",width:"1800px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdaDMfNe0cbuLL13A6g2tQqB_JFUTzskrcSw&s" alt="" />
                    <p style={{marginTop:"40px" , fontSize:"25px"}}>To donate an item, first navigate to the Donate Item section from the dashboard. Select the type of item you want to donate and provide details such as the item name, quantity, and condition. After filling out the required information, submit the form to list your donation on the platform. Once submitted, your item will appear in the available donations list where consumers can request it.</p>
                </div>
            </div>
            <div className="DoPro">
                <h1 style={{marginLeft:"50px"}}>Donation Guidelines</h1>
                <div className="ProCont" style={{display:"flex"}}>
                    <img style={{marginTop:"40px", cursor:"pointer",margin:"50px",width:"600px"}} src="https://content.foodbankscanada.ca/wordpress/2025/04/1.png" alt="" />
                    <p style={{marginTop:"40px" , fontSize:"25px"}}>To ensure the best experience for everyone using the platform, we encourage donors to follow a few simple guidelines. Please make sure that the items you donate are clean, safe, and in usable condition. Avoid donating damaged or unusable items. Providing accurate information about the item and its condition will help consumers know exactly what they are receiving.</p>
                </div>
            </div>

        </div>
    )
}

export default DonorHelp