import React from 'react';
import Iframe from 'react-iframe'

export default class MobileOrderFood extends React.Component {


	
  render() {
    return (
       
<div className="main-row">
		<h1>HI PAL</h1>

		<div className="main_frame second">
			<div className="main_frame">
            <Iframe url="https://hipal-9a554.firebaseapp.com/OrderFood"
      frameborder="0"
        className="frame-border"
       />
				{/* <iframe className="frame-border" src="deliver-1.html" frameborder="0">
				
				</iframe> */}
					<div className="circle-button"></div>
			</div>
		</div>
	</div>


    );
    
    
  }
}

