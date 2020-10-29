import React from 'react';
import HeaderMenu from './header_menu';
import HipalIcon from './hipal_icon_page';


export default class AddNewAddress extends React.Component {

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
                    <h5 className="pro-link"><a href="main.html">TheCoffeeCup</a></h5>
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
<a href="/MyAddress"><img src="images/back_o.svg" className="b_arrow"/></a>
Address
</div>
</div>
</div>



<div className="approw pt-0">
<div className="col-lg-12 p-0 ful-row food-ord items-row_blk">


<div className="addnew-add">
<img src="images/view_m-ico.svg"/> View on map
</div>

<div className="fields_block pt-0 pb-0">

<div className="field-row pt-0 map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31698251612!2d78.26795850689807!3d17.41229980092586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1593686995953!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</div>
<div className="field-row"><input type="number" placeholder="Pin Code"/></div>
<div className="field-row"><input type="text" placeholder="Address Line 1"/></div>
<div className="field-row"><input type="text" placeholder="Floor (Optional)"/></div>
<div className="field-row"><input type="text" placeholder="How to reach (Optional)"/></div>
<div className="field-row more"><span>More</span></div>

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
    <a href="/MyAddress">
<span className="btn">Save Address</span></a>
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

