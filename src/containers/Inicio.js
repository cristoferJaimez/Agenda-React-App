import React, { Component } from "react";
import fire from "../firebase";

import Login from "./Login";
import Home from "../components/Home";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default class Inicio extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        // console.log(user);
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div>
        <Nav email={this.state.user ? this.state.user.uid : ""} />
        {this.state.user ? (
          <Home
            path="/home"
            email={this.state.user.email}
            admin={this.state.user.uid}
          />
        ) : (
          <Login path="/Login" />
        )}
        <Footer />
      </div>
    );
  }
}
