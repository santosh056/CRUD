const express = require("express");
const router = new express.Router();
const Student = require("../models/students");
router.get("/students",async (req,res) =>{
    try{
       const studentsData = await Student.find();
       res.status(200).send(studentsData);
    }catch(err){
        res.status(400).send(err);
    }
});

/* --------------- GET Request For Specific Data -------------------*/
router.get("/students/:id",async (req,res) =>{
    try{
        const _id = req.params.id;
        const studentData = await Student.findById(_id);// instead of {_id:_id} we are using _id because both(key and value) are same.
        if(!studentData){
            res.status(404).send("Data not found");
        }else{
            res.status(200).send(studentData);
        }
    }catch(err){
        res.status(400).send(err);
    }
});

/* --------------- Post Request using Promise -------------------*/

// app.post("/students", (req,res) =>{
//     const user = new Student(req.body);
//     user.save().then(() =>{
//         res.status(201).send(user);
//     }).catch((err) =>{
//         res.status(400).send(err);
//     })
// });

/* --------------- Post Request using Async await -------------------*/
router.post("/students", async(req,res) =>{
    try{
        const user = new Student(req.body);
        const creatUser = await user.save();
        res.status(201).send(creatUser);
    }catch(err){
        res.status(400).send(err);
    }
})

/* --------------- Patch Request using Async await -------------------*/
router.patch("/students/:id", async (req,res)=>{
    try{
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.status(200).send(updateStudent);
    }catch(err){
        res.status(400).send(err);
    }
});

/* --------------- DELETE Request -------------------*/

router.delete("/students/:id",async (req,res) =>{
    try{
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id);
        res.status(200).send(deleteStudent);
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;