import React, { useEffect, useState } from "react";
import { getData} from "./firebase";
import { CSVLink} from "react-csv";
import xrcicon from "./XRCLogo.svg";
import "./dashboard.scss";

export const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    // Fetch userData from the getData function when the component mounts
    getData().then((data) => setUserData(data));
  }, []);

  console.log(userData);
  return (
    <div className="dashboard-table">
      <div className="Header">
        <img className="Logo-dashboard" src={xrcicon} alt="XRC Logo"></img>
        <h1 className="dashboard-header">Admin Dashboard</h1>
        <CSVLink
          data={userData}
          filename={"XRC-UserData.csv"}
          className="csv-download"
        >
          Generate CSV
        </CSVLink>
        ;
      </div>
      <table>
        <thead>
          <tr>
            <th>Submission Timestamp</th>
            <th>Location</th>
            <th>Joining Date</th>
            <th>Designation</th>
            <th>Employee Name</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(userData) && userData.length > 0 ? (
            userData.map((user, index) => (
              <tr key={index}>
                <td>{user.Date}</td>
                <td>{user.city}</td>
                <td>{user.join_date}</td>
                <td>{user.designation}</td>
                <td>{user.employeeName}</td>
                <td>
                  <img
                    src={user.photo}
                    alt="User"
                    style={{ width: "50px", height: "auto" }}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
