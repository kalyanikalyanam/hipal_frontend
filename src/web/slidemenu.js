
import React from 'react';
import HeaderMenu from './header_menu';
import HipalIcon from './hipal_icon_page';
import PlusIcon from './plus_icon_page';
import MenuProvider from "react-flexible-sliding-menu";
import Inside1 from "./Inside1";
import Inside2 from "./Inside2";
import { Link } from 'react-router-dom';
export default class slidemenu extends React.Component {

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
	
  <div className="masthead pdng-stn1 h-100">
  
    
          {/* <HipalIcon/> */}
    
    <div className="phone-box wrap push h-100" id="home">
    
    <MenuProvider MenuComponent={Inside2}>
    <Inside1 />
    
  </MenuProvider>

              {/* <HeaderMenu/> */}
      
<div className="body-container h-100 in_pa">

<div className="food-ord-blk h-100">

<div className="approw mt-2">
<div className="col-lg-12 p-0 ful-row">
<div className="deliver-home">
<a href="/OrderSelect"><img src="images/back_o.svg" className="b_arrow"/></a>
Table
</div>
</div>
</div>



<div className="approw pt-0">
<div className="col-lg-12 p-0 ful-row food-ord items-row_blk">

<div className="fields_block pt-0 pb-0">



<div className="field-row payment_suc_emoji text-center">
<p className="mt-10 mb-10"><img src="images/table_img.png" className="table_img"/></p>
<p className="comdfort_table">Make Yourself Comfortable</p>
<p className="ur_at">You are at table number</p>
<p className="table_no"><span className="t-n">07</span></p>
</div>




</div>
</div>
</div>

<div className="approw checkout-btn mt-0">
<Link to="/MenuDeliverDineIn">
<span className="btn">Next</span>

</Link>
</div>


</div>
</div>
</div>
</div>
</div>
</>
	
    );
    
    
  }
}

