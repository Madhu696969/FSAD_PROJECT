import React, { useEffect, useState } from 'react'
import ConsumerNavbar from '../../NavBar/ConsumerNavbar'
import "./ConsumerDashBoard.css"

const ConsumerDashBoard = () => {
    const consumer=JSON.parse(localStorage.getItem("consumer"));
    const text=`Welcome ${consumer.name}`
    const[txt,setTxt]=useState("");
    const[idx,setIdx]=useState(0);
    useEffect(()=>{
        if(idx<text.length){
            const t=setTimeout(()=>{
                setTxt((prev)=>prev+text[idx]);
                setIdx(prev=>prev+1);
            },10);
            return () => clearTimeout(t)
        }
    },[idx]);

  return (
    <div>
        <ConsumerNavbar/>
        <h1 style={{marginLeft:"470px",marginTop:"20px"}}>{txt}</h1>
        <div className="Con-cont">
            <h1 style={{margin:"40px"}}>Consumer Dashboard - Find What You Need 🥰</h1>
            <div className="bod" style={{display:"flex"}}>
                <p style={{fontSize:"30px"}}>Welcome to the Consumer Dashboard. This platform is designed to help you easily find and request items donated by generous donors. Whether you are looking for clothes, food, books, or other essentials, you can browse available donations and request items that meet your needs. Our goal is to connect you with the right resources quickly and efficiently.</p>
                <img style={{width:"500px",paddingRight:"40px", cursor:"pointer"}} src="https://ebookncert.com/wp-content/uploads/2025/07/Who-Is-A-Consumer-In-The-Context-Of-The-Consumer-Protection-Act-Ebook-NCERT.jpg" alt="" />
            </div>
            <h1 style={{margin:"40px"}}>Browse Available Donations</h1>
            <div className="sec2" style={{display:"flex"}}>
                <img style={{width:"500px",cursor:"pointer",paddingLeft:"40px"}} src="https://cdn.shopify.com/app-store/listing_images/badd3e52937da684852da655f3bc98ba/desktop_screenshot/CJa_iJ6QrI8DEAE=.png?height=720&width=1280" alt="" />
                <p style={{fontSize:"30px"}} >This section allows you to view all the items donated by donors. Each item includes details such as type, quantity, and condition so you can make informed decisions before requesting. You can scroll through the list and choose items that are most useful for you.(Checkout Available Donations)</p>
            </div>
            <h1 style={{margin:"40px"}}>Request & Track Items</h1>
            <div className="sec2" style={{display:"flex"}}>
                <div className="p">
                    <p style={{fontSize:"30px"}} >Once you find an item you need, you can send a request directly to the donor. After sending the request, the donor will review it and either accept or reject it, ensuring fair and efficient distribution of items. At the same time, you can also track all your requests in this section, where each item will display its current status such as pending, approved, or delivered.</p>
                <p style={{fontSize:"30px"}}>When you request an item, the donor gets notified. Once approved, you can coordinate with the donor to receive the item. All your requested items are shown here with real-time status updates, so you always know the progress.(Checkout My Requests)</p>
                </div>
                <img style={{width:"500px",paddingRight:"40px",paddingTop:"200px", cursor:"pointer" , height:"300px"}} src="https://cdn.jotfor.ms/image/r/aHR0cHM6Ly9maWxlcy5qb3Rmb3JtLmNvbS9qb3Rmb3JtYXBwcy9vcmRlci10cmFja2VyLTE4ODM4NjViZWRkNjg4MGNjOTcwZmI4YTgyMDZhMzA3LXByZXZpZXcucG5n/order-tracker.png" alt="" />
            </div>
            <h1 style={{margin:"40px",justifySelf:"center"}}>If You Need Any Help ? Just Navigate To Help Page!!</h1>
            <h1 style={{margin:"40px",justifySelf:"center"}}>Dont Forget To Give FeedBack 😜</h1>

        </div>
    </div>
  )
}

export default ConsumerDashBoard