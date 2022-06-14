import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../src/components/routes/login.component';
import { Navbar } from './components/navbar/navbar';
import Errorpages from './components/routes/errorpages';
import Dashboard from './components/routes/dashboard';
import Accounts from './components/routes/accounts';
import Course from './components/routes/course.route';

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <div className="App">
          <Routes>
            <Route exact path="/" element={<div className='auth-wrapper'><Login /></div>} />
            <Route path='/admin/dashboard' element={<Dashboard />}></Route>
            <Route path='/admin/accounts' element={<Accounts />}></Route>
            <Route path='/admin/courses' element={<Course />}></Route>
            <Route path='/admin/users' element={<Errorpages />}></Route>
            <Route path='/admin/faqs' element={<Errorpages />}></Route>
            <Route path='*' element={<Errorpages />}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
