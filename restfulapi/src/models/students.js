const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    
        email:{
            type:String,
            required:true,
            unique:[true,'Email id already present'],
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error('Invalid Email')
                }
            }
        },
        phone:{
            type:Number,
            min:10,
            required:true,
            unique:true
        },
        address:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
})


studentSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt)

    this.confirmpassword = undefined

    next();
})

const Student = new mongoose.model('Student', studentSchema)

module.exports = Student;