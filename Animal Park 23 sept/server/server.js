const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: 'smart@2099',
    database: 'smartdata'
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Routes

// Create a new employee
app.post('/api/employees', (req, res) => {
    const { name, email, age, phone, address } = req.body;
    db.query('INSERT INTO employees (name, email, age, phone, address) VALUES (?, ?, ?, ?, ?)', 
        [name, email, age, phone, address], 
        (err, results) => {
            if (err) {
                return res.status(400).json({ message: err.message });
            }
            res.status(201).json({ id: results.insertId, name, email, age, phone, address });
        }
    );
});

// Get all employees
app.get('/api/employees', (req, res) => {
    db.query('SELECT * FROM employees', (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json(results);
    });
});

// Update an employee
app.put('/api/employees/:id', (req, res) => {
    const { name, email, age, phone, address } = req.body;
    db.query('UPDATE employees SET name = ?, email = ?, age = ?, phone = ?, address = ? WHERE id = ?', 
        [name, email, age, phone, address, req.params.id], 
        (err, results) => {
            if (err) {
                return res.status(400).json({ message: err.message });
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ message: 'Employee not found' });
            }
            res.json({ id: req.params.id, name, email, age, phone, address });
        }
    );
});

// Delete an employee
app.delete('/api/employees/:id', (req, res) => {
    db.query('DELETE FROM employees WHERE id = ?', [req.params.id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json({ message: 'Employee deleted' });
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
