import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PlayerList from "./components/PlayerList";
import PlayerForm from "./components/PlayerForm";
import PlayerUpdate from "./components/PlayerUpdate";
import Home from "./components/Home";
import TotalMatches from "./components/TotalMatches";

import "./App.css"; // for background styling

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<PlayerList />} />
            <Route path="/add" element={<PlayerForm />} />
            <Route path="/update/:id" element={<PlayerUpdate />} />
            <Route path="/totalmatches" element={<TotalMatches />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}



export default App;
