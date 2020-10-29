import React, { useContext } from "react";

import { MenuContext } from "react-flexible-sliding-menu";

import firebase from '../config';

    function Inside2() {
    const { closeMenu } = useContext(MenuContext);
    const  componentDidMount = () => {
      this.setState({loading: false});
    
      var ref=firebase.database().ref('dynamic_logo').orderByChild("status").equalTo("Selected");
      ref.once("value",snapshot =>{
       const data =[];
        console.log(snapshot.val());
        snapshot.forEach(element => {
        const usersData={
          dynamiclogoid:element.key.toString(),
          dynamic_logo:element.val().dynamic_logo,
          status:element.val().status,
          created_on:element.val().created_on
        }
        data.unshift(usersData);
        });
       
        this.setState({DymicLogoList:data,loading:true},()=>{
        console.log(this.state.DymicLogoList,'DymicLogoList');
        });
      })
  
      }
  return (
    <>
    <div className="Inside2">

    
                    <ul>
                        <li><a className="active" href="/">
                        <img src="images/home-_b.svg"/>Home</a></li>
                        <li><a href="#">
                        <img src="images/profile_b.svg"/>Profile</a></li>
                        <li><a href="#">
                        <img src="images/saved_b.svg"/>Saved</a></li>
                        <li><a href="#">
                        <img src="images/vip-y.svg"/>Go VIP</a></li>
                        <li><a href="#">
                        <img src="images/hipal-iocn.svg"/>Hipal</a></li>
                        <li><a href="#">
                        <img src="images/settings_b.svg"/>Settings</a></li>
                    </ul>
              
    </div>
    <button onClick={closeMenu}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </button>
    </>

  );
}

export default Inside2;
