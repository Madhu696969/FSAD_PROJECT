import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../../NavBar/AdminNavbar';
import './AdminProfile.css';
import api from '../../api/axios';

const AdminProfile = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    const handleLogout = async () => {
        try {
            // ✅ Calls backend to clear HttpOnly JWT cookie
            await api.post("/auth/signout");
        } catch (e) {
            // ignore — still clear local state
        } finally {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/');
        }
    };

    const navItems = [
        { label: 'Dashboard', path: '/admin/home', icon: '🏠' },
        { label: 'Manage Requests', path: '/admin/manage-requests', icon: '📋' },
        { label: 'Manage Resources', path: '/admin/manage-resources', icon: '📦' },
        { label: 'Manage Feedbacks', path: '/admin/manage-feedbacks', icon: '💬' },
    ];

    return (
        <div className="admin-page">
            <AdminNavbar />
            <div className="admin-content">
                <div className="admin-header">
                    <h1>Admin Profile</h1>
                    <p>Your account information</p>
                </div>

                <div className="profile-wrap">
                    <div className="profile-card">
                        <div className="profile-avatar-wrap">
                            <div className="profile-avatar">
                                {user.name?.charAt(0).toUpperCase() || 'A'}
                            </div>
                            <div className="profile-badge">ADMIN</div>
                        </div>
                        <div className="profile-info">
                            <h2>{user.name || 'Admin'}</h2>
                            <p className="profile-email">{user.email || 'admin@donation.com'}</p>
                        </div>

                        <div className="profile-details">
                            <div className="detail-row">
                                <span className="detail-label">Full Name</span>
                                <span className="detail-value">{user.name || '—'}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Email</span>
                                <span className="detail-value">{user.email || '—'}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Role</span>
                                <span className="detail-value role-chip">ADMIN</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">User ID</span>
                                <span className="detail-value">{user.userId || '—'}</span>
                            </div>
                        </div>

                        <button className="logout-btn" onClick={handleLogout}>
                            🚪 Logout
                        </button>
                    </div>

                    <div className="profile-side">
                        <h3>Quick Navigation</h3>
                        <div className="nav-links">
                            {navItems.map((item, i) => (
                                <button
                                    key={i}
                                    className="nav-link-btn"
                                    onClick={() => navigate(item.path)}
                                >
                                    <span>{item.icon}</span>
                                    <span>{item.label}</span>
                                    <span className="nav-arrow">→</span>
                                </button>
                            ))}
                        </div>

                        <div className="admin-note">
                            <h4>Admin Privileges</h4>
                            <ul>
                                <li>✓ Approve or reject consumer requests</li>
                                <li>✓ View and delete all donation items</li>
                                <li>✓ Monitor all platform feedback</li>
                                <li>✓ View full platform statistics</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;