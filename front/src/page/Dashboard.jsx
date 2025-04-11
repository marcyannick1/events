import React from 'react';
import Sidebar from '../components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import UserList from '../components/User/UserList';
import EventList from '../components/Events/EventList';

export default function Dashboard() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '260px', padding: '20px', width: '100%' }}>
                <Routes>
                    <Route path="users" element={<UserList />} />
                    <Route path="/" element={<EventList events={[]} />} />
                </Routes>
            </div>
        </div>
    );
}