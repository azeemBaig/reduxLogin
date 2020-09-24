import React from "react";
import { Card } from "../Cards/card";

import "./cardList.css";

export const CardList = (props) => {
  console.log(props.users);
  return (
    <div className="card-list">
      {props.users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
};
