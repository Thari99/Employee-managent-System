import React, { useState } from 'react';
import { CreateEmployee } from '../api';
import { notify } from '../utils';

function AddEmployee({ showModal, setShowModal }) {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    salary: '',
    profileImage: null,
  });
  const resetEmployeeState = ()=>{
    setEmployee({
      name: '',
      email: '',
      phone: '',
      department: '',
      salary: '',
      profileImage: null,
    })
  }

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target; // Get name and value from the event target
    setEmployee({ ...employee, [name]: value }); // Update state with new value
  };

  const handleFileChange = (e) => {
    
    setEmployee({ ...employee, profileImage: e.target.files[0] }); // Update state with selected file
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(employee);
    try {
        const{success, message}= await CreateEmployee(employee);
        console.log(success, message);
        if(success){
          notify(message,'success')
        }else{
          notify(message,'error')
        }
        setShowModal(false);
        resetEmployeeState();
    } catch (err) {
      notify('Failed to create employee, try again','error')
    }
  }

  return (
    <div className={`modal ${showModal ? 'd-block' : ''}`} tabIndex={-1} role='dialog' style={{ display: showModal ? 'block' : 'none' }}>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5>Add Employee</h5>
            <button type='button' className='btn-close' onClick={handleClose}></button>
          </div>
          <div className='modal-body'>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input 
                  type='text'
                  className='form-control'
                  name='name'
                  value={employee.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input 
                  type='email'
                  className='form-control'
                  name='email'
                  value={employee.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Phone</label>
                <input 
                  type='text'
                  className='form-control'
                  name='phone'
                  value={employee.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Department</label>
                <input 
                  type='text'
                  className='form-control'
                  name='department'
                  value={employee.department}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Salary</label>
                <input 
                  type='text'
                  className='form-control'
                  name='salary'
                  value={employee.salary}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Profile Image</label>
                <input 
                  type='file'
                  className='form-control'
                  name='profileImage'
                  onChange={handleFileChange}
                  required
                />
              </div>
              <button className='btn btn-primary' type='submit'>Save</button>
            </form>
          </div>
        </div>
      </div>    
    </div>
  );
}

export default AddEmployee;
