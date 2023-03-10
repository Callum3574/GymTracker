import React from "react";
import { useAuth } from "../Contexts/AuthContext.jsx";
import { Navigate } from "react-router-dom";
export default function SignedInRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? <Navigate to="/home" /> : children;
}
