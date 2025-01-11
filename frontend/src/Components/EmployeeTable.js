import React from 'react'
import {Link} from 'react-router-dom';

function EmployeeTable({
    employees,
    pagination,
    fetchEmployees,
    handleupdateEmployee,
    handleDeleteEmployee
    }
) {
    const headers=['Name', 'Email', 'Phone', 'Department', 'Actions'];
    const {currentPage, totalpages}=pagination;
    const TableRow = ({employee})=>{
        return <tr>
            <td>
                <Link to={`/employee/${employee._id}`} className='text-decoration-none'>
                    {employee.name}
                </Link>
            </td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.department}</td>
            <td>
                <i
                    className='bi bi-pencil-fill text-warning md-4'
                    role='button'
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    onClick={()=>handleupdateEmployee(employee)}
                ></i>
                <i
                    className='bi bi-trash-fill text-danger md-4'
                    role='button'
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    onClick={()=>handleDeleteEmployee(employee)}
                ></i>
            </td>
        </tr>
    }
    const pageNumber = Array.from ({length: totalpages}, (_,index)=> index +1);

    const handleNextpage=()=>{
        if(currentPage < totalpages){
            handlePagination(currentPage +1);
        }
    }
    const handlePreviouspage=()=>{
        if(currentPage >1){
            handlePagination(currentPage - 1);
        }
    }

    const handlePagination = (currentPage)=>{
        fetchEmployees('', currentPage, 5);
    }
    return (
    <>
        <table className='table table-striped'>
            <thead>
                <tr>
                    {
                        headers.map((header, i)=>(
                            <th key={i}>{header}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((emp)=>(
                        <TableRow key={emp._id} employee={emp}/>
                    ))
                }
                   
            </tbody>
            
        </table>
        <div className='d-flex justify-content-between align-items-center my-3'>
                <span className='badge bg-primary'>Page {currentPage} of {totalpages}</span>
                <div>
                    <button 
                        className='btn btn-outline-primary me-2'
                        onClick={()=> handlePreviouspage()}
                        disabled={currentPage ===1}
                        >
                            Previous
                    </button>
                    {
                        pageNumber.map((page)=>(
                            <button 
                                onClick={()=> handlePagination(page)}
                                className={`btn btn-outline-primary me-1 ${ currentPage === page ? 'active' : ''}`}>
                                {page}
                            </button>
                        ))
                    }
                    <button 
                        className='btn btn-outline-primary ms-2'
                        onClick={()=>handleNextpage()}
                        disabled={totalpages === currentPage}
                        >
                            Next
                    </button>
                </div>
            </div>
    </>
  )
}

export default EmployeeTable