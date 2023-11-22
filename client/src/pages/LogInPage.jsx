import React from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";
import { Link } from "react-router-dom";

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
          variant="h5"
          textAlign={"center"}
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{
              marginTop: "20px",
              backgroundColor: "#EDC154",
              color: "#112846",
            }}
            component={Link}
            to="/home"
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default LogInPage;
