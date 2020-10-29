import React from "react";
import firebase from './config';

import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from "react-router-dom";
import Login from "./auth/login";
import SignUp from "./auth/signup";



//web
import Landing from "./web/landing";
import OrderSelect from './web/order_select';

import Menu from './web/menu';
import Menu2 from './web/menu2';

import AddNewAddress from './web/add_new_address';
import MyAddress from './web/my_address';
import Coupons from './web/coupons';
//checkout for newuser
import DeliverHomeNewuser from './web/deliver_home_newuser';
import DeliveryStatus1 from './web/delivery-status-1';
import DineIn from './web/dine_in';
import InfoItem from './web/info-item';
import InfoItem1 from './web/info-item_1';
import OrderTracking1 from './web/order-tracking-1';
import Profile from './web/profile';
import ProfileEdit from './web/Profile_Edit';

import SelectPaymentMode from './web/select-payment-mode';
import SelectPaymentModeTakeAway from './web/select-payment-mode_takeaway';

import TakeAwayDeliveryStatus from './web/take_away_deliverstatus';
import TakeAwayTracking from './web/take_away_tracking';

import TakeAwayPayment from './web/takeaway_payment';
import PaymentTakeAway from './web/takeaway_payment_takeaway';

import TakeAwayHome from './web/takeaway-home';
import TakeAwayTimeSelect from './web/takeaway-time-select';
//checkout
import DeliverHome from './web/deliver_home';
// import HeaderMenu from './web/header_menu';
// import HipalIcon from './web/hipal_icon_page';
// import PlusIcon from './web/plus_icon_page';


//Mobile
import MobileLanding from './mobile/landing_mobile';
import MobileDeliver from './mobile/deliver_1_mobile';
import MobileOrderFood from './mobile/food_order_mobile';







//updated files

import AddNewAddress1 from './web_updated/add_new_address1';
import Addressess from './web_updated/addressess';
import DeliverHome1 from './web_updated/deliver_home1';
import DeliverHomeNewUser2 from './web_updated/deliver-home-newuser2';
import DeliverySelectPaymentMode from './web_updated/delivery_select_paymentmode';
import DeliverySelectPaymentMode2 from './web_updated/delivery_select_paymentmode_2';
import DeliverySelectPaymentMode3 from './web_updated/delivery_select_paymentmode_3';
import DeliveryStatus11 from './web_updated/delivery-status-1';


import DineInConfirmOrder from './web_updated/dine_in_confirm_order';
import DineInScanFail from './web_updated/dine_in_scan_fail';
import DineInTable from './web_updated/dine_table';
import DineInTableAskFriend from './web_updated/dine_table_askfriend';
import DineInCheckOut from './web_updated/dine_table-checkout';
import DineTablePayCash from './web_updated/dine_table-pay_cash';
import DineTableReOrder from './web_updated/dine_table-reorder';


import InfoItem11 from './web_updated/info-item_1';

import Login1 from './web_updated/login';

import MenuDeliverPopUp from './web_updated/menu-deliver-popup';

import NotDelivery from './web_updated/not-delivey';

import OnBoarding1 from './web_updated/on_boarding_1';

import OrderTracking11 from './web_updated/order-tracking-1';

import PaymentFailed from './web_updated/payment_failed';

import PaymentSuccess from './web_updated/payment_success';

import ScanFailedError from './web_updated/scan_failed_error';

import DineIn1 from './web_updated/dine_in';








