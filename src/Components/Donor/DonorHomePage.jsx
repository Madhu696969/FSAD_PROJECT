import React, { useEffect, useState } from 'react'
import DonorNavbar from '../../NavBar/DonorNavbar'
import "./DonorHomePage.css"

const DonorHomePage = () => {
    const donor=JSON.parse(localStorage.getItem("donor"));
    const text=`Welcome ${donor.name} to Donor Dashboard`;
    const[txt,setTxt]=useState("");
    const[idx,setIdx]=useState(0);
     useEffect(()=>{
        if (idx < text.length) {
            const t = setTimeout(() => {
                setTxt((prev) => prev + text[idx])
                setIdx((prev) => prev + 1)
            }, 10)
           return () => clearTimeout(t)
        }
     },[idx]);
  return (
    <div>
        <DonorNavbar/>
        <h1 style={{margin:"40px 0px 0px 350px"}}>{txt}</h1>
        <div className={`cont1 ${idx===text.length ?"show" : ""}`}>
            <img style={{paddingTop:"60px"}} src="https://media.istockphoto.com/id/1353332258/photo/donation-concept-the-volunteer-giving-a-donate-box-to-the-recipient-standing-against-the-wall.jpg?s=612x612&w=0&k=20&c=9AL8Uj9TTtrbHpM78kMp9fqjT_8EqpEekjdixeKUzDw=" alt="" />
            <p>Thank you for choosing to be a donor on our platform. Your generosity helps people in need and makes a meaningful impact in the community. Through this dashboard, you can easily manage your donations, track requests from consumers, and stay updated on how your contributions are helping others. Every item you donate can make a real difference in someone’s life.</p>
        </div>
        <h1 style={{marginLeft:"80px"}}>About Donating</h1>
        <div className={`cont2 ${idx===text.length ?"show" : ""}`}>
            <p>Donating through our platform is simple and efficient. As a donor, you can select the items you wish to donate, provide the necessary details, and make them available for consumers who may need them. Once a consumer requests an item, you will be notified and can choose to approve the request. This system ensures that your donations reach the right people quickly and transparently.</p>
            <img src="https://www.dadabhagwan.org/media/3855/what-is-donation-eng.jpg" alt="" />
        </div>
        <h1 style={{marginLeft:"80px"}}>Need Assistance?</h1>
        <div className={`cont3 ${idx===text.length ?"show" : ""}`}>
            <img style={{paddingTop:"60px"}}  src="https://lh4.googleusercontent.com/proxy/WEjb22fu2KO1wB2ikxv9Mw5gBxXcGZ8R3TEQwMnf7_H7NjpiDoaMoE8Mj4GohTNS8RxUTlrHUxXzo2GRXkQBQQLxW8pHbo2qjx2PiteNpqZSbe_gcfd46ofMFLT7q_BBkQf0_7-JFT6rbWc8kH0NQM8" alt="" />
            <p>If you are unsure how to donate or need guidance, you can visit the Help section where we provide step-by-step instructions on how to add donations and manage requests. You can also share your experience through the Feedback section, which helps us improve the platform and serve the community better.</p>
        </div>
    </div>
  )
}

export default DonorHomePage