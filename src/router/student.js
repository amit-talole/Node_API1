const express= require("express");
const router= new express.Router();

const Student = require("../model/student")


//defind router 
router.get("/amit",(req,res)=>{
    res.send("hello amit")
})


//router.get("/",(req,res)=>{
  //  res.send("hello localhost 3000")
//})
/*
router.post("/student",(req,res)=>{
    // res.send("hello from the student side");
    console.log(req.body)
    const user= new Student(req.body);

    // this is normal then and catch
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(401).send(err)
    })
}); */

// using async await

router.post("/student", async(req,res)=>{
    try {
       // console.log(req.body)
        const user = new Student (req.body);
        const CreateUser= await user.save();
         res.status(201).send(user)
        
    } catch (error) {
        res.status(400).send(error)
        
    }

})

// get Student data
router.get("/student", async (req,res)=>{

    try {
       const StudentData= await Student.find()
       res.status(200).send(StudentData)
       console.log(StudentData)
        
    } catch (error) {
        res.status(400).send(error)
        
    }
})
// find indivisual data

router.get("/student/:id",async(req,res)=>{
    try {
        const _id= req.params.id;
       const StudentFindOne= await Student.findById({_id});
       if(!StudentFindOne){
        res.status(200).send()
        console.log(StudentFindOne)
       }else{
        res.send(StudentFindOne)
       }
      // console.log(StudentFindOne)
    } catch (error) {
        res.status(400).send(error)
       // console.log(error)
    }    
})


// find data using name
router.get("student/:name", async(req,res)=>{
    try {
         const id= req.params.name;
         const StudentFindByName= await Student.findOne({id});
         if(!StudentFindByName){
             res.status(200).send()
         }else
         res.send(StudentFindByName)
    } catch (error) {
        res.status(500).send(error)
        
    }

})


// delete the student using id
router.delete("/student/:id", async (req,res)=>{
    try {
        const id= req.params.id;
        const deleteStudent= await Student.findByIdAndDelete(id)
        if(!id){
           return res.status(400).send()
        }else{
            res.status(200).send(deleteStudent)
        }
        
    } catch (error) {
        res.status(500).send(error)
        
    }
    
})

// update student using by id
router.patch("/student/:id",async (req,res)=>{
    try {
        const update= req.params.id;
        const updateStudent=  await Student.findByIdAndUpdate(update,req.body,{
            new:true
        });
        if(!update){
            res.status(400).send()
        }else{
            res.status(200).send(updateStudent)
        }
    } catch (error) {
        res.status(500).send(error)
        
    }
})

module.exports= router
