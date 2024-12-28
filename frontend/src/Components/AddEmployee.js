import React, { useState } from 'react'

function AddEmployee({showModal, setShowModal}) {
  const [employee,setEmployee] = useState({
    name:'',
    email:'',
    phone:'',
    department:'',
    salary:'',
    profileImage: null
  })
  
  const handleClose =()=>{
    setShowModal(false);
  }
  const handleChange = (e)=>{

  }
  const handleFileChange =(e)=>{
    const {name,value}=e.target;
    setEmployee({...employee,[name]:value});
  }
  return (
    <div className={`modal ${showModal ? 'd-block': ''} `}
        tabIndex={-1} role='dialog' style={{
            display: showModal ? 'block': 'none'
        }}
    >
        <div className='modal-dialog' role='document'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h5>Add Employee</h5>
                    <button type='button' className='btn-close'
                    onClick={()=> handleClose()}>

                    </button>
                </div>
                <div className='modal-body'>
                    <form onSubmit={()=>{}}>
                        <div className='mb-3'>
                            <label className='form-control'>Name</label>
                            <input 
                                type='text'
                                className='form-control'
                                name='name'
                                value={employee.name}
                                onChange={handleChange}
                                required/>
                        </div>
                        <div className='mb-3'>
                            <label className='form-control'>Email</label>
                            <input 
                                type='email'
                                className='form-control'
                                name='email'
                                value={employee.email}
                                onChange={handleChange}
                                required/>
                        </div>
                        <div className='mb-3'>
                            <label className='form-control'>Phone</label>
                            <input 
                                type='text'
                                className='form-control'
                                name='phone'
                                value={employee.phone}
                                onChange={handleChange}
                                required/>
                        </div>
                        <div className='mb-3'>
                            <label className='form-control'>Department</label>
                            <input 
                                type='text'
                                className='form-control'
                                name='department'
                                value={employee.department}
                                onChange={handleChange}
                                required/>
                        </div>
                        <div className='mb-3'>
                            <label className='form-control'>Salary</label>
                            <input 
                                type='text'
                                className='form-control'
                                name='salary'
                                value={employee.salary}
                                onChange={handleChange}
                                required/>
                        </div>
                        <div className='mb-3'>
                            <label className='form-control'>Frofile Image</label>
                            <input 
                                type='file'
                                className='form-control'
                                name='profileImage'
                                onChange={handleFileChange}
                                required/>
                        </div>
                        <button className='btn btn-primary' type='submit'>Save</button>
                    </form>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default AddEmployee