import React, { useEffect, useState } from 'react'
import HomeNavbar from '../NavBar/HomeNavbar';
import "./LandingPage.css"

const LandingPage = () => {
    const text="DONATION PORTAL"
    const [He,setHe]=useState("");
    const [idx,setIdx]=useState(0);
    useEffect(()=>{
        const txt=setTimeout(()=>{
            setHe((prev)=>prev+text[idx]);
            setIdx((idx)=>idx+1);
        },10);
        if(idx===text.length){
            clearInterval(txt);
        }
        return ()=>clearInterval(txt);
    },[He])
  return (
    <div className="cont">
        <HomeNavbar/>
        <div className="text">
            <h1>{He}</h1>
        </div>
        <div className={`Images ${idx === text.length ? "show" : ""}`}>
            <div className="img1">
                <img src="https://www.kapruka.com/contactUs/images/floodmob.jpg" alt="" />
                <p> platform is designed to connect generous donors with individuals and communities in need, especially during emergencies such as natural disasters. By creating a simple and transparent digital space, we make it easy for people to donate essential items like food, clothing, and daily necessities to those who need them the most. The goal is to ensure that help reaches affected communities quickly while encouraging people everywhere to contribute to meaningful social</p>
            </div>
        </div>
        <h1 className="show" style={{paddingLeft:"59px"}}>Our Mission</h1>
        <div className={`Images ${idx === text.length ? "show" : ""}`}>
            <div className="img1">
                <p>Our mission is to build a compassionate and responsive community where people can support one another during difficult times. By organizing donation drives, tracking contributions, and enabling efficient distribution of resources, the platform aims to improve living conditions for those affected by crises. Together, we can create a network of kindness that turns small acts of generosity into meaningful change for communities in need.</p>
                <img src="https://cms.thewire.in/wp-content/uploads/2025/09/PTI09_04_2025_000366B-scaled.jpg" alt="" />
            </div>
        </div>
        <h1 className="show" style={{paddingLeft:"59px"}}>How it works</h1>
        <div className={`Images ${idx === text.length ? "show" : ""}`}>
            <div className="img1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShqFrE1OoBIS_f-Bkx1BhxSJJha3WPHZRZ0Q&s" alt="" />
                <p>The platform brings together donors, recipients, administrators, and logistics coordinators in a well-organized system. Donors can list items they wish to contribute, recipients can request essential supplies, and logistics coordinators help manage transportation and delivery. Administrators oversee donation drives and ensure the entire process remains transparent and efficient. Through this collaborative approach, the platform simplifies the process of giving and receiving help, making humanitarian support more accessible.</p>
            </div>
        </div>
    </div>
  )
}

export default LandingPage