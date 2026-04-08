import React, { useEffect, useState } from 'react'
import HomeNavbar from '../NavBar/HomeNavbar'
import "./About.css"

const About = () => {
    const[txt,setTxt]=useState("");
    const[idx,setIdx]=useState(0);
    const text="Our platform is built to connect generous donors with individuals and communities who need essential support. During emergencies such as floods, earthquakes, or other disasters, access to basic necessities like food, clothing, and daily supplies becomes extremely difficult. This platform creates a reliable digital space where people can donate these essentials and help those affected rebuild their lives."
    useEffect(()=>{
        const t=setTimeout(()=>{
            setTxt((prev)=>prev+text[idx]);
            setIdx(prev=>prev+1);
        },100);
        if(idx===text.length){
            clearInterval(t);
        }
        return() => clearInterval(t);
    },[txt])
  return (
    <div className="cont">
        <HomeNavbar/>
        <div className="main">
            <h1>About Our WebSite</h1>
            <div className="box">
                <img src="https://blog.bankbazaar.com/wp-content/uploads/2018/05/Cyclone-Fani-How-You-Can-Help-_Thumbnail.png" alt="" />
                <p>{txt}</p>
            </div>
        </div>
        <h1>How To Use Our Website</h1>
        <div className="Donor">
            <h2 style={{color:"black" , paddingLeft:"80px"}}>If You Are a Donor</h2>
            <div className="Box">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFZKXG4saaW3zyv3F9paphY8YYytP-mlq3xw&s" alt="" />
                <div className="pcont">
                    <h3 style={{paddingTop:"30px"}}>Steps to Follow :- </h3>
                    <p>1. Create a Donor Account by registering on the platform with your basic details.</p>
                    <p>2. Sign in to your Donor account to access the donor dashboard.</p>
                    <p>3. Browse or select the items you wish to donate such as food, clothes, or other essential supplies.</p>
                    <p>4. Submit the donation details including quantity and location.</p>
                    <p>5. Once submitted, the platform will process and organize the delivery of your donation to people who need it.</p>
                </div>
            </div>
        </div>
        <div className="Donor">
            <h2 style={{color:"black" , paddingLeft:"80px"}}>If You Are a Consumer</h2>
            <div className="Box">
                <img src="https://img.freepik.com/free-photo/close-up-volunteers-with-food-donations_23-2149196112.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                <div className="pcont">
                    <h3 style={{paddingTop:"30px"}}>Steps to Follow :- </h3>
                    <p>1. Create a Consumer Account by registering on the platform.</p>
                    <p>2. Sign in to your Consumer account to access available resources.</p>
                    <p>3. Check the list of available items donated by donors.</p>
                    <p>4. If the required item is available, select the item and request it.</p>
                    <p>5. If the item is not available, you can submit a request form specifying what you need.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About