import React from 'react';

import Sidebar from "react-sidebar";
import { Link } from 'react-router-dom';
export default class DineInVisitAgain21 extends React.Component {

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
    
        <div class="body-back h-100">
	
		{/* <div class="masthead pdng-stn1 h-100">
		
			<div id="menu" class="panel" role="navigation">
				<div class="wrap-content">
				
					<div class="profile-menu text-center">
							<div class="pro-menu">
							<ul>
								<li><a class="active" href="#">
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
			
			<div class="phone-box wrap push h-100" id="home">
			
				<div class="menu-notify">
				
				<div className="profile-left">
					<a href="#"  className="open" onClick={() => this.onSetSidebarOpen()}>
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
				</div>
				
<div class="body-container h-100 in_pa">

<div class="food-ord-blk">

<div class="approw mt-2">
<div class="col-lg-12 p-0 ful-row">
<div class="deliver-home">
<a href="/DineTablePayCash20"><img src="images/back_o.svg" class="b_arrow"/></a>
THANKS 
</div>
</div>
</div>



<div class="approw pt-0">
<div class="col-lg-12 p-0 ful-row food-ord items-row_blk">

<div class="fields_block pt-0 pb-0">



<div class="field-row payment_suc_emoji text-center">
<p class="ur_at  mb-20">VISIT AGAIN</p>
<p class="table_no mt-150"><span class="t-n-35">VISIT AGAIN</span></p>
</div>




</div>
</div>
</div>

<div class="approw checkout-btn mt-50 pt-0">
	<Link to="/">
<span class="btn reorder">Home</span>
</Link>
{/* <span class="btn mt-20">Continue</span> */}
</div>




</div>
</div>
</div>
</div>
	</div>

    );
    
    
  }
}

