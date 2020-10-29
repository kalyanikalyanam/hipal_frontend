// import React from 'react';




// export default class DineIn7 extends React.Component {

//     componentWillMount(){
//         document.getElementById('root').className='h-100'
        
//       }
//         componentWillUnmount(){
//         document.getElementById('root').className=''
       
//       }
    
//   render() {

    
//     return (

//         <div className="body-back h-100">
	
// 		<div className="masthead pdng-stn1 h-100">
		
	
// 			<div className="phone-box wrap push h-100" id="home">
			
// 				<div className="menu-notify bg-w w-menu">
				
// 					<div className="profile-left">
// 						<a href="/Landing6" className="">
// 						<img src="images/arrow_back_g.svg"/>
// 						</a>
// 					</div>
// 					<div className="Profile-mid">
// 						<h5 className="pro-link"><a href="#">Dine in</a></h5>
// 					</div>
// 					<div className="Profile-right">
						
// 						<img src="images/search_g.svg"/>
						
					
// 					</div>
// 					<div className="clearfix"></div>
// 				</div>
				
// <div className="body-container bg-w h-100 cart_space">

// <div className="approw scan_row">
// <h1>Scan QR Code</h1>
// <p>Please provide permission for scanner</p>
// </div>

// <div className="approw scan_show">
// <span>
// <img src="images/scan_icon.png"/>
// </span>
// </div>





// <div className="approw scan_box checkout-btn mt-0">
// <a href="/DineTable12"><span className="btn">Scan now</span></a>
// </div>





// <div className="btn-group dropup round-f-nav">

//   <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//  <img src="images/create_w.svg"/>
//   </button>
//   <div className="dropdown-menu">
// 	<ul>
// 	<li><a className="active" href="#">
// 	<img src="images/home-_b.svg"/>Order Now</a></li>
// 	<li><a href="#">
// 	<img src="images/call_b.svg"/>Call now</a></li>
// 	<li><a href="#">
// 	<img src="images/myorders_b.svg"/>My Order</a></li>
// 	<li><a href="#">
// 	<img src="images/vip-y.svg"/>Subscription</a></li>
// 	</ul>
//   </div>
// </div>




// </div>
// </div>
// </div>	
// </div>	
	
//     );
    
    
//   }
// }


import React, { useState,useEffect } from "react";

import QRScanner from "qr-code-scanner";

import { Link } from 'react-router-dom';

import firebase from '../config';

  function DineIn7() {

    const [code, setCode] = useState("");
    // const [state, setState] = useState(
    //   { dynamic_logo: "", status: "" ,created_on:""});
    // componentWillMount(){
    //     document.getElementById('root').className='h-100'
        
    //   }
    //     componentWillUnmount(){
    //     document.getElementById('root').className=''
       
    //   }
    useEffect(() => {
      document.getElementById('root').className='h-100'
      return () => {
        document.getElementById('root').className=''
      }
      
    },
    
   
    
    []);
    useEffect(() => {
      var ref=firebase.database().ref('dynamic_logo').orderByChild("status").equalTo("Selected");
      ref.once("value",snapshot =>{
       const data =[];
        console.log(snapshot.val());
        snapshot.forEach(element => {
        const usersData={
          dynamiclogoid:element.key.toString(),
          dynamic_logo:element.val().dynamic_logo,
          status:element.val().status,
          created_on:element.val().created_on
        }
        data.unshift(usersData);
        console.log(snapshot.val());
        });
       
        // this.setState({DymicLogoList:data,loading:true},()=>{
        // console.log(this.state.DymicLogoList,'DymicLogoList');
        // });
      })
    });
    
     

    // QRScanner.initiate({
    //       onResult: result => {
    //         setCode(decodeURI(result));
    //       },
    //       timeout: 20000
    //     });

        const handleSubmit = (evt) => {
          evt.preventDefault();
          if({code}==null){
            alert('error');
          }
          else{
            alert(`Submitting Name to Database to Check whether table is available or Not:: ${code}`);
            window.location.href.Props
            ("/DineTable12")
          }
		 
      }

    return (

      <div className="body-back h-100">
	
      <div className="masthead pdng-stn1 h-100">
      
    
        <div className="phone-box wrap push h-100" id="home">
        
          <div className="menu-notify bg-w w-menu">
          
            <div className="profile-left">
              <a href="/SelectOrderType10" className="">
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



<div class="approw scan_row">
<h1>Scan QR Code</h1>
<p>Please provide permission for scanner</p>
</div>

<div class="approw scan_show">
<span>
<img src="images/scan_icon.png"/>
</span>
</div>





<div class="approw scan_box checkout-btn mt-0">
  <Link to='/DineTable12'>
<span class="btn">Scan now</span>
</Link>
</div>
  
  {/* <div className="approw scan_row">
  <h1>Scan QR Code</h1>
 
  </div>
  <form onSubmit={handleSubmit}>
  
  <div className="approw scan_show">
  <span>


  
{code ? (
        <>
        
          <p>
            Your Table Number is:{" "}
            <strong>
              {code.split("/").pop()}
            </strong>
          </p>

          <span className="btn"> <input type="submit" value="Next" /></span>
        </>
      ) : (
     
     ''
      )}
  </span>

  <div className="approw scan_box checkout-btn mt-0">

</div>
  </div>
  
   </form> */}
  
  
  
{/* 
  <div className="btn-group dropup round-f-nav">
  
    <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   <img src="images/create_w.svg"/>
    </button>
  
   <div className="dropdown-menu">
    <ul>
    <li><a className="active" href="/OrderSelect">
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

export default DineIn7;