import React from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import { cerrarSesionAccion } from "../redux/usuarioDucks";

const Home = (props) => {
  const dispatch = useDispatch();

  const cerrarSesion = () => {
    dispatch(cerrarSesionAccion());
    props.history.push("/login");
  };

  return (
    <div>
      <button onClick={cerrarSesion}>Cerrar Sesion</button>
    </div>
  );
};

export default withRouter(Home);
