import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Projects from "./components/pages/Projects";
import Help from "./components/pages/Help";
import SignIn from "./components/pages/SignIn";
import SuHome from "./components/pages/SuHome";
import Login from "./components/pages/Login";
import AIUpload from "./components/AIUpload";
import BCUpload from "./components/BCUpload";
import CCUpload from "./components/CCUpload";
import CSUpload from "./components/CSUpload";
import DLUpload from "./components/DLUpload";
import FSUpload from "./components/FSUpload";
import IPUpload from "./components/IPUpload";
import MLUpload from "./components/MLUpload";
import NLPUpload from "./components/NLPUpload";
import FileUpload from "./components/FileUpload";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/SuHome" element={<SuHome />} />
          {/* <Route path="/SignIn"  /> */}
          {/* <Route path="/Login" element={<Login />} /> */}
          <Route path="/" exact Component={Home} />
          <Route path="/about" exact Component={AboutUs} />
          <Route path="/projects" exact Component={Projects} />
          <Route path="/help" exact Component={Help} />
          <Route path="/sign-in" exact Component={SignIn} />
          <Route path="/login" exact Component={Login} />
          <Route path="/AIUpload" exact Component={AIUpload} />
          <Route path="/BCUpload" exact Component={BCUpload} />
          <Route path="/CCUpload" exact Component={CCUpload} />
          <Route path="/CSUpload" exact Component={CSUpload} />
          <Route path="/DLUpload" exact Component={DLUpload} />
          <Route path="/FSUpload" exact Component={FSUpload} />
          <Route path="/IPUpload" exact Component={IPUpload} />
          <Route path="/MLUpload" exact Component={MLUpload} />
          <Route path="/NLPUpload" exact Component={NLPUpload} />
          <Route path="/fileUpload" exact Component={FileUpload} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
