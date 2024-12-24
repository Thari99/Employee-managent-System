const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    profileImage:{
        type: String,
        
    },
    salary:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
    updateddAt:{
        type: Date,
        default: new Date()
    }
});

const EmployeeModel = mongoose.model('employee', EmployeeSchema);
module.exports = EmployeeModel;