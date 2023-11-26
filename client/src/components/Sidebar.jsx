import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import AssignmentIcon from "@mui/icons-material/Assignment";
import StoreIcon from "@mui/icons-material/Store";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import LogoutIcon from "@mui/icons-material/Logout";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../appStore";

const drawerWidth = "200px";

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  minWidth: 56,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: 56,
  [theme.breakpoints.up("sm")]: {
    width: 56,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  width: 56,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  transition: "ease-in-out 0.5s",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const LogOutContainer = styled(ListItem)({
  position: "absolute",
  bottom: "0",
  left: "0",
});

export default function Sidebar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const open = useAppStore((state) => state.dopen);
  const location = useLocation();

  const isActive = (route) => location.pathname === `/${route}`;

  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box height={30} />
      <Drawer variant="permanent" open={open} transitionDuration={600}>
        <DrawerHeader>
          <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List sx={{ height: "100%", position: "relative", padding: "2" }}>
          <ListItem
            disablePadding
            sx={{
              display: "block",
              padding: { md: "0px 5px 0px 0px" },
              color: "black",
              background: isActive("home") ? "lightgray" : "transparent",
            }}
            component={Link}
            to="/home"
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <HomeIcon sx={{ color: "#12596B" }} />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                sx={{
                  opacity: open ? 1 : 0,
                  display: { xs: "none", md: "block" },
                  color: "gray",
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              display: "block",
              padding: { md: "0px 5px 0px 0px" },
              color: "black",
              background: isActive("profile") ? "lightgray" : "transparent",
            }}
            component={Link}
            to="/profile"
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <PersonIcon sx={{ color: "#12596B" }} />
              </ListItemIcon>
              <ListItemText
                primary="Profile"
                sx={{
                  opacity: open ? 1 : 0,
                  display: { xs: "none", md: "block" },
                  color: "gray",
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              display: "block",
              padding: { md: "0px 5px 0px 0px" },
              color: "black",
              background: isActive("agentslist") ? "lightgray" : "transparent",
            }}
            component={Link}
            to="/agentslist"
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <PersonIcon sx={{ color: "#12596B" }} />
              </ListItemIcon>
              <ListItemText
                primary="Agents"
                sx={{
                  opacity: open ? 1 : 0,
                  display: { xs: "none", md: "block" },
                  color: "gray",
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              display: "block",
              padding: { md: "0px 5px 0px 0px" },
              color: "black",
              background: isActive("employee") ? "lightgray" : "transparent",
            }}
            component={Link}
            to="/employee"
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <PersonIcon sx={{ color: "#12596B" }} />
              </ListItemIcon>
              <ListItemText
                primary="Employee"
                sx={{
                  opacity: open ? 1 : 0,
                  display: { xs: "none", md: "block" },
                  color: "gray",
                }}
              />
            </ListItemButton>
          </ListItem>

          <LogOutContainer
            disablePadding
            sx={{ display: "block" }}
            onClick={handleLogOut}
          >
            <Divider />
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <LogoutIcon color="error" />
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                sx={{
                  opacity: open ? 1 : 0,
                  display: { xs: "none", md: "block" },
                  color: "red",
                }}
              />
            </ListItemButton>
          </LogOutContainer>
        </List>
      </Drawer>
    </Box>
  );
}
