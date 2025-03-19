import React, { useState } from 'react';

function Account() {
    const [fullName, setfullName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        if (fullName && password) {
            setIsLoggedIn(true);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setfullName('');
        setPassword('');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
            {isLoggedIn ? (
                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <h1 style={{ color: '#333', fontSize: '24px', fontWeight: 'bold' }}>Welcome, {fullName}!</h1>
                    <button style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }} onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setfullName(e.target.value)}
                        placeholder="Full Name"
                        style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', marginBottom: '10px' }}
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', marginBottom: '10px' }}
                    />
                    <button style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }} onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
}

export default Account