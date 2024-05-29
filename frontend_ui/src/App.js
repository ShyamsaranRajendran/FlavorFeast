// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Register from './components/register/register';
import Feedback from './components/feedback/feedback';
import AdminUser from './components/adminUser/user';
import Content from './components/content/content';
import AdminContent from './components/adminContent/addContent';
import AdminView from './components/adminContent/viewContent';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/admin/user" element={<AdminUser />} />
          <Route path="/admin/content/add" element={<AdminContent />} />
          <Route path="/admin/view" element={<AdminView />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
