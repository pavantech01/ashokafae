import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserProfile = async () => {
            const response = await axios.get('/api/user/profile');
            setUser(response.data);
            setLoading(false);
        };
        fetchUserProfile();
    }, []);

    // eslint-disable-next-line
    const handleUpdateProfile = async (updatedData) => {
        await axios.put('/api/user/profile', updatedData);
        // Handle success (e.g., show a message)
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* Add form for updating profile and uploading picture */}
        </div>
    );
};

export default UserProfile;
