import React from 'react';
import { Link } from 'react-router-dom';

import Sidebar from "react-sidebar";


export default class DineInSelectPaymentMode19 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		  sidebarOpen: false
		};
		this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
	  }
    componentWillMount(){
        document.getElementById('root').className='h-100'
        
      }
        componentWillUnmount(){
        document.getElementById('root').className=''
       
	  }
	  onSetSidebarOpen() {
        if(this.state.sidebarOpen==false)
        {
         this.setState({ sidebarOpen: true });
        }
        else{
         this.setState({ sidebarOpen: false });
        }
         }
  render() {

    
    return (
    
        <div className="body-back h-100">
	
		{/* <div className="masthead pdng-stn1 h-100">
		
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


<div  id="ggg" className="masthead pdng-stn1 h-100">
		<Sidebar
                sidebar={
		
	
				<div className="wrap-content menu-width">
				
					<div className="profile-menu text-center">
							<div className="pro-menu">
							<ul>
								<li><a className="active" href="/">
								<img src="images/home-_b.svg"/>Home</a></li>
								<li><a href="/">
								<img src="images/profile_b.svg"/>Profile</a></li>
								<li><a href="/DineIn7">
								<img src="images/profile_b.svg"/>Scan QR</a></li>
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
			    }
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{ sidebar: { background: "white" } }}
              ></Sidebar>
			
			<div className="phone-box wrap push h-100" id="home">
			
				<div className="menu-notify">
				
				<div className="profile-left">
					<a href="#"  className="open" onClick={() => this.onSetSidebarOpen()}>
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
				</div>
				
<div className="body-container h-100 in_pa">

<div className="food-ord-blk">

<div className="approw mt-2">
<div className="col-lg-12 p-0 ful-row">
<div className="deliver-home">
<a href="/DineInBillPlease18"><img src="images/back_o.svg" className="b_arrow"/></a>
Pay
</div>





</div>
</div>

<div className="approw">
<div className="col-lg-12 p-0 ful-row food-ord">

<div className="dine_deliver_take-row">
	<Link to="/DineTablePayCash20">
<div className="left"><span className="icon by_cashbg"><img src="images/cash.svg"/></span></div>
<div className="middle">By cash</div>
<div className="right"><img src="images/right-arrow-black.svg"/></div>
</Link>
</div>

<div className="dine_deliver_take-row">
{/* <a href="deliver-1.html"> */}
<div className="left"><span className="icon by_onlinebg"><img src="images/online_icon.svg"/></span></div>
<div className="middle">Online</div>
<div className="right"><img src="images/right-arrow-black.svg"/></div>
{/* </a> */}
</div>

<div className="dine_deliver_take-row">
<div className="left"><span className="icon by_upibg"><img src="images/upi_icon.png" className="width-40"/></span></div>
<div className="middle">UPI</div>
<div className="right"><img src="images/right-arrow-black.svg"/></div>
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

