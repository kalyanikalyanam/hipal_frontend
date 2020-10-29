import React, { useContext, Component } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import firebase from '../config';
import { Link } from 'react-router-dom';
import {Form} from 'reactstrap';


    function Inside1() {
       
        
      
        const { toggleMenu } = useContext(MenuContext);
        
       

  return (
    <div className="Inside1">
        		<div className="menu-notify">
      <div className="profile-left">
      <button onClick={toggleMenu} className="primary-button">
						<img src="images/profile-nav.svg"/>
            </button>
                </div>
          
            <div className="Profile-mid">
                    <h5 className="pro-link"><a href="/">TheCoffeeCup</a></h5>
                </div>
                <div className="Profile-right">
                    
                    <img src="images/profile-img.png"/>
                    
                
                </div>
                <div className="clearfix"></div>
                </div>
   
    </div>
  );
}

export default Inside1;
