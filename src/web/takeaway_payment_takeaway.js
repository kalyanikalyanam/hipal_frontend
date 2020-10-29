import React from 'react';
import HeaderMenu from './header_menu';
import HipalIcon from './hipal_icon_page';
import PlusIcon from './plus_icon_page';


export default class PaymentTakeAway extends React.Component {

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
    
        {/* <div id="menu" className="panel" role="navigation">
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

<div className="food-ord-blk">

<div className="approw mt-2">
<div className="col-lg-12 p-0 ful-row">
<div className="deliver-home">
<a href="/SelectPaymentModeTakeAway"><img src="images/back_o.svg" className="b_arrow"/></a>
Payment
</div>
</div>
</div>

<div className="approw">
<div className="col-lg-12 p-0 ful-row food-ord">

<div className="iteams-row-nav cards_row mb-20">



<div className="tab card_one">
<h1>**** **** 4321 </h1>
<p>9/20 <span className="icon"><img src="images/visa_w.svg"/></span></p>
</div>


<div className="tab card_two">
<h1>**** **** 1200 </h1>
<p>1/25 <span className="icon"><img src="images/visa_w.svg"/></span></p>
</div>


<div className="tab card_three">
<h1>**** **** 6002 </h1>
<p>9/22 <span className="icon"><img src="images/visa_w.svg"/></span></p>
</div>





</div>

<div className="addnew-add">
<img src="images/addnew_add_plus.svg"/>Add a new card
</div>


<div className="dine_deliver_take-row card_box">
<div className="left"><span className="icon"><img src="images/payment_w.png"/></span></div>
<div className="middle line-n">
<h1>****  4321 <span className="icon"><img src="images/visa_gradient.svg"/></span></h1>
<p>State Bank of India</p>
</div>
</div>



</div>
</div>




<div className="approw p-0  bg-g4">
<div className="col-lg-12 checkout-box bg-w bdr-top-50">
<div className="dots-expand gray">
<span className="circle-tab"></span>
</div>
<h1><span>Total :</span><span>₹ 494.10</span></h1>
<div className="checkout-btn">
    <a href="/TakeAwayTracking">
<span className="btn">Checkout</span>
</a>
</div>

</div>
</div>



</div>
</div>
</div>
</div>
</div>
    );
    
    
  }
}

