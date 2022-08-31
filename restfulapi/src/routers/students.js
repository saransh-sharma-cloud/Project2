const express = require('express')
const router = new express.Router();
const Student = require('../models/students')



router.post('/students',async(req,res) => {
    try{
    const user = new Student(req.body)

    const createUser = await user.save();
    res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
})



router.get('/students',async(req,res) => {
    try{
       const studentsData= await Student.find({},{'__v': 0})
       console.log('data   ',studentsData);
    //    studentsData = studentsData.map(student=>{
    //     console.log('st data',student)
    //     return student._doc;
    //    })
   
       res.json(studentsData);
    }catch(e){
      res.send(e)
    }
})
 

                    //getting data of indivisual student
router.post('/students/:id',async(req,res) => {
try{
         const _id = req.params.id;
        //  console.log(req.params.id)
        //  res.send(req.params.id)

         const studentData =  await Student.findById(_id);
         console.log(studentData)
         if(!studentData){
            return res.status(404).send();
         }else{
            res.send(studentData)
         }
    }catch(e){
res.status(500).send(e)
}
})


router.patch('/students/:id', async(req,res) => {
try{
       const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
            new:true
        })
            res.send(updateStudents)
        
}catch(e){
      res.status(404).send(e)
}
})
 // delete student records
 router.delete('/students/:id', async(req,res) =>{
try{
    const _id = req.params.id;
    const deleteStudents = await Student.findByIdAndDelete(_id)
    if(!req.params.id){
        return res.send(400).send(e)
    }
    res.send(deleteStudents)
}catch(e){
    res.status(500).send(e)
}
 })




module.exports = router;