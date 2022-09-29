import React from "react";
import { Route, Routes } from "react-router-dom";
import ClientPage from "./components/clientPage";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Routes className="content">
        <Route path="/" element={<ClientPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
