import React from 'react';
import { FaPlus, FaEdit, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = ({ onAddEvent, onEditEvent }) => {
    return (
        <div className="w-64 h-screen bg-gray-800 text-gray-200 p-5" style={{ position: 'fixed' }}>
            <h2 className="text-2xl mb-6">Dashboard</h2>
            <ul className="space-y-4">
                <li
                    className="flex items-center p-2 cursor-pointer hover:bg-gray-700 rounded"
                    onClick={onAddEvent}
                >
                    <FaPlus className="mr-3" /> Add Event
                </li>
                <li
                    className="flex items-center p-2 cursor-pointer hover:bg-gray-700 rounded"
                    onClick={onEditEvent}
                >
                    <FaEdit className="mr-3" /> Edit Event
                </li>
                <li className="flex items-center p-2 hover:bg-gray-700 rounded">
                    <Link
                        to="/dashboard/userlist"
                        className="flex items-center text-gray-200 no-underline"
                    >
                        <FaUsers className="mr-3" /> User List
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
