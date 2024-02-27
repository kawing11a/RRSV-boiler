import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ErrorBoundary from "./core/containers/ErrorBoundary";
import { Route, Routes } from "react-router-dom";
import React from "react";
import routes from "./routes";
import GlobalUI from "./core/containers/GlobalUI";

function App() {
  return (
    <>
      <ErrorBoundary>
        <GlobalUI>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={React.createElement(route.component, route.props ?? {})}
              />
            ))}
          </Routes>

        </GlobalUI>
      </ErrorBoundary>
    </>
  );
}

export default App;
