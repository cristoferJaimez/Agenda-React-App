import React, { Component } from "react";
import fire from ".././firebase";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  render() {
    return (
      <React.StrictMode>
        <nav>
          <div className="nav-wrapper   teal darken-3 ">
            <a href="#!" className="brand-logo right">
              {this.props.email ? (
                <button
                  className="btn-floating small red"
                  onClick={() => {
                    fire.auth().signOut();
                  }}
                >
                  logOut
                </button>
              ) : (
                <i className="material-icons">account_circle</i>
              )}
            </a>

            <ul id="" className="">
              <li>
                {" "}
                <a href="#!">
                  <i className="material-icons">account_circle</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.StrictMode>
    );
  }
}

export default NavBar;
