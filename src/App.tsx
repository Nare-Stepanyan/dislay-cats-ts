import React from "react";
import "./style.scss";
import Categories from "./comonents/Categories/Categories";
import MainDisplay from "./comonents/Display/Display";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Display Cats by Categories</h1>
      </header>
      <div className="container">
        <div className="side-bar">
          <Categories />
        </div>
        <div className="main-display">
          <MainDisplay />
        </div>
      </div>
    </div>
  );
}

export default App;
