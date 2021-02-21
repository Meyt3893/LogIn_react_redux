import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import LoginForm from './pages/loginpage/loginpage.component';
import {connect} from 'react-redux'
import ProjectsPage from './pages/projectspage/projectspage.component'


function App() {
  return (
    <div>
        <Switch>
          <Route exact path='/' component={LoginForm}/>
          <Route exact path="/info" component={ProjectsPage}/>
        </Switch>

    </div>
  );
}

const mapStateToProps = state => 
({ 
  userData: state.reducer.userData
})

export default connect(mapStateToProps)(App);