import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useAuth } from "../Contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function UpdateProfile() {
  const navigate = useNavigate();
  const [currentCredentials, setCurrentCredentials] = useState({
    new_email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const { login, currentUser } = useAuth();

  const handleLoginCredentials = (event) => {
    setCurrentCredentials((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
    console.log(currentCredentials);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await login(currentCredentials.email, currentCredentials.password);
      navigate("/home");
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };
  const { updateEmail } = useAuth();

  const handleUpdateEmail = async () => {
    try {
      await updateEmail(currentCredentials.new_email);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update Profile
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="New Email Address"
              name="new_email"
              autoComplete="email"
              autoFocus
              onChange={handleLoginCredentials}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleLoginCredentials}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleUpdateEmail}
            >
              Update Profile
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
