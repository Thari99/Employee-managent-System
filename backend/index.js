const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require ('dotenv').config();
const PORT = process.env.PORT || 8080;
require('./Models/db');
const EmployeeRouter = require('./Routes/EmployeeRoutes');

app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send("Emplyee mng server is running");
});
app.use('/api/employees',EmployeeRouter);

app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`);
});
