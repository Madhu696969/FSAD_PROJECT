import React, { useEffect, useState } from 'react';
import api from '../../api/axios';
import AdminNavbar from '../../NavBar/AdminNavbar';
import './ManageFeedbacks.css';

const stars = (rating) => '★'.repeat(rating) + '☆'.repeat(5 - rating);

const ManageFeedbacks = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [tab, setTab] = useState('donor');

    useEffect(() => { fetchFeedbacks(); }, []);

    const fetchFeedbacks = async () => {
        try {
            const res = await api.get('/admin/feedbacks');
            setFeedbacks(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const donorFeedbacks = feedbacks.filter(f => f.role === 'DONOR');
    const consumerFeedbacks = feedbacks.filter(f => f.role === 'CONSUMER');
    const displayed = tab === 'donor' ? donorFeedbacks : consumerFeedbacks;

    const avgRating = (list) =>
        list.length ? (list.reduce((s, f) => s + f.rating, 0) / list.length).toFixed(1) : '—';

    return (
        <div className="admin-page">
            <AdminNavbar />
            <div className="admin-content">
                <div className="admin-header">
                    <h1>Manage Feedbacks</h1>
                    <p>All platform feedback from donors and consumers</p>
                </div>

                <div className="feedback-summary">
                    <div className="summary-card">
                        <span className="summary-num">{donorFeedbacks.length}</span>
                        <span className="summary-label">Donor Feedbacks</span>
                        <span className="summary-avg">avg {avgRating(donorFeedbacks)} ★</span>
                    </div>
                    <div className="summary-card">
                        <span className="summary-num">{consumerFeedbacks.length}</span>
                        <span className="summary-label">Consumer Feedbacks</span>
                        <span className="summary-avg">avg {avgRating(consumerFeedbacks)} ★</span>
                    </div>
                    <div className="summary-card">
                        <span className="summary-num">{feedbacks.length}</span>
                        <span className="summary-label">Total Feedbacks</span>
                        <span className="summary-avg">avg {avgRating(feedbacks)} ★</span>
                    </div>
                </div>

                <div className="tab-bar">
                    <button className={`tab-btn ${tab === 'donor' ? 'active' : ''}`} onClick={() => setTab('donor')}>
                        Donor Feedbacks ({donorFeedbacks.length})
                    </button>
                    <button className={`tab-btn ${tab === 'consumer' ? 'active' : ''}`} onClick={() => setTab('consumer')}>
                        Consumer Feedbacks ({consumerFeedbacks.length})
                    </button>
                </div>

                {loading ? (
                    <div className="admin-loading">Loading feedbacks...</div>
                ) : displayed.length === 0 ? (
                    <div className="empty-state">No feedbacks yet.</div>
                ) : (
                    <div className="feedbacks-grid">
                        {displayed.map(fb => (
                            <div key={fb.id} className="feedback-card">
                                <div className="feedback-top">
                                    <div className="feedback-avatar">
                                        {fb.userName?.charAt(0).toUpperCase() || '?'}
                                    </div>
                                    <div>
                                        <p className="feedback-name">{fb.userName}</p>
                                        <p className="feedback-email">{fb.userEmail}</p>
                                    </div>
                                    <div className={`rating-badge rating-${fb.rating}`}>
                                        {fb.rating}/5
                                    </div>
                                </div>
                                <div className="feedback-stars">{stars(fb.rating)}</div>
                                <p className="feedback-message">"{fb.message}"</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageFeedbacks;