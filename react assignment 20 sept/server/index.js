const express = require('express');
const cors = require('cors');
const db = require('./db');

const myapp = express();
myapp.use(cors());

// to show all users
myapp.get('/api/users/all', (req, res) => {
    const sql = `SELECT * FROM users`;
    
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// to search users 
myapp.get('/api/users', (req, res) => {
    const searchTerm = req.query.searchTerm || '';
    const sql = `
        SELECT * FROM users 
        WHERE id LIKE ? OR name LIKE ? OR age LIKE ? OR phoneno LIKE ? OR address LIKE ?
    `;
    const queryParams = [`%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`];

    db.query(sql, queryParams, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

myapp.listen(4000, () => {
    console.log("Server is running on port 4000");
});
