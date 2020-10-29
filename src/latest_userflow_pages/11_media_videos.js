import React from 'react';

import Sidebar from "react-sidebar";
import firebase from '../config';


export default class MediaVideos11 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  sidebarOpen: false
		};
		this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
	  }
    componentWillMount(){
        document.getElementById('root').className='h-100'
        
      }
        componentWillUnmount(){
        document.getElementById('root').className=''
       
      }
      onSetSidebarOpen() {
        if(this.state.sidebarOpen==false)
        {
         this.setState({ sidebarOpen: true });
        }
        else{
         this.setState({ sidebarOpen: false });
        }
         }

      

         componentDidMount() {
   
            const {itemsId} = this.props.match.params;
          
          console.log(itemsId);
          let dataCount=0;
          var ref=firebase.database().ref(`items/${itemsId}`);
            ref.on('value', snapshot => {
               var   data = snapshot.val();
               dataCount=snapshot.val().count;
                console.log(dataCount)
                this.setState({
                  


                    item_name: data.item_name,
                    item_photo: data.item_photo,
                    item_special_discount: data.item_special_discount,
                    item_uniqueid: data.item_uniqueid,
                    item_tag: data.item_tag,
                    item_classification: data.item_classification,
                    item_photo_for_menupage: data.item_photo_for_menupage,
                    item_video: data.item_video,
                    item_price: data.item_price,
                    sessionId: data.sessionId,
                    created_on: data.created_on,
                    status: data.status,
                    item_type:data.item_type,
                    category:data.category,
                  
        
                },
                );
             
                
            });
         
            
        
        
        }
        
    
  render() {

    
    return (
<div className="body-back h-100">
	
    {/* <div className="masthead pdng-stn1 h-100">
    
        <div id="menu" className="panel" role="navigation">
            <div className="wrap-content">
            
                <div className="profile-menu text-center">
                        <div className="pro-menu">
                        <ul>
                            <li><a className="active" href="#">
                            <img src="/images/home-_b.svg"/>Home</a></li>
                            <li><a href="#">
                            <img src="/images/profile_b.svg"/>Profile</a></li>
                            <li><a href="#">
                            <img src="/images/saved_b.svg"/>Saved</a></li>
                            <li><a href="#">
                            <img src="/images/vip-y.svg"/>Go VIP</a></li>
                            <li><a href="#">
                            <img src="/images/hipal-iocn.svg"/>Hipal</a></li>
                            <li><a href="#">
                            <img src="/images/settings_b.svg"/>Settings</a></li>
                        </ul>
                    </div>
                </div>
            
            </div>
        </div> */}
        
        <div  id="ggg" className="masthead pdng-stn1 h-100">
		<Sidebar
                sidebar={
		
	
				<div className="wrap-content menu-width">
				
					<div className="profile-menu text-center">
							<div className="pro-menu">
							<ul>
								<li><a className="active" href="/">
								<img src="/images/home-_b.svg"/>Home</a></li>
								<li><a href="/">
								<img src="/images/profile_b.svg"/>Profile</a></li>
								<li><a href="#">
								<img src="/images/saved_b.svg"/>Saved</a></li>
								<li><a href="#">
								<img src="/images/vip-y.svg"/>Go VIP</a></li>
								<li><a href="#">
								<img src="/images/hipal-iocn.svg"/>Hipal</a></li>
								<li><a href="#">
								<img src="/images/settings_b.svg"/>Settings</a></li>
							</ul>
						</div>
					</div>
				
	
			</div>
			    }
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{ sidebar: { background: "white" } }}
              ></Sidebar>
        <div className="phone-box wrap push h-100" id="home">
        
            <div className="menu-notify">
            
            <div className="profile-left">
					<a href="#"  className="open" onClick={() => this.onSetSidebarOpen()}>
						<img src="/images/profile-nav.svg"/>
						</a>
					</div>
                <div className="Profile-mid">
                    <h5 className="pro-link"><a href="main.html">TheCoffeeCup</a></h5>
                </div>
                <div className="Profile-right">
                    
                    <img src="/images/profile-img.png"/>
                    
                
                </div>
                <div className="clearfix"></div>
            </div>
            
<div className="body-container h-100 in_pa">

<div className="food-ord-blk">

<div className="approw mt-2">
<div className="col-lg-12 p-0 ful-row">
<div className="deliver-home">
<a href="/MenuDineIn14"><img src="/images/back_o.svg" className="b_arrow"/></a>
Media <span className="call_waiter_btn">Share Media</span>
</div>
</div>
</div>






<div className="approw pt-10  pb-10">
<div className="col-lg-12 p-0 ful-row food-ord items-row_blk">
<p className="mb-10 media_profile"><img src="/images/profile-img.png"/>John Deo</p>
<h1 className="mb-0 w-100 head_media">{this.state.item_name}<span className="contributor_head">Contributor</span></h1>

<div className="w-100 media_video">
<iframe width="100%" height="100%" src={this.state.item_video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


<div className="mb-0 w-100 upvote_downvote">
<span className="media_vote">
    <img src="/images/upvote.png" className="upvote"/>Vote
    <img src="/images/downvote.png" className="downvote"/>
</span>
<span className="media_share">
<img src="/images/share_back.png" className="share_icon"/>


</span>
</div>





</div>
</div>


<div className="approw pt-10  pb-10">
<div className="col-lg-12 p-0 ful-row food-ord items-row_blk">

<h1 className="mb-0 w-100 head_media">Friendly Suprise<span className="contributor_company">By Coffeecup</span></h1>


<div className="w-100 media_image">
<img src="/images/landing-img-2.png"/>
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

