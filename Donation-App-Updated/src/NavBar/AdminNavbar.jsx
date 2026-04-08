import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AdminNavbar.css';

const AdminNavbar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';

    return (
        <nav className="admin-navbar">
            <div className="navbar-brand">
                🛡️ <span>Admin Panel</span>
            </div>
            <div className="navbar-links">
                <Link to="/admin/home" className={isActive('/admin/home')}>Home</Link>
                <Link to="/admin/manage-requests" className={isActive('/admin/manage-requests')}>Manage Requests</Link>
                <Link to="/admin/manage-resources" className={isActive('/admin/manage-resources')}>Manage Resources</Link>
                <Link to="/admin/manage-feedbacks" className={isActive('/admin/manage-feedbacks')}>Manage Feedbacks</Link>
                <Link to="/admin/profile" className={isActive('/admin/profile')}>Profile</Link>
            </div>
        </nav>
    );
};

export default AdminNavbar;