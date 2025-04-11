import React from 'react';
import Sidebar from '../components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import UserList from '../components/User/UserList';
import EventList from '../components/Events/EventList';
import EventEdit from '../components/Events/EventEdit'; 
import EventAdd from '../components/Events/EventAdd';
import EventDetails from '../components/Events/EventDetails';

export default function Dashboard() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '260px', padding: '20px', width: '100%' }}>
                <Routes>
                    <Route path="users" element={<UserList />} />
                    <Route path="/" element={<EventList events={[]} />} />
                    <Route path="events/add" element={<EventAdd />} />
                    <Route path="events/edit" element={<EventEdit />} />
                    <Route path="events/:eventId" element={<EventDetails />} />
                </Routes>
            </div>
        </div>
    );
}