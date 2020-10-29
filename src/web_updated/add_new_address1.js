import React from 'react';
import HeaderMenu from '../web/header_menu';
import HipalIcon from '../web/hipal_icon_page';
import { Link } from 'react-router-dom';

export default class AddNewAddress1 extends React.Component {

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
{/* 		
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
<a href="/Addressess"><img src="images/back_o.svg" className="b_arrow"/></a>
Address
</div>
</div>
</div>



<div className="approw pt-0">
<div className="col-lg-12 p-0 ful-row food-ord items-row_blk">


<div className="addnew-add text-center">
<img src="images/view_m-ico.svg" className="pull-left mr-0"/> Pin on map
</div>

<div className="fields_block pt-0 pb-0">


<div className="field-row"><input type="number" placeholder="Address Line 1"/></div>
<div className="field-row"><input type="text" placeholder="Address Line 2"/></div>
<div className="field-row"><input type="text" placeholder="Floor (Optional)"/></div>
<div className="field-row"><input type="text" placeholder="How to reach (Optional)"/></div>
<div className="field-row saveas"><span>Save as</span></div>

<div className="field-row se-add mb-0">
<span>Home</span>
<span>Work</span>
<span>Other</span>
</div>


</div>


</div>
</div>





<div className="approw p-0  bg-g4">
<div className="col-lg-12 checkout-box pt-0">
<div className="checkout-btn mt-0">
	<Link to="/Addressess">
<span className="btn">Save Address</span>
</Link>
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

