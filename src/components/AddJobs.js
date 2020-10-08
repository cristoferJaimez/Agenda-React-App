import React, { useState } from "react";

const AddJobs = (props) => {
  const handelChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const initialStateValues = {
    uid_admin: props.admin,
    nombre: "",
    documento: "",
    telefono: "",
    direccion: "",
    descripcion: "",
    data_start: Date(),
    date_end: "",
    cotizacion: "",
    gastos: 0,
    url: "",
    estado: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const submit = (e) => {
    e.preventDefault();
    props.addNewJobs(values);
  };

  return (
    <React.StrictMode>
      <div className="container section">
        <div className="row col m12 s12">
          <div className="card">
            <div className="card-content">
              <form onSubmit={submit}>
                <div className="input-field col s12 m6">
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    onChange={handelChange}
                    className="validate"
                  />
                  <label htmlFor="nombre">Nombre del Cliente</label>
                </div>

                <div className="input-field col s12 m6">
                  <input
                    id="telefono"
                    name="telefono"
                    type="text"
                    onChange={handelChange}
                    className="validate"
                  />
                  <label htmlFor="telefono">Telefono</label>
                </div>

                <div className="input-field col s12 m6">
                  <input
                    id="documento"
                    name="documento"
                    type="text"
                    onChange={handelChange}
                    className="validate"
                  />
                  <label htmlFor="documento">
                    Ingrese n&uacute;mero de documento
                  </label>
                </div>

                <div className="input-field col s12 m6">
                  <input
                    id="direccion"
                    name="direccion"
                    type="text"
                    className="validate"
                    onChange={handelChange}
                  />
                  <label htmlFor="direccion">
                    Ingrese direccion del cliente
                  </label>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <textarea
                      id="descripcion"
                      name="descripcion"
                      onChange={handelChange}
                      className="materialize-textarea"
                    ></textarea>
                    <label htmlFor="descripcion">
                      Descripci&oacute;n del Trabajo
                    </label>
                  </div>
                </div>

                <div className="input-field col s12 m12">
                  <input
                    id="cotizacion"
                    name="cotizacion"
                    type="number"
                    onChange={handelChange}
                    className="validate green-text center h1"
                  />
                  <label htmlFor="cotizacion">
                    Ingrese monto de cotizaci&oacute;n
                  </label>
                </div>

                <div className="center">
                  <input
                    type="submit"
                    value="guardar"
                    className="btn btn-blue"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>

  );
};

export default AddJobs;
