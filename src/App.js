import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import EditUser from './pages/EditUser';
import ProjectView from './pages/ProjectView';
import MyProjects from './pages/MyProjects';
import CreateProject from './pages/CreateProject';
import AddCollaborator from './pages/AddCollaborator';
import EditProject from './pages/EditProject';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/MyProjects" component={MyProjects} />
        <Route path="/CreateProject" component={CreateProject} />
        <Route path="/EditUser" component={EditUser} />
        <Route path="/ProjectView" component={ProjectView} />
        <Route path="/AddCollaborator" component={AddCollaborator} />
        <Route path="/EditProject" component={EditProject} />
      </Switch>
    </Router>
  );
}

export default App;
