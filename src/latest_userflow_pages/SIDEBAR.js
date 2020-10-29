import React from 'react';


import Sidebar from "react-sidebar";

export default class SIDEBAR extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  sidebarOpen: false
		};
		this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
	  }
	 
	  // onSetSidebarOpen(open) {
	  //   this.setState({ sidebarOpen: open });
	  // }


	  onSetSidebarOpen() {
	 if(this.state.sidebarOpen==false)
	 {
	  this.setState({ sidebarOpen: true });
	 }
	 else{
	  this.setState({ sidebarOpen: false });
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
      <>

        <div className="body-back h-100">
	
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
Error
</div>
</div>
</div>



<div className="approw pt-0">
<div className="col-lg-12 p-0 ful-row food-ord items-row_blk">

<div className="fields_block pt-0 pb-0">



<div className="field-row payment_suc_emoji text-center">
<p className="mt-10 mb-10"><img src="images/scan_fail_error.png" className="scan_fail_error"/></p>
<p className="some_wrong">Something went wrong</p>
<p className="some_wrong-data">Sorry, we can’t process your request at the moment.
Please try again later.</p>

</div>




</div>
</div>
</div>



<div className="approw pt-0">
<div className="col-lg-12 p-0 ful-row food-ord items-row_blk">

<div className="fields_block pt-0 pb-0">



<div className="field-row payment_suc_emoji text-center">
<p className="mt-10 mb-10"><img src="images/scan_fail_error.png" className="scan_fail_error"/></p>
<p className="some_wrong">Something went wrong</p>
<p className="some_wrong-data">Sorry, we can’t process your request at the moment.
Please try again later.</p>

</div>




</div>
</div>
</div>


<div className="approw pt-0">
<div className="col-lg-12 p-0 ful-row food-ord items-row_blk">

<div className="fields_block pt-0 pb-0">



<div className="field-row payment_suc_emoji text-center">
<p className="mt-10 mb-10"><img src="images/scan_fail_error.png" className="scan_fail_error"/></p>
<p className="some_wrong">Something went wrong</p>
<p className="some_wrong-data">Sorry, we can’t process your request at the moment.
Please try again later.</p>

</div>




</div>
</div>
</div>



<div className="approw pt-0">
<div className="col-lg-12 p-0 ful-row food-ord items-row_blk">

<div className="fields_block pt-0 pb-0">



<div className="field-row payment_suc_emoji text-center">
<p className="mt-10 mb-10"><img src="images/scan_fail_error.png" className="scan_fail_error"/></p>
<p className="some_wrong">Something went wrong</p>
<p className="some_wrong-data">Sorry, we can’t process your request at the moment.
Please try again later.</p>

</div>




</div>
</div>
</div>


<div className="approw pt-0">
<div className="col-lg-12 p-0 ful-row food-ord items-row_blk">

<div className="fields_block pt-0 pb-0">



<div className="field-row payment_suc_emoji text-center">
<p className="mt-10 mb-10"><img src="images/scan_fail_error.png" className="scan_fail_error"/></p>
<p className="some_wrong">Something went wrong</p>
<p className="some_wrong-data">Sorry, we can’t process your request at the moment.
Please try again later.</p>

</div>




</div>
</div>
</div>


<div className="approw pt-0">
<div className="col-lg-12 p-0 ful-row food-ord items-row_blk">

<div className="fields_block pt-0 pb-0">



<div className="field-row payment_suc_emoji text-center">
<p className="mt-10 mb-10"><img src="images/scan_fail_error.png" className="scan_fail_error"/></p>
<p className="some_wrong">Something went wrong</p>
<p className="some_wrong-data">Sorry, we can’t process your request at the moment.
Please try again later.</p>

</div>




</div>
</div>
</div>



</div>


</div>
</div>
</div>	
</div>




{/* <div id="root" class="h-100">
  <div class="body-back h-100">
    <div class="masthead pdng-stn1 h-100">
      <div role="navigation" style="position: absolute; inset: 0px; overflow: hidden;">
        <div style="z-index: 2; position: absolute; top: 0px; bottom: 0px; transition: -webkit-transform 0.3s ease-out 0s; will-change: transform; overflow-y: auto; background: white; left: 0px; transform: translateX(0%); box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 4px;">
          <div class="wrap-content menu-width">
            <div class="profile-menu text-center">
              <div class="pro-menu">
                <ul>
                  <li><a class="active" href="#"><img src="images/home-_b.svg"/>Home</a>
                  </li><li><a href="#"><img src="images/profile_b.svg"/>Profile</a></li>
                  <li><a href="#"><img src="images/saved_b.svg"/>Saved</a></li>
                  <li><a href="#"><img src="images/vip-y.svg"/>Go VIP</a></li>
                  <li><a href="#"><img src="images/hipal-iocn.svg"/>Hipal</a></li>
                  <li><a href="#"><img src="images/settings_b.svg"/>Settings</a></li>
                  </ul>
                  </div>
                  </div>
                  </div>
                  </div>
                  <div style="z-index: 1; position: fixed; inset: 0px; opacity: 1; visibility: visible; transition: opacity 0.3s ease-out 0s, visibility 0.3s ease-out 0s; background-color: rgba(0, 0, 0, 0.3);">
                    </div>
                    <div style="position: absolute; inset: 0px; overflow-y: auto; transition: left 0.3s ease-out 0s, right 0.3s ease-out 0s;">
                      </div>
                      </div>
                      <div class="phone-box wrap push h-100" id="home" style="left: 0px; transition: left 300ms ease 0s;">
                        <div class="menu-notify"><div class="profile-left">
                          <a href="#" class="open"><img src="images/profile-nav.svg"/></a>
                          </div>
                          <div class="Profile-mid">
                            <h5 class="pro-link">
                              <a href="main.html">TheCoffeeCup</a>
                              </h5>
                              </div>
                              <div class="Profile-right"><img src="images/profile-img.png"/></div>
                              <div class="clearfix">
                                </div>
                                </div>
                                <div class="body-container h-100 in_pa">
                                  <div class="food-ord-blk">
                                    <div class="approw mt-2">
                                      <div class="col-lg-12 p-0 ful-row">
                                        <div class="deliver-home">
                                          <a href="#"><img src="images/back_o.svg" class="b_arrow"/>
                                          </a>Error
                                          </div>
                                          </div>
                                          </div>
                                          <div class="approw pt-0">
                                            <div class="col-lg-12 p-0 ful-row food-ord items-row_blk">
                                              <div class="fields_block pt-0 pb-0">
                                                <div class="field-row payment_suc_emoji text-center">
                                                  <p class="mt-10 mb-10">
                                                    <img src="images/scan_fail_error.png" class="scan_fail_error"/>
                                                    </p>
                                                    <p class="some_wrong">Something went wrong</p>
                                                    <p class="some_wrong-data">Sorry, we can’t process your request at the moment. Please try again later.</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div> */}

</>




	
    );
    
    
  }
}

