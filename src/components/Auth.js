import React, { useState } from "react";
import { Box, Button, TextField, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
function Auth() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [input, setInput] = useState({
        name: "nimesh",
        email: "",
        password:"zz"
    });

    const handleChange= (e) =>{
        setInput((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value,
            [e.target.email] : e.target.value,
            [e.target.password] : e.target.value,
        })) 
    }
    const handleSubmit= (e) =>{
       e.preventDefault(); 
       console.log(input);
    }

    const resetState = () =>{
        setIsSignUp(!isSignUp)
        setInput({name: "", email : "", password: ""});
    }
    return (
        <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection={"column"}
                maxWidth="400px"
                alignItems="center"
                justifyContent={"center"}
                margin="auto"
                marginTop={5}
                padding={3}
                borderRadius={5}
                boxShadow={"5px 5px 10px #ccc"}
                sx={{
                    ":hover":
                    {
                        boxShadow: "5px 5px #ccc"
                    }
                }}
            >
                <Typography variant="h2" padding={3} textAlign="center"> {isSignUp ? "SignUp" : "Login"}</Typography>
                {isSignUp && 
                <TextField 
                onChange = {handleChange}
                margin="normal" 
                value = {input.name}
                name = "name"
                type={'name'} 
                variant="outlined"
                 placeholder="Name" />}

                <TextField margin="normal"
                name="email"
                onChange = {handleChange}
                value = {input.email}
                    type={'email'}
                    variant="outlined"
                    placeholder="Email" />

                <TextField margin="normal"
                onChange = {handleChange}
                name = "password"
                value = {input.password}
                    type={'password'}
                    variant="outlined"
                    placeholder="Password" />

                <Button 
                endIcon = {isSignUp ? <HowToRegIcon/> : <LoginIcon/>}
                 type = "submit"
                    sx={{ marginTop: 3, borderRadius: 7 }}
                    variant="contained"
                    color="warning">
                    {isSignUp ? "SignUp" : "Login"}
                </Button>

                <Button onClick={resetState}
                    sx={{ marginTop: 3, borderRadius: 7 }}>
                    Change to  {isSignUp ? "Login" : "SignUp"}
                </Button>
            </Box>
        </form>
    )
}
export default Auth;
