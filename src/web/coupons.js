import React from 'react';
import HeaderMenu from './header_menu';
import HipalIcon from './hipal_icon_page';



export default class Coupons extends React.Component {

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
						<h5 className="pro-link"><a href="/">TheCoffeeCup</a></h5>
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
<a href="/TakeAwayHome"><img src="images/back_o.svg" className="b_arrow"/></a>
Coupons
</div>
</div>
</div>


<div className="approw pt-0 mb-20">
<div className="col-lg-12 p-0 ful-row">

<div className="coupon_apply">
<span><input type="text" placeholder="Enter Coupon Code"/></span>
<span>Apply</span>
</div>

</div>
</div>



<div className="approw pt-0">
<div className="col-lg-12 p-0 ful-row coupon_box">
<h1>Available Coupons</h1>


<div className="box">
<div className="w-space left"></div>
<div className="w-space right"></div>
<span className="dotbox left"></span>
<span className="dotbox right"></span>

<div className="box_offer">
<div className="coupon bg1">
<h1>30% </h1>
</div></div>

<div className="box_apply">
<h3>Valid till : 12 July</h3>
<h1><span>APPLY</span></h1>
</div>
</div>


<div className="box">
<div className="w-space left"></div>
<div className="w-space right"></div>
<span className="dotbox left"></span>
<span className="dotbox right"></span>

<div className="box_offer">
<div className="coupon bg2">
<h3>Get a
coffee free</h3>
</div></div>

<div className="box_apply">
<h3>Valid till : 12 July</h3>
<h1><span>APPLY</span></h1>
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
	<a href="/TakeAwayHome">
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

