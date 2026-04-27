import React, { useEffect, useState } from 'react';
import api from '../../api/axios';
import AdminNavbar from '../../NavBar/AdminNavbar';
import './ManageResources.css';

const ManageResources = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('ALL');
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => { fetchItems(); }, []);

    const fetchItems = async () => {
        try {
            const res = await api.get('/admin/donations');
            setItems(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this donation item?')) return;
        try {
            await api.delete(`/admin/donations/${id}`);
            fetchItems();
        } catch (err) {
            alert(err.response?.data?.message || 'Delete failed');
        }
    };

    const statusColor = (status) => {
        if (status === 'AVAILABLE') return 'badge-approved';
        if (status === 'REQUESTED') return 'badge-pending';
        if (status === 'GIVEN') return 'badge-given';
        return 'badge-pending';
    };

    const statuses = ['ALL', 'AVAILABLE', 'REQUESTED', 'GIVEN'];
    const filtered = filter === 'ALL' ? items : items.filter(i => i.status === filter);

    return (
        <div className="admin-page">
            <AdminNavbar />
            <div className="admin-content">
                <div className="admin-header">
                    <h1>Manage Resources</h1>
                    <p>All donation items listed on the platform</p>
                </div>

                <div className="filter-bar">
                    {statuses.map(s => (
                        <button
                            key={s}
                            className={`filter-btn ${filter === s ? 'active' : ''}`}
                            onClick={() => setFilter(s)}
                        >
                            {s}
                            <span className="filter-count">
                                {s === 'ALL' ? items.length : items.filter(i => i.status === s).length}
                            </span>
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="admin-loading">Loading resources...</div>
                ) : filtered.length === 0 ? (
                    <div className="empty-state">No items found.</div>
                ) : (
                    <div className="resources-grid">
                        {filtered.map(item => (
                            <div key={item.id} className="resource-card">
                                <div className="resource-img-wrap">
                                    {item.imageBase64 ? (
                                        <img
                                            src={item.imageBase64}
                                            alt={item.itemName}
                                            className="resource-img"
                                            onClick={() => setSelectedImage(item.imageBase64)}
                                        />
                                    ) : (
                                        <div className="resource-img-placeholder">📦</div>
                                    )}
                                    <span className={`badge res-badge ${statusColor(item.status)}`}>
                                        {item.status}
                                    </span>
                                </div>
                                <div className="resource-body">
                                    <h3>{item.itemName}</h3>
                                    <div className="resource-meta">
                                        <span>🏷️ {item.donationType}</span>
                                        <span>📊 Qty: {item.quantity}</span>
                                        <span>⭐ {item.condition}</span>
                                    </div>
                                    <p className="resource-donor">
                                        <strong>Donor:</strong> {item.donorName || '—'}
                                    </p>
                                </div>
                                <div className="resource-footer">
                                    <button className="btn-delete" onClick={() => handleDelete(item.id)}>
                                        🗑 Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Image Modal */}
                {selectedImage && (
                    <div className="img-modal" onClick={() => setSelectedImage(null)}>
                        <div className="img-modal-box">
                            <img src={selectedImage} alt="Item" />
                            <button onClick={() => setSelectedImage(null)}>✕ Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageResources;