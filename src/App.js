import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Top from './Top/Top';
import YourFormComponent from './Form/Form';
import Home from './Home/Home';
import FormComponent from './studantData/studantForm';
import TableComponent from './studantData/studantTable';
import StudentCard from './studantData/studentCard';
import Shop from './Shop/Shop';
import Shopitem from './Shop/Shopitem';


const App = () => {
  const [appFormData, setAppFormData] = useState([]);

  return (
    <Router>
      <Top />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/yourForm" element={<YourFormComponent />} />
        <Route path="/table" element={<TableComponent formData={appFormData} setFormData={setAppFormData} />} />
        <Route path="/form" element={<FormComponent formData={appFormData} setFormData={setAppFormData} />} />
        {/* Use the :index parameter in the route to pass it to FormComponent */}
        <Route path="/edit/:index" element={<FormComponent formData={appFormData} setFormData={setAppFormData} />} />
        <Route path="/student-card/:index" element={<StudentCard />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/shopItem/:Id" element={<Shopitem />} />
      </Routes>
    </Router>
  );
}

export default App;
