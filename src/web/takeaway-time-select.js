import React from 'react';
import HeaderMenu from './header_menu';
import HipalIcon from './hipal_icon_page';
import PlusIcon from './plus_icon_page';


export default class TakeAwayTimeSelect extends React.Component {

    componentWillMount(){
        document.getElementById('root').className='h-100'
        
      }
        componentWillUnmount(){
        document.getElementById('root').className=''
       
      }
    
  render() {

    
    return (

        <div class="body-back h-100">
	
		<div class="masthead pdng-stn1 h-100">
			<HipalIcon/>
		
			{/* <div id="menu" class="panel" role="navigation">
				<div class="wrap-content">
				
					<div class="profile-menu text-center">
							<div class="pro-menu">
							<ul>
								<li><a class="active" href="/">
								<img src="images/home-_b.svg"/>Home</a></li>
								<li><a href="#">
								<img src="images/profile_b.svg"/>Profile</a></li>
								<li><a href="#">
								<img src="images/saved_b.svg"/>Saved</a></li>
								<li><a href="#">
								<img src="images/vip-y.svg"/>Go VIP</a></li>
								<li><a href="#">
								<img src="images/hipal-iocn.svg"/>Hipal</a></li>
								<li><a href="#">
								<img src="images/settings_b.svg"/>Settings</a></li>
							</ul>
						</div>
					</div>
				
				</div>
			</div> */}
			
			<div class="phone-box wrap push h-100" id="home">
				<HeaderMenu/>
			
				{/* <div class="menu-notify">
				
					<div class="profile-left">
						<a href="#menu" class="menu-link">
						<img src="images/profile-nav.svg"/>
						</a>
					</div>
					<div class="Profile-mid">
						<h5 class="pro-link"><a href="main.html">TheCoffeeCup</a></h5>
					</div>
					<div class="Profile-right">
						
						<img src="images/profile-img.png"/>
						
					
					</div>
					<div class="clearfix"></div>
				</div> */}
				
<div class="body-container h-100 in_pa">

<div class="food-ord-blk h-100">

<div class="approw mt-2">
<div class="col-lg-12 p-0 ful-row">
<div class="deliver-home">
<a href="/TakeAwayHome"><img src="images/back_o.svg" class="b_arrow"/></a>
Time
</div>
</div>
</div>

<div class="approw">

<div class="time_select_row">
<h1>Select Time</h1>
<p>Please select your desired time</p>
</div>



<div class="time_select_row">
<h2>12th June 2020</h2>

<div class="time_select_box">
<span>
<select>
<option>00</option>
<option>01</option>
<option>02</option>
<option>03</option>
<option>04</option>
<option>05</option>
<option>06</option>
<option>07</option>
<option>08</option>
<option>09</option>
<option>10</option>
<option>11</option>
<option>12</option>
</select>
</span>
<span>
<select>
<option>01</option>
<option>02</option>
<option>03</option>
<option>04</option>
<option>05</option>
<option>06</option>
<option>07</option>
<option>08</option>
<option>09</option>
<option>10</option>
<option>11</option>
<option>12</option>
<option>13</option>
<option>14</option>
<option>15</option>
<option>16</option>
<option>17</option>
<option>18</option>
<option>19</option>
<option>19</option>
<option>20</option>
<option>21</option>
<option>22</option>
<option>23</option>
<option>24</option>
<option>25</option>
<option>26</option>
<option>27</option>
<option>28</option>
<option>29</option>
<option>30</option>
<option>31</option>
<option>32</option>
<option>33</option>
<option>34</option>
<option>35</option>
<option>36</option>
<option>37</option>
<option>38</option>
<option>39</option>
<option>40</option>
<option>41</option>
<option>42</option>
<option>43</option>
<option>44</option>
<option>45</option>
<option>46</option>
<option>47</option>
<option>48</option>
<option>49</option>
<option>50</option>
<option>51</option>
<option>52</option>
<option>53</option>
<option>54</option>
<option>55</option>
<option>56</option>
<option>57</option>
<option>58</option>
<option>59</option>
<option>60</option>
</select>

</span>
<span>
<select>
<option>am</option>
<option>pm</option>
</select>
</span>
</div>


</div>


<div class="time_select_row">
<div class="confirm-btn">
<a href="/SelectPaymentModeTakeAway">
<span class="btn">Checkout</span>
</a>
</div>
</div>

</div>

<div class="approw p-0  bg-g4">
<div class="col-lg-12 checkout-box bg-w bdr-top-50">
<div class="dots-expand gray">
<span class="circle-tab"></span>
</div>
<h1><span>Total :</span><span>₹ 494.10</span></h1>
<div class="checkout-btn">
	<a href="/SelectPaymentModeTakeAway">
<span class="btn">Checkout</span>
</a>
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

