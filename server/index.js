const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const fileUpload = require('express-fileupload');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(express.static('public'));

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "June@12345",
  database: "adhoc"
});

connection.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('Database Connected Successfully');
  }
});


app.post('/Signup', (req, res) => {
    let {user_name,email,pass_word} = req.body;
  
    let sql = 'INSERT INTO signup1 (user_name,email,pass_word) VALUES (?,?,?)';
  
    connection.query(sql, [user_name,email,pass_word], (error) => {
      if (error) {
        let s = { "status": "error" };
        res.send(s);
        console.log(s);
      } else {
        let s = { "status": "Registered" };
        res.send(s);
        console.log(s);
      }
    });
  });

  app.listen(3003,()=>{
    console.log("server running")
  })