import React, { useEffect } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";

import { ingresoUsuarioAccion } from "../redux/usuarioDucks";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

const LoginRight = (props) => {
  const dispatch = useDispatch();

  const loading = useSelector((store) => store.usuario.loading);
  const activo = useSelector((store) => store.usuario.activo);

  useEffect(() => {
    if (activo) {
      props.history.push("/home");
    }
  }, [activo, props.history]);

  return (
    <div id='container-login-right'>
      <div className='inputs-area'>
        <form action='' className='form-login'>
          <input type='text' placeholder='Phone number or Userna..' />
          <input type='password' placeholder='Password' />

          <button
            type='submit'
            onClick={() => dispatch(ingresoUsuarioAccion())}
            disabled={loading}
          >
            Log In
          </button>
        </form>
      </div>

      <div className='content'>
        <TwitterIcon />
        <div className='text-login'>
          <p>Lo que está pasando ahora</p>
          <p>Únete a Twitter hoy mismo.</p>
        </div>
        <div className='container-buttons'>
          <button className='btn-register'>Registrate</button>
          <button className='btn-login'>Iniciar sesión</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LoginRight);
