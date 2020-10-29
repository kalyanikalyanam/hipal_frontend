import React from 'react';


export default class PlusIcon extends React.Component {
  render() {
    return (
      
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
      </div>
    );
    
    
  }
}

