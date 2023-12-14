const mongoose = require('mongoose');
const url = "mongodb+srv://shambhvee2001tripathi:shambhvee2001@cluster0.76fkjgo.mongodb.net/handicraft?retryWrites=true&w=majority";
mongoose.connect(url)
    
 //asynchronus function 
 //.then  function used to show it in terminal to user that it had run succesfully in the background 
 //.catch also like .the but it will show that if any errror occur in run in browser 
.then((result) => {
    console.log('database connected')
}).catch((err) => {
    console.log(err);
    
});
module.exports = mongoose;
//mongoose is framwork
