import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './Form';
import Success from './Success';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Form />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};

export default App;
