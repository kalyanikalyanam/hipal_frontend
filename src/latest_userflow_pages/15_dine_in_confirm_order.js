import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "react-sidebar";


export default class DineInConfirmOrder15 extends React.Component {

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
<a href="/MenuDineIn14"><img src="images/back_o.svg" className="b_arrow"/></a>
Confirm Order
</div>
</div>
</div>



<div className="approw pt-0">

<div className="ask_row mb-10">Order Participant(s)</div>
<div className="col-lg-12 p-0 ful-row">
<div className="ask_friends m-0">
<div className="ask_row paricipant_row">

<div className="img_parti_in"><img src="images/profile-img.png"/></div>
<div className="img_parti_main">
<p><img src="images/profile-img.png"/></p>
<p> #0013223</p>
<p><img src="images/nav_data_icon.png" className="data_nav_icon"/></p>





</div>
<div className="img_parti_in"><img src="images/profile-img.png"/></div>

</div>



</div>

<hr className="line mt-10 mb-0"></hr>

</div>
</div>





<div className="approw pt-0  pb-0">
<div className="col-lg-12 p-0 ful-row food-ord items-row_blk">
<h1 className="mb-0">Items</h1>



<div className="row-cart-d mb-10">


<div className="left w-70 confirm_item">
<div className="box veg"><span></span></div>
<h1>Veg Caesar Salad </h1>
<p>??? 220.00</p>
<p className="qty">Quantity: Full</p>
</div>



<div className="right w-27">
<div className="inc-dis mt-30">
<table>
<tbody><tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</tbody></table>
</div>


</div>


</div>


<div className="row-cart-d mb-10">


<div className="left w-70 confirm_item">
<div className="box nonveg"><span></span></div>
<h1>Chicken Tenders</h1>
<p>??? 220.00</p>

</div>



<div className="right w-27">
<div className="inc-dis mt-30">
<table>
<tbody><tr>
<td className="dic">-</td>
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
<hr className="line mb-10"></hr>
<p className="text-center cook_inst">Add cooking instructions (optional)</p>
<div className="checkout-btn mt-10 mb-10">
    <Link to='/MenuDineIn14'>
<span className="btn more_order_btn">Order more</span>
</Link>
</div>
</div>



<div className="approw p-0  bg-g4">
<div className="col-lg-12 checkout-box bg-w bdr-top-50 bdr_gray_1">
<div className="dots-expand gray mt-10-r">
<span className="circle-tab"></span>
</div>
<h1><span>Total :</span><span>??? 494.10</span></h1>
<div className="checkout-btn mt-10">
    <Link to="/DineInConfirmedOrder17">
<span className="btn">Confirm</span>
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

