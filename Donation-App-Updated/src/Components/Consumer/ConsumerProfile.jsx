import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./ConsumerProfile.css"
import ConsumerNavbar from '../../NavBar/ConsumerNavbar'
import api from '../../api/axios';

const ConsumerProfile = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [requestCount, setRequestCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            api.get("/consumer/profile"),
            api.get("/consumer/requests"),
        ]).then(([profileRes, requestsRes]) => {
            setProfile(profileRes.data);
            setRequestCount(requestsRes.data.length);
        }).catch(err => console.error(err))
          .finally(() => setLoading(false));
    }, []);

    const handleLogout = async () => {
        try {
            // ✅ Calls backend to clear HttpOnly JWT cookie
            await api.post("/auth/signout");
        } catch (e) {
            // ignore — still clear local state
        } finally {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/");
        }
    };

    if (loading) return <div><ConsumerNavbar /><p style={{ padding: "40px" }}>Loading profile...</p></div>;

    return (
        <div>
            <ConsumerNavbar />
            <div className="card1">
                <div className="box">
                    <img style={{ width: "150px", height: "150px" }}
                        src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png" alt="" />
                    <div className="p-Cont">
                        <p>Name :- {profile?.name}</p>
                        <p>Email :- {profile?.email}</p>
                        <p>PhoneNo :- {profile?.phoneNumber}</p>
                        <p>Your Requests :- {requestCount}</p>
                    </div>
                </div>
                <button style={{ marginLeft: "290px" }} onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default ConsumerProfile;