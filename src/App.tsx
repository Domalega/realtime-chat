import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
