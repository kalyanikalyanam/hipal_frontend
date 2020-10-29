import React from 'react';
import HeaderMenu from './header_menu';
import HipalIcon from './hipal_icon_page';
import PlusIcon from './plus_icon_page';


export default class SelectPaymentModeTakeAway extends React.Component {

    componentWillMount(){
        document.getElementById('root').className='h-100'
        
      }
        componentWillUnmount(){
        document.getElementById('root').className=''
       
      }
    
  render() {

    
    return (

        <div class="body-back h-100">
	
		<div class="masthead pdng-stn1 h-100">
			<HipalIcon/>
		
			{/* <div id="menu" class="panel" role="navigation">
				<div class="wrap-content">
				
					<div class="profile-menu text-center">
							<div class="pro-menu">
							<ul>
								<li><a class="active" href="/">
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
			
			<div class="phone-box wrap push h-100" id="home">
				<HeaderMenu/>
			
				{/* <div class="menu-notify">
				
					<div class="profile-left">
						<a href="#menu" class="menu-link">
						<img src="images/profile-nav.svg"/>
						</a>
					</div>
					<div class="Profile-mid">
						<h5 class="pro-link"><a href="main.html">TheCoffeeCup</a></h5>
					</div>
					<div class="Profile-right">
						
						<img src="images/profile-img.png"/>
						
					
					</div>
					<div class="clearfix"></div>
				</div> */}
				
<div class="body-container h-100 in_pa">

<div class="food-ord-blk h-100">

<div class="approw mt-2">
<div class="col-lg-12 p-0 ful-row">
<div class="p_se-row"><span>Select Mode Of Payment</span> 
<a href="/"><img src="images/close-b_1.svg" class="closeicon"/></a></div>
</div>
</div>

<div class="approw">
<div class="col-lg-12 p-0 ful-row food-ord">

<div class="takeway_box">
<h1>Take Away</h1>
<div class="order_details">
<p><span>Order ID : </span> <span>110002211123</span></p>
<p><span>Date : </span> <span>25th June 2020</span></p>
<p><span>Time : </span> <span>12:00 pm</span></p>
</div>
</div>

<div class="dine_deliver_take-row">
<div class="left"><span class="icon"><img src="images/dinein_w.svg"/></span></div>
<div class="middle">Pay On Delivery</div>
<div class="right"><img src="images/right-arrow-black.svg"/></div>
</div>

<div class="dine_deliver_take-row">
<a href="/PaymentTakeAway">
<div class="left"><span class="icon"><img src="images/delivery-w.svg"/></span></div>
<div class="middle">Pay Now</div>
<div class="right"><img src="images/right-arrow-black.svg"/></div>
</a>
</div>



</div>
</div>

<div class="approw pt-10">
<div class="col-lg-12 p-0 ful-row">
<div class="expore-p">
<a href="/TakeAwayTimeSelect"><span><img src="images/arrow_b_1.svg"/></span>
<span>Back</span></a>
</div>
</div>
</div>



</div>

<div class="btn-group dropup round-f-nav">

  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
 <img src="images/create_w.svg"/>
  </button>
  <PlusIcon/>
  {/* <div class="dropdown-menu">
	<ul>
	<li><a class="active" href="/OrderSelect">
	<img src="images/home-_b.svg"/>Order Now</a></li>
	<li><a href="#">
	<img src="images/call_b.svg"/>Call now</a></li>
	<li><a href="#">
	<img src="images/myorders_b.svg"/>My Order</a></li>
	<li><a href="#">
	<img src="images/vip-y.svg"/>Subscription</a></li>
	</ul>
  </div> */}
</div>
















</div>
</div>
</div>
</div>
    );
    
    
  }
}

