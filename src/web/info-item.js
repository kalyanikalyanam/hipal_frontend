import React from 'react';
import HeaderMenu from './header_menu';
import HipalIcon from './hipal_icon_page';
import PlusIcon from './plus_icon_page';


export default class InfoItem extends React.Component {

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
		
	
			<div className="phone-box wrap push h-100" id="home">
			
				<div className="menu-notify y-menu">
				
					<div className="profile-left">
						<a href="/Menu" className="">
						<img src="images/arrow_b_2.svg"/>
						</a>
					</div>
				
					<div className="rightbox">
						
						<span><img src="images/img_icon_b.svg"/></span>
						<span><img src="images/add_fav_b.svg"/></span>
						
					
					</div>
					<div className="clearfix"></div>
				</div>
				
<div className="body-container h-100 info_space">


<div className="approw">

<div className="video-autoplay"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/A8gkEF0ZDgo?autoplay" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

<div className="info-desc">
<h1>Chicken tenders </h1>
<p>Chicken tenders are the narrow, strip of meat loosely attached to the underside of chicken breasts</p>

<p><span className="spicy-btn">#Spicy</span> 
<span className="crispy-btn">#Crispy</span> 
<span  className="crunchy-btn">#Crunchy</span></p>

</div>


<div className="food-proteins">

<div className="tab active">
<span className="box">
<img src="images/Carbo_icon.png"/>
<p className="name">Carbo</p>
<p>20.5</p>
</span>
</div>

<div className="tab">
<span className="box">
<img src="images/protin_icon.svg"/>
<p className="name">Protein</p>
<p>16.5</p>
</span>
</div>

<div className="tab">
<span className="box">
<img src="images/fat_icon.png"/>
<p className="name">Fat</p>
<p>0.5</p>
</span>
</div>

<div className="tab">
<span className="box">
<img src="images/protin_icon.svg"/>
<p className="name">Sugar</p>
<p>30.5</p>
</span>
</div>

</div>

<div className="product-curosel">
 <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
<div className="carousel-inner" role="listbox">
<div className="item active">
<img src="images/plate-1.png"/>
</div>
<div className="item">
<img src="images/plate-2.png"/>
</div>
<div className="item">
<img src="images/plate-3.png"/>
</div>
</div>
</div>
</div>


<div className="orange_cart-box">

<div className="top">
<span style={{float:"left",width:"100px"}}>

<div className="inc-dis">
<table>
<tbody><tr>
<td className="dic"><img src="images/delete-w.svg" className="delete"/></td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</tbody>
</table>
</div>

</span>
<span className="price"><b>₹</b> 240</span>
<div>
<div className="bottom"><span>add to cart</span><div>

</div>


</div>
	



<div className="bottom-fixed">

<div className="cart_ic">
<div className="carticon">
<div className="imgbox">
<span className="cart_nu">15</span>
<img src="images/yellow-cart.svg"/>
</div>
</div> Cart
</div>

<div className="nxt-btn_blk"><span>Next</span></div>

</div>

<div className="btn-group dropup round-f-nav">

  <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
 <img src="images/create_w.svg"/>
  </button>
  <PlusIcon/>
  {/* <div className="dropdown-menu">
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
  </div> */}
</div>
<div className="checkouct-list" style={{display:"none"}}>
<div className="greenbox">

<div className="left">
<h1>1 item</h1>
<p>from: TheCoffeeCup</p>
</div>
<div className="right">
<h1>₹ 240 <span>CHECKOUT</span><img src="images/checkout-grp.svg"/></h1>
</div>
</div>
</div>


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

