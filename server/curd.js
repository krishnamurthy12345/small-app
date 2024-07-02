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

app.post('/create_user',(request,response)=>{
    let {firstName,lastName,checked}=request.body;

    let sql='insert into Nmae(firstName,lastName,checked) values (?,?,?)';

    c.query(sql,[firstName,lastName,checked],(error,result)=>{
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

app.get('/Get/:id',(request,response)=>{
    let {id} =request.params;
    let sql='select * from Nmae where id=?';

    c.query(sql,id,(error,result)=>{
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

app.get('/Getdata',(request,response)=>{
    let {id} =request.params;
    let sql='select * from Nmae';

    c.query(sql,id,(error,result)=>{
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

app.put('/update/:id', (req, res) => {
    const { firstName,lastName,id } = req.body;
    const sql = ` UPDATE Nmae set firstName= ?,lastName= ? where id=? `
    c.query(sql, [firstName,lastName,id], (error, result) => {
      if (error) {
        let s = { "status": "error" };
        res.send(s);
      }
      else {
        let s = { "status": "updated" };
        res.send(s);
      }
    })
  })
  app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM Nmae WHERE id=?`;
  
    c.query(sql, [id], (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).json({ status: 'error' });
      } else if (result.affectedRows === 0) {
        // If no rows were affected, it means no booking was found with that ID
        res.status(404).json({ status: 'not found' });
      } else {
        res.status(200).json({ status: 'deleted' });
      }
    });
  });
  
  
app.listen(3003,()=>{console.log("database running 3003")});