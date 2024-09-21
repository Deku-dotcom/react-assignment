import React from 'react';


const Table = ({ data }) => {
    return (
        <table className="min-w-full border border-gray-500 bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
                <tr className="bg-blue-500 text-white ">
                    <th className="border border-gray-600 px-4 py-2 text-left">ID</th>
                    <th className="border border-gray-600 px-4 py-2 text-left">Name</th>
                    <th className="border border-gray-600 px-4 py-2 text-left">Age</th>
                    <th className="border border-gray-600 px-4 py-2 text-left">Phone Number</th>
                    <th className="border border-gray-600 px-4 py-2 text-left">Address</th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ? data.map((item) => (
                    <tr key={item.id} className="border-b transition duration-200 hover:bg-blue-100 hover:scale-95">
                        <td className="border border-gray-600 px-4 py-2">{item.id}</td>
                        <td className="border border-gray-600 px-4 py-2">{item.name}</td>
                        <td className="border border-gray-600 px-4 py-2">{item.age}</td>
                        <td className="border border-gray-600 px-4 py-2">{item.phoneno}</td>
                        <td className="border border-gray-600 px-4 py-2">{item.address}</td>
                    </tr>
                )) : (
                    <tr>
                        <td colSpan="5" className="border border-gray-600 px-4 py-2 text-center">No data found</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default Table;
