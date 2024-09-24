import React, { useState } from 'react';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';

const Table = ({ data, fetchData,currentPage,limit }) => {
    const [showUpdate, setShowUpdate] = useState(false);
    const [userId, setUserId] = useState(null);

    const handleUpdateClick = (id) => {
        setUserId(id);
        setShowUpdate(true);
    };

    const handleClose = () => {
        setShowUpdate(false);
        setUserId(null);
    };

    const handleDeleteClick = (id) => {
        console.log('Deleting user with ID:', id); 
        DeleteUser(id, fetchData); 
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-500 bg-white shadow-lg rounded-lg">
                <thead>
                    <tr className="bg-blue-500 text-white">
                        <th className="border border-gray-600 w-1/12 px-4 py-2 text-left">ID</th>
                        <th className="border border-gray-600 w-3/12 px-4 py-2 text-left">Name</th>
                        <th className="border border-gray-600 w-2/12 px-4 py-2 text-left">Age</th>
                        <th className="border border-gray-600 w-3/12 px-4 py-2 text-left">Phone Number</th>
                        <th className="border border-gray-600 w-4/12 px-4 py-2 text-left">Address</th>
                        <th className="border border-gray-600 w-2/12 px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? data.map((item, index) => (
                        <tr key={item.id} className="border-b transition duration-200 hover:bg-blue-100 hover:scale-95">
                            <td className="border border-gray-600 w-1/12 px-4 py-2">{(currentPage - 1) * limit + index + 1}</td>
                            <td className="border border-gray-600 w-3/12 px-4 py-2">{item.name}</td>
                            <td className="border border-gray-600 w-2/12 px-4 py-2">{item.age}</td>
                            <td className="border border-gray-600 w-3/12 px-4 py-2">{item.phoneno}</td>
                            <td className="border border-gray-600 w-4/12 px-4 py-2">{item.address}</td>
                            <td className="border border-gray-600 w-2/12 px-4 py-2">
                                <div className="flex justify-between">
                                    <button onClick={() => handleUpdateClick(item.id)} className="text-blue-500 bg-blue-100 hover:bg-blue-300 px-3 py-1 rounded transition duration-200">Update</button>
                                    <button onClick={() => handleDeleteClick(item.id)} className="text-red-500 bg-red-100 hover:bg-red-300 ml-2 px-3 py-1 rounded transition duration-200">Delete</button>
                                </div>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="6" className="border border-gray-600 px-4 py-2 text-center">No data found</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Update User Modal */}
            <UpdateUser showUpdate={showUpdate} onClose={handleClose} userId={userId} fetchData={fetchData} />
        </div>
    );
};

export default Table;
