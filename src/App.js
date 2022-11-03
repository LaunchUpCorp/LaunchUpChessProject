import React from "react";
import ChessBoard from "./components/ChessBoard";
import LandingPage from "./components/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game" element={<ChessBoard />} />
      </Routes>
    </div>
  );
}

export default App;
