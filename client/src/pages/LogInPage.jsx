import React from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

const LoginButton = styled(Button)({
  marginTop: "20px",
  background: "#112846",
  color: "#fff",
  variant: "contained",
  "&:hover": {
    background: "#192E77",
  },
});
const LogInPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper sx={{ width: "30%", padding: "20px 30px 80px 30px" }}>
        <Typography
          component="h1"
          variant="h4"
          textAlign={"center"}
          color={"#EDC154"}
          fontWeight={700}
          sx={{ marginBottom: "30px" }}
        >
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <LoginButton
            type="submit"
            fullWidth
            variant="contained"
            component={Link}
            to="/home"
          >
            Login
          </LoginButton>
        </form>
      </Paper>
    </Box>
  );
};

export default LogInPage;
