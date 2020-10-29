import React from 'react';
import HeaderMenu from './header_menu';
import HipalIcon from './hipal_icon_page';
import PlusIcon from './plus_icon_page';


export default class MyAddress extends React.Component {

    componentWillMount(){
        document.getElementById('root').className='h-100'
        
      }
        componentWillUnmount(){
        document.getElementById('root').className=''
       
      }
    
  render() {

    
    return (
<div className="body-back h-100">
	
    <div className="masthead pdng-stn1 h-100">
        <HipalIcon/>
{/*     
        <div id="menu" className="panel" role="navigation">
            <div className="wrap-content">
            
                <div className="profile-menu text-center">
                        <div className="pro-menu">
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
                </div>
            
            </div>
        </div> */}
        
        <div className="phone-box wrap push h-100" id="home">
            <HeaderMenu/>
            
        
            {/* <div className="menu-notify">
            
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
            </div> */}
            
<div className="body-container h-100 in_pa">

<div className="food-ord-blk h-100">

<div className="approw mt-2">
<div className="col-lg-12 p-0 ful-row">
<div className="deliver-home">
<a href="/Menu"><img src="images/back_o.svg" className="b_arrow"/></a>
Delivery
</div>
</div>
</div>


<div className="approw pt-0">
<div className="col-lg-12 p-0 ful-row">

<div className="address-box">
<div className="top"><span>Home</span> Change</div>
<div className="bottom">
<h1>Gaurav Singh</h1>
<p>402, Kesari Nandan, Sector 3, Kharghar, Navi Mumbai</p>
</div>

</div>

</div>
</div>


<div className="approw pt-0">
<div className="col-lg-12 p-0 ful-row food-ord items-row_blk">
<h1 className="mb-15">My addresses</h1>


<div className="addnew-add">
    <a href="/AddNewAddress">
<img src="images/addnew_add_plus.svg"/> Add a new address</a>
</div>

<div className="dine_deliver_take-row address">
<div className="left"><span className="icon"><img src="images/location-w.png"/></span></div>
<div className="middle line-n">
<h1><span>Work</span></h1>
<p>402, Kesari Nan...</p>
</div>
<div className="right">Change</div>



</div>

</div>
</div>





<div className="approw p-0  bg-g4">
    <a href="/DeliverHome">
<div className="col-lg-12 checkout-box bg-w bdr-top-50">
<div className="dots-expand gray">
<span className="circle-tab"></span>
</div>
<div className="checkout-btn">
<span className="btn">Continue</span>
</div>
</div>
</a>
</div>



</div>


</div>
</div>
</div>
</div>
    );
    
    
  }
}

