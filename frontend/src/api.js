
const BASE_URL = 'http://localhost:8080';


export const GetAllEmployees = async(search= '', page= 1,limit = 5)=>{
    const url = `${BASE_URL}/api/employees?search=${search}&page=${page}&limit=${limit}`;
    
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        
        
        const result = await fetch(url,options);
        const data = await result.json();      

        return data
    } catch (err) {
        console.log('Error fetching employees:', err);
        return err;
        
    }
}