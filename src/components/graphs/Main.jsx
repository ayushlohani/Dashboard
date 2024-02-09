import React from "react";
import "./style.css";
import { FaCaretDown } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
const Main = () => {
  const options = {
    plugins: {
      title: {
        display: true,
        text: "",
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    maintainAspectRatio: false,
  };
  return (
    <div className="main">
      <div className="income-no">
        <div className="income-no-head">
          <div className="retirement-income">
            <div className="ret-income">Employee Income</div>
            <h2 className="d-font">Starting Year 2056</h2>
          </div>
          <div className="income-dollar">
            <div className="inc-dol">
              <h1 className="d-font">$300,000</h1>
              <div className="l-font">My Goal</div>
              <hr className="hr-dollar" />
            </div>
            <div className="inc-dol-1">
              <div className="inc-dol">
                <h1 className="d-font">59%</h1>
                <div className="l-font">Goal Achieved</div>
                <hr className="hr-dollar" />
              </div>
              <div className="inc-dol">
                <h1 className="d-font">$300</h1>
                <div className="l-font">Est. Monthly Income</div>
                <hr className="hr-dollar" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="income-graph">
        <h3 className="graph-head d-font">Contribution Overtime</h3>
        <div className="graph">
          {
            <Bar
              data={{
                labels: [20, 25, 30, 35, 40, 60, 65, 70, 80, 90, 100],
                datasets: [
                  {
                    label: "Employee",
                    data: [20, 22, 30, 40, 42, 43, 44, 45, 48, 50, 65, 100],
                    backgroundColor: "rgb(73,53,255)",
                    borderWidth: 1,
                    barPercentage: 0.5,
                  },
                  {
                    label: "Employer",
                    backgroundColor: "rgb(73,123,255)",
                    data: [
                      70, 80, 90, 100, 125, 130, 140, 150, 200, 210, 215, 217,
                    ],
                    borderWidth: 1,
                    barPercentage: 0.5,
                  },
                  {
                    label: "Total Interset",
                    backgroundColor: "rgb(100,200,255,0.7)",
                    data: [
                      100, 180, 190, 200, 225, 230, 240, 250, 230, 231, 251,
                      261,
                    ],
                    borderWidth: 1,
                    barPercentage: 0.5,
                  },
                ],
              }}
              options={options}
              style={{ height: "100%", width: "70%" }}
            />
          }
        </div>
      </div>
      <div className="income-circle">
        <div className="income-circle-title">
          <h2 className="d-font">How do I compare to my peers?</h2>
          <h4 className=" l-font">
            These numbers represent current goal achievements
          </h4>
        </div>
        <div className="main-income-circle">
          <div className="circle-info">
            <div>
              <span className="d-font">Age: </span>
              <span className="l-font">
                Under 30+
                <FaCaretDown />
              </span>
            </div>
            <hr />
            <div>
              <span className="d-font">Salary: </span>
              <span className="l-font">
                k 20- k30 <FaCaretDown />
              </span>
            </div>
            <hr />
            <div>
              <span className="d-font">Gender: </span>
              <span className="l-font">
                Male <FaCaretDown />
              </span>
            </div>
            <hr />
          </div>
          <div className="circles">
            <div className="circle-progress">
              <CircularProgressbar
                value={78}
                text={"78%"}
                strokeWidth={12}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                  trailColor: "rgba(250, 250, 250)",
                  pathColor: "rgb(34,214,170)",
                  backgroundColor: "rgba(250, 250, 250)",
                  textColor: "rgba(13, 12, 12, 0.674)",
                })}
              />
            </div>
            <div className="circle-progress">
              <CircularProgressbar
                value={95}
                text={"95%"}
                strokeWidth={12}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                  trailColor: "rgba(250, 250, 250)",
                  pathColor: "rgb(34,214,170)",
                  backgroundColor: "rgba(250, 250, 250)",
                  textColor: "rgba(13, 12, 12, 0.674)",
                })}
              />
            </div>
            <div className="circle-progress">
              <CircularProgressbar
                value={59}
                text={"59%"}
                strokeWidth={12}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                  trailColor: "rgba(250, 250, 250)",
                  pathColor: "rgb(34,214,170)",
                  backgroundColor: "rgba(250, 250, 250)",
                  textColor: "rgba(13, 12, 12, 0.674)",
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
