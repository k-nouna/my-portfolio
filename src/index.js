import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';
import Contacts from './pages/Contacts';

import Banner from './components/Banner';
import Error from './components/Error';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Banner />
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/my-works' element = {<Works/>}/>
          <Route path='/about-me' element = {<About/>}/>
          <Route path='/contacts' element = {<Contacts/>}/>
          <Route path='*' element = {<Error />}/>
        </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
