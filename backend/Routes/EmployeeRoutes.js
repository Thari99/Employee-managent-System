const { createEmployee } = require('../Controllers/EmployeeController');
const { cloudinaryFileUploader } = require('../Middlewares/FileUploder');

const routes = require('express').Router();

routes.get('/', (req,res)=>{
    res.send('Get all Employees')
});
routes.post('/',cloudinaryFileUploader.single('profileImage'), createEmployee);
module.exports = routes;