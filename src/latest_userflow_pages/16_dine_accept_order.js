import React from 'react';

import Sidebar from "react-sidebar";


export default class DineAcceptOrder16 extends React.Component {

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
<a href="#"><img src="images/back_o.svg" className="b_arrow"/></a>
Table 07
</div>
</div>
</div>



<div className="approw pt-0 p-0">
<div className="col-lg-12 p-0 ful-row food-ord items-row_blk">

<div className="fields_block pt-0 pb-0">
<div className="field-row payment_suc_emoji text-center">
<p className="ur_at font-14">Please Wait Till We Accept <br></br>Your Order...</p>
</div>

</div>
</div>
</div>


<div className="approw checkout-btn mt-0 p-0">
<p className="mt-0 mb-0"><img src="images/table_img.png" className="table_img_full"/></p>
</div>


<div className="approw pt-0">
<div className="col-lg-12 p-0 ful-row food-ord items-row_blk">

<div className="fields_block pt-0 pb-0">
<div className="field-row payment_suc_emoji text-center">

<p className="ur_at mt-10 font-13">Meanwhile, Enjoy The Best Of Our Media </p>
</div>

<div className="field-row mt-20 mb-0">

<div className="video_ply_blk">

<div className="video_ply_box">
<img src="images/play_yellow.svg"/>
</div>

<div className="video_ply_box">
<img src="images/play_yellow.svg"/>
</div>


<div className="video_ply_box">
<img src="images/play_yellow.svg"/>
</div>

</div>



</div>




</div>
</div>
</div>




<div className="approw waiting text-center pt-0 mt-0">
Waiting...
</div>


</div>
</div>
</div>
</div>
</div>


    );
    
    
  }
}

