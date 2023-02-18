import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext.jsx";
import checkAdmin from "../Auth/AuthAdmin";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import checkUser from "../Auth/CheckUser";

function ResponsiveAppBar({ setIsAdmin, isAdmin }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { currentUser, logout } = useAuth();
  const [currentUserDetails, setCurrentUserDetails] = useState({});

  const [navItems, setNavItems] = useState([
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Exercises",
      link: "/exercise_home",
    },
    {
      name: "Community",
      link: "/community",
    },
  ]);
  const [dropdownItems, setDropdownItems] = useState([
    {
      name: "Profile",
      link: "/profile",
    },
    {
      name: "Settings",
      link: "/settings",
    },
    {
      name: "Community",
      link: "/community",
    },
  ]);
  const [dropdownItemsSignedOut, setDropdownItemsSignedOut] = useState([
    {
      name: "Login",
      link: "/login",
    },
    {
      name: "Signup",
      link: "/signup",
    },
  ]);

  console.log(currentUserDetails);
  const navigate = useNavigate();
  const user = currentUser;

  useEffect(() => {
    const fetchAdmin = async () => {
      const admin = await checkAdmin(user);
      setIsAdmin(admin);
    };

    const fetchUserDetails = async () => {
      const currentUser = await checkUser(user);
      setCurrentUserDetails(currentUser);
    };
    if (user) {
      fetchAdmin();
      fetchUserDetails();
    }
  }, [user]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNav = (link) => {
    navigate(link);
  };

  const handleLogOut = async () => {
    try {
      await logout();
      setIsAdmin(false);
      navigate("/home");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar className="nav-bar" disableGutters>
          <FitnessCenterIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FitTrack
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navItems.map((page) => (
                <MenuItem key={page.name} onClick={() => handleNav(page.link)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navItems.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleNav(page.link)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={currentUserDetails.icon} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {!currentUser
                ? dropdownItemsSignedOut.map((setting) => (
                    <MenuItem
                      key={setting.name}
                      onClick={() => handleNav(setting.link)}
                    >
                      <Typography textAlign="center">{setting.name}</Typography>
                    </MenuItem>
                  ))
                : dropdownItems.map((setting) => (
                    <MenuItem
                      key={setting.name}
                      onClick={() => handleNav(setting.link)}
                    >
                      <Typography textAlign="center">{setting.name}</Typography>
                    </MenuItem>
                  ))}
              {currentUser && (
                <MenuItem onClick={() => handleLogOut()}>
                  <Typography textAlign="center">Sign out</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
