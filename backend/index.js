//import express
const express = require('express');
const userRouter = require('./routers/userRouter');
const handicraftRouter = require('./routers/handicraftRouter');
const util = require('./routers/util');





const cors = require('cors');
//initilise express
const app = express();
const port = 5000;

//middleware for user
//parse jsom data
app.use(express.json());
app.use(cors({
    origin : ['http://localhost:3000']
}));
app.use( '/user',userRouter);
app.use( '/handicraft',handicraftRouter);
app.use( '/util',util);



app.use(express.static('./uploads'));



app.get('/',(req,res) => {
    res.send('respons from express');
 
 });
 //middleware for product
 
 
 //add
 app.get('/app',(req,res) => {
     res.send('response from add');
 });
 //getall
 app.get('/getall',(req,res) => {
     res.send('response from getall');
 });
 //getbyid
 app.get('/getbyid',(req,res) => {
     res.send('response from getbyid');
 });
 //update
app.get('/update',(req,res) => {
    res.send('response from update');
});
//delete
app.get('/delete',(req,res) => {
    res.send('response from delete');
});




//strating the server 
app.listen( port, () => { console.log('server started')}) ;

