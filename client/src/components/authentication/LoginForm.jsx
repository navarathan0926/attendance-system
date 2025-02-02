import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { loginUser } from "../../api/login";


const schema = yup.object().shape({
  username: yup.string().required("Username is required")
  .matches(
    /^[a-zA-Z0-9_-]{3,20}$/, 
    "Username must be between 3 to 20 characters and can only contain letters, numbers, underscores, or hyphens."
  ),
  password: yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/,
      "Password must be at least 8 characters and include uppercase, lowercase, and special characters."
    ),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });


  const onSubmit = async (data) => {
    console.log("Login Data:", data);
    try {
      const response = await loginUser(data);
      console.log("res==== ", response);
      if (response.status == 200) {
        console.log("first")
        navigate("/home"); 
      } 
    } catch (error) {
        throw error;
    }
  };
  



  return (
    <Container maxWidth="sm" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Box
      sx={{
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 2, width: "100%" }}
        >
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#1976d2" }}
          >
            Login
          </Button>
        </Box>

        
      </Box>
    </Container>
  );
};

export default LoginForm;