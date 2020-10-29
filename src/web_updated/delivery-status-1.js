import React from 'react';
import HeaderMenu from '../web/header_menu';
import HipalIcon from '../web/hipal_icon_page';



export default class DeliveryStatus11 extends React.Component {

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

            <HipalIcon/>
			
			<div className="phone-box wrap push h-100" id="home">
			
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

                <HeaderMenu/>
				
<div className="body-container h-100 in_pa">

<div className="food-ord-blk">

<div className="approw mt-2">
<div className="col-lg-12 p-0 ful-row">
<div className="deliver-home">
<a href="#"><img src="images/back_o.svg" className="b_arrow"/></a>
Order
</div>
</div>
</div>



<div className="approw pt-0">
<div className="col-lg-12 p-0 ful-row">

<div className="delivery_map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487295.02532044525!2d78.12785129924684!3d17.41215307568293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1598335099645!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

</div>
<div className="delivery_details">

<div className="delivery_d_row">
<div className="deli_icon background_yellow"><img src="images/location-w.png"/></div>
<div className="deli_text"><p>402, Kesari Nandan, Sector 3, Kharghar, Navi Mumbai</p></div>
</div>

<div className="delivery_d_row">
<div className="deli_icon background_orage"><img src="images/time-w.png"/></div>
<div className="deli_text"><p>30-40 mins</p><p><span className="grey">Est time</span></p></div>
</div>

<div className="delivery_d_row">
<div className="deli_icon">
<img src="images/profile-img.png" className="profile"/>
</div>
<div className="deli_text">
<div className="call_btn_row call_brn_del_boy">
<span className="call_btn_ico"> <img src="images/call_icon_w.svg"/> Call </span>
</div>
<p><b>Mr. Santosh</b></p><p><span className="grey">Delivery guy</span></p></div>
</div>

</div>



<div className="w-100 delver_status">
<span className="left">Delivery Status</span>
</div>


<div className="w-100 delivey_timeline">
<div className="timeline">
    
        <div className="line text-muted"></div>


<article className="panel panel-outline">
<div className="panel-heading icon background_green">
 <img src="images/tick_w.svg"/>
</div>
<div className="panel-body">
Order Accepted<br></br><span>2:30 PM</span>
</div>
</article>

<article className="panel panel-outline">
<div className="panel-heading icon picked">
 <img src="images/reload_w.svg"/>
</div>
<div className="panel-body">
Order prepared<br></br><span>2:30 PM</span>
</div>
</article>
       

<article className="panel panel-outline">
<div className="panel-heading icon picked">
 <img src="images/reload_w.svg"/>
</div>
<div className="panel-body">
Out for delivery<br></br>
<div className="call_btn_row call_btn_orange">
<span className="call_btn_ico">Mr. Santosh <img src="images/call_icon_w.svg"/>  </span>
</div>

</div>
</article>


<article className="panel panel-outline">
<div className="panel-heading icon picked">
 <img src="images/reload_w.svg"/>
</div>
<div className="panel-body">
Delivery reached<br></br><span>waiting 4:58</span>
</div>
</article>


<article className="panel panel-outline">
<div className="panel-heading icon picked">
 <img src="images/reload_w.svg"/>
</div>
<div className="panel-body">
Order delivered<br></br>
<div className="deli_img_block">
<div className="delivery_img">
<img src="images/landing-img-2.png"/>
</div>
<div className="delivery_img">
<img src="images/landing-img-2.png"/>
</div>
<div className="delivery_img">
<img src="images/landing-img-2.png"/>
</div>
</div>
</div>
</article>
  
<article className="panel panel-outline">
<div className="panel-heading icon picked">
 <img src="images/reload_w.svg"/>
</div>
<div className="panel-body">
Payment recieved<br></br><div className="call_btn_row paid_amount">
<span className="call_btn_ico">Paid <img src="images/bx_bx-checkbox-checked.svg"/>  </span>
</div>
</div>
</article>


  


 

</div>
</div>









</div>


</div>


<div className="approw p-0  bg-g4">
<div className="col-lg-12 checkout-box pt-0">
<div className="checkout-btn mt-0">
<span className="btn">View Order</span>
</div>
</div>
</div>


</div>
</div>

</div>
</div></div>	
    );
    
    
  }
}

