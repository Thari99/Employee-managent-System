const express = require('express');
const app = express();
require ('dotenv').config();
const PORT = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send("Emplyee mng server is running");
});
app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`);
});
