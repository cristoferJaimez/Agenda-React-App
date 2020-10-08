import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    zIndex: "100",
  },
};

const ViewJobs = (props) => {

    const handelChange = e => {
        const {name, value } = e.target
        setGasto({...gasto, [name] : value})
    
    }

    
  const [modalIsOpen, setInOpen] = React.useState(false);

  const valuesInitial = {
    gasto: 0,
  };

  const [gasto, setGasto] = useState(valuesInitial);

  // abrir modal
  const openModal = () => {
    setInOpen(true);
  };
  function afterOpenModal() {}

  // cerrar modal
  const closeModal = () => {
    setInOpen(false);
  };



  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  return (
    <React.StrictMode>
      <div className="card col s12 m4 section">
        <div className="card-image section">
          <img src={props.imgUrl} alt={props.imgUrl} />
        </div>

        <div className="card-content center">
          <span className="blue-text"> {props.name} </span>
          <span className="green-text ">
            {" "}
            <h5>{new Intl.NumberFormat("de-DE").format(props.price)}</h5>
            <h6 className="">COP</h6>{" "}
          </span>
          <span className="red-text">
            <h6>
              {new Intl.NumberFormat("de-DE").format(props.gastos)} COP gastos
            </h6>
          </span>
        </div>
        <div className="card-footer">
          <label>
            <input type="checkbox" />
            <span></span>
          </label>
          <a
            href="#!"
            onClick={openModal}
            className="right waves-effect waves-light btn-small"
          >
            <i className="material-icons  red-text">attach_money</i>
          </a>

          <Modal
            appElement={document.getElementById("ejemplo")}
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="ejemplo"
          >
            <button
              className=" btn waves-effect waves-light red"
              onClick={closeModal}
            >
              x
            </button>

            <div className="card col s12 m12">
              <div className="row">
                <div className="card-content center">
                  <h5 className="red white-text">
                    Gastos Actuales{" "}
                    {new Intl.NumberFormat("de-DE").format(props.gastos)}
                  </h5>
                  <form onSubmit={handelSubmit}>
                    <div className="input-field col s12 m12">
                      <input
                        id="gasto"
                        name="gasto"
                        type="number"
                        onChange = { handelChange }
                        className="validate green-text center h1"
                      />
                      <label htmlFor="gasto">Ingrese monto del gasto</label>
                    </div>
                    <input
                      type="submit"
                      className="btn orange"
                      value="Guardar"
                    />
                  </form>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default ViewJobs;
