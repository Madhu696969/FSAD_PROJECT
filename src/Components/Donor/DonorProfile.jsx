import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DonorNavbar from '../../NavBar/DonorNavbar';
import api from '../../api/axios';

const DonorProfile = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/donor/profile")
            .then(res => setProfile(res.data))
            .catch(err => console.error(err))
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

    if (loading) return <div><DonorNavbar /><p style={{ padding: "40px" }}>Loading profile...</p></div>;

    return (
        <div>
            <DonorNavbar />
            <div className="card1">
                <div className="box">
                    <img style={{ width: "150px", height: "150px" }}
                        src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png" alt="" />
                    <div className="p-Cont">
                        <p>Name :- {profile?.name}</p>
                        <p>Email :- {profile?.email}</p>
                        <p>Phone :- {profile?.phoneNumber}</p>
                        <p>Donation Type :- {profile?.donationType}</p>
                    </div>
                </div>
                <button style={{ marginLeft: "290px" }} onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default DonorProfile;