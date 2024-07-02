const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const fileupload=require('express-fileupload');
const mycon=require('mysql2');
const { request,response } = require('express');


const app=express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(fileupload());
app.use(express.static('public'));

const c=mycon.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"June@12345",
        database:"adhoc"

    }
)
c.connect(function(error)
{
    if(error)
    {
        console.log("database not connected");
    }
    else{
        console.log("database connected");

    }
})

app.post('/Signup_data',(request,response)=>{
    let {username,fathername,email,password}=request.body;

    let sql='insert into Signup(username,fathername,email,password) values (?,?,?,?)';

    c.query(sql,[username,fathername,email,password],(error,result)=>{
        if(error){
            let s={"status":"error"}
            response.send(s)
        }
        else{
            let s={"status":"success"}
            response.send(s)  
        }
    })
})

app.post('/Login_data',(request,response)=>{
    let{username,password}=request.body;
    let sql='select * from Signup where username=?';
    c.query(sql,[username],(error,result)=>{
    if(error){
        let s={"status":"error"};
        response.send(s);
    }
    else if(result.length > 0){
        let id=result[0].id;
        let username1=result[0].username;
        let password1=result[0].password;
        if(username1== username&& password1== password){
            let s={"status":"Success","id":id};
            response.send(s)
        }
        else{
            let s={"status":"Invalid"};
            response.send(s);
        }
    }
    else{
        let s={"status":"final_error"};
        response.send(s);
    }
})
})

app.get('/GetSignup_data/:id', (request, response) => {
    const userId = request.params.id;
    let sql = 'SELECT * FROM Signup WHERE id = ?';
    c.query(sql, [userId], (error, result) => {
        if (error) {
            let s = { "status": "error" };
            response.send(s);
        } else {
            response.send(result);
        }
    });
});app.put('/UpdateSignup_data/:id', (request, response) => {
    const userId = request.params.id;
    const { username, fathername, email, password } = request.body;
    let sql = 'UPDATE Signup SET username = ?, fathername = ?, email = ?, password = ? WHERE id = ?';
    c.query(sql, [username, fathername, email, password, userId], (error, result) => {
        if (error) {
            let s = { "status": "error" };
            response.send(s);
        } else {
            let s = { "status": "success" };
            response.send(s);
        }
    });
});


// DELETE request to remove a user by ID
app.delete('/DeleteSignup_data/:id', (request, response) => {
    const userId = request.params.id;
    let sql = 'DELETE FROM Signup WHERE id = ?';
    c.query(sql, [userId], (error, result) => {
        if (error) {
            let s = { "status": "error" };
            response.send(s);
        } else {
            let s = { "status": "success" };
            response.send(s);
        }
    });
});




app.listen(3008,()=>{console.log("server running 3008")});