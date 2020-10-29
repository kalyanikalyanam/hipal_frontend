import React from 'react';




export default class OnBoarding345 extends React.Component {

    componentWillMount(){
        document.getElementById('root').className='h-100'
        
      }
        componentWillUnmount(){
        document.getElementById('root').className=''
       
      }
    
  render() {

    
    return (

        <div className="body-back h-100">
	
        <div className="onboarding"> 
        <div className="owl-carousel owl-theme">
        
        <div className="item">
        <div className="height-10"></div>
        <div className="height-70">
        <div className="images_icon">
        <span>
        <img src="images/emoji_icon.png"/>
        </span>
        </div>
        <h1 className="gets_stsrt_head">Getting Started with Hipal</h1>
        <p className="gets_stsrt_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className="height-20">
        <div className="checkout-btn mt-btn">
        <span className="btn">Proceed</span>
        </div>
        </div>
        </div>
        
        
        <div className="item">
        <div className="height-10"></div>
        <div className="height-70">
        <div className="images_icon">
        <span>
        <img src="images/emoji_icon.png"/>
        </span>
        </div>
        <h1 className="gets_stsrt_head">Some other text here</h1>
        <p className="gets_stsrt_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className="height-20">
        <div className="checkout-btn mt-btn">
        <span className="btn">Proceed</span>
        </div>
        </div>
        </div>
        
        
        <div className="item">
        <div className="height-10"></div>
        <div className="height-70">
        <div className="images_icon">
        <span>
        <img src="images/emoji_icon.png"/>
        </span>
        </div>
        <h1 className="gets_stsrt_head">Some other text here</h1>
        <p className="gets_stsrt_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className="height-20">
        <div className="checkout-btn mt-btn">
        <a href="login.html"><span className="btn">Proceed</span></a>
        </div>
        </div>
        </div>
        
        
        </div> 
        </div>
        
                
        
        </div>
	
    );
    
    
  }
}

