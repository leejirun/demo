import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../components/views/LandingPage/LandingPage";
import LoginPage from "../components/views/LoginPage/LoginPage";
import RegisterPage from "../components/views/RegisterPage/RegisterPage";
import Navbar from "../utils/Navbar";

function App() {
    return (
        <Router>
            <div className= "App">
                <Navbar />
                <Switch>
                    <Route exact path="/home">
                        <h1>Home</h1>
                    </Route>
                    <Route exact path="/board" />
                    <Route exact path="/page" />
                    <Route exact path="/administer" />
                </Switch>
            </div>
            <div>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={RegisterPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;