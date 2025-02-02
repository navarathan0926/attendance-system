import { useNavigate } from "react-router-dom";
import { Box, Typography, Button  } from "@mui/material";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
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
