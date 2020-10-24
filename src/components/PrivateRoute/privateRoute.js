import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function PrivateRoute({ component: Component, ...restProps }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...restProps}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}
