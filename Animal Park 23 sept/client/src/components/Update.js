// Update.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Update = ({ registeredUsers, setRegisteredUsers }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const userId = location.state?.id;

    // Find the user to update
    const userToUpdate = registeredUsers.find(user => user.id === userId) || {};

    const [formData, setFormData] = useState(userToUpdate);

    useEffect(() => {
        setFormData(userToUpdate);
    }, [userToUpdate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Send updated data to backend
        try {
            const response = await fetch(`http://localhost:5000/api/employees/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to update employee');
            }

            // Update local state
            setRegisteredUsers(prev =>
                prev.map(user => (user.id === userId ? formData : user))
            );
            navigate('/data');
        } catch (error) {
            console.error(error);
            alert('Failed to update employee.');
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Update Employee</h2>
            <form onSubmit={handleSubmit}>
                {['id', 'name', 'email', 'age', 'phone', 'address'].map(key => (
                    <div className="mb-4" key={key}>
                        <label className="block mb-1 capitalize">{key}</label>
                        {key === 'address' ? (
                            <textarea
                                name={key}
                                value={formData[key] || ''}
                                onChange={handleChange}
                                className="border border-gray-300 rounded w-full p-2"
                                required
                            />
                        ) : (
                            <input
                                type={key === 'age' ? 'number' : key === 'email' ? 'email' : 'text'}
                                name={key}
                                value={formData[key] || ''}
                                onChange={handleChange}
                                className="border border-gray-300 rounded w-full p-2"
                                required
                            />
                        )}
                    </div>
                ))}
                <button
                    type="submit"
                    className="bg-purple-600 text-white py-2 px-4 rounded shadow hover:bg-purple-500 transition"
                >
                    Commit Changes
                </button>
            </form>
        </div>
    );
};

export default Update;
