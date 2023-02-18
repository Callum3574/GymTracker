import "./App.css";
import Home from "./components/Home/Home.jsx";
import "./assets/custom.css";
import { Route, Routes } from "react-router-dom";
import ExerciseHome from "./components/Exercise/ExerciseHome.jsx";
import Walking from "./components/Exercise/Walking/Walking.jsx";
import Login from "./components/Auth/Login.jsx";
import Signup from "./components/Auth/Signup.jsx";
import { AuthProvider } from "./components/Contexts/AuthContext";
import PrivateRoute from "./components/Auth/PrivateRoute";
import ForgotPass from "./components/Auth/ForgotPass.jsx";
import UpdateProfile from "./components/Auth/UpdateProfile.jsx";
import SignedInRoute from "./components/Auth/SignedIn.jsx";
import { useState } from "react";
import Community from "./components/Community/Community.jsx";
import ResponsiveAppBar from "./components/Nav/Nav.jsx";
function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="App container">
      <AuthProvider>
        <ResponsiveAppBar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/exercise_home" element={<ExerciseHome />}></Route>
          <Route path="/exercise_home/walking" element={<Walking />}></Route>
          <Route
            path="/login"
            element={
              <SignedInRoute>
                <Login setIsAdmin={setIsAdmin} isAdmin={isAdmin} />
              </SignedInRoute>
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <SignedInRoute>
                <Signup />
              </SignedInRoute>
            }
          ></Route>
          <Route
            path="/forgot-password"
            element={
              <PrivateRoute>
                <ForgotPass />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/update-profile"
            element={
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/community" element={<Community />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
