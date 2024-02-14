import { useEffect, useState } from 'react';
import './App.css';
import Axios from "axios";
// Getting data via fetch.
// fetch("https://catfact.ninja/fact")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });


function App() {
  // Generate Cat Fact
  // const [catFact,setCatFact] = useState("");

  // const fetchCatFact = () => {
  //   Axios.get("https://catfact.ninja/fact").then((res) => {
  //     setCatFact(res.data.fact);
  //   })
  // }
  // useEffect(() => {
  // // Getting data via axios
  //   fetchCatFact();
  // },[]);
  //   return (
  //   <div className="App">
  //     <button onClick={fetchCatFact}> Generate Cat Fact</button>
  //     <p> {catFact} </p>
  //   </div>
  // );

// Predict Age
  const [name,setName] = useState("");
  const [predictAge,setpredictAge] = useState(null);
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=> {
      setpredictAge(res.data.age)
    });
  };

  return (
    <div className="App">
      <input placeholder='Ex. Mohajit..' 
      onChange={(event) => {
        setName(event.target.value)
        }}
        />
        <br></br>
      <button onClick={fetchData}>Predict Age</button>

      <h1>Predicted Age : {predictAge}</h1>
      <p> </p>
    </div>
  )
}

export default App;
