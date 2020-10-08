import React, { useState } from "react";
import { db } from "../firebase";

const Search = () => {
  const [values, setValues] = useState([]);

  const onSearch = (e, num) => {
    if (!num) {
      num = 0;
    } else {
    }

    e.preventDefault();
    //  console.log()
    db.collection("jobs")
      .where("documento", "==", num)
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          console.log("sin concidencia");
          return;
        }
        const docs = [];
        snapshot.forEach((e) => {
          //  console.log(e.id, "=>", e.data());
          docs.push({ ...e.data(), data: e.id });
        });

        setValues(docs);
        console.log(docs);

        // console.log(values);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const handelChange = (e) => {
    onSearch(e, e.target.value);
  };

  return (
    <React.StrictMode>
      <div className="container">
        <div className="row">
          <form onSubmit={onSearch}>
            <div className="col s12 m12 ">
              <div className="input-field inline col s12 m12  ">
                <input
                  id="search_inline"
                  type="search"
                  className="validate"
                  onChange={handelChange}
                />
                <label htmlFor="search_inline">Buscar Cliente</label>
                <span
                  placeholder="Ingrese numero de documento"
                  className="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Barra de Busqueda
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {values.map((e) => {
            if (!e) {
              return <div>sin resultados</div>;
            } else {
              return (
                <div className="card col s12 m6" key={Math.random()}>
                  <div className="card-image">
                    <img
                      src="https://www.google.com.co/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com.mx%2Fpin%2F650488739905331101%2F&psig=AOvVaw0sUvTUXq0K4P5tuIRStHBO&ust=1602115654548000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCzmYaYoewCFQAAAAAdAAAAABAI"
                      alt=""
                    />
                    <span className="card-title">Card Title</span>
                  </div>
                  <div className="card-content">
                    <table className="table">
                      <thead>
                        <tr>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{e.nombre}</td>
                        </tr>
                        <tr>
                          <td>{e.cotizacion}</td>
                        </tr>
                        <tr>
                          <td>{e.data_start}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Search;
