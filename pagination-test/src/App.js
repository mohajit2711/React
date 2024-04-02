import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(
      response => response.json().then(data => {
        setImages(data);
      })
    );
  }, [])
  return 
}

export default App;
