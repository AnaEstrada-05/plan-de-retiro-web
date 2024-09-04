import { CSSProperties } from "react";

function Selecciona() {
  const divStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 130,
  };

  const hrStyle = {
    width: 360,
    height: 1,
    backgroundColor: "black",
    marginBottom: 0,
  };

  const titleStyle = {
    fontSize: 30,
    padding: "20px 50px",
  };
  return (
    <div style={divStyle}>
      <div style={hrStyle}></div>
      <p style={titleStyle}>Selecciona tu compañía</p>
      <div style={hrStyle}></div>
    </div>
  );
}

export default Selecciona;
