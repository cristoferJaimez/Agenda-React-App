import React from "react";
import { Line, Bar } from "react-chartjs-2";

const Chart = () => {
  const dataLine = {
    labels: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    datasets: [
      {
        label: "Ganancias",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,12,12,0.4)",
        borderColor: "rgba(7, 159, 76,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 1,
        pointRadius: 3,
        pointHitRadius: 20,
        data: [6, 59, 0, 81, 56, 5, 40, 45, 32, 56, 78, 65, 43, 23],
      },
      {
        label: "Gastos",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(0,0,0,0.4)",
        borderColor: "rgba(198, 57, 12,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(248, 31, 31  ,0.1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 1,
        pointRadius: 3,
        pointHitRadius: 20,
        data: [23, 5, 44, 3, 22, 6, 77, 5, 44, 3, 66, 8],
      },
      {
        label: "Servicios",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(231, 156, 15 ,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 1,
        pointRadius: 3,
        pointHitRadius: 20,
        data: [4, 6, 88, 2, 1, 44, 5, 3, 6, 5, 22, 3],
      },
      {
        label: "Otros Gastos",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(0,0,0,0.4)",
        borderColor: "rgba(248, 235, 31 ,1)",
        borderCapStyle: "butt",
        borderDash: [1],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(248, 31, 31  ,0.1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 1,
        pointRadius: 3,
        pointHitRadius: 20,
        data: [2, 22, 3, 44, 5, 77, 8, 99, 1, 2, 3, 5],
      },
    ],
  };

  const dataOne = {
    labels: ["Ganacias", "Gastos", "Servicios"],
    datasets: [
      {
        label: "Grafica mes",
        backgroundColor: "rgb(0, 25, 178, 0, 1)",
        borderColor: "black",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(0, 25, 0,0.2)",
        hoverBorderColor: "#ff0340",
        data: [400, 600, 250, 22],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <React.StrictMode>
      <div className="container">
        <div className="row">
          <div className="card">
            <div className="card-content">
              <div className={{ Width: "100%", height: "500px" }}>
                <Bar data={dataOne} option={options} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <div className={{ Width: "100%", height: "500px" }}>
                <Line useRef="chart" data={dataLine} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Chart;
