import {Showcase} from './components/showcase/Showcase.jsx';
import { appStyle } from './AppStyle.js';
import { Form } from './components/form/Form.jsx';
import { svg } from './components/fonts_colors';
import { Map } from './components/map/Map.js';
import Navbar from './components/navbar/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {

  const url = 'https://api.abortionpolicyapi.com/v1/table/states/';

  const [data, setData ] = useState([]);

  useEffect(() => {
    fetch(url, {
      headers: {
        "token": "Ua1M2T/TuMcpHj8t"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [])
  console.log(data);
    
  
  return (
    <>
      <div style={appStyle} className="App">
        <Navbar />
        <Form />
            <Routes>
              <Route path='/' element={<Showcase />}></Route>
              <Route path='/states' element={
              <Map />
              }></Route>
            </Routes>
      </div>
    </>
  );
}

export default App;
