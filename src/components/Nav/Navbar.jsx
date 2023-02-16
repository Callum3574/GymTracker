import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/custom.css";
import { useAuth } from "../Contexts/AuthContext.jsx";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const { currentUser, logout } = useAuth();
  const user = currentUser;

  const checkAdmin = async () => {
    if (user) {
      const idToken = await user.getIdToken();
      const res = await fetch("http://localhost:4000/verify_token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });
      console.log(await res.json());
      props.setIsAdmin(true);
    }
  };

  useEffect(() => {
    checkAdmin();
  });

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
      name: "Habits",
      link: "/habits",
    },
    {
      name: "Calories",
      link: "/calories",
    },
  ]);

  const handleLogOut = async () => {
    try {
      await logout();
      props.setIsAdmin(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <div className="container">
          <AppBar>
            <Toolbar className="nav-bar">
              <Typography variant="h5" component="div">
                Progress Tracker
              </Typography>
              <div className="nav-items d-flex flex-row justify-content-center mt-3 ml-5">
                {navItems.map((item) => {
                  return (
                    <Link className="a-button" to={item.link}>
                      <p
                        style={{ cursor: "pointer" }}
                        className="a-button px-3"
                      >
                        {item.name}
                      </p>
                    </Link>
                  );
                })}
                {!currentUser ? (
                  <Link className="a-button" to="/login">
                    <p className="a-button px-3" style={{ cursor: "pointer" }}>
                      Login
                    </p>
                  </Link>
                ) : (
                  <Link className="a-button" to="/home">
                    <p
                      onClick={handleLogOut}
                      className="a-button px-3"
                      style={{ cursor: "pointer" }}
                    >
                      Logout
                    </p>
                  </Link>
                )}
                {props.isAdmin && (
                  <Link className="a-button" to="/dashboard">
                    <p className="a-button px-3" style={{ cursor: "pointer" }}>
                      Dashboard
                    </p>
                  </Link>
                )}
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
