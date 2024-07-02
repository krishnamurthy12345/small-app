const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'June@12345',
  database: 'adhoc'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

// Create User
// Create User
app.post('/create_user', (req, res) => {
  const { username, email, password } = req.body;
  const sql = 'INSERT INTO follow (username, email, password) VALUES (?, ?, ?)';
  db.query(sql, [username, email, password], (err, result) => {
    if (err) {
      console.error('Error creating user', err);
      res.status(500).send('Error creating user');
    } else {
      res.status(200).send('User created successfully');
    }
  });
});


// Update User
app.put('/update/:id', (req, res) => {
  const { username, email, password } = req.body;
  const { id } = req.params;
  const sql = 'UPDATE follow SET username = ?, email = ?, password = ? WHERE id = ?';
  db.query(sql, [username, email, password, id], (err, result) => {
    if (err) {
      res.status(500).send('Error updating user');
      throw err;
    }
    res.send('User updated successfully');
  });
});

// Delete User
app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM follow WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      res.status(500).send('Error deleting user');
      throw err;
    }
    res.send('User deleted successfully');
  });
});

// Retrieve Users
app.get('/Getdata', (req, res) => {
  const sql = 'SELECT * FROM follow';
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send('Error retrieving users');
      throw err;
    }
    res.send(result);
  });
});

const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
