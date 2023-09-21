import './App.css';
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import React, {useState} from 'react';

import ColorDetails from './ColorDetail';
import ColorList from './ColorList';
import NewColorForm from './NewColor';



function App({colorDefaults}) {
  const [colors, setColors] = useState(colorDefaults);
  console.log(colors);
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route exact path="/colors" element={<ColorList list={colors}/>} />
        <Route exact path="/colors/new" element={<NewColorForm list={colors} setList ={setColors}/>} />
        <Route exact path="/colors/:name" element={<ColorDetails list={colors}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  colorDefaults: [
    {
      name: "red",
      val: "#FF0000",
    },
    {
      name: "blue",
      val:"#0000FF"
    },
    {
      name: "green",
      val:"#00FF00"
    }
  ]
}

export default App;
