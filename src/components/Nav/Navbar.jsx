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
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/custom.css";

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
    {
      name: "Login",
      link: "/login",
    },
    {
      name: "Signup",
      link: "/signup",
    },
  ]);

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
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
