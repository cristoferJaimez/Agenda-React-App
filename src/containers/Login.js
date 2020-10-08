import React, { Component } from "react";
import fire from "../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  Login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        // console.log(res);
      })
      .catch((error) => {
        console.log(error);
        switch (error.code) {
          case "auth/invalid-email":
            toast.info(
              "La dirección de correo electrónico está mal planteda ó el campo esta vacio...",
              {
                autoClose: 4000,
              }
            );

            break;
          case "auth/wrong-password":
            toast.info(
              "La contraseña no es válida o el usuario no tiene contraseña....",
              {
                autoClose: 4000,
              }
            );
            break;

          default:
            break;
        }
      });
  }

  // tomar datos de los campos
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <React.StrictMode>
        <div className="container section">
          <div className="row section">
            <div className="valign-wrapper row login-box">
              <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
                <div className="card">
                  <div className="card-content input-field col s12">
                    <form>
                      <span className="card-title center ">
                        <i className="large material-icons ">account_circle</i>
                      </span>

                      <div className="input-field col s12">
                        <label htmlFor="email">Email address</label>
                        <input
                          type="email"
                          className="validate"
                          name="email"
                          id="email"
                          placeholder="ingrese email"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="password">Password </label>
                        <input
                          type="password"
                          className="validate"
                          name="password"
                          id="password"
                          placeholder="ingrese contraseña"
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                      </div>

                      <div className="center">
                        <input
                          type="button"
                          onClick={this.Login.bind(this)}
                          value="entrar"
                          className="btn green"
                        />
                        <br />
                        <br />
                        {/* <span>no tienes cuenta? Sing up</span>  */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.StrictMode>
    );
  }
}
