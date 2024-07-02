const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const fileupload=require('express-fileupload');
const mycon=require('mysql2');
// const { request,response } = require('express');


const app=express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(fileupload());
app.use(express.static('public'));

const c=mycon.createConnection(
    {
        host:"localhost",
        port:"3306",
        user:"root",
        password:"June@12345",
        database:"adhoc"

    }
)
c.connect(function(error)
{
    if(error)
    {
        console.log("error");
    }
    else{
        console.log("database connected");

    }
})

app.post('/emp_data',(request,response)=>{
    let {emp_name,emp_Degree,emp_salary}=request.body;

    let sql='insert into employee(emp_name,emp_Degree,emp_salary) values (?,?,?)';

    c.query(sql,[emp_name,emp_Degree,emp_salary],(error,result)=>{
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

// app.post('/Login_data',(request,response)=>{
//     let{username,password}=request.body;
//     let sql='select * from signup where username=?';
//     c.query(sql,[username],(error,result)=>{
//     if(error){
//         let s={"status":"error"};
//         response.send(s);
//     }
//     else if(result.length > 0){
//         let id=result[0].id;
//         let username1=result[0].username;
//         let password1=result[0].password;
//         if(username1== username&& password1== password){
//             let s={"status":"Success","id":id};
//             response.send(s)
//         }
//         else{
//             let s={"status":"Invalid"};
//             response.send(s);
//         }
//     }
//     else{
//         let s={"status":"final_error"};
//         response.send(s);
//     }
// })
// })

app.get('/Getsignup_data/',(request,response)=>{
    let sql='select * from signup';

    c.query(sql,(error,result)=>{
        if(error)
        {
            s={"status":"error"}
            response.send(s);
        }
        else{
            response.send(result);
        }
    })

})

app.listen(3002,()=>{console.log("database running 3002")});