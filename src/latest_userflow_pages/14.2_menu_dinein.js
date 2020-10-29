import React from 'react';

import { Link } from 'react-router-dom';
import firebase from '../config';

export default class MenuDineIn14_2 extends React.Component {



	constructor(props){
		super(props);
		this.state={
		
			created_on:  new Date().toLocaleString(),
			categoryList:[],
			itemTypeList:[],
		
			quantity: 1,
			open: true,
		};
	}
	
	  
    componentWillMount(){
        document.getElementById('root').className='h-100'
        
      }
        componentWillUnmount(){
        document.getElementById('root').className=''
       
	  }
	  
	  componentDidMount(){
		this.setState({loading: false});
        var ref=firebase.database().ref('items').orderByChild("category").equalTo(this.props.category);
	//   var ref=firebase.database().ref('items');
		ref.once("value",snapshot =>{
		 const data =[];
		//   console.log(snapshot.val());
		  snapshot.forEach(element => {
			const usersData={
			  itemsId:element.key.toString(),


		

			  item_name: element.val().item_name,
			  item_photo: element.val().item_photo,
			  item_special_discount: element.val().item_special_discount,
			  item_uniqueid: element.val().item_uniqueid,
			  item_tag: element.val().item_tag,
			  item_classification: element.val().item_classification,
			  item_photo_for_menupage: element.val().item_photo_for_menupage,
			  item_video: element.val().item_video,
			  item_price: element.val().item_price,
			  sessionId: element.val().sessionId,
			  created_on: element.val().created_on,
			  status: element.val().status,
			  item_type:element.val().item_type,
			  category:element.val().category,

			
			}
			data.unshift(usersData);
		  });
		 
		  this.setState({ItemsList:data,loading:true},()=>{
			console.log(this.state.ItemsList,'ItemsList');
		  });
		})
		this.categoryList();
		this.itemTypeList();
	
	
		}
		categoryList=()=>{
			this.setState({loading: true});
			var ref = firebase
				.database()
				.ref("category/");
	
			ref.on('value', snapshot => {
				const data = [];
				snapshot.forEach(childSnapShot => {
	
					const GSTData = {
						categoryId: childSnapShot
							.key
							.toString(),
							category: childSnapShot
							.val()
							.category,
							categoryLogo: childSnapShot
							.val()
							.categoryLogo,
							
						  
							created_on: childSnapShot
							.val()
							.created_on,
	
	
					};
	
					data.push(GSTData);
				});
	
				this.setState({categoryList: data, countPage: data.length, loading: false});
				console.log(this.state.categoryList,'categoryList');
		
			});
		}

		itemTypeList=()=>{
			this.setState({loading: true});
			var ref = firebase
				.database()
				.ref("ItemType/").orderByChild("item_type").equalTo(this.props.item_type);;
	
			ref.on('value', snapshot => {
				const data = [];
				snapshot.forEach(childSnapShot => {
	
					const GSTData = {
						itemtypeId: childSnapShot
							.key
							.toString(),
							item_type: childSnapShot
							.val()
							.item_type,
						  
							created_on: childSnapShot
							.val()
							.created_on,
	
	
					};
	
					data.push(GSTData);
				});
	
				this.setState({itemTypeList: data, countPage: data.length, loading: false});
				console.log(this.state.itemTypeList);
		
			});


		}

		
	  
		increment = (event) => {
       
		
	
			this.setState({
				quantity: this.state.quantity + 1
			});
		
		};

		decrement = (event) => {

			if (this.state.quantity <= 1) {} else {
	
				this.setState({
					quantity: this.state.quantity - 1
				});
			}
	
		};
    
  render() {

    
    return (
    
     <>
     {this.state.itemTypeList && this.state.itemTypeList.map((item_type,index) => {
		    // if(index==1)
return (
    <div className="cart-iteams">	

    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">		
    
    <div className="panel panel-default">
    
     
    <div className="panel-heading" role="tab" id="heading01">
    <div className="panel-title" style={{marginBottom: "0px"}}>
    <a href="#" className="collapsed" 
                    onClick={function(){this.setState({open:!this.state.open})}.bind(this)} >
    {/* <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse01" aria-expanded="false" aria-controls="collapse01"> */}
    
    <div className="cart-row">
    <div className="cart-row-data">
    <h1>{item_type.item_type}</h1>
    <p>3 items: Veg Caesar Salad...and more</p>
    </div>
    </div>
    </a>
    </div>
    </div>
    
    
    
   
    
    
    </div>
        
    
    
        
    
    </div>
    </div>
)})}



     </>

	


    );
    
    
  }
}

