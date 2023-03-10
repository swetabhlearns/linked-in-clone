import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./headerOption.css";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="header-option">
      {Icon && <Icon />}

      {avatar && (
        <Avatar className="header-option__icon">{user?.email[0]}</Avatar>
      )}

      <h3 className="header-option__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
