import React from 'react';
import HeaderMenu from '../web/header_menu';
import HipalIcon from '../web/hipal_icon_page';
import { Link } from 'react-router-dom';

export default class Addressess extends React.Component {

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
            <HeaderMenu/>
			
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
                <HipalIcon/>
				
<div className="body-container h-100 in_pa">

<div className="food-ord-blk h-100_in">

<div className="approw mt-2">
<div className="col-lg-12 p-0 ful-row">
<div className="deliver-home">
<a href="/DeliverHomeNewUser2"><img src="images/back_o.svg" className="b_arrow"/></a>
Address
</div>
</div>
</div>




<div className="approw pt-0">
<div className="col-lg-12 p-0 ful-row food-ord items-row_blk">



<div className="address_box">
<div className="dine_deliver_take-row address">
<div className="left"><span className="icon"><img src="images/home_w.svg"/></span></div>
<div className="middle line-n width-75">
<h1><span>Home</span></h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
</div>
</div>
<div className="del-edit_row">Delete/edit</div>
</div>



<div className="address_box">
<div className="dine_deliver_take-row address">
<div className="left"><span className="icon"><img src="images/work-w.svg"/></span></div>
<div className="middle line-n width-75">
<h1><span>Work</span></h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
</div>
</div>
<div className="del-edit_row">Delete/edit</div>
</div>




<div className="addnew-add">
	<Link to="/AddNewAddress1">
<img src="images/addnew_add_plus.svg"/> Add a new address
</Link>
</div>

</div>
</div>





<div className="approw p-0  bg-g4">
<div className="col-lg-12 checkout-box bg-w bdr-top-50">

<div className="checkout-btn mt-0">
<span className="save_g_btn">Save</span>
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

