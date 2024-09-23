// GetData.js
import React, { useEffect, useState } from 'react';


const GetData = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/employees');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setEmployees(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            try {
                const response = await fetch(`http://localhost:5000/api/employees/${id}`, {
                    method: 'DELETE',
                });
                if (!response.ok) {
                    throw new Error('Failed to delete');
                }
                setEmployees((prev) => prev.filter(employee => employee.id !== id));
            } catch (err) {
                setError(err.message);
            }
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Employee Data</h2>
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">ID</th>
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Email</th>
                        <th className="border border-gray-300 p-2">Age</th>
                        <th className="border border-gray-300 p-2">Phone</th>
                        <th className="border border-gray-300 p-2">Address</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td className="border border-gray-300 p-2">{employee.id}</td>
                            <td className="border border-gray-300 p-2">{employee.name}</td>
                            <td className="border border-gray-300 p-2">{employee.email}</td>
                            <td className="border border-gray-300 p-2">{employee.age}</td>
                            <td className="border border-gray-300 p-2">{employee.phone}</td>
                            <td className="border border-gray-300 p-2">{employee.address}</td>
                            <td className="border border-gray-300 p-2">
                                <button
                                    onClick={() => handleDelete(employee.id)}
                                    className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-500 transition"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GetData;
