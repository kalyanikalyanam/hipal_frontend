import React from 'react';
import HeaderMenu from '../web/header_menu';
import HipalIcon from '../web/hipal_icon_page';
import { Link } from 'react-router-dom';



export default class DineInConfirmOrder extends React.Component {

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
<a href="/MenuDeliverDineIn"><img src="images/back_o.svg" className="b_arrow"/></a>
Confirm Order
</div>
</div>
</div>



<div className="approw">
<div className="col-lg-12 p-0 ful-row">
<div className="ask_friends m-0">
<div className="ask_row">

<div className="ask_box"><input type="number"/></div>

<div className="ask_box"><input type="number"/></div>

<div className="ask_box"><input type="number"/></div>

<div className="ask_box"><input type="number"/></div>

</div>
<div className="ask_row mt-10">Call a Waiter for the above confirm Code </div>

</div>

</div>
</div>





<div className="approw pt-10 pb-0">
<div className="col-lg-12 p-0 ful-row food-ord items-row_blk">
<h1>Items


<span className="instrction_btn"><img src="images/addnew_add_plus.svg" height="20"/>Add Instructions</span>

</h1>
<div className="row-cart-d">
<div className="left">
<div className="box veg"><span></span></div>
</div>
<div className="middle">
<h3>Veg Caesar Salad </h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00 
</h1>
</div>


<div className="right">
<div className="inc-dis">
<table>
<tbody><tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</tbody></table>
</div>

<div className="know_more"><a href="#"><img src="images/know_more_icon.svg" className="deleteicon"/> Knowmore</a></div>

</div>


</div>

<div className="row-cart-d">
<div className="left">
<div className="box nonveg"><span></span></div>
</div>
<div className="middle">
<h3>Veg Caesar Salad </h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00 
</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tbody><tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</tbody></table>
</div>

<div className="know_more"><a href="#"><img src="images/know_more_icon.svg" className="deleteicon"/> Knowmore</a></div>

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
</div>



<div className="approw p-0  bg-g4">
<div className="col-lg-12 checkout-box bg-w bdr-top-50">
<div className="dots-expand gray">
<span className="circle-tab"></span>
</div>
<h1><span>Total :</span><span>₹ 494.10</span></h1>
<div className="checkout-btn">
	<Link to="/DineTableReOrder">
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

