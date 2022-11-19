import React from "react";
import style from "./style.module.css";
export default function ThisButton(props) {
  const { outline, name } = props;
  return outline ? (
    <button className={`${style.btn} ${style.btnType1}`}>{name}</button>
  ) : (
    <button className={`${style.btn} ${style.btnType2}`}>{name}</button>
  );
}
