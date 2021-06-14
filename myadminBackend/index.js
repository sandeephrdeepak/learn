var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var nodemailer = require('nodemailer');


var app = express();
app.use(cors());
var client = new MongoClient("mongodb+srv://crudproject:crudproject@cluster0.pecv3.mongodb.net/school?retryWrites=true&w=majority",{useNewUrlParser:true, useUnifiedTopology:true});

var connection;
client.connect((err,db)=>{
    if(!err)
    {
        connection = db;
        console.log("database connected Successfully");
    }
    else
    {
        console.log("database could'nt connect");
    }
})


app.get('/list-student',(req,res)=>{
    var studentCollection= connection.db('school').collection('student');
    studentCollection.find().toArray((err,docs)=>{
        if(!err)
        {
            res.send({status:"ok", data:docs});
        }
        else{
            res.send({status:"failed", data:err});
        }
    })
}
);


app.get('/student-by-id',(req,res)=>{
    var studentCollection= connection.db('school').collection('student');
    studentCollection.find({_id:ObjectId(req.query.id)}.toArray((err,docs)=>{
        if(!err)
        {
            res.send({status:"ok", data:docs});
        }
        else{
            res.send({status:"failed", data:err});
        }
    })
)}
);

app.get('/delete-student',(req,res)=>{
    var studentCollection= connection.db('school').collection('student');
    studentCollection.remove({_id:ObjectId(req.query.id)},(err,result)=>{
        if(!err)
        {
            res.send({status:"ok", data:"student deleted Successfully"});
        }
        else{
            res.send({status:"failed", data:err});
        }
    })
});

app.post('/create-student', bodyParser.json(),(req,res)=>{

    var studentCollection= connection.db('school').collection('student');
    studentCollection.insert(req.body,(err,result)=>{
        if(!err)
        {
            res.send({status:"ok", data:"student created Successfully"});
        }
        else{
            res.send({status:"failed", data:err});
            sendMail("easyhealthreport@gmail.com","tzybddrrhplishlv",req.body.email,"Register Success","<h1>Your Registration is Successful</h1>")
        }
    })
});

app.post('/update-student', bodyParser.json(), (req,res)=>{
    var studentCollection= connection.db('school').collection('student');
    studentCollection.update({_id:ObjectId(req.body._id)},{$set:{name:req.body.name, age:req.body.age, marks:req.body.marks, email:req.body.email, city:req.body.city}},(err,result)=>{
        if(!err)
        {
            res.send({status:"ok", data:"student updated Successfully"});
        }
        else{
            res.send({status:"failed", data:err});
        }
    })
});


app.listen (3000, ()=>{
    console.log("Server is started on port 3000");

    })




    function sendMail(from, appPassword, to, subject,  htmlmsg)
{
    let transporter=nodemailer.createTransport(
        {
            host:"smtp.gmail.com",
            port:587,
            secure:false,
            auth:
            {
             //  user:"weforwomen01@gmail.com",
             //  pass:""
             user:from,
             pass:appPassword
            
    
            }
        }
      );
    let mailOptions=
    {
       from:from ,
       to:to,
       subject:subject,
       html:htmlmsg
    };
    transporter.sendMail(mailOptions ,function(error,info)
    {
      if(error)
      {
        console.log(error);
      }
      else
      {
        console.log('Email sent:'+info.response);
      }
    });
}