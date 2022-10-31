import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Users from "./components/users";
import Characters from "./components/characters";
import PageNotFound from "./components/PageNotFound";
import { ErrorBoundary } from "react-error-boundary";

//Nested Routes

const App = () => {
  function ErrorFallBack({ error, resetErrorBoundary }) {
    return (
      <div>
        <p>An error has occured</p>
      </div>
    );
  }
  return (
    <section>
      <div>
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Characters" element={<Characters />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </section>
  );
};

export default App;
