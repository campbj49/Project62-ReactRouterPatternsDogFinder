import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, {useState} from 'react';

import ColorDetails from './ColorDetail';
import ColorList from './ColorList';
import NewColorForm from './NewColor';



function App({colorDefaults}) {
  const [colors, setColors] = useState(colorDefaults);
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route exact path="/colors" element={<ColorList list={colors}/>} />
        <Route exact path="/colors/new" element={<NewColorForm list={colors}/>} />
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
      val: 0xFF0000,
    },
    {
      name: "blue",
      val:0x0000FF
    },
    {
      name: "green",
      val:0x00FF00
    }
  ]
}

export default App;
