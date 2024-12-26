import React from 'react'

function EmployeeManagementApp() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center w-100 p-3'>
            <h1>Employee Management App</h1>
            <div className='w-100 d-flex justify-content-center'>
                <div className='w-80 border bg-light p3' style={{width:'80%' }}>
                    <div className='d-flex justify-content-between mb-3'>
                        <button className='btn btn-primary'>
                            Add
                        </button>
                        <input
                            type='text'
                            placeholder='Seach Employee....'
                            className='form-control w-50'
                        />
                    </div>
                </div>
            </div>
    </div>
  )

}
export default EmployeeManagementApp