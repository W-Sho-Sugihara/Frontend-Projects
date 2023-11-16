import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { SignUpForm } from "./components/sign-up-form";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="sign-up-form" element={<SignUpForm />} />
      </Routes>
    </>
  );
}

export default App;
