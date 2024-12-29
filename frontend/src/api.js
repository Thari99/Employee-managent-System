
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

export const CreateEmployee = async(empObj)=>{
    const url = `${BASE_URL}/api/employees`; 
    
        const formData = new FormData();

        for(const key in empObj){
            formData.append(key,empObj[key]);
        }
        const options = {
        method: 'POST',
        body:formData
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