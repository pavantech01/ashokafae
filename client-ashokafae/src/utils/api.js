export const Base_URL = 'http://localhost:5000';
// export const Base_URL = 'https://ashokafae-backend.onrender.com';

export const fetchEventDetails = async (id) => {
    const response = await fetch(`${Base_URL}/events/${id}`); 
    if (!response.ok) {
        throw new Error('Failed to fetch event details');
    }
    return await response.json();
};