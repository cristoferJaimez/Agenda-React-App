import React from "react";

const Excel = (props) => {
  return (
    <React.StrictMode>
      { props.key ? (
        <td></td>
      ) : (<tr>
        <td>{props.id}</td>
        <td className="">{props.date}</td>
        <td> {props.desc} </td>
        <td className="blue-text">
          {new Intl.NumberFormat("de-DE").format(props.money)}{" "}
        </td>
        <td className="red-text">
          {new Intl.NumberFormat("de-DE").format(props.gasto)}
        </td>
        <td className="green-text">
          {new Intl.NumberFormat("de-DE").format(props.money - props.gasto)}
        </td>
      </tr>)

      }
    </React.StrictMode>
  );
};

export default Excel;
