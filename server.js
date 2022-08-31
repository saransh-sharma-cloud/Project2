// const https= require('https')

// https.get('https://jsonplaceholder.typicode.com/todos', response => {
//     let data = '';
//     response.on('data', (chunk) => {
//     data += chunk;
//     });
//     response.on('end',() =>{
       
//         console.log(data);
//     });
// })
// .on('error', (error)=>{
//     console.log(error);
// })



// const http = require('http')

// const server = http.createServer((req,res) => {
//     if(req.url === '/'){
//         res.write('Hello World');
//         res.end();
//     }

//     if(req.url ==='/api/courses') {
//         res.write(JSON.stringify([1,2,3,4,5]));
//         res.end();
//     }
// });

// server.listen(3000);
// console.log('Listening on port 3000')

//                       http module


//                File System                 
// const fs = require('fs');

// fs.writeFileSync('read.txt','Hello how are you')

// fs.writeFileSync('read.txt','I am fine ,Hello how are you')

// fs.appendFileSync('read.txt','\nChai pi le milan')


// const buf_data = fs.readFileSync('read.txt')
// org_data = buf_data.toString();
// console.log(org_data)

// fs.renameSync('read.txt','readwrite.txt')

//            npm
// var http = require('http');
// var uc = require('upper-case');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(uc.upperCase("Hello World!"));
//   res.end();
// }).listen(3000); 

                   
//             Events
// const EventEmitter = require('events')
//       const event = new EventEmitter();

//      event.on('checkpage',(sc,msg) => {
//         console.log(`status code is ${sc} and the page is ${msg}`)
//      })
//       event.emit('checkpage' , 200, 'ok')


// const EventEmitter = require('events')
// const event = new EventEmitter();


// event.on('name',() => {
//     console.log('my name is saransh')
// })
// event.emit('name')

                       
//                          email node
// wdjfhvjjufejonqd = key


// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'saranshsharma723@gmail.com',
//     pass: 'wdjfhvjjufejonqd'
//   }
// });

// var mailOptions = {
//   from: 'saranshsharma723@gmail.com',
//   to: 'milansinghdav@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// }); 
                       
                //routing
    //   const express = require('express');
    //   const app = express()

    //   app.get('/hello', function(req,res) {

    //     res.send('Hello World!!!!');
    //   })
    //   app.get('/about' ,function(req,res){
    //           const userObj = {
    //             id:10,
    //             name:'saransh',
    //             lastname:'sharma',
    //             status:true
    //           }
    //           res.send(userObj);
    //         //   res.send('Hello')
    //   })
  
    //   app.get('/', function(req,res) {
    //     res.send('hiiii')
    //   })
    //   app.listen(3000);


                     //url building
    
                    //  const express = require('express')
                    //  const app = express()

                    //  app.get('/', function(req,res) {
                    //     res.send('Hello World')
                    //  })
                    //  app.get('/about/:id', function(req,res){
                    //     res.send('Profile ID:' + req.params.id)
                    //  })
                    //  app.get('/:course_name/courses/:id',function(req,res){
                    //     res.send('Course_Name:'+req.params.course_name+',ID:'+req.params.id);
                    //  })
                    //  app.get('/message/:phone_number([0-9]{10})',function(req,res){
                    //     res.send('Message To' + req.params.phone_number);
                    //  })
                    //  app.get('*',function(req,res){
                    //     res.send('Page Not Found....');
                    //  })
                    //  app.listen(3000)
                                    
                    // templating pug

    //       const express = require('express')
    //       const app = express()
    //      const path = require('path')


    //       app.set('views', path.join(__dirname,'views'))
    //       app.set('view engine','pug')
    //       app.get('/', function(req,res) {
    //             let articles = [
    //                 {
    //                 id:1,
    //                 title:'Article one',
    //                 author:'Saransh Sharma',
    //                 body:'This is article one'

    //                 },
    //                 {
    //                     id:2,
    //                     title:'Article two',
    //                     author:'Saransh Sharma',
    //                     body:'This is article two'
    
    //                     },
    //                     {
    //                         id:3,
    //                         title:'Article three',
    //                         author:'Saransh Sharma',
    //                         body:'This is article three'
        
    //                         },
    //                         {
    //                             id:4,
    //                             title:'Article four',
    //                             author:'Saransh Sharma',
    //                             body:'This is article four'
            
    //                             }
    //             ];
    //             res.render('index', {
    //                 title:'Articles',
    //                 articles:articles
    //             })
    //         })
    //      app.get('/articles/add', function(req,res){
    //         res.render('add_article',{
    //             title:'Hello World!!!!',
    //             url:'https://www.google.com/'
    //         })
    //      })
    //    app.listen(3000)

                        
    //                    ejs templating
    // const express = require('express')
    // const app = express()
    // const expressLayouts = require('express-ejs-layouts')
    
    
    
    // app.use(express.static('public'))
    // app.use('/css',express.static(__dirname + 'public/css'))

    // app.use(expressLayouts)
    // app.set('layout','./Layouts/full-width')
    // app.set('view engine', 'ejs')
     

    // app.get('',(req,res) => {
    //     res.render('index')
    // })
    // app.get('/about',(req,res) => {
    //     res.render('about')
    // })
    // app.listen(3000)
    require('dotenv').config()
    const express = require('express');
    const app = express()
    const mongoose = require('mongoose');
    const authRoutes = require('./routes/authRoutes')
    const port = process.env.PORT || 3000
    const path = require('path')
    const cookieParser = require('cookie-parser')
    mongoose.connect("mongodb://localhost:27017/jwt",{

    }).then(() => {
        console.log('connection is successfull')
    }).catch((e) => {
        console.log('err', e)
        console.log('No connecton')
    
    })

    //  console.log(process.env.SECRET_KEY)
    //middleware
    app.use(express.json());
    app.use(cookieParser());
     
    app.set('views', path.join(__dirname,'views'))
          app.set('view engine','ejs')

    app.listen(port, () => {
        console.log(`conneciton is setup at ${port}`)
    })

    app.use(authRoutes)

    //cookies
    // app.get('/set-cookies',(req,res) => {
    // res.cookie('newUser',false)
    // res.cookie('isEmployee',false,{maxAge: 360000},{httpOnly:true})
    //  res.send('you got the cookie')
    // });

    // app.get('/read-cookies',(req,res) => {
    //     const cookies = req.cookies;
    //     console.log(cookies);

    //     res.json(cookies)
    // })