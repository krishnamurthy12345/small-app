const express = require('express');
const db = require('mysql2')
const Bp = require('body-parser')
const cors = require('cors')

const add = express();
add.use(Bp.json());
add.use(express.json());
add.use(express.static('public'));
add.use(cors());

let con=db.createConnection({
    host:'localhost',
    user:'root',
    password:'June@12345',
    database:'adhoc'
})
con.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("DB Conected sucessfully")
    }

})
// API for insertion from customer through form
add.post('/insertdata', (request, response) => {
    let { name, address, city, pincode, country } = request.body;
    let sql = "insert into customers (name,address,city,pincode,country) values(?,?,?,?,?)";
    con.query(sql, [name, address, city, pincode, country], (err, result) => {
        if (err) {
            let a = { "status": "error" };
            response.send(a);
        }
        else {
            let a = { "status": "success" };
            response.send(a);

        }
    })
})
// for admin show the all customer list
add.get('/getalluser', (request, response) => {
    let sql = "select * from customers";
    con.query(sql, (err, result) => {
        if (err) {
            let a = { "status": "error" };
            response.send(a);
        }
        else {

            response.send(result);

        }
    })
})
//delete API for remove the inactive customer
add.post('/deletecus', (request, response) => {
    let id = request.body.id;
    let DQuery = "delete from customers where customer_id=?";
    con.query(DQuery, [id], (error, result) => {
        if (error) {
            let s = { "status": "error" };
            response.send(s);
        }
        else {
            let s = { "status": "success" };
            response.send(s);

        }
    })
})

// get call for updation 
add.get('/edits/:id', (request, response) => {
    let { id } = request.params;
    let sql = "select * from customers where customer_id=?";
    con.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error);
        }
        else {
            response.send(result);
        }
    })
})
// put call for updates details ;
add.put('/updateuser/:id', (request, response) => {
    let id = request.params.id;
    let { name, address, city, pincode, country } = request.body;
    let sql = 'update customers set name=?,address=?,city=?,pincode=?,country=? where  customer_id=?'
    con.query(sql, [name, address, city, pincode, country, id], (error, result) => {
        if (error) {
            let a = { "status": "error" };
            response.send(a);
        }
        else {
            let a = { "status": "success" };
            response.send(a);
        }
    })
})

//get single data to show the Description of the customer
add.get('/singledata/:id', (request, response) => {
    let { id } = request.params.id;
    let sql = "select * from customers where customer_id=?";
    con.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error);
        }
        else {
            response.send(result);
        }
    })

})
add.listen(3308, () => { console.log("Server Running on port no 3308") });