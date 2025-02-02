import { useNavigate } from "react-router-dom";
import { Box, Typography, Button  } from "@mui/material";
import { logoutUser } from "../api/login"

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try{
      await logoutUser();

    }catch(error){
      throw error;
    }
    // try{
    //   const response = await logoutUser();
    //   if(response){
    //     console.log("Logout successfully");
        
    //   }
      
    // }catch(error){
    //     throw error;
    // }
    
  };


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
      }}
    >
      <Typography variant="h4">Welcome to Home Page</Typography>
      <Button
        onClick={handleLogout}
        variant="contained"
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default HomePage;
