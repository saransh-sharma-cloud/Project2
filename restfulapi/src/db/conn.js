const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/students-api",{

}).then(() => {
    console.log('connection is successfull')
}).catch((e) => {
    console.log('err', e)
    console.log('No connecton')

})