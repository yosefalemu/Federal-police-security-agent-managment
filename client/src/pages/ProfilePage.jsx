import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  styled,
} from "@mui/material";

const UpdateButton = styled(Button)({
  marginTop: "24px",
  background: "#112846",
  borderRadius: "15px",
  "&:hover": {
    background: "#192E77",
  },
});

const ProfilePage = () => {
  const [image, setImage] = useState(null);
  const userInformation = [
    { label: "First Name", value: "Misgan" },
    { label: "Last Name", value: "Moges" },
    { label: "Phone Number", value: "+251953263345" },
    { label: "Email", value: "misganmoges03@gmail.com" },
    { label: "User Name", value: "FPCmisge" },
    { label: "Department", value: "Developer" },
  ];

  const handleFormChange = (e) => {
    // const { name, value } = e.target;
    // setProfileInfo({
    //   ...profileInfo,
    //   [name]: value,
    // });
  };

  const handleprofileInfo = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, padding: "66px 8px 32px 8px" }}
        >
          <Paper>
            <Grid container spacing={2}>
              {/* First Column: User Profile Display */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    height: "80%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: {
                      xs: "40px",
                      md: "0px",
                    },
                  }}
                >
                  <Box
                    textAlign="center"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <Avatar
                      alt="User Image"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      sx={{
                        width: { xs: 100, md: 120, xl: 150 },
                        height: { xs: 100, md: 120, xl: 150 },
                        alignSelf: "center",
                        marginBottom: 4,
                      }}
                    />
                    <TableContainer sx={{ width: "100%" }}>
                      <Table>
                        <TableBody>
                          {userInformation.map((row, index) => (
                            <TableRow
                              key={row.label}
                              sx={{
                                "&:nth-of-type(odd)": {
                                  backgroundColor: "#F6F5F5",
                                },
                                padding: 2,
                              }}
                            >
                              <TableCell>{row.label}</TableCell>
                              <TableCell>{row.value}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                </Box>
              </Grid>
              {/* Second Column: Profile Update Form */}
              <Grid item xs={12} md={6}>
                <Box p={5}>
                  <Typography
                    variant="h5"
                    color={"#112846"}
                    textAlign={"center"}
                  >
                    Update Profile
                  </Typography>

                  <form onSubmit={handleprofileInfo}>
                    <TextField
                      fullWidth
                      label="First Name"
                      name="first_name"
                      onChange={handleFormChange}
                      sx={{ backgroundColor: "#F6F5F5", marginTop: 3 }}
                    />
                    <TextField
                      fullWidth
                      label="Last Name"
                      name="last_name"
                      onChange={handleFormChange}
                      sx={{ backgroundColor: "#F6F5F5", marginTop: 3 }}
                    />
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone_number"
                      onChange={handleFormChange}
                      sx={{ backgroundColor: "#F6F5F5", marginTop: 3 }}
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      onChange={handleFormChange}
                      sx={{ backgroundColor: "#F6F5F5", marginTop: 3 }}
                    />
                    <TextField
                      fullWidth
                      label="Department"
                      name="department"
                      onChange={handleFormChange}
                      sx={{ backgroundColor: "#F6F5F5", marginTop: 3 }}
                    />
                    <div
                      style={{
                        padding: "2rem",
                        background: "#f0f0f0",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "center",
                        border: "2px dashed #667378",
                        height: "130px",
                        width: "130px",
                        cursor: "pointer",
                        borderRadius: "5px",
                        margin: "1.5rem auto",
                      }}
                      onMouseEnter={(event) => {
                        event.target.style.border = "2px solid #667378";
                      }}
                      onMouseLeave={(event) => {
                        event.target.style.border = "2px dashed #667378";
                      }}
                    >
                      <label
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <input
                          type="file"
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={(e) => {
                            const file = e.target.files[0];
                            setFileName(file?.name);

                            if (file) {
                              const reader = new FileReader();

                              reader.onload = (event) => {
                                const imageUrl = event.target.result;
                                setImage(imageUrl);
                              };

                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                        {image ? (
                          <img
                            src={image}
                            width={150}
                            height={150}
                            alt="fileName"
                            style={{ objectFit: "cover" }}
                          />
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <CloudUploadIcon
                              style={{
                                color: "#667378",
                                fontSize: 50,
                                cursor: "pointer",
                              }}
                            />
                            <span
                              style={{
                                fontSize: 10,
                                marginTop: 5,
                                cursor: "pointer",
                              }}
                            >
                              Upload Image
                            </span>
                          </div>
                        )}
                      </label>
                    </div>

                    <UpdateButton type="submit" variant="contained" fullWidth>
                      Update Profile
                    </UpdateButton>
                  </form>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default ProfilePage;
