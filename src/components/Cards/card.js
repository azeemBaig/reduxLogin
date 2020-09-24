import React from "react";

import "./card.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <h2>Name : {props.user.name}</h2>
      <div>Age : {props.user.age}</div>
      <div>Gender : {props.user.gender}</div>
      <div>Email : {props.user.email}</div>
      <div>Phone : {props.user.phoneNo}</div>
    </div>
  );
};
