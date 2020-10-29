import React from 'react';
import HeaderMenu from '../web/header_menu';
import HipalIcon from '../web/hipal_icon_page';
import PlusIcon from '../web/plus_icon_page';



export default class InfoItem11 extends React.Component {

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
			
				<div className="menu-notify y-menu bg-w">
				
					<div className="profile-left">
						<a href="#" className="">
						<img src="images/arrow_b_2.svg"/>
						</a>
					</div>
				
					<div className="rightbox">
						
					
						<span><img src="images/add_fav_b.svg"/></span>
						
					
					</div>
					<div className="clearfix"></div>
				</div>
				
<div className="body-container h-100 info_space info_spacenew bg-w">


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
<img src="images/protine_colored.svg"/>
<p className="name">Protein</p>
<p>16.5</p>
</span>
</div>

<div className="tab">
<span className="box">
<img src="images/protine_colored.svg"/>
<p className="name">Fat</p>
<p>0.5</p>
</span>
</div>

<div className="tab">
<span className="box">
<img src="images/protine_colored.svg"/>
<p className="name">Sugar</p>
<p>30.5</p>
</span>
</div>

</div>

<div className="product-curosel mb-10">

<div className="prodcut_box">
<img src="images/plate-1.png"/>
</div>
<div className="prodcut_box">
<img src="images/plate-2.png"/>
</div>
<div className="prodcut_box">
<img src="images/plate-3.png"/>
</div>

</div>




</div>
	
<div className="orange_cart-box no-radius">

<div className="top">
<span className="price pull-left"><b>₹</b> 240</span>
<span style={{float:"right",width:"100px"}}>

<div className="inc-dis">
<table>
<tbody><tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</tbody></table>
</div>

</span>

</div>


</div>

<div className="try_box approw">
<h1>Try With</h1>
<div className="try_box_iteams">

<div className="try_box_iteam">
<figure>
<img src="images/channel-img.png" className="img-responsive"/>
</figure>
<figcaption>Chicken Something</figcaption>
</div>

<div className="try_box_iteam">
<figure>
<img src="images/channel-img.png" className="img-responsive"/>
</figure>
<figcaption>Chicken Something</figcaption>
</div>

<div className="try_box_iteam">
<figure>
<img src="images/channel-img.png" className="img-responsive"/>
</figure>
<figcaption>Chicken Something</figcaption>
</div>


</div>

</div>


<div className="bottom-fixed info_height">

<div className="cart_ic">
<div className="carticon">
<div className="imgbox">
<span className="cart_nu">15</span>
<img src="images/yellow-cart.svg"/>
</div>
</div> Cart
</div>

<div className="nxt-btn_blk"><span className="scroll_btn">Scroll Next Item</span></div>

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
    );
    
    
  }
}

