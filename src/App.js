import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage"
import AddItem from "./components/AddItem";
import Login from "./components/Login";
import Logout from "./components/Logout";
import EditProfile from "./components/EditProfile";
import Register from "./components/Register";
import ItemsList from "./components/ItemsList";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<EditProfile />} />
        <Route path="/itemslist" element={<ItemsList />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </div>
  );
};

export default App;

