import React from 'react';
import HeaderMenu from './header_menu';
import HipalIcon from './hipal_icon_page';
import PlusIcon from './plus_icon_page';


export default class TakeAwayHome extends React.Component {

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
<a href="/Menu2"><img src="images/back_o.svg" className="b_arrow"/></a>
Order
<a href="landing.html"><img src="images/delete-b.svg" className="delete"/></a></div>
</div>
</div>

<div className="approw">
<div className="col-lg-12 p-0 ful-row food-ord">



<div className="dine_deliver_take-row">
<div className="left"><span className="icon"><img src="images/delivery-w.svg"/></span></div>
<div className="middle line-n">
<h1>Take away from </h1>
<p>421,Restro road, Jk road,Hyder....</p>
</div>
<div className="right"><img src="images/right-arrow-black.svg"/></div>
</div>


<div className="dine_deliver_take-row time_select">
<a href="/TakeAwayTimeSelect">
<div className="left"><span className="icon"><img src="images/time-w.png"/></span></div>
<div className="middle line-n">
	
<h1>Selected time</h1>

<p>7:30 PM - 8 PM</p>
</div>
<div className="right"><img src="images/right-arrow-black.svg"/></div>
</a>
</div>



</div>
</div>



<div className="approw pt-0 pb-0">
<div className="col-lg-12 p-0 ful-row food-ord items-row_blk">
<h1>Items</h1>
<div className="row-cart-d">
<div className="left">
<div className="box veg"><span></span></div>
</div>
<div className="middle">
<h3>Veg Caesar Salad 
<a href="/InfoItem1"><img src="images/info-icon1.svg" className="infoicon"/></a>
</h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00 
</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tbody><tr>
<td className="dic">
<img src="images/delete-b.svg" className="delete"/>
</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</tbody></table>
</div>
</div>
</div>

<div className="row-cart-d">
<div className="left">
<div className="box nonveg"><span></span></div>
</div>
<div className="middle">
<h3>Veg Caesar Salad 
<a href="/InfoItem1"><img src="images/info-icon1.svg" className="infoicon"/></a>
	</h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00 
</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tbody><tr>
<td className="dic"><img src="images/delete-b.svg" className="delete"/></td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</tbody></table>
</div>
</div>
</div>



</div>
</div>


<div className="approw pt-0 addmore_btn bg-g4">
<div className="addmore_btn"><img src="images/add_m_iteams.svg" className="infoicon"/>Add more item</div>

<div className="gst-blk">
<div className="gst-row"><span>+GST</span> 17.05</div>
<div className="gst-row"><span>+SGST</span> 17.05</div>
</div>
<div className="apply_cop">
	<a href="/Coupons">
<span className="btn">Apply coupon</span>
</a>
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

