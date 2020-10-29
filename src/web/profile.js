import React from 'react';
import HeaderMenu from './header_menu';
import HipalIcon from './hipal_icon_page';
import PlusIcon from './plus_icon_page';


export default class Profile extends React.Component {

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
<a href="#"><img src="images/back_o.svg" className="b_arrow"/></a>
Profile
</div>
</div>
</div>


<div className="approw pt-0 bdr-b2 mb-20">
<div className="col-lg-12 p-0 ful-row">

<div className="profile-box">

<div className="pro_pic">
<img src="images/profile-img.png"/>
</div>
<div className="profile_data">
<h1>Lina Doe</h1>
<p>johndoe@gmail.com</p>
<p><span className="edit">Edit</span></p>
</div>


</div>

</div>
</div>



<div className="approw pt-0">
<div className="col-lg-12 p-0 ful-row food-ord items-row_blk">
<div className="fields_block pt-0 pb-0">
<div className="Profile_menu">
<h5>General</h5>
<ul>
<li><a href="#">
<img src="images/notification_b.svg"/>Notifications</a></li>
<li><a href="#">
<img src="images/bookmarks_b.svg"/>Bookmarks</a></li>
<li><a href="#">
<img src="images/settings_b.png"/>Settings</a></li>
<li><a href="#">
<img src="images/payment_b.png"/>Payments</a></li>
</ul>
</div>
</div>
</div>
</div>





<div className="approw p-0  bg-g4">
<div className="col-lg-12 checkout-box pt-0">
<div className="checkout-btn mt-0">
<span className="btn">Save</span>
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

