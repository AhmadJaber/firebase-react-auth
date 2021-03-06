import React from 'react';
import { Container } from 'react-bootstrap';
import {
  Signup,
  DashBoard,
  Login,
  PrivateRoute,
  ForgotPassword,
} from './components';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/forgot-password" exact component={ForgotPassword} />
              <Route path="/signup" exact component={Signup} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute path="/" exact component={DashBoard} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
