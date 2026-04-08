import React, { useEffect, useState } from 'react'
import ConsumerNavbar from '../../NavBar/ConsumerNavbar'
import "./ConsumerHelp.css"

const ConsumerHelp = () => {
    const consumer=JSON.parse(localStorage.getItem("consumer"));
    const text=`Heyy ${consumer.name} Please Go Through Below Content`
    const[txt,setTxt]=useState("");
    const[idx,setIdx]=useState(0);
    useEffect(()=>{
        if(idx<text.length){
            const t=setTimeout(()=>{
                setTxt((prev)=>prev+text[idx]);
                setIdx(prev=>prev+1);
            },40);
            return ()=> clearInterval(t);
        }
    },[idx]);
  return (
    <div>
        <ConsumerNavbar/>
        <div className="Help">
        <img style={{width:"250px",marginLeft:"500px",marginTop:"30px",cursor:"pointer"}} src="https://thumbs.dreamstime.com/b/help-wanted-vector-clip-art-31368648.jpg" alt="" />
            <h1 style={{margin:"40px",justifySelf:"center"}}>{txt}</h1>
        <div className="h-Cont">
            <p style={{fontSize:"30px"}}>Welcome to the Consumer Help Center. This page is designed to guide you through the process of finding, requesting, and receiving donated items. Whether you're new or need assistance, you'll find everything you need right here.</p>
        </div>
        <div className="brow">
            <h1 style={{marginTop:"40px",justifySelf:"center"}}>How To Browse Available Items 🤔?</h1>
            <p style={{fontSize:"30px"}}>Explore a wide range of items donated by generous individuals. Each item includes details such as type, condition, and description to help you choose what best suits your needs.</p>
        </div>
        <div className="req">
            <h1 style={{marginTop:"40px",justifySelf:"center"}}>How To Request an Item 🤔?</h1>
            <p style={{fontSize:"30px"}}>Once you find an item you need, simply click the request button. Your request will be sent to the donor for approval. Make sure to request only items you genuinely need.</p>
        </div>
        <div className="TrReq">
            <h1 style={{marginTop:"40px",justifySelf:"center"}}>How To Track Your Requests 🤔?</h1>
            <p style={{fontSize:"30px"}}>After sending a request, you can monitor its status in the “My Requests” section. Each request will show whether it is pending, approved, rejected, or delivered.</p>
        </div>
        <div className="Nmore">
            <h1 style={{marginTop:"40px",justifySelf:"center"}}>Need More Help 🤔?</h1>
            <p style={{fontSize:"30px"}}>If you face any issues while using the platform, feel free to reach out through the feedback section. We are here to improve your experience and support your needs.</p>
        </div>
        </div>
    </div>
  )
}

export default ConsumerHelp