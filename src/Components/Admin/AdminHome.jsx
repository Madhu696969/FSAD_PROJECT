import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import AdminNavbar from '../../NavBar/AdminNavbar';
import './AdminHome.css';

const AdminHome = () => {
    const navigate = useNavigate();
    const [stats, setStats] = useState({ donors: 0, consumers: 0, donations: 0, requests: 0, pending: 0, feedbacks: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/admin/stats')
            .then(res => setStats(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    const cards = [
        { label: 'Total Donors', value: stats.donors, color: 'card-blue', icon: '👤', path: null },
        { label: 'Total Consumers', value: stats.consumers, color: 'card-teal', icon: '🙋', path: null },
        { label: 'Donations Listed', value: stats.donations, color: 'card-purple', icon: '📦', path: '/admin/manage-resources' },
        { label: 'Total Requests', value: stats.requests, color: 'card-amber', icon: '📋', path: '/admin/manage-requests' },
        { label: 'Pending Approvals', value: stats.pending, color: 'card-red', icon: '⏳', path: '/admin/manage-requests' },
        { label: 'Feedbacks', value: stats.feedbacks, color: 'card-green', icon: '💬', path: '/admin/manage-feedbacks' },
    ];

    return (
        <div className="admin-page">
            <AdminNavbar />
            <div className="admin-content">
                <div className="admin-header">
                    <h1>Admin Dashboard</h1>
                    <p>Overview of the donation platform</p>
                </div>

                {loading ? (
                    <div className="admin-loading">Loading stats...</div>
                ) : (
                    <div className="stats-grid">
                        {cards.map((card, i) => (
                            <div
                                key={i}
                                className={`stat-card ${card.color} ${card.path ? 'clickable' : ''}`}
                                onClick={() => card.path && navigate(card.path)}
                            >
                                <div className="stat-icon">{card.icon}</div>
                                <div className="stat-info">
                                    <span className="stat-value">{card.value}</span>
                                    <span className="stat-label">{card.label}</span>
                                </div>
                                {card.path && <div className="stat-arrow">→</div>}
                            </div>
                        ))}
                    </div>
                )}

                <div className="quick-actions">
                    <h2>Quick Actions</h2>
                    <div className="actions-grid">
                        <button className="action-btn" onClick={() => navigate('/admin/manage-requests')}>
                            <span>📋</span> Manage Requests
                        </button>
                        <button className="action-btn" onClick={() => navigate('/admin/manage-resources')}>
                            <span>📦</span> Manage Resources
                        </button>
                        <button className="action-btn" onClick={() => navigate('/admin/manage-feedbacks')}>
                            <span>💬</span> View Feedbacks
                        </button>
                        <button className="action-btn" onClick={() => navigate('/admin/profile')}>
                            <span>👤</span> Admin Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;