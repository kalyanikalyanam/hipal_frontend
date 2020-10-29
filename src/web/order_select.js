import React from 'react';
import HeaderMenu from './header_menu';
import HipalIcon from './hipal_icon_page';
import PlusIcon from './plus_icon_page';
import { Link } from 'react-router-dom';

export default class OrderSelect extends React.Component {

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
            {/* <HeaderMenu/> */}
        
            <div className="menu-notify">
            
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
            </div>
            
<div className="body-container h-100 in_pa">

<div className="food-ord-blk h-100">

<div className="approw mt-2">
<div className="col-lg-12 p-0 ful-row">
<div className="p_se-row"><span>Please Select one</span> <img src="images/close-b_1.svg" className="closeicon"/></div>
</div>
</div>

<div className="approw">
<div className="col-lg-12 p-0 ful-row food-ord">

<div className="dine_deliver_take-row">
    <Link to="/DineInTable">
<div className="left"><span className="icon"><img src="images/dinein_w.svg"/></span></div>
<div className="middle">Dine in</div>
<div className="right"><img src="images/right-arrow-black.svg"/></div>
</Link>
</div>

<div className="dine_deliver_take-row">
<Link to="/MenuDeliver">
<div className="left"><span className="icon"><img src="images/delivery-w.svg"/></span></div>
<div className="middle">Delivery</div>
<div className="right"><img src="images/right-arrow-black.svg"/></div>
</Link>
</div>


<div className="dine_deliver_take-row">
{/* <Link to="/Menu2"> */}
<div className="left"><span className="icon"><img src="images/takeaway_w.svg"/></span></div>
<div className="middle">Take away</div>
<div className="right"><img src="images/right-arrow-black.svg"/></div>
{/* </Link> */}
</div>

</div>
</div>

<div className="approw pt-10">
<div className="col-lg-12 p-0 ful-row">
<a href="/Landing">
<div className="expore-p">
  
<span><img src="images/arrow_b_1.svg"/></span>
<span>Explore Our Page</span>

</div>
</a>
</div>
</div>



</div>
<PlusIcon/>
{/* 
<div className="btn-group dropup round-f-nav">

<button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<img src="images/create_w.svg"/>
</button>
<div className="dropdown-menu">
<ul>
<li><a className="active" href="/OrderFood">
<img src="images/home-_b.svg"/>Order Now</a></li>
<li><a href="#">
<img src="images/call_b.svg"/>Call now</a></li>
<li><a href="#">
<img src="images/myorders_b.svg"/>My Order</a></li>
<li><a href="#">
<img src="images/vip-y.svg"/>Subscription</a></li>
</ul>
</div>
</div> */}
















</div>
</div>
</div>
</div>


    );
    
    
  }
}

