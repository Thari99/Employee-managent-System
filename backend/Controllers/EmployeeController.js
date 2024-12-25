const { parse } = require("dotenv");
const EmployeeModel = require("../Models/EmployeeModel");

const createEmployee = async(req,res)=>{
   try{
        const body = req.body;
        body.profileImage = req.file? req.file?.path : null;
        console.log(body);
        const emp = new EmployeeModel(body);
        await emp.save();
        res.status(201).json({
            message:"employee created",
            success:true,
        })

   }catch(err){
        res.status(500).json({
            message:"Internal server error",
            success: false,
            error:err
        })
   }
}

const updateEmployeeById = async(req,res)=>{
    try{
         const {name, phone, email, salary, department} = req.body;
         const{id} = req.params;
         
         let updateData = {
            name,phone,email,salary,department, updateAt: new Date()
         }

         if(req.file){
            updateData.profileImage = req.file.path;
         }
         const updateEmployee = await EmployeeModel.findByIdAndUpdate(
            id,
            updateData,
            {new: true}
         )
         if(!updateEmployee){
            return res.status(404).json({message:'Employee not found'});
         }
         res.status(200).json({
             message:"employee updated",
             success:true,
             data: updateEmployee
         });
 
    }catch(err){
         res.status(500).json({
             message:"Internal server error",
             success: false,
             error:err
         })
    }
 }

const getAllEmployees = async(req,res)=>{
    try{
         let{page, limit, search}= req.query;

         page = parseInt(page) || 1;
         limit = parseInt(limit)|| 5;

         const skip = (page-1)*limit;

         let searchCriteria = {};
         if(search){
            searchCriteria = {
                name:{
                    $regex: search,
                    $options: 'i'
                }
            }
         }

         const totalEmployeess = await EmployeeModel.countDocuments(searchCriteria);

         const emps = await EmployeeModel.find(searchCriteria)
            .skip(skip)
            .limit(limit)
            .sort({updateAt: -1});
        
         const totalpages = Math.ceil(totalEmployeess/limit);
         res.status(200).json({
             message:"All employee",
             success:true,
             data: {
                employees: emps,
                pagination:{
                    totalEmployeess,
                    currentPage:page,
                    totalpages,
                    pageSize: limit
                }
             }
         })
 
    }catch(err){
         res.status(500).json({
             message:"Internal server error",
             success: false,
             error:err
         })
    }
 };

 const getEmployeeById = async(req,res)=>{
    try{
         const {id} = req.params;
         const emp = await EmployeeModel.findOne({_id: id});
         res.status(200).json({
             message:"Get Employeee By Id",
             success:true,
             data: emp
         })
 
    }catch(err){
         res.status(500).json({
             message:"Internal server error",
             success: false,
             error:err
         })
    }
 }

 const deleteEmployeeById = async(req,res)=>{
    try{
         const {id} = req.params;
         const emp = await EmployeeModel.findByIdAndDelete({_id: id});
         res.status(200).json({
             message:"Emplyee Deleted:",
             success:true,
             data: emp
         })
 
    }catch(err){
         res.status(500).json({
             message:"Internal server error",
             success: false,
             error:err
         })
    }
 }

module.exports={
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    deleteEmployeeById,
    updateEmployeeById
}