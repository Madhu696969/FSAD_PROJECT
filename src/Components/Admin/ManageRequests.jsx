import React, { useEffect, useState } from 'react';
import api from '../../api/axios';
import AdminNavbar from '../../NavBar/AdminNavbar';
import './ManageRequests.css';

const ManageRequests = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('ALL');
    const [actionLoading, setActionLoading] = useState(null);

    useEffect(() => { fetchRequests(); }, []);

    const fetchRequests = async () => {
        try {
            const res = await api.get('/admin/requests');
            setRequests(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleAction = async (requestId, action) => {
        setActionLoading(requestId + action);
        try {
            await api.put(`/admin/requests/${requestId}/${action}`);
            fetchRequests();
        } catch (err) {
            alert(err.response?.data?.message || 'Action failed');
        } finally {
            setActionLoading(null);
        }
    };

    const filtered = filter === 'ALL' ? requests : requests.filter(r => r.status === filter);

    const statusBadge = (status) => {
        const map = { PENDING: 'badge-pending', APPROVED: 'badge-approved', REJECTED: 'badge-rejected' };
        return map[status] || 'badge-pending';
    };

    return (
        <div className="admin-page">
            <AdminNavbar />
            <div className="admin-content">
                <div className="admin-header">
                    <h1>Manage Requests</h1>
                    <p>Review and approve or reject consumer donation requests</p>
                </div>

                <div className="filter-bar">
                    {['ALL', 'PENDING', 'APPROVED', 'REJECTED'].map(f => (
                        <button
                            key={f}
                            className={`filter-btn ${filter === f ? 'active' : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f}
                            <span className="filter-count">
                                {f === 'ALL' ? requests.length : requests.filter(r => r.status === f).length}
                            </span>
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="admin-loading">Loading requests...</div>
                ) : filtered.length === 0 ? (
                    <div className="empty-state">
                        <p>No {filter !== 'ALL' ? filter.toLowerCase() : ''} requests found.</p>
                    </div>
                ) : (
                    <div className="requests-table-wrap">
                        <table className="requests-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Item</th>
                                    <th>Type</th>
                                    <th>Consumer</th>
                                    <th>Donor</th>
                                    <th>Requested On</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((req, i) => (
                                    <tr key={req.id}>
                                        <td className="td-num">{i + 1}</td>
                                        <td><strong>{req.itemName}</strong></td>
                                        <td>{req.donationType}</td>
                                        <td>{req.consumerName}</td>
                                        <td>{req.donorName}</td>
                                        <td>{req.requestedAt ? new Date(req.requestedAt).toLocaleDateString() : '—'}</td>
                                        <td>
                                            <span className={`badge ${statusBadge(req.status)}`}>
                                                {req.status}
                                            </span>
                                        </td>
                                        <td className="actions-cell">
                                            {req.status === 'PENDING' ? (
                                                <>
                                                    <button
                                                        className="btn-approve"
                                                        disabled={actionLoading === req.id + 'approve'}
                                                        onClick={() => handleAction(req.id, 'approve')}
                                                    >
                                                        {actionLoading === req.id + 'approve' ? '...' : '✓ Approve'}
                                                    </button>
                                                    <button
                                                        className="btn-reject"
                                                        disabled={actionLoading === req.id + 'reject'}
                                                        onClick={() => handleAction(req.id, 'reject')}
                                                    >
                                                        {actionLoading === req.id + 'reject' ? '...' : '✕ Reject'}
                                                    </button>
                                                </>
                                            ) : (
                                                <span className="no-action">—</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageRequests;