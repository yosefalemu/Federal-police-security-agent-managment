import React, { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Input,
  TextField,
  Paper,
} from "@mui/material";

const ApplyPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Add logic to handle file upload
    if (selectedFile) {
      // Perform file upload logic here
      console.log("File uploaded:", selectedFile);
    } else {
      console.log("No file selected");
    }
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Paper sx={{ width: "30%", padding: "20px 30px 80px 30px" }}>
          <Typography variant="h4" gutterBottom>
            File Upload
          </Typography>
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
            id="username"
            label="Username"
            name="username"
            autoFocus
          />
          <Input
            type="file"
            onChange={handleFileChange}
            style={{ margin: "20px 0px" }}
          />

          <Button
            variant="contained"
            sx={{
              marginTop: "50px",
              background: "#112846",
            }}
          >
            Apply
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default ApplyPage;
