
import React from "react";
import Sidebar from "reactrix-sidebar";
import "reactrix-sidebar/index.css";
import { Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom';

export default class SIDEBAR extends React.Component {
  render() {
    var options = {
      side: "left",
      effect: "diverge"
      
    };
    return (
      <Sidebar {...options}>
         <nav>
          {/* <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a> */}
           <ul>
              <li><a className="active" href="#">
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
          
        </nav> 
        <div className="content">
        <div className="phone-box wrap push h-100" id="home">
    
    <div className="menu-notify">
    
      <div className="profile-left">
        {/* <a href="#" className="menu-link"> */}
        <img src="images/profile-nav.svg"/>
        {/* </a> */}
      </div>
      <div className="Profile-mid">
        <h5 className="pro-link"><a href="main.html">TheCoffeeCup</a></h5>
      </div>
      <div className="Profile-right">
        
        <img src="images/profile-img.png"/>
        
      
      </div>
      <div className="clearfix"></div>
    </div>
    
<div className="body-container h-100 in_pa">

<div className="food-ord-blk">

<div className="approw mt-2">
<div className="col-lg-12 p-0 ful-row">
<div className="deliver-home">
<a href="#"><img src="images/back_o.svg" className="b_arrow"/></a>
Error
</div>
</div>
</div>



<div className="approw pt-0">
<div className="col-lg-12 p-0 ful-row food-ord items-row_blk">

<div className="fields_block pt-0 pb-0">



<div className="field-row payment_suc_emoji text-center">
<p className="mt-10 mb-10"><img src="images/scan_fail_error.png" className="scan_fail_error"/></p>
<p className="some_wrong">Something went wrong</p>
<p className="some_wrong-data">Sorry, we can’t process your request at the moment.
Please try again later.</p>

</div>




</div>
</div>
</div>




</div>


</div>
</div>
        </div>

        {/* <div className="body-back h-100">
	
  <div className="masthead pdng-stn1 h-100">
  
    <div id="menu" className="panel" role="navigation">
      <div className="wrap-content">
      
        <div className="profile-menu text-center">
            <div className="pro-menu">
            <ul>
              <li><a className="active" href="#">
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
        </div>
      
      </div>
    </div>
    
    <div className="phone-box wrap push h-100" id="home">
    
      <div className="menu-notify">
      
        <div className="profile-left">
          <a href="#menu" className="menu-link">
          <img src="images/profile-nav.svg"/>
          </a>
        </div>
        <div className="Profile-mid">
          <h5 className="pro-link"><a href="main.html">TheCoffeeCup</a></h5>
        </div>
        <div className="Profile-right">
          
          <img src="images/profile-img.png"/>
          
        
        </div>
        <div className="clearfix"></div>
      </div>
      
<div className="body-container h-100 in_pa">

<div className="food-ord-blk">

<div className="approw mt-2">
<div className="col-lg-12 p-0 ful-row">
<div className="deliver-home">
<a href="#"><img src="images/back_o.svg" className="b_arrow"/></a>
Error
</div>
</div>
</div>



<div className="approw pt-0">
<div className="col-lg-12 p-0 ful-row food-ord items-row_blk">

<div className="fields_block pt-0 pb-0">



<div className="field-row payment_suc_emoji text-center">
<p className="mt-10 mb-10"><img src="images/scan_fail_error.png" className="scan_fail_error"/></p>
<p className="some_wrong">Something went wrong</p>
<p className="some_wrong-data">Sorry, we can’t process your request at the moment.
Please try again later.</p>

</div>




</div>
</div>
</div>




</div>


</div>
</div>
</div>	
</div> */}






      </Sidebar>
    );
  }
}
