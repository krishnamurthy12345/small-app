const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(express.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'June@12345',
  database: 'adhoc'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
    return;
  }
  console.log('MySQL Connected...');
});

// Route to create a student
app.post('/student', (req, res) => {
  const { name, email } = req.body;
  const sql = 'INSERT INTO actions (name, email) VALUES (?, ?)';
  const values = [name, email];

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error saving data' });
    return res.status(201).json({ message: 'Registration successful!' });
  });
});

// Route to get all students
app.get('/getdata', (req, res) => {
  const query = 'SELECT * FROM actions';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching data from database: ', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});

// Route to update a student
app.put('/updatedata/:id', (req, res) => {
  const { name, email } = req.body;
  const id = req.params.id;
  const sql = 'UPDATE actions SET name = ?, email = ? WHERE id = ?';
  const values = [name, email, id];

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error updating data' });
    return res.json({ message: 'Updated successfully' });
  });
});

// Route to delete a student
app.delete('/mydata/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM actions WHERE id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ message: 'Error deleting data' });
    return res.json({ message: 'Deleted successfully' });
  });
});

// Start the server on port 3008
const port = 3008;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
