import React from 'react';

import PlusIcon from '../web/plus_icon_page';



export default class DineInScanFail extends React.Component {

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
		
	
			<div className="phone-box wrap push h-100" id="home">
			
				<div className="menu-notify bg-w w-menu">
				
					<div className="profile-left">
						<a href="#" className="">
						<img src="images/arrow_back_g.svg"/>
						</a>
					</div>
					<div className="Profile-mid">
						<h5 className="pro-link"><a href="#">Dine in</a></h5>
					</div>
					<div className="Profile-right">
						
						<img src="images/search_g.svg"/>
						
					
					</div>
					<div className="clearfix"></div>
				</div>
				

				
<div className="body-container bg-w h-100 cart_space">

<div className="approw scan_row">
<h1>Scan QR Code</h1>
<p>Please provide permission for scanner</p>
</div>

<div className="approw scan_show">
<span className="scan_fail">
<div className="bg-trans"></div>
<div className="closered_icon"><img src="images/close_red_icon.png"/></div>
<img src="images/channel-img.png"/>

</span>
</div>





<div className="approw scan_box checkout-btn mt-0">
<span className="btn">Scan again</span>
</div>





{/* <div className="btn-group dropup round-f-nav">

  <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
 <img src="images/create_w.svg"/>
  </button>
  <div className="dropdown-menu">
	<ul>
	<li><a className="active" href="#">
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

<PlusIcon/>




</div>
</div>
</div>	
</div>	
    );
    
    
  }
}

