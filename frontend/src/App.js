import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import '../node_modules/jquery/dist/jquery.min.js'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/routes/login.component'
import SignUp from './components/routes/signup.component'
import ForgotPassword from './components/routes/forgotPassword.component'
import Dashboard from './components/routes/dashboard'
import Footer from './Elements/footer';
import Homepage from './components/routes/homepage';
import { Navbar } from './components/navbar/navbar';
import Errorpages from './components/routes/errorpages';
import Account_profile from './components/routes/account-profile';
import './assets/css/home.css'
import CourseDetail from './components/routes/coursedetail';
import Settings from './components/routes/setting';
import InProgress from './components/routes/in-progress';
import Learn from './components/routes/learn';
import Completed from './components/routes/complete';
import LearnWeek from './components/routes/learn.week';

function App() {
  const value = localStorage.getItem('state')
  return (
    <Router>
      <div className="App">
        <header>
            <Navbar/>
        </header>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route path="/login" element={<div className="auth-wrapper"><Login /></div>}/>
              <Route path="/sign-up" element={value==="true"?<Navigate to="/dashboard" />:<div className="auth-wrapper"><SignUp /></div>}/>
              <Route path="/forgot-password" element={value==="true"?<Navigate to="/dashboard" />:<div className="auth-wrapper"><ForgotPassword /></div>}/>
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route path="/course-details" element={value==="false"?<Navigate to="/login" />:<CourseDetail />}/>
              <Route path="/account-profile" element={value==="false"?<Navigate to="/login" />:<div className="auth-wrapper"><Account_profile /></div>}/>
              <Route path="/settings" element={value==="false"?<Navigate to="/login" />:<div className="auth-wrapper"><Settings /></div>}/>
              <Route path="/in-progress" element={value==="false"?<Navigate to="/login" />:<InProgress />}/>
              <Route path="/learn" element={value==="false"?<Navigate to="/login" />:<Learn />}/>
              <Route path="/completed" element={value==="false"?<Navigate to="/login" />:<Completed />}/>
              <Route path="/learn/week" element={value==="false"?<Navigate to="/login" />:<LearnWeek />}/>
              <Route path="*" element={<Errorpages />}/>
            </Routes>
        <footer>
          <Footer />
        </footer>
      </div>
      
    </Router> 
  )
}
export default App