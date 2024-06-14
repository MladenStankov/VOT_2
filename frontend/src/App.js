import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register.js';
import Login from './components/Login.js';
import Tasks from './components/Tasks.js';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/tasks" component={Tasks} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
