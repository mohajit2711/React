import React, { useState, useEffect } from "react";
import "./info.scss";
import { StillPhotoCaptureDemo } from "./webcam";
import { getUserdata } from "./firebase";
import WelcomeMessage from "./WelcomeMessage"; // Import the WelcomeMessage component
import axios from "axios";

export const Info = () => {
  const [employeeData, setEmployeeData] = useState({
    employeeName: "",
    designation: "",
    join_date: "",
    photo: null, // Add a new state for storing the captured photo
  });
  const [submitted, setSubmitted] = useState(false); // State to track if form is submitted
  let userLocation = "";
//   const [location, setLocation] = useState();
  async function getCurrentPosition() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function geosuccess(pos) {
      const crd = pos.coords;
      userLocation = `User location is Latitude: ${crd.latitude} and Longitude: ${crd.longitude}`;
      console.log(typeof crd.latitude);
      getCityFromCoordinates(crd.latitude, crd.longitude);
    }

    function errors(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      console.error(err.message);
    }

    if (navigator.geolocation) {
      try {
        const result = await navigator.permissions.query({
          name: "geolocation",
        });
        console.log(result);
        if (result.state === "granted" || result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(geosuccess, errors, options);
        } else if (result.state === "denied") {
          userLocation = "Geolocation permission denied.";
          console.error(userLocation);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Browser doesn't support location.");
    }
    console.log(userLocation);
  }

  const getCityFromCoordinates = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
      );
      if (
        response.data &&
        response.data.address &&
        response.data.address.city
      ) {
        setEmployeeData({ ...employeeData, city: response.data.address.city });
      } else {
        return "City not found for given coordinates.";
      }
    } catch (error) {
      return "Error fetching city information.";
    }
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Log the employee data
    console.log(userLocation);
    let temp = employeeData;
    temp = {
      ...temp,
      Date: getDate(),
    };
    console.log(temp);
    await getUserdata(temp);
    setSubmitted(true); // Set submitted to true after form submission
  };

  // Function to handle photo capture
  const handlePhotoCapture = (photoData) => {
    setEmployeeData({ ...employeeData, photo: photoData });
  };

  const getDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const finalDate = "Date: " + `${date}/${month}/${year} `;
    const showTime =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const finalTime = "Time: " + showTime;
    const finalDateTime = finalDate + finalTime;
    return finalDateTime;
  };

  return (
    <div className="container-info">
      {submitted ? ( // Render WelcomeMessage component if form is submitted
        <WelcomeMessage />
      ) : (
        <>
          <h2>Employee Data Form</h2>
          {/* Photo Verification */}
          <div className="form-group">
            <h3 className="info-title">Photo Verification: </h3>
            <StillPhotoCaptureDemo onPhotoCapture={handlePhotoCapture} />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="employee-name">Employee Name:</label>
              <input
                type="text"
                id="employee-name"
                name="employee-name"
                required
                onChange={(e) =>
                  setEmployeeData({
                    ...employeeData,
                    employeeName: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="designation">Designation:</label>
              <input
                type="text"
                id="designation"
                name="designation"
                required
                onChange={(e) =>
                  setEmployeeData({
                    ...employeeData,
                    designation: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Joining Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                onChange={(e) =>
                  setEmployeeData({
                    ...employeeData,
                    join_date: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
            </div>
            <div className="form-group">
              <button type="submit" class="submit-button">
                Submit
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};
