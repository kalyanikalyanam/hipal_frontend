import React from 'react';
import HeaderMenu from './header_menu';
import HipalIcon from './hipal_icon_page';
import PlusIcon from './plus_icon_page';


export default class OrderTracking1 extends React.Component {

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
<a href="/TakeAwayPayment"><img src="images/back_o.svg" className="b_arrow"/></a>
Order
</div>
</div>
</div>



<div className="approw pt-0">
<div className="col-lg-12 p-0 ful-row">

<div className="w-100 time-delivey">
<h1>20 sec</h1>
<h3>Your order is under process by </h3>
</div>

<div className="w-100 com_deliver">
<h1><img src="images/round-g.svg"/></h1>
<h5>We ensures delivery measures</h5>
</div>

<div className="w-100 safety-covid">

<div className="box">
<p><img src="images/round-g.svg"/></p>
<p>Safe and hygenic packaging</p>
</div>

<div className="box">
<p><img src="images/round-g.svg"/></p>
<p>Delivery partner safety check</p>
</div>

<div className="box">
<p><img src="images/round-g.svg"/></p>
<p>Vigorous sanitization</p>
</div>

<div className="box">
<p><img src="images/round-g.svg"/></p>
<p>Contactless delivery</p>
</div>

</div>






</div>
</div>





<div className="approw p-0  bg-g4">
<div className="col-lg-12 checkout-box pt-0">
<div className="checkout-btn mt-0">
	<a href="/DeliveryStatus1">
<span className="btn">Proceed to tracking</span>
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

