// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Register from './components/Register';
import Data from './components/GetData';
import Update from './components/Update';

const App = () => {
    const [registeredUsers, setRegisteredUsers] = useState([]);

    return (
        <Router>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                <Routes>
                    <Route path="/register" element={<Register setRegisteredUsers={setRegisteredUsers} />} />
                    <Route path="/data" element={<Data registeredUsers={registeredUsers} setRegisteredUsers={setRegisteredUsers} />} />
                    <Route path="/update" element={<Update registeredUsers={registeredUsers} setRegisteredUsers={setRegisteredUsers} />} />
                    <Route path="/" element={
                        <div className="text-center px-4">
                            <h1 className="text-5xl font-bold mb-6">Welcome to People Hub</h1>
                            <p className="text-lg mb-2 max-w-md mx-auto">
                                Effortlessly manage your employee records with our user-friendly interface.
                            </p>
                            <p className="text-lg mb-2 max-w-md mx-auto">
                                ✨ Register new employees.
                            </p>
                            <p className="text-lg mb-2 max-w-md mx-auto">
                                📊 View existing records.
                            </p>
                            <p className="text-lg mb-4 max-w-md mx-auto">
                                🔄 Update information— all with just a few clicks.
                            </p>
                            <p className="text-sm">
                                Get started by selecting an option from the navigation above!
                            </p>
                        </div>
                    } />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
