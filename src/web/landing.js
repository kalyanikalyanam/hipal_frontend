import React from 'react';
import HeaderMenu from './header_menu';
import firebase from '../config';
import PlusIcon from './plus_icon_page';
import HipalIcon from './hipal_icon_page';
import { Link } from 'react-router-dom';
import {Form} from 'reactstrap';
import SimpleReactValidator from "simple-react-validator";
export default class Landing extends React.Component {

	constructor(props){
		super(props);
		this.state={
		
			created_on:  new Date().toLocaleString(),
			 DymicLogoList:[],
			 DynamicAvgValueList:[],
			 DynamicLocationList:[],
			 ItemDetailList:[],
			 Message:'',
			
		};

		this.validator = new SimpleReactValidator({
            className: "text-danger",
            validators: {
                passwordvalid: {
                    message: "The :attribute must be at least 6 and at most 30 with 1 numeric,1 special charac" +
                            "ter and 1 alphabet.",
                    rule: function (val, params, validator) {
                        // return validator.helpers.testRegex(val,/^[a-zA-Z0-9]{6,30}$/i) &&
                        // params.indexOf(val) === -1
                        return (validator.helpers.testRegex(val, /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{6,30}$/i) && params.indexOf(val) === -1);
                    }
                },
                passwordMismatch: {
                    message: "confirm password must match with password field.",
                    rule: function (val, params, validator) {
                        return document
                            .getElementById("password_input")
                            .value === val
                            ? true
                            : false;
                    }
                },
                whitespace: {
                    message: "The :attribute not allowed first whitespace   characters.",
                    rule: function (val, params, validator) {
                        // return validator.helpers.testRegex(val,/^[a-zA-Z0-9]{6,30}$/i) &&
                        // params.indexOf(val) === -1
                        return (validator.helpers.testRegex(val, /[^\s\\]/) && params.indexOf(val) === -1);
                    }
                },
                specialChar: {
                    message: "The :attribute not allowed special   characters.",
                    rule: function (val, params, validator) {
                        // return validator.helpers.testRegex(val,/^[a-zA-Z0-9]{6,30}$/i) &&
                        // params.indexOf(val) === -1
                        return (validator.helpers.testRegex(val, /^[ A-Za-z0-9_@./#&+-]*$/i) && params.indexOf(val) === -1);
                    }
                },
                specialCharText: {
                    message: "The :attribute may only contain letters, dot and spaces.",
                    rule: function (val, params, validator) {
                        // return validator.helpers.testRegex(val,/^[a-zA-Z0-9]{6,30}$/i) &&
                        // params.indexOf(val) === -1
                        return (validator.helpers.testRegex(val, /^[ A-Za-z_@./#&+-]*$/i) && params.indexOf(val) === -1);
                    }
                },

                zip: {
                    message: "Invalid Pin Code",
                    rule: function (val, params, validator) {
                        // return validator.helpers.testRegex(val,/^[a-zA-Z0-9]{6,30}$/i) &&
                        // params.indexOf(val) === -1
                        return (validator.helpers.testRegex(val, /^(\d{5}(\d{4})?)?$/i) && params.indexOf(val) === -1);
                    }
                },
                website: {
                    message: "The Url should be example.com ",
                    rule: function (val, params, validator) {
                        // return validator.helpers.testRegex(val,/^[a-zA-Z0-9]{6,30}$/i) &&
                        // params.indexOf(val) === -1
                        return (validator.helpers.testRegex(val, /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) && params.indexOf(val) === -1);
                    }
                },
                Fax: {
                    message: "Invalid fax number ",
                    rule: function (val, params, validator) {
                        return (validator.helpers.testRegex(val, /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i) && params.indexOf(val) === -1);
                    }
                }
            }
        });


	  }
	  
	  componentDidMount(){
		this.setState({loading: false});
	
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
		  });
		 
		  this.setState({DymicLogoList:data,loading:true},()=>{
			console.log(this.state.DymicLogoList,'DymicLogoList');
		  });
		})
		this.itemDetails();
		this.DynamicAvgValueList();
		this.DynamicLocationList();
		}
		itemDetails(){
			// var ref=firebase.database().ref('items').orderByChild("status").equalTo("InActive");
			var ref=firebase.database().ref('items');
			ref.once("value",snapshot =>{
			 const data =[];
			  console.log(snapshot.val());
			  snapshot.forEach(element => {
				const usersData={
				  itemDetailsId:element.key.toString(),
				  item_name:element.val().item_name,
				  item_photo:element.val().item_photo,
				  item_special_discount:element.val().item_special_discount,
				  item_uniqueid:element.val().item_uniqueid,
				  item_tag:element.val().item_tag,
				  item_classification:element.val().item_classification,
				  item_photo_for_menupage:element.val().dyitem_photo_for_menupagenamic_logo,
				  item_video:element.val().item_video,
				  item_price:element.val().item_price,

				  status:element.val().status,
				  created_on:element.val().created_on
				}
				data.unshift(usersData);
			  });
			 
			  this.setState({ItemDetailList:data,loading:true},()=>{
				console.log(this.state.ItemDetailList,'ItemDetailList');
			  });
			})
		}
		DynamicAvgValueList=()=>{
			var ref=firebase.database().ref('DynamicAvgValue').orderByChild("status").equalTo("Selected");
			ref.once("value",snapshot =>{
			 const data =[];
			  console.log(snapshot.val());
			  snapshot.forEach(element => {
				const usersData={
				

				  DynamicAvgValueId: element.key.toString(),
				  dynamic_avg_value: element.val().dynamic_avg_value,
				  created_on: element.val().created_on,
				  status:element.val().status,

				  status:element.val().status,
				  created_on:element.val().created_on
				}
				data.unshift(usersData);
			  });
			 
			  this.setState({DynamicAvgValueList:data,loading:true},()=>{
				console.log(this.state.DynamicAvgValueList,'DynamicAvgValueList');
			  });
			})
		}
		DynamicLocationList = () =>{
			var ref=firebase.database().ref('DynamicLocation').orderByChild("status").equalTo("Selected");
			ref.once("value",snapshot =>{
			 const data =[];
			  console.log(snapshot.val());
			  snapshot.forEach(element => {
				const usersData={
				
					DynamicLocationId: element.key.toString(),
					dynamic_location: element.val().dynamic_location,
					created_on: element.val().created_on,
					status:element.val().status,

				}
				data.unshift(usersData);
			  });
			 
			  this.setState({DynamicLocationList:data,loading:true},()=>{
				console.log(this.state.DynamicLocationList,'DynamicLocationList');
			  });
			})
		}

		onChange = (event) => {

			this.setState({
				[event.target.name]: event.target.value
			});
		};

		handleSubmit = (event) => {
			event.preventDefault();
			if (this.validator.allValid()) {
				console.log(this.state.avatar);
				var sessionId = sessionStorage.getItem("RoleId");
				var UserName = sessionStorage.getItem("UserName");
				
	
				let dbCon = firebase
					.database()
					.ref('/Message');
					
				dbCon.push({
					
	
					Message:this.state.Message,
				
	
					UserName:UserName,
					created_on: this.state.created_on,
					sessionId: sessionId,
				});

				this.setState({Message:""});
			
			} else {
				this
					.validator
					.showMessages();
				this.forceUpdate();
			}
	
		};



  render() {
    return (
        <div className="body-back">
			
	
		<div className="masthead pdng-stn1">
		<HipalIcon/>
		
			{/* <div id="menu" className="panel" role="navigation">
				<div className="wrap-content">
				
					<div className="profile-menu text-center">
							<div className="pro-menu">
							<ul>
								<li><a className="active" href="/">
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
			
			<div className="phone-box wrap push" id="home">

				<HeaderMenu/>
{/* 			
				<div className="menu-notify">
				
					<div className="profile-left">
						<a href="#menu" className="menu-link">
						<img src="images/profile-nav.svg"/>
						</a>
					</div>
					<div className="Profile-mid">
						<h5 className="pro-link"><a href="main.html">TheCoffeeCup</a></h5>
					</div>
					<div className="Profile-right">
						
						<img src="images/profile-img.png"/>
						
					
					</div>
					<div className="clearfix"></div>
				</div> */}
				
<div className="body-container">
<PlusIcon/>
{/* <div className="btn-group dropup round-f-nav">

  <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
 <img src="images/create_w.svg"/>
  </button>
  <div className="dropdown-menu">
	<ul>
	<li><a className="active" href="/OrderFood">
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

<div className="approw">
<div className="col-lg-12 p-0 ful-row">
<div className="half1">

<div class="comp_logo">

{this.state.DymicLogoList && this.state.DymicLogoList.map((logo,index) => {
return (
<img src={logo.dynamic_logo}/>
)})}

{/* <img src="images/coffee-cup-logo.png"/> */}

</div>

<h1>The <span>best</span> coffee in town.</h1>
{this.state.DynamicLocationList && this.state.DynamicLocationList.map((location,index) => {
return (
	<p><img src="images/location.svg"/> {location.dynamic_location}</p>
)})}
{/* <p><img src="images/location.svg"/> Location</p> */}


</div>
<div className="half2"><img src="images/women.svg"/></div>
</div>
</div>	

<div className="approw bg-w arc-curve">
<div className="col-lg-12 p-0 ful-row">
<div className="box">
<div className="rating-box">
<span>
	{/* 4.5 */}

	{this.state.DynamicAvgValueList && this.state.DynamicAvgValueList.map((avgvalue,index) => {
return (
	<b>
{avgvalue.dynamic_avg_value}
</b>
)})}
	 rating</span>
<span><b>500 ₹</b> avg. check</span>
</div>
</div>
<div className="box">
<div className="landingimg">
<img src="images/landing-img-1.png"/>
</div>

<div className="landingimg video">
<img src="images/landing-img-2.png"/>
</div>

</div>
</div>
</div>		
	

<div className="approw bg-w pt-0">
<div className="col-lg-12 p-0">

<div className="swiper-container">
    <div className="swiper-wrapper">
	{this.state.ItemDetailList && this.state.ItemDetailList.map((item,index) => {
return (
      <div className="swiper-slide"><img src={item.item_photo}></img></div>
)})}
      {/* <div className="swiper-slide">Carousel  2</div>
      <div className="swiper-slide">Carousel  3</div>
      <div className="swiper-slide">Carousel  4</div>
      <div className="swiper-slide">Carousel  5</div>
      <div className="swiper-slide">Carousel  6</div>
      <div className="swiper-slide">Carousel  7</div>
      <div className="swiper-slide">Carousel  8</div>
      <div className="swiper-slide">Carousel  9</div>
      <div className="swiper-slide">Carousel  10</div> */}
    </div>
    {/* <!-- Add Arrows --> */}

  </div>
{/* <!-- Add fraction --> */}


</div>
</div>



<div className="approw bg-w o-f-bdr2 orderrow">

<div className="col-lg-12 p-0">
<a href="/OrderSelect">
<div className="carticon">
<div className="imgbox">
<img src="images/yellow-cart.svg"/>
</div>
</div>

<div className="carthead">
<p>Order food with us</p>
<span>Fill your cart now</span>
</div>


<div className="cartarrow">
<img src="images/right-arrow.svg"/>
</div>
</a>
</div>

</div>


<div className="approw bg-g1">

<div className="take-order">
	<Link to="/OrderSelect"><span>May I Take Your Order :)</span></Link>
	</div>
<div className="plate-row">

<div className="plate-box">
<figure>
<img src="images/plate-mix.png"/>
</figure>
<h5>₹ 180</h5>
<p>Tomato Pasta with Cheese</p>

</div>


<div className="plate-box">
<figure>
<img src="images/plate-mix.png"/>
</figure>
<h5>₹ 180</h5>
<p>Tomato Pasta with Cheese</p>

</div>


<div className="plate-box">
<figure>
<img src="images/plate-mix.png"/>
</figure>
<h5>₹ 180</h5>
<p>Tomato Pasta with Cheese</p>

</div>


<div className="plate-box">
<figure>
<img src="images/plate-mix.png"/>
</figure>
<h5>₹ 180</h5>
<p>Tomato Pasta with Cheese</p>

</div>

</div>



<div className="see-details"><span>See full menu</span>
<span><img src="images/right-arrow-black.svg"/></span></div>			


</div>
	


<div className="approw bg-w pl-0 pr-0 pt-0">
	<div className="services-section p-0">
					<div className="wrap_view_agileits">
					
						<div className="inner_section_wthree mt-0">
							<div className="bs-example bs-example-tabs channel-tab" role="tabpanel" data-example-id="togglable-tabs">
							
<ul id="myTab" className="nav nav-tabs" role="tablist">
<li role="presentation" className="active"><a href="#Channel"  role="tab" id="Channel-tab" data-toggle="tab" aria-controls="Channel"><span>My Channel</span></a></li>
<li role="presentation"><a href="#Media" role="tab" id="Media-tab" data-toggle="tab" aria-controls="Media"><span>Media</span></a></li>
</ul>

								
<div id="myTabContent" className="tab-content">

<div role="tabpanel" className="tab-pane fade in active" id="Channel" aria-labelledby="Channel-tab">

<div className="cha_media-r">

<div className="img-box">
<img src="images/channel-img.png"/>

</div>

<div className="img-content">
<p>Friend’s<br></br> Burger</p>
<span>02:30</span>
</div>

<div className="img-right-a">
<img src="images/bi_play-fill.svg"/>
</div>


</div>

<div className="cha_media-r">

<div className="img-box">
<img src="images/channel-img.png"/>

</div>

<div className="img-content">
<p>Friend’s<br></br> Burger</p>
<span>02:30</span>
</div>

<div className="img-right-a">
<img src="images/bi_play-fill.svg"/>
</div>


</div>



<div className="cha_media-r">

<div className="img-box">
<img src="images/channel-img.png"/>

</div>

<div className="img-content">
<p>Friend’s<br></br> Burger</p>
<span>02:30</span>
</div>

<div className="img-right-a">
<img src="images/bi_play-fill.svg"/>
</div>


</div>



</div>

	<div role="tabpanel" className="tab-pane fade" id="Media" aria-labelledby="Media-tab">



<div className="cha_media-r">

<div className="img-box">
<img src="images/channel-img.png"/>

</div>

<div className="img-content">
<p>Friend’s<br></br> Burger</p>
<span>02:30</span>
</div>

<div className="img-right-a">
<img src="images/play-right-arrow.png"/>
</div>


</div>

<div className="cha_media-r">

<div className="img-box">
<img src="images/channel-img.png"/>

</div>

<div className="img-content">
<p>Friend’s<br></br> Burger</p>
<span>02:30</span>
</div>

<div className="img-right-a">
<img src="images/play-right-arrow.png"/>
</div>


</div>



<div className="cha_media-r">

<div className="img-box">
<img src="images/channel-img.png"/>

</div>

<div className="img-content">
<p>Friend’s<br></br> Burger</p>
<span>02:30</span>
</div>

<div className="img-right-a">
<img src="images/play-right-arrow.png"/>
</div>


</div>




	</div>


	</div>
								
							

<div className="dots-expand">
<span className="circle"></span>
<span className="circle-tab"></span>
</div>							
								
							</div>
						</div>
						

					</div>
				</div>
				


</div>
	

<div className="approw create-meal">
<h1>Create your own meal</h1>
<div className="col-lg-12 p-0">

<div className="choose">
<div className="w-box">
<img src="images/choose_icon_b.svg"/>
</div>
<p>Choose form variety </p>
</div>
<div className="variety">
<div className="w-box">
<img src="images/createone-icon.svg"/>
</div>
<p>Create one</p>
</div>

</div>
</div>


<div className="approw bg-w o-f-bdr orderrow">

<div className="col-lg-12 p-0">
<a href="/OrderSelect">
<div className="carticon">
<div className="imgbox">
<img src="images/yellow-cart.svg"/>
</div>
</div>

<div className="carthead">
<p>Order food with us</p>
<span>Fill your cart now</span>
</div>


<div className="cartarrow">
<img src="images/right-arrow.svg"/>
</div>
</a>
</div>


</div>

	{/* <!--//footer--> */}
<div className="reachout-box">

<div className="reachout-box-wrap">
<Form onSubmit={this.handleSubmit}>
<div className="box-curved">
<h1>Reach out to use</h1>


<textarea name="Message"  required="" placeholder="message...."onChange={this.onChange}
     value={this.state.Message}></textarea>
{this.validator.message("Message", this.state.Message, "required|whitespace|min:2|max:70")}
<div className="clearfix"> </div>

<div className="submit-icon">
<button type="submit">
<div className="imgsend">
<img src="images/submit-btn-icon.svg"/></div>
</button>
</div>

</div>
</Form>
</div>
<div className="clearfix"> </div>
</div>
				



</div>
</div>
</div>
</div>
    );
    
    
  }
}

