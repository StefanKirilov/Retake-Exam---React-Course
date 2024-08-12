const baseUrl = 'http://localhost:3030';

import { toast } from 'react-hot-toast';


export const login = async (data) => {
    try {
        const response = await fetch(
            `${baseUrl}/users/login`,
            {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(data)
            }
        )
    
        const result = await response.json();
        toast.success('Login Success!');
        return result;
    } catch (error) {
        toast.error('Wrong email or password!');
    }
}

export const register = async (data) => {
    try {
        const response = await fetch(
            `${baseUrl}/users/register`,
            {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(data)
            }
        )     

        if (response.status == 409) {
            throw new Error ('The user already registered!')            
        }

        const result = await response.json();
        toast.success('Registration Success!');
        return result;
    } catch (error) {
        toast.error(error.message);
    }
}

export const logout = async () => {
    try {
        const response = await fetch(
            `${baseUrl}/users/logout`,
            {
                method: 'GET',
            }
        )
    
        if (response.status === 204) {
            return {};
        };
    
        const result = await response.json();
    
        if (!response.ok) {
            throw result;
        }
    
        return result;
    } catch (error) {
        console.log(error);      
    }
}

export const getProfile = async () => {
    try {
        const response = await fetch(
            `${baseUrl}/users/profile`,
            {
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
        if (response.status === 204) {
            return {};
        };
    
        const result = await response.json();
    
        if (!response.ok) {
            throw result;
        }
    
        return result;
    } catch (error) {
        console.log(error);
    }
  }

  export const editProfile = async (data) => {
    try {
        const response = await fetch(
            `${baseUrl}/users/profile`,
            {
                method: "PUT",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
    
        if (response.status === 204) {
            return {};
        };
    
        const result = await response.json();
    
        if (!response.ok) {
            throw result;
        }
        
        return result;
    } catch (error) {
        console.log(error);
    }
  }