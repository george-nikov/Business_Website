const express = require('express');

const app = express();

//SQL install
const mysql = require('mysql');
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'dental'
})

const port = process.env.PORT || 3000

app.get('/form', (req,res) => {
    res.sendFile(__dirname + '/'+ 'form.html');
});

app.post('/form',(req,res) =>{
    var name = req.body.name;
    var lastname = req.body.lastname

db.connect(err =>{
    if (err){
        throw err
    }
   var sql = "INSERT INTO students (name, lastname) VALUES ('"+name+"','"+lastname+"')";
    db.query(sql, (err,result) =>{
        if (err){
            throw err;
        }
        res.send('STUDENTS ADDED'+result.insertId)
    })
} )
})


app.listen(port,
    () => console.log(`Expresso ☕ is on Port ${port} Ctrl + C to Stop `))
