 const mongoose = require('mongoose')
 //const express = require('express')
 mongoose.connect('mongodb://localhost:27017/ssaransh'
//  , {useNewUrlParser:true,useUnifiedTopology:true}
 )
 .then(()=> console.log('connection successfull....'))
 .catch((err) => console.log(err))


             //schema created
 const playlistSchema = new mongoose.Schema({
    name: String,
    type: String,
    age: Number,
    videos: Number,
    active: Boolean,
    date : {
        type: Date,
        default: Date.now
    }
 })

      //collection created
    //   const Pratice = new mongoose.model("Pratice",playlistSchema)
    //   let obj = {
    //     name: 'milan',
    //     age: 23.78787,
    //     videos: 100
    //   }
    //   let new_practice = new Pratice(obj);
    //   new_practice.save();
            
      //collection created
   const Pratice = new mongoose.model("Pratice",playlistSchema)
                  
      //create document or insert

      const createDocument = async() => {
        try {
     const reactPlaylist = new Pratice({
        name: "React JS",
        type: "Front End",
        age: 23,
        videos: 100,
        active: true
     })
    
     const result = await reactPlaylist.save()
     console.log(result);
    }catch(err){
        console.log(err)
    }
}
    createDocument()