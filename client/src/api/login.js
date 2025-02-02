import axios from "axios";


export const loginUser = async (user) => {
  try {
    const response = await axios.post("http://localhost:8084/login", user);
    if ( response?.status == 200) {
      localStorage.setItem("token", response.data);
      return response;
    } else {
      throw new Error("Authentication failed: No token received");
    }

      
  } catch (error) {


    throw new Error("An error occurred while logging in.");
  }
};


export const logoutUser = async () => {
    try {
        const token = localStorage.getItem('token');  
        
        const response = await axios.post('http://localhost:8084/logout', {}, {
            headers: {
                Authorization: `${token}`,  
            },
        });

        console.log(response.data);  


        localStorage.removeItem('token');
        window.location.href = '/login';  
    } catch (error) {
        console.error('Error during logout:', error);
    }
};


