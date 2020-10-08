import React, { useState, useEffect } from "react";
import { db } from "../firebase";



import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import ReactHTMLTableToExel from "react-html-table-to-excel";

// components
import Port from "../components/Port";
import Search from "../components/Search";
import Chart from "../components/Chart";
import Excel from "../components/Excel";
import AddJobs from "../components/AddJobs";
import ViewJobs from "../components/ViewJobs";

const Home = (props) => {
  let cont = 1,
    cotiza = 0,
    gast = 0;


 

    
  const [jobs, setJobs] = useState([]);

  // agregar trabajo

  const addJob = async (linkObject) => {
    await db.collection("jobs").doc().set(linkObject);
    console.log("agregado");

  };

  const getJobjs = async () => {
    db.collection("jobs").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setJobs(docs);
    });
  };

  useEffect(() => {
    getJobjs();
    // console.log("cargando datos...");
  }, []);




      

  
  return (
    <React.StrictMode>
      <Tabs>
        <TabList>
          <Tab>
            <i className="material-icons blue-text">search</i>
          </Tab>
          <Tab>
            <i className="material-icons green-text">font_download</i>
          </Tab>
          <Tab>
            <i className="material-icons orange-text">insert_chart</i>
          </Tab>
          <Tab>
            <i className="material-icons red-text">assignment</i>
          </Tab>
          <Tab>
            <i className="material-icons ">store</i>{" "}
          </Tab>
        </TabList>

        <TabPanel>
          <Search />
        </TabPanel>
        <TabPanel>
          <div className="container">
            <div className="row">
              <div className="card">
                <div className="card-content">
                  <ReactHTMLTableToExel
                    id="botonExportar"
                    className="btn green"
                    table="tabla_contable"
                    filename= { Date() + "contabilidad"}
                    sheet="pagina 1"
                    buttonText="Exportar a Excel"
                  />

                 
              
                 
                </div>
              </div>
            </div>
          </div>

       

          <div className="container">
            <div className="row col s12 m12">
              <table className="table striped centered" id="tabla_contable">
                <thead className="grey darken-4 white-text ">
                  <tr>
                    <th>N°</th>
                    <th>Fecha</th>
                    <th>Descripci&oacute;n</th>
                    <th>Cotizaci&oacute;n</th>
                    <th>Gastos</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((e) => {
                    
                    if(Date().slice(4, -53) === e.data_start.slice(4, -53)) {
                      cotiza = cotiza + parseFloat(e.cotizacion);
                      gast = gast + parseFloat(e.gastos);
                   
                      return (
                      <Excel
                        key={Math.random()}
                        id={cont++}
                        date={e.data_start.slice(0, -40)}
                        money={e.cotizacion}
                        gasto={e.gastos}
                        desc={e.descripcion}
                      />
                    );
                    }else{
                      return ( null );
                    }
                  
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th className="blue white-text">
                      Totales {new Intl.NumberFormat("de-DE").format(cotiza)}{" "}
                    </th>
                    <th className="red white-text">
                      Totales {new Intl.NumberFormat("de-DE").format(gast)}{" "}
                    </th>
                    <th className="green white-text">
                      Totales{" "}
                      {new Intl.NumberFormat("de-DE").format(cotiza - gast)}{" "}
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <Chart />
        </TabPanel>
        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>
                <i className="material-icons blue-text">view_agenda</i>{" "}
              </Tab>
              <Tab>
                {" "}
                <i className="material-icons green-text">add</i>
              </Tab>
            </TabList>
            <TabPanel>
              <div className="container">
                <div className="row col s12 m12">
                  {jobs.map((e) => {
                    return (
                      <ViewJobs
                        key={e.id}
                        id={e.id}
                        name={e.nombre}
                        price={e.cotizacion}
                        date={e.fecha_inicio}
                        descr={e.descripcion}
                        imgUrl={e.url}
                        gastos={e.gastos}
                      />
                    );
                  })}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="container section">
                <div className="row col s12 m12">
                  <div className="">
                    <AddJobs addNewJobs={addJob} admin={props.admin} />
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>

        <TabPanel>
          <Port
            email={props.email}
            gastos={gast}
            cotiza={cotiza}
            total={cotiza - gast}
          />
        </TabPanel>
      </Tabs>
    </React.StrictMode>
  );
};

export default Home;
