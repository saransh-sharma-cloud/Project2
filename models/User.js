const mongoose = require('mongoose')
const {isEmail} = require('validator');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    email: {
        type:String,
        required:[true,'please enter an email'],
        unique:true
        // validate:[isEmail, 'please enter a valid email']
    },
    password: {
        type:String,
        required:[true,'please enter an password'],
        minlength: [6,'Minmum password length is 6 characters']
    }
},{
    timestamps : true
});
// await new promise((resolve , reject) =>{   
//        return bcrypt.hash(this.password, salt ,function (err , hashed){
//             if(err){
//                 console.log('error' , err)
//             }
//             else{
//                 console.log('hashed' , hashed)
//                 return resolve(hashed)
//             }
//         })
//     })

userSchema.pre('create', async function(next){
    console.log("in function")
    let hashedPassword = await new Promise((resolve, reject) => {  
          //Encrypt password
        console.log("passwoord",this.password);
        bcrypt.hash(this.password, 10, function (err, hash) {
    
            if (err) { return res.send({ status: 0, message: "Oops, something went wrong while signup." }) }
    
            resolve(hash)
    
        });
    
    })
//     const salt = await bcrypt.genSalt();
//      this.password = await new promise((resolve , reject) =>{   
//        return bcrypt.hash(this.password, salt ,function (err , hashed){
//             if(err){
//                 console.log('error' , err)
//             }
//             else{
//                 console.log('hashed' , hashed)
//                 return resolve(hashed)
//             }
//         })
//     })
//     next();
})



const User = mongoose.model('User',userSchema)
module.exports = User;