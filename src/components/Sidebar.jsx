import React from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

// ICONS
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SidebarIcons from "./SidebarIcons";

import { cerrarSesionAccion } from "../redux/usuarioDucks";

const Sidebar = (props) => {
  const distpatch = useDispatch();

  const cerrarSesion = () => {
    distpatch(cerrarSesionAccion());
    props.history.push("/login");
  };

  return (
    <div id='container-sibar'>
      <TwitterIcon className='icon' />

      <SidebarIcons text='Home' Icon={HomeIcon} />
      <SidebarIcons text='Explorar' Icon={SearchIcon} />
      <SidebarIcons text='Notificaciones' Icon={NotificationsNoneIcon} />
      <SidebarIcons text='Mensajes' Icon={MailOutlineIcon} />
      <SidebarIcons text='Marcadores' Icon={BookmarkBorderIcon} />
      <SidebarIcons text='Listas' Icon={ListAltIcon} />
      <SidebarIcons text='Perfil' Icon={PermIdentityIcon} />
      <SidebarIcons text='Más' Icon={MoreHorizIcon} />

      <div className='container-button'>
        <button onClick={() => cerrarSesion()} className='btn-logout'>
          Salir
        </button>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
