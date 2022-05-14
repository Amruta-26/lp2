const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Student = require('./model');
const dbConfig = require('./config');

var PORT = 3000;
var app = express();

app.set("view engine","ejs");   // for viewing
app.use(bodyParser.urlencoded({extended: true}));   // used for parsing url encoded bodies
app.use(bodyParser.json());     // used for parsing json data

mongoose.connect(dbConfig.url,{
    useNewUrlParser: true
}).then(()=>{
    console.log("Connected to the database");
}).catch((err)=>{
    console.log("Cannot connect to the database. Possible error => ",err);
    process.exit();
});

// form
app.get('/',(req,res)=>{
    res.render("index");
});

// add student
app.post('/addStudent',(req,res)=>{
    var stud = new Student(req.body);
    stud.save().then(()=>res.json({"message": "Successfully saved"})).catch((err)=>{
        res.status(400).json({"error": err});
    });
});

// get all students and count
app.get('/students',(req,res)=>{
    var query = {};
    
    // if(Object.keys(req.query).length != 0){
    //     var li = req.query['subject'].split(',').map(sub=>sub+"_Marks");
    //     var marks = parseInt(req.query['marks']);
    //     for(let i=0;i<li.length;i++){
    //         query[li[i]] = {$gt: marks};
    //     }
    // }
    
    Student.find(query).count().then((c)=>{
        Student.find(query).then((student)=>{
            res.render("table",{student:student, count:c});
        })
    }).catch((err)=>res.json({"error":err}));
});


app.get('/getdsbda', (req,res)=>{
    Student.find({"DSBSA_Marks":{$gt:20}}).select("Name")
    .then((rs)=>{
        res.json(rs);
    })
    
})

// delete any student
app.post('/deleteStudent/:id',(req,res)=>{
    Student.findByIdAndDelete(req.params.id).then((student)=>{
        res.redirect('/students');
    }).catch((err)=>{
        res.json({"error": err});
    })
});

// update any student
app.get('/updateStudent',(req,res)=>{
    var id = req.query['rollNo'];
    var marks = parseInt(req.query['marks']);
    Student.findOneAndUpdate({"Roll_No":id},{$inc:{"WAD_Marks":marks, "DSBDA_Marks":marks,"CC_Marks":marks,"CNS_Marks":marks,"AI_Marks":marks}}).then(()=>{
        res.redirect('/students');
    }).catch((err)=>{
        res.json({"error": err});
    });
});

app.listen(PORT,()=>{
    console.log("Listening");
})

// http://localhost:3000/students?subject=DSBDA&marks=20
// /students?subject=CNS,CC,AI&marks=20
// http://localhost:3000/updatestudent?rollNo=21554&marks=20