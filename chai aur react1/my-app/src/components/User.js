import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const { usersid } = useParams(); // Get usersid from the URL parameters
    const [user, setUser] = useState(usersid); // Initialize state with usersid

    return (
        <div>
            User ID: {user} {/* Display the user ID */}
        </div>
    );
}

export default User;
