import React, { useState, Fragment } from "react";
import Scan2 from "./scan2";
import firebase from '../config';

const Scan1 = () => {






 
  // CRUD operations
  const addUser = user => {
    firebase
      .database()
      .ref("times")
      .push({
        name: user.name,
        
      })
      .then(() => {
        //setTitle("");
        //setTime("");
      });
  };

  
  return (
    <div className="container">
     
              <Scan2 addUser={addUser} />
           
    </div>
  );
};

export default Scan1;
