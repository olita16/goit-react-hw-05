import React from "react";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404</h1>
      <p>Sorry, Page Not Found</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
