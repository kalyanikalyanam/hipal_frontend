import React from 'react';




export default class Login1 extends React.Component {

    componentWillMount(){
        document.getElementById('root').className='h-100'
        
      }
        componentWillUnmount(){
        document.getElementById('root').className=''
       
      }
    
  render() {

    
    return (

        <div className="body-back h-100">
	<div className="body-back h-100">
	




		
    <div className="body-container p-0 h-100" style={{backgroundImage:"url(images/login_bg_img.png)", backgroundPosition:"top center", backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}}>
    
    
    <div className="approw h-40">
    <div className="col-lg-12 p-0 ful-row text-center">
    
    
    <div className="comp_logo login_logo">
    <img src="images/coffee-cup-logo.png"/>
    </div>
    
    
    
    
    
    </div>
    </div>	
    
    <div className="approw bg-w m-0 arc-curve h-60">
    
    <div className="login_box">
    
    <div className="logo">
    <img src="images/logo_hipal.svg"/>
    </div>
    
    <form>
    <div className="login_form">
    <div className="login_row">
    <input type="number" className="phone" placeholder="Phone Number"/>
    </div>
    <div className="login_row">
    <button type="submit" className="loginbtn">Connect now</button>
    </div>
    </div>
    </form>
    
    <div className="login_socail text-center">
    <span><img src="images/fb.svg"/></span>
    <span><img src="images/google_plus.svg"/></span>
    </div>
    
    
    <div className="login_account">Already have an account ? <a href="Landing6">Log in</a></div>
    </div>	
    
    
    </div>		
        
    
    
    
    </div>
    </div>
    </div>
	
    );
    
    
  }
}

