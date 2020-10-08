import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer  teal darken-3">
          <div className="container">
            <div className="row section">
              <div className="col l12 s12 m12">
                <h5 className="white-text">Digitalizando</h5>
                <p className="grey-text text-lighten-4">Soluciones</p>
              </div>
              <br />
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              Cristofer Jaimez
              <a className="grey-text text-lighten-4 right" href="#!">
                <i className="material-icons right">facebook</i>
              </a>
              <a className="grey-text text-lighten-4 right" href="#!">
                <i className="material-icons right">attach_money</i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
