// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import QRScanner from "qr-code-scanner";

// // import "./styles.css";

// function QRScanner1() {
//   const [code, setCode] = useState("");

//   QRScanner.initiate({
//     onResult: result => {
//       setCode(decodeURI(result));
//     },
//     timeout: 20000
//   });

//   return (
//     <div className="QRScanner">
//       <h1>Scan QR Code</h1>
//       {code ? (
//         <>
//           <p>
//             The QR code reads: <strong>{code}</strong>
//           </p>
//           <p>
//             Your code is:{" "}
//             <strong style={{ textDecoration: "underline" }}>
//               {code.split("/").pop()}
//             </strong>
//           </p>
//         </>
//       ) : (
//         <p>Scan a QR code to view results</p>
//       )}
//     </div>
//   );
// }
// export default QRScanner1;


import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import QRScanner from "qr-code-scanner";
import HeaderMenu from './header_menu';
import HipalIcon from './hipal_icon_page';
import PlusIcon from './plus_icon_page';

import firebase from '../config';

  function QRScanner1() {

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
    
     

    QRScanner.initiate({
          onResult: result => {
            setCode(decodeURI(result));
          },
          timeout: 20000
        });

        const handleSubmit = (evt) => {
          evt.preventDefault();
          alert(`Submitting Name to Database to Check whether table is available or Not:: ${code}`)
      }

    return (

      <div className="body-back h-100">
	
      <div className="masthead pdng-stn1 h-100">
      
    
        <div className="phone-box wrap push h-100" id="home">
        
          <div className="menu-notify bg-w w-menu">
          
            <div className="profile-left">
              <a href="/OrderSelect" className="">
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
  {/* <p>Please provide permission for scanner</p> */}
  </div>
  <form onSubmit={handleSubmit}>
  
  <div className="approw scan_show">
  <span>
  {/* <img src="images/scan_icon.png"/> */}

  
{code ? (
        <>
          {/* <p>
            The QR code reads: <strong>{code}</strong>
          </p> */}
          <p>
            Your Table Name is:{" "}
            <strong>
              {code.split("/").pop()}
            </strong>
          </p>

          {/* <span className="btn"> <input type="submit" value="Next" /></span> */}
        </>
      ) : (
        // <p>Please provide permission for scanner</p>
        ''
      )}
  </span>
  </div>
  
  
  
  
  
  <div className="approw scan_box checkout-btn mt-0">
  {/* <span className="btn"> <input type="submit" value="Next" /></span> */}
  </div>
  </form>
  
  
  
  <PlusIcon/>
  {/* <div className="btn-group dropup round-f-nav">
  
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

export default QRScanner1;