import "./App.css";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Nav/Navbar";
import "./assets/custom.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Switch,
} from "react-router-dom";
import ExerciseHome from "./components/Exercise/ExerciseHome.jsx";
import Walking from "./components/Exercise/Walking/Walking.jsx";
import Login from "./components/Auth/Login.jsx";
import Signup from "./components/Auth/Signup.jsx";
import { AuthProvider } from "./components/Contexts/AuthContext";
import PrivateRoute from "./components/Auth/PrivateRoute";
import ForgotPass from "./components/Auth/ForgotPass.jsx";
import UpdateProfile from "./components/Auth/UpdateProfile.jsx";

import { useAuth } from "./components/Contexts/AuthContext.jsx";
import SignedInRoute from "./components/Auth/SignedIn.jsx";

function App() {
  return (
    <div className="App container">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/exercise_home" element={<ExerciseHome />}></Route>
          <Route path="/exercise_home/walking" element={<Walking />}></Route>
          <Route
            path="/login"
            element={
              <SignedInRoute>
                <Login />
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
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
