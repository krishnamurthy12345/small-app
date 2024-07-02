const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const fileupload = require('express-fileupload');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());
app.use(express.static('public'));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "June@12345",
    database: "adhoc"
});

connection.connect(function (error) {
    if (error) {
        console.error('Error connecting: ' + error.stack);
        return;
    }
    console.log('Database connected successfully');
});

// // Create countries table
// const createTableQuery = `
//     CREATE TABLE IF NOT EXISTS countries (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         iso2 VARCHAR(2) NOT NULL
//     )`;

// connection.query(createTableQuery, function (err, results, fields) {
//     if (err) {
//         console.error('Error creating table: ' + err.stack);
//         return;
//     }
//     console.log('Table created successfully');
// });

app.post('/countries', (req, res) => {
    let insert1 = req.body.data;

    const query = 'INSERT INTO countries(name, iso2) VALUES ?';
    const values = insert1.map((item) => [item.name, item.iso2]);

    connection.query(query, [values], (err, result) => {
        if (err) {
            res.status(500).send('Error storing data');
            console.error(err);
        } else {
            res.status(200).send('Data stored successfully');
            console.log('Data stored successfully');
        }
    });
});

app.listen(3004, () => {
    console.log("server running")
});
