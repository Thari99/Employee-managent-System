const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL).then(()=>{
    console.log("successfully connected with db.....");
}).catch((err)=>{
    console.log('Error in connection...',err);
});