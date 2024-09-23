// Header.js
import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Register from './Register';

const Header = ({ setRegisteredUsers }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRegister = (newUser) => {
        setRegisteredUsers((prev) => [...prev, newUser]);
        setIsModalOpen(false);
    };

    const navigate = useNavigate();
    
        const handleHomeClick = () => {
            navigate('/'); // Navigate to the home page
        };
    

    return (
        <div>
            <header className="bg-gray-800 p-4 flex justify-between items-center">
                <h1 onClick={handleHomeClick} className="text-white cursor-pointer text-2xl">People Hub</h1>
                <div className="flex space-x-4">
                    <button
                        className="bg-purple-600 text-white py-2 px-4 rounded shadow hover:bg-purple-500 transition"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Register
                    </button>
                    <Link to="/data">
                        <button className="bg-purple-600 text-white py-2 px-4 rounded shadow hover:bg-purple-500 transition">
                            Data
                        </button>
                    </Link>
                    <Link to="/update">
                        <button className="bg-purple-600 text-white py-2 px-4 rounded shadow hover:bg-purple-500 transition">
                            Update
                        </button>
                    </Link>
                </div>
            </header>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                        <Register onClose={() => setIsModalOpen(false)} onRegister={handleRegister} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
