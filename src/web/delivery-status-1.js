import React from 'react';
import HeaderMenu from './header_menu';
import HipalIcon from './hipal_icon_page';
import PlusIcon from './plus_icon_page';
import Map from './map';
import {connect} from 'react-redux';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
class DeliveryStatus1 extends React.Component {
	constructor(props) {
        super(props);
        this.state = {

			latitude: 17.4447068,
            longitude: 78.4663812,
 
		}
	}

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
				<HeaderMenu/>
			
				{/* <div className="menu-notify">
				
					<div className="profile-left">
						<a href="#menu" className="menu-link">
						<img src="images/profile-nav.svg"/>
						</a>
					</div>
					<div className="Profile-mid">
						<h5 className="pro-link"><a href="/">TheCoffeeCup</a></h5>
					</div>
					<div className="Profile-right">
						
						<img src="images/profile-img.png"/>
						
					
					</div>
					<div className="clearfix"></div>
				</div>
				 */}
<div className="body-container h-100 in_pa">

<div className="food-ord-blk">

<div className="approw mt-2">
<div className="col-lg-12 p-0 ful-row">
<div className="deliver-home">
<a href="/OrderTracking1"><img src="images/back_o.svg" className="b_arrow"/></a>
Order
</div>
{/* <div className="deliver-home">

<Map
                                                        google={this.props.google}
                                                        center={{
                                                        lat: this.state.latitude,
                                                        lng: this.state.longitude
                                                    }}
                                                        height='300px'
                                                        zoom={15}> 
														
														<Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>hyderabad</h1>
            </div>
        </InfoWindow>	
														
														
														
														
														</Map>
</div> */}
</div>
</div>



<div className="approw pt-0">
<div className="col-lg-12 p-0 ful-row">


<div className="deliver_time w-100">
<h1>Delivery</h1>
<h3>30 MIN</h3>
</div>

<div className="w-100 delver_status">
<span className="left">Delivery Status</span>
<span className="right">Details <img src="images/arrow_right_o.svg"/></span>  
</div>


<div className="w-100 delivey_timeline">
<div className="timeline">
    
        <div className="line text-muted"></div>


<article className="panel panel-outline">
<div className="panel-heading icon ordered">
 <img src="images/tick_w.svg"/>
</div>
<div className="panel-body">
Ordered at <span>2:30 PM</span>
</div>
</article>
       

<article className="panel panel-outline">
<div className="panel-heading icon picked">
 <img src="images/reload_w.svg"/>
</div>
<div className="panel-body">
<div className="date-pick">Picked up at <span>3:00 PM</span></div>


<div className="delivey_boy"> <img src="images/profile-img.png"/>Mr. Santosh</div>
</div>


</article>

 
<article className="panel panel-outline">
<div className="panel-heading icon deliver">
 <img src="images/time-w.png"/>
</div>

<div className="panel-body">
Delivered at <span>3:30 PM</span>
</div>
</article>

</div>
</div>









</div>


</div>



<div className="approw pt-0 bg-w bdr-top-50">
<div className="col-lg-12 p-0 ful-row">

<div className="dots-expand gray">
<span className="circle-tab"></span>
</div>

<div className="w-100 delver_price">
<h1><span>Total :</span>
<span>₹ 494.10</span>
</h1>
<h2>Order  Confirmed</h2>
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

const mapStateToProps = (state) => {
    console.log(state);
    return {posts: state}
}

export default connect(mapStateToProps)(DeliveryStatus1);