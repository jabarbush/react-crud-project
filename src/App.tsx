import React from "react";
import "./App.css";
import List from "./components/ListUsers";

function App() {
  return (
    <div className="app">
      <h1 className="page-title">User Roster</h1>
      <List />
    </div>
  );
}

export default App;