class Routing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

         
        };
    }

    componentDidMount(){
		this.setState({loading: false});
	
	  var ref=firebase.database().ref('dynamicColor').orderByChild("status").equalTo("Selected");
		ref.once("value",snapshot =>{
		 const data =[];
		  console.log(snapshot.val());
		  snapshot.forEach(element => {
			const usersData={
			  dynamiclogoid:element.key.toString(),
			  dynamic_color:element.val().dynamic_color,
			  status:element.val().status,
			  created_on:element.val().created_on
			}
			data.unshift(usersData);
		  });
		 
		  this.setState({DymicLogoList:data,loading:true},()=>{
      console.log(this.state.DymicLogoList,'DymicLogoList');

      console.log(this.state.DymicLogoList[0].dynamic_color);
      document.body.style.backgroundColor = this.state.DymicLogoList[0].dynamic_color;
      
      
          });
          
         
        })
       
    
       
        
		}
  
    render() {
     
        return (
            <Router>
                {/* <div className="site-wrapper"> */}
                    <Route exact strict path="/Login" component={Login}/>
                    <Route exact strict path="/SignUp" component={SignUp}/>
                    

                    {/* web */}

                    <Route exact strict  path="/" component={Landing}/>
                    <Route  path="/OrderSelect" component={OrderSelect}/>
                    <Route  path="/Menu" component={Menu}/>
                    <Route  path="/Menu2" component={Menu2}/>
                    <Route  path="/AddNewAddress" component={AddNewAddress}/>
                    <Route  path="/MyAddress" component={MyAddress}/>
                    <Route  path="/DeliverHomeNewuser" component={DeliverHomeNewuser}/>
                    <Route  path="/DeliverHome" component={DeliverHome}/>
                    <Route  path="/Coupons" component={Coupons}/>
                    <Route  path="/DeliveryStatus1" component={DeliveryStatus1}/>
                    <Route  path="/DineIn" component={DineIn}/>

                    <Route  path="/InfoItem" component={InfoItem}/>
                    <Route  path="/InfoItem1" component={InfoItem1}/>

                    <Route  path="/OrderTracking1" component={OrderTracking1}/>
                    <Route  path="/Profile" component={Profile}/>
                    <Route  path="/ProfileEdit" component={ProfileEdit}/>

                    <Route  path="/SelectPaymentMode" component={SelectPaymentMode}/>
                    <Route  path="/SelectPaymentModeTakeAway" component={SelectPaymentModeTakeAway}/>


                    <Route  path="/TakeAwayDeliveryStatus" component={TakeAwayDeliveryStatus}/>

                    <Route  path="/TakeAwayTracking" component={TakeAwayTracking}/>

                    <Route  path="/TakeAwayPayment" component={TakeAwayPayment}/>
                    <Route  path="/PaymentTakeAway" component={PaymentTakeAway}/>


                    <Route  path="/TakeAwayHome" component={TakeAwayHome}/>
                    <Route  path="/TakeAwayTimeSelect" component={TakeAwayTimeSelect}/>

                    {/* <Route  path="/HeaderMenu" component={HeaderMenu}/>
                    <Route  path="/HipalIcon" component={HipalIcon}/>
                    <Route  path="/PlusIcon" component={PlusIcon}/> */}


                     {/* mobile */}
                    <Route  path="/MobileLanding" component={MobileLanding}/>
                    <Route  path="/MobileDeliver" component={MobileDeliver}/>
                    <Route  path="/MobileOrderFood" component={MobileOrderFood}/>



                    {/* //updated files */}
                    <Route  path="/AddNewAddress1" component={AddNewAddress1}/>
                    <Route  path="/Addressess" component={Addressess}/>
                    <Route  path="/DeliverHome1" component={DeliverHome1}/>
                    <Route  path="/DeliverHomeNewUser2" component={DeliverHomeNewUser2}/>
                    <Route  path="/DeliverySelectPaymentMode" component={DeliverySelectPaymentMode}/>
                    <Route  path="/DeliverySelectPaymentMode2" component={DeliverySelectPaymentMode2}/>
                    <Route  path="/DeliverySelectPaymentMode3" component={DeliverySelectPaymentMode3}/>
                    <Route  path="/DeliveryStatus11" component={DeliveryStatus11}/>
                    
                    <Route  path="/DineInConfirmOrder" component={DineInConfirmOrder}/>
                    <Route  path="/DineInScanFail" component={DineInScanFail}/>
                    <Route  path="/DineInTable" component={DineInTable}/>
                    <Route  path="/DineInTableAskFriend" component={DineInTableAskFriend}/>
                    <Route  path="/DineInCheckOut" component={DineInCheckOut}/>
                    <Route  path="/DineTablePayCash" component={DineTablePayCash}/>
                    <Route  path="/DineTableReOrder" component={DineTableReOrder}/>

                    <Route  path="/InfoItem11" component={InfoItem11}/>

                    <Route  path="/Login1" component={Login1}/>

                    <Route  path="/MenuDeliverPopUp" component={MenuDeliverPopUp}/>


                    <Route  path="/NotDelivery" component={NotDelivery}/>

                    <Route  path="/OnBoarding1" component={OnBoarding1}/>

                    <Route  path="/OrderTracking11" component={OrderTracking11}/>


                    <Route  path="/PaymentFailed" component={PaymentFailed}/>

                    <Route  path="/PaymentSuccess" component={PaymentSuccess}/>

                    <Route  path="/ScanFailedError" component={ScanFailedError}/>

                    <Route  path="/DineIn1" component={DineIn1}/>

                    
                    
                    

                    
                    

                    



                    
                    
                    
                    

                    
                    
                    
                    

                    
                    
                    
                    
                    
                    

{/* </div> */}
                   
            </Router>
        );
    }
}

export default Routing;
