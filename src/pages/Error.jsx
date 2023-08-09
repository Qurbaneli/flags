import React from "react";

function Error() {
  const style = {
    width: "100%",
    height: "100vh",
    padding: "0px",
    margin: "0px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const errorBox = {
    textAlign: "center",
  };

  const titleStye = {
    fontSize: "65px",
    margin: "0px",
  };

  const subTitle = {
    fontSize: "22px",
  };

  return (
    <div style={style}>
      <div style={errorBox}>
        <h1 style={titleStye}>Error 404</h1>
        <p style={subTitle}>Page nout found</p>
      </div>
    </div>
  );
}

export default Error;
