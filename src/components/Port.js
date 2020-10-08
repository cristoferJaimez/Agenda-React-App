import React, { Component } from "react";

export default class Port extends Component {
  render() {
    return (
      <React.StrictMode>
        <div className="container section">
          <div className="card  row col s12 m12">
            <div className="card-content">
              <div className="center col-s12 m6">
                <i className="material-icons green-text">verified_user</i>{" "}
                {this.props.email}
              </div>
            </div>
          </div>

          <div className="row col s12 m12">
            <div className="section">
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-image">
                    <a
                      href="#!"
                      className="btn-floating halfway-fab waves-effect waves-light blue"
                    >
                      <i
                        className="material-icons "
                        id="users"
                        name="users"
                        onClick={this.menssageInfo}
                      >
                        info_outline
                      </i>
                    </a>
                  </div>
                  <div className="card-content center  blue darken-1">
                    <h6 className="white-text">Cotizaciones.</h6>
                    <h2 className=" white-text">
                      {new Intl.NumberFormat("de-DE").format(this.props.cotiza)}
                    </h2>
                    <h4 className="white-text">COP.</h4>
                  </div>
                </div>
              </div>

              <div className="col s12 m6">
                <div className="card">
                  <div className="card-image">
                    <a
                      href="#!"
                      className="btn-floating halfway-fab waves-effect waves-light blue"
                    >
                      <i
                        className="material-icons "
                        onClick={this.menssageInfo}
                        id="infoMoney"
                      >
                        info_outline
                      </i>
                    </a>
                  </div>
                  <div className="card-content center red darken-1">
                    <h6 className="white-text">Gastos.</h6>
                    <h2 className=" white-text">
                      {new Intl.NumberFormat("de-DE").format(this.props.gastos)}
                    </h2>
                    <h4 className="white-text">COP.</h4>
                  </div>
                </div>
              </div>

              {/*            
                <div className="col s12 m6">
                <div className="card">
                    <div className="card-image">
                   
                    <a href="#!"  className="btn-floating halfway-fab waves-effect waves-light blue">
                    <i className="material-icons"
                       id="viewChart"
                       onClick = { this.menssageInfo }
                    >info_outline</i></a>
                    </div>
                    <div className="card-content center deep-orange darken-1">
                    <p>
                    { this.props.gastos }
                    </p>
                    </div>
                </div>
                </div> */}

              <div className="col s12 m12">
                <div className="card">
                  <div className="card-image">
                    <a
                      href="#!"
                      className="btn-floating halfway-fab waves-effect waves-light blue"
                    >
                      <i
                        className="material-icons"
                        id="excel"
                        onClick={this.menssageInfo}
                      >
                        info_outline
                      </i>
                    </a>
                  </div>
                  <div className="card-content center green darken-3 ">
                    <h6 className="white-text">Ganacias.</h6>
                    <h2 className=" white-text">
                      {new Intl.NumberFormat("de-DE").format(this.props.total)}{" "}
                    </h2>
                    <h4 className="white-text">COP.</h4>
                  </div>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </React.StrictMode>
    );
  }
}
