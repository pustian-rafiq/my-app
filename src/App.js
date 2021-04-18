import React from 'react'
import './App.css';
// import ServicePage from './pages/ServicePage';
 
// import ContactPage from './pages/ContactPage';
// import PortfolioPage from './pages/PortfolioPage';
// import CoursesPage from './pages/CoursesPage';
// import AboutPage from './pages/AboutPage';
 import AppRoute from './router/AppRoute';
 import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
      <AppRoute/>
   </BrowserRouter>
  );
}

export default App;
