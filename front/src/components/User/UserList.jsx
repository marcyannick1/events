import React, { useState } from 'react';

const UserList = () => {
    const [users] = useState([
        { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
        { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
        { id: 3, firstName: 'Alice', lastName: 'Johnson', email: 'alice.johnson@example.com' },
    ]);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}> Liste des Utilisateurs</h1>
            <ul style={styles.list}>
                {users.map((user) => (
                    <li key={user.id} style={styles.listItem}>
                        <span style={styles.name}>{user.firstName} {user.lastName}</span>
                        <span style={styles.email}>{user.email}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#f8f9fa', // Couleur de fond claire
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '20px auto',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        color: '#343a40', // Couleur sombre pour le titre
        textAlign: 'center',
        marginBottom: '20px',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
    },
    listItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 15px',
        marginBottom: '10px',
        backgroundColor: '#ffffff', // Couleur de fond des éléments
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    name: {
        fontWeight: 'bold',
        color: '#007bff', // Couleur principale pour le nom
    },
    email: {
        color: '#6c757d', // Couleur secondaire pour l'email
    },
};

export default UserList;
