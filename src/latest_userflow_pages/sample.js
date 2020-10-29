import React, { useState, Fragment } from "react";
import AddUserForm from "./AddUserForm";
import firebase from '../config';

const Sample = () => {






 
  // CRUD operations
  const addUser = user => {
    firebase
      .database()
      .ref("times")
      .push({
        name: user.name,
        username: user.username
      })
      .then(() => {
        //setTitle("");
        //setTime("");
      });
  };

  
  return (
    <div className="container">
     
              <AddUserForm addUser={addUser} />
           
    </div>
  );
};

export default Sample;
