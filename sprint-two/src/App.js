import "./App.scss";
import React from "react";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Upload from "./components/Upload/Upload";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={(routerProps) => <HomePage {...routerProps} />} />
          <Route path="/upload" exact component={Upload} />
          <Route path={"/video/:id"} component={(routerProps) => <HomePage {...routerProps} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
