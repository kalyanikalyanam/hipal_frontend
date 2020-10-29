import React from "react";
import firebase from './config';

import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from "react-router-dom";

import Login1 from './latest_userflow_pages/1_login';
import Neighborhood2 from './latest_userflow_pages/2_neighborhood';
import OnBoarding345 from './latest_userflow_pages/3_4_5_on_boarding';
import Landing6 from './latest_userflow_pages/6_landing';
import DineIn7 from './latest_userflow_pages/7_dine_in';
import DineInScanFail8 from './latest_userflow_pages/8_dine_in_scan_fail';
import DineInScanFailedError9 from './latest_userflow_pages/9_scan_failed_error';
import SelectOrderType10 from './latest_userflow_pages/10_select_order_type';
import MediaVideos11 from './latest_userflow_pages/11_media_videos';
import DineTable12 from './latest_userflow_pages/12_dine_table';
import DineTableAskfriend13 from './latest_userflow_pages/13_dine_table_askfriend';

import MenuDineIn14 from './latest_userflow_pages/14_menu_dinein';
import DineInConfirmOrder15 from './latest_userflow_pages/15_dine_in_confirm_order';
import DineAcceptOrder16 from './latest_userflow_pages/16_dine_accept_order';
import DineInConfirmedOrder17 from './latest_userflow_pages/17_dine_in_confirmed_order';
import DineInBillPlease18 from './latest_userflow_pages/18_dine_in_billplease';
import DineInSelectPaymentMode19 from './latest_userflow_pages/19_dinein_select_paymentmode';
import DineTablePayCash20 from './latest_userflow_pages/20_dine_table_pay_cash';
import DineInVisitAgain21 from './latest_userflow_pages/21_dine_in_visitagain';
import Sample from './latest_userflow_pages/sample';
import Scan1 from './latest_userflow_pages/scan1';

import SIDEBAR from './latest_userflow_pages/SIDEBAR';

import CollapsePage from './latest_userflow_pages/collapse'


import HomeMenu from './menutrialfolder/homenemu';

import CategoryListPage from './menutrialfolder/homemenu1';
import ProductsListPage from './menutrialfolder/product_list_page';



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
      // document.body.style.backgroundColor = this.state.DymicLogoList[0].dynamic_color;


      // document.getElementsByClassName('menu-notify').style.backgroundColor = this.state.DymicLogoList[0].dynamic_color;
   
   
      
      
          });
          
         
        })
       
    
       
        
		}
  
    render() {
     
        return (
            <Router>
                {/* <div className="site-wrapper"> */}
                    <Route exact strict path="/" component={Login1}/>
                    <Route path="/Neighborhood2" component={Neighborhood2}/> 
                    <Route path="/OnBoarding345" component={OnBoarding345}/> 
                    <Route path="/Landing6" component={Landing6}/> 
                    <Route path="/DineIn7" component={DineIn7}/> 
                    <Route path="/DineInScanFail8" component={DineInScanFail8}/> 
                    <Route path="/DineInScanFailedError9" component={DineInScanFailedError9}/> 
                    <Route path="/SelectOrderType10" component={SelectOrderType10}/> 



                    {/* <Route path="/MediaVideos11" component={MediaVideos11}/>  */}

                    <Route path="/MediaVideos11/:itemsId"  component={MediaVideos11} />

                    <Route path="/DineTable12" component={DineTable12}/> 
                    <Route path="/DineTableAskfriend13" component={DineTableAskfriend13}/> 
                    <Route path="/MenuDineIn14" component={MenuDineIn14}/> 
                    <Route path="/DineInConfirmOrder15" component={DineInConfirmOrder15}/> 
                    <Route path="/DineAcceptOrder16" component={DineAcceptOrder16}/>
                    <Route path="/DineInConfirmedOrder17" component={DineInConfirmedOrder17}/>
                    <Route path="/DineInBillPlease18" component={DineInBillPlease18}/>
                    <Route path="/DineInSelectPaymentMode19" component={DineInSelectPaymentMode19}/>
                    <Route path="/DineTablePayCash20" component={DineTablePayCash20}/>
                    <Route path="/DineInVisitAgain21" component={DineInVisitAgain21}/>

                    
                    
                    <Route path="/SIDEBAR" component={SIDEBAR}/>

                    <Route path="/Sample" component={Sample}/>
                    
                    <Route path="/Scan1" component={Scan1}/>
                      
                    <Route path="/CollapsePage" component={CollapsePage}/>
                    
                    
                    
                    <Route path="/HomeMenu" component={HomeMenu}/>

                    
                    <Route path="/CategoryListPage/:plpID" component={CategoryListPage} />
                    
                    <Route path="/ProductsListPage/:plpID" component={ProductsListPage} />
                    
                    

                    

                    
                    
                    
                    

                    
                    
                    

                    

                    
                    

                    



                    
                    
                    
                    

                    
                    
                    
                    

                    
                    
                    
                    
                    
                    

{/* </div> */}
                   
            </Router>
        );
    }
}

export default Routing;
