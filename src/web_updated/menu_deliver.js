import React from 'react';
import HeaderMenu from '../web/header_menu';
import HipalIcon from '../web/hipal_icon_page';
import PlusIcon from '../web/plus_icon_page';
import { Link } from 'react-router-dom';


export default class MenuDeliver extends React.Component {

    componentWillMount(){
        document.getElementById('root').className='h-100'
        
      }
        componentWillUnmount(){
        document.getElementById('root').className=''
       
      }
    
  render() {

    
    return (
        <>
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
                    <h5 className="pro-link"><a href="main.html">Delivery</a></h5>
                </div>
                <div className="Profile-right">
                    
                    <img src="images/search_g.svg"/>
                    
                
                </div>
                <div className="clearfix"></div>
            </div>
            
<div className="body-container bg-w h-100 cart_space">



<div className="approw bg-w pl-0 pt-0 pr-0">


<div className="iteams-row  bdr-t5">

<div className="iteams-row-nav">



<div className="tab active">
<span className="box all"></span>
<span>All</span>
</div>

<div className="tab">
<span className="box bevarages"></span>
<span>Beverages</span>
</div>

<div className="tab">
<span className="box pizza"></span>
<span>Pizzas</span>
</div>

<div className="tab">
<span className="box burger"></span>
<span>Burgers</span>
</div>

</div>

<h1>All Day Breakfast</h1>

<div className="cart-iteams">	

<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">			
<div className="panel panel-default">
<div className="panel-heading" role="tab" id="heading01">
<div className="panel-title" style={{marginBottom:"0px"}}>
<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse01" aria-expanded="false" aria-controls="collapse01">
<div className="cart-row">
<div className="cart-row-data">
<h1>Veg</h1>
<p>6 items: Veg Caesar Salad...and more</p>
</div>
</div>
</a>
</div>
</div>
                
<div id="collapse01" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading01">

<div className="panel-body">

<div className="row-cart-d">
<div className="left">
<div className="box veg"><span></span></div>
</div>
<div className="middle">

<h3>Dish lorem ipsum</h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</table>
</div>



</div>
</div>

<div className="row-cart-d">
<div className="left">
<div className="box veg"><span></span></div>
</div>
<div className="middle">
<h3>Veg Caesar Salad</h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00 <img src="images/info_logo.png" className="infoicon"/>
</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</table>
</div>

</div>
</div>

<div className="row-cart-d">
<div className="left">
<div className="box veg"><span></span></div>
</div>
<div className="middle">
<h3>Veg Caesar Salad</h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00
</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</table>
</div>
<div className="know_more"><a href="#"><img src="images/know_more_icon.svg" className="deleteicon"/> Knowmore</a></div>
</div>
</div>



<div className="row-cart-d">
<div className="left">
<div className="box veg"><span></span></div>
</div>
<div className="middle">
<h3>Veg Caesar Salad</h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00
</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</table>
</div>
<div className="know_more"><a href="#"><img src="images/know_more_icon.svg" className="deleteicon"/> Knowmore</a></div>
</div>
</div>



<div className="row-cart-d">
<div className="left">
<div className="box veg"><span></span></div>
</div>
<div className="middle">
<h3>Veg Caesar Salad</h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00
</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</table>
</div>
<div className="know_more"><a href="#"><img src="images/know_more_icon.svg" className="deleteicon"/> Knowmore</a></div>
</div>
</div>



</div>


</div>




</div>
    
        
<div className="panel panel-default">
<div className="panel-heading" role="tab" id="heading02">
<div className="panel-title" style={{marginBottom:"0px"}}>
<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse02" aria-expanded="false" aria-controls="collapse02">
<div className="cart-row">
<div className="cart-row-data">
<h1>Non-Veg</h1>
<p>4 items: Roast Chicken Cae...and more</p>
</div>
</div>
</a>
</div>
</div>
                
<div id="collapse02" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading02">


<div className="panel-body">

<div className="row-cart-d">
<div className="left">
<div className="box nonveg"><span></span></div>
</div>
<div className="middle">

<h3>Roast Chicken Tikka</h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00 
</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</table>
</div>

<div className="know_more"><a href="#"><img src="images/know_more_icon.svg" className="deleteicon"/> Knowmore</a></div>

</div>
</div>

<div className="row-cart-d">
<div className="left">
<div className="box nonveg"><span></span></div>
</div>
<div className="middle">
<h3>Roast Chicken Tikka</h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00
</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</table>
</div>
<div className="know_more"><a href="#"><img src="images/know_more_icon.svg" className="deleteicon"/> Knowmore</a></div>
</div>
</div>

<div className="row-cart-d">
<div className="left">
<div className="box nonveg"><span></span></div>
</div>
<div className="middle">
<h3>Roast Chicken Tikka</h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00
</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</table>
</div>
<div className="know_more"><a href="#"><img src="images/know_more_icon.svg" className="deleteicon"/> Knowmore</a></div>
</div>
</div>



<div className="row-cart-d">
<div className="left">
<div className="box nonveg"><span></span></div>
</div>
<div className="middle">
<h3>Roast Chicken Tikka</h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00
</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</table>
</div>
<div className="know_more"><a href="#"><img src="images/know_more_icon.svg" className="deleteicon"/> Knowmore</a></div>
</div>
</div>



<div className="row-cart-d">
<div className="left">
<div className="box nonveg"><span></span></div>
</div>
<div className="middle">
<h3>Roast Chicken Tikka</h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00
</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</table>
</div>
<div className="know_more"><a href="#"><img src="images/know_more_icon.svg" className="deleteicon"/> Knowmore</a></div>
</div>
</div>



</div>



</div>

                        </div>
    
        

    </div>


</div>	  



</div>



<div className="iteams-row  bdr-t5">

<h1>Burgers</h1>

<div className="cart-iteams">	

        <div className="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">
        
        
<div className="panel panel-default">
<div className="panel-heading" role="tab" id="heading03">
<div className="panel-title" style={{marginBottom:"0px"}}>
<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion2" href="#collapse03" aria-expanded="false" aria-controls="collapse03">
<div className="cart-row">
<div className="cart-row-data">
<h1>Veg</h1>
<p>6 items: Soy & Veggie Burger...and more</p>
</div>
</div>
</a>
</div>
</div>
                
<div id="collapse03" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading03">

<div className="panel-body">

<div className="row-cart-d">
<div className="left">
<div className="box veg"><span></span></div>
</div>
<div className="middle">

<h3>Veg Caesar Salad</h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00 
</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</table>
</div>

<div className="know_more"><a href="#"><img src="images/know_more_icon.svg" className="deleteicon"/> Knowmore</a></div>

</div>
</div>

<div className="row-cart-d">
<div className="left">
<div className="box veg"><span></span></div>
</div>
<div className="middle">
<h3>Veg Caesar Salad</h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00
</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</table>
</div>
<div className="know_more"><a href="#"><img src="images/know_more_icon.svg" className="deleteicon"/> Knowmore</a></div>
</div>
</div>

<div className="row-cart-d">
<div className="left">
<div className="box veg"><span></span></div>
</div>
<div className="middle">
<h3>Veg Caesar Salad</h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00
</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</table>
</div>
<div className="know_more"><a href="#"><img src="images/know_more_icon.svg" className="deleteicon"/> Knowmore</a></div>
</div>
</div>



<div className="row-cart-d">
<div className="left">
<div className="box veg"><span></span></div>
</div>
<div className="middle">
<h3>Veg Caesar Salad</h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00
</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</table>
</div>
<div className="know_more"><a href="#"><img src="images/know_more_icon.svg" className="deleteicon"/> Knowmore</a></div>
</div>
</div>



<div className="row-cart-d">
<div className="left">
<div className="box veg"><span></span></div>
</div>
<div className="middle">
<h3>Veg Caesar Salad</h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00
</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</table>
</div>
<div className="know_more"><a href="#"><img src="images/know_more_icon.svg" className="deleteicon"/> Knowmore</a></div>
</div>
</div>



</div>

</div>

                        </div>
    
        
<div className="panel panel-default">
<div className="panel-heading" role="tab" id="heading04">
<div className="panel-title" style={{marginBottom:"0px"}}>
<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion2" href="#collapse04" aria-expanded="false" aria-controls="collapse04">
<div className="cart-row">
<div className="cart-row-data">
<h1>Non-Veg</h1>
<p>8 items: Moroccan Pulled ...and more</p>
</div>
</div>
</a>
</div>
</div>
                
<div id="collapse04" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading04">


<div className="panel-body">

<div className="row-cart-d">
<div className="left">
<div className="box nonveg"><span></span></div>
</div>
<div className="middle">

<h3>Roast Chicken Tikka</h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00 
</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</table>
</div>

<div className="know_more"><a href="#"><img src="images/know_more_icon.svg" className="deleteicon"/> Knowmore</a></div>

</div>
</div>

<div className="row-cart-d">
<div className="left">
<div className="box nonveg"><span></span></div>
</div>
<div className="middle">
<h3>Roast Chicken Tikk</h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00
</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</table>
</div>
<div className="know_more"><a href="#"><img src="images/know_more_icon.svg" className="deleteicon"/> Knowmore</a></div>
</div>
</div>

<div className="row-cart-d">
<div className="left">
<div className="box nonveg"><span></span></div>
</div>
<div className="middle">
<h3>Roast Chicken Tikka</h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00
</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</table>
</div>
<div className="know_more"><a href="#"><img src="images/know_more_icon.svg" className="deleteicon"/> Knowmore</a></div>
</div>
</div>



<div className="row-cart-d">
<div className="left">
<div className="box nonveg"><span></span></div>
</div>
<div className="middle">
<h3>Roast Chicken Tikka</h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00
</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</table>
</div>
<div className="know_more"><a href="#"><img src="images/know_more_icon.svg" className="deleteicon"/> Knowmore</a></div>
</div>
</div>



<div className="row-cart-d">
<div className="left">
<div className="box nonveg"><span></span></div>
</div>
<div className="middle">
<h3>Roast Chicken Tikka</h3>
<p>The main ingredients of the Cae....</p>
<h1>₹ 220.00
</h1>
</div>
<div className="right">
<div className="inc-dis">
<table>
<tr>
<td className="dic">-</td>
<td><input type="number" value="0"/></td>
<td className="inc">+</td>
</tr>
</table>
</div>
<div className="know_more"><a href="#"><img src="images/know_more_icon.svg" className="deleteicon"/> Knowmore</a></div>
</div>
</div>



</div>



</div>

                        </div>
    
        

    </div>


</div>	  



</div>



</div>


<div className="checkouct-list">
<div className="greenbox">

<div className="left">
<h1>1 item</h1>
<p>from: TheCoffeeCup</p>
</div>
<div className="right">
<h1>₹ 240 <span>CHECKOUT</span><a href="/MenuDeliverPopUp"><img src="images/checkout-grp.svg"/></a></h1>
</div>
DineInConfirmOrder

</div>
</div>


</div>




</div>
</div>	
</div>	
        </>
    );
    
    
  }
}

