import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <h1>404: NOT FOUND</h1>
        </div>
      </div>
      <div className="container content">
        <p>Page not found...</p>
        <Link to={"/"} className="btn btn-primary" onClick={() => navigate(-1)}>
          Go Back
        </Link>
      </div>
    </main>
  );
};

export default Error;
