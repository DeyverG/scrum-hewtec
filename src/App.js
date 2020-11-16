import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';

// Pages
import Login from './pages/Login';
import SildeBar from './views/SildeBar';
import EditUser from './views/EditUser';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={EditUser} />
        
       
      </Switch>
    </Router>
  );
}

export default App;
