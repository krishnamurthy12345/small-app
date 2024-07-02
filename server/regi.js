const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'June@12345',
    database:'adhoc'
});

// Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

// Route to handle the registration form data
app.post('/insertdata', (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  // Add your validation logic here
  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match!' });
  }

  const newUser = {
    username,
    email,
    password,
    confirmPassword,
  };


  db.query('INSERT INTO  validate SET ?', newUser, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error saving data' });
    }
    return res.status(200).json({ message: 'Registration successful!' });
  });
});

app.get('/getdata', (req, res) => {
  const query = 'SELECT * FROM validate';
  // const id = req.params.id;
  // console.log([username, email, password, confirmPassword, id]);
  db.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching data from database: ', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});



app.put('/updatedata/:id', (req, res) => {
  const id = req.params.id;
  const { username, email, password, confirmPassword } = req.body;

  // Add your validation logic here for the update operation
  if (!id) {
    return res.status(400).json({ message: 'ID is required!' });
  }

  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match!' });
  }
  let sql = 'UPDATE validate SET username = ?, email = ?, password = ?, confirmPassword = ? WHERE id = ?';
  const updatedUser = [
    username,
    email,
    password,
    confirmPassword,
    id,
  ];

  db.query(sql, updatedUser, (err, result) => {
    if (err) {
      console.error("Error updating data: ", err);
      return res.status(500).json({ message: 'Error updating data' });
    }
    console.log("Update result: ", result);
    return res.status(200).json({ message: 'Update successful!' });
  });
});




app.delete('/student/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM validate WHERE id = ?';

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
