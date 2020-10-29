import React from 'react';
import { Link, withRouter } from "react-router-dom";
// import { Link } from 'react-router-dom';
import firebase from '../config';
import HomeMenu1 from './homemenu1';
  class HomeMenu extends React.Component {



	constructor(props){
		super(props);
		this.state={
		
			created_on:  new Date().toLocaleString(),
			categoryList:[],
			itemvegList:[],
			itemnonvegList:[],
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
	
	  var ref=firebase.database().ref('items');
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
		// this.categoryList();
	
	
		}
		// categoryList=()=>{
		// 	this.setState({loading: true});
		// 	var ref = firebase
		// 		.database()
		// 		.ref("category/");
	
		// 	ref.on('value', snapshot => {
		// 		const data = [];
		// 		snapshot.forEach(childSnapShot => {
	
		// 			const GSTData = {
		// 				categoryId: childSnapShot
		// 					.key
		// 					.toString(),
		// 					category: childSnapShot
		// 					.val()
		// 					.category,
		// 					categoryLogo: childSnapShot
		// 					.val()
		// 					.categoryLogo,
							
						  
		// 					created_on: childSnapShot
		// 					.val()
		// 					.created_on,
	
	
		// 			};
	
		// 			data.push(GSTData);
		// 		});
	
		// 		this.setState({categoryList: data, countPage: data.length, loading: false});
		// 		console.log(this.state.categoryList,'categoryList');
		
		// 	});
		// }


		componentWillMount() {
			this.setState({loading: true});
			var ref = firebase
				.database()
				.ref("category/");
	
			ref.on('value', snapshot => {
				const data = [];
	
				snapshot.forEach(childSnapShot => {
	
					const Categories = {
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
	
					data.push(Categories);
				});
	
				this.setState({categoryList: data, countPage: data.length, loading: false});
				// console.log(this.state.categoryList);
	
			});
	
		}
	
		handleChangeSinglePost = (value) => {
			this.setState({category: value});
		}
	
    
  render() {

    
    return (
    <>




     
	<div className="body-back h-100">
	
	<div className="masthead pdng-stn1 h-100">
	

		<div className="phone-box wrap push h-100" id="home">
		
		
			
<div className="body-container bg-w h-100 cart_space pb-0">



<div className="approw bg-w pl-0 pt-0 pr-0">


<div className="iteams-row  bdr-t5">




<div className="iteams-row-nav">




                                                {this
                                                .state
                                                .categoryList
                                                .map((data, index) => {

                                                    return (
                                                        <div className="tab"  key={index}>
                                                        <Link
                                                                to={`/CategoryListPage/${data
                                                                .category
                                                                .replace(/\s/g, '')}`}>{data.category}</Link>
																 <SubcategoryView categoryName={data.category}/>
                                                <span className="box bevarages"></span>
                                               
                                                </div>


                                                      

                                                      
                                                    )

                                                })}


</div>
{/* {this.state.categoryList.length>0? this.state.categoryList.map((category,index) => {
	
           return(
  
  
 <HomeMenu1  category={category.category}/>
        

       );
     }):null}	 */}



{/* <h1>All Day Breakfast</h1>

<div className="cart-iteams">	

<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">		

<div className="panel panel-default">

<div className="panel-heading" role="tab" id="heading01">
<div className="panel-title" style={{marginBottom: "0px"}}>
<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse01" aria-expanded="false" aria-controls="collapse01">
<div className="cart-row">
<div className="cart-row-data">
<h1>Veg</h1>
<p>3 items: Veg Caesar Salad...and more</p>
</div>
</div>
</a>
</div>
</div>


				
<div id="collapse01" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading01">

<div className="panel-body">


<div className="row-cart-d mt-0  mb-0 pt-20 pb-20">
<div className="left w-60 confirm_item">
<div><div className="box veg"><span></span></div><span className="best_celler_btn">Best seller</span></div>
<h1>Veg Caesar Salad </h1>
<p>₹ 220.00</p>
<p className="qty">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
</div>

<div className="right w-37 text-center">
	
<Link to="/MediaVideos11">
<div className="fav-star"><img src="images/star_yellow.png"/></div>

</Link>
<div className="img_product">
<img src="images/landing-img-3.png"/>
</div>

<div className="inc-dis mt-10-r">
<table>
<tbody><tr>
<td></td>
<td>ADD</td>
<td className="inc">+</td>
</tr>
</tbody></table>
</div>
</div>
</div>


<div className="row-cart-d mt-0 mb-0 pt-20 pb-20">



<div className="left w-60 confirm_item">
<div><div className="box veg"><span></span></div><span className="best_celler_btn">Best seller</span></div>
<h1>Veg Caesar Salad </h1>
<p>₹ 220.00</p>
<p className="qty">Lorem Ipsum has been the industry...<span className="seemore">seemore</span></p>
</div>




<div className="right w-37 text-center">


<div className="inc-dis">
<table>
<tbody><tr>
<td></td>
<td>ADD</td>
<td className="inc">+</td>
</tr>
</tbody></table>
</div>


</div>



</div> 



</div>


</div>


</div>
	

<div className="panel panel-default">

<div className="panel-heading" role="tab" id="heading02">
<div className="panel-title" style={{marginBottom: "0px"}}>
<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse02" aria-expanded="false" aria-controls="collapse02">
<div className="cart-row">
<div className="cart-row-data">
<h1>Nonveg</h1>
<p>3 items: Veg Caesar Salad...and more</p>
</div>
</div>
</a>
</div>
</div>
				
<div id="collapse02" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading02">

<div className="panel-body">

 <div className="row-cart-d mt-0  mb-0 pt-20 pb-20">
<div className="left w-60 confirm_item">
<div><div className="box nonveg"><span></span></div><span className="best_celler_btn">Best seller</span></div>
<h1>Veg Caesar Salad </h1>
<p>₹ 220.00</p>
<p className="qty">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
</div>

<div className="right w-37 text-center">
<Link to="/MediaVideos11">
<div className="fav-star"><img src="images/star_yellow.png"/></div>
</Link>
<div className="img_product">
<img src="images/landing-img-3.png"/>
</div>

<div className="inc-dis mt-10-r">
<table>
<tbody><tr>
<td></td>
<td>ADD</td>
<td className="inc">+</td>
</tr>
</tbody></table>
</div>
</div>
</div>


<div className="row-cart-d mt-0 mb-0 pt-20 pb-20">



<div className="left w-60 confirm_item">
<div><div className="box nonveg"><span></span></div><span className="best_celler_btn">Best seller</span></div>
<h1>Veg Caesar Salad </h1>
<p>₹ 220.00</p>
<p className="qty">Lorem Ipsum has been the industry...<span className="seemore">seemore</span></p>
</div>




<div className="right w-37 text-center">


<div className="inc-dis">
<table>
<tbody><tr>
<td></td>
<td>ADD</td>
<td className="inc">+</td>
</tr>
</tbody></table>
</div>


</div>



</div> 



</div>


</div>


</div>
	

</div>
</div>	 */}





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



class SubcategoryView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount = (event) => {

        let selectedCategoryName = this.props.categoryName;
        var ref = firebase
            .database()
            .ref("sub_category")
            .orderByChild("category")
            .equalTo(selectedCategoryName);

        ref.on('value', snapshot => {

            const data = [];

            snapshot.forEach(childSnapShot => {

                const GSTList = {
                    subCategoryId: childSnapShot
                        .key
                        .toString(),
                    subCategory: childSnapShot
                        .val()
                        .subCategory
                };

                data.push(GSTList);
            });

            this.setState({subcategoryList: data, subCategory: selectedCategoryName, loading: false});

        });
    };
    render() {

        // var subcategoryList = this.state.subcategoryList && this     .state
        // .subcategoryList     .map((data, index) => {         // console.log(data);
        //      return (             <li key={index}>
        //                  <Link
        // to={`/ProductsListPage/${data.subCategory.replace(/\s/g,'')}`}
        // >{data.subCategory}</Link>             </li>         )     })

        return (

            <ul className="hb-dropdown">

                {this.state.subcategoryList && this.state.subcategoryList.length > 0
                    ? this
                        .state
                        .subcategoryList
                        .map((data, index) => {

                            return (

                                <li key={index}>

                                    <Link
                                        to={`/ProductsListPage/${data
                                        .subCategory
                                        .replace(/\s/g, '')}`}>{data.subCategory}</Link>

                                </li>

                            )

                        })
                    : <li>No Sub Categories</li>
}

            </ul>

        );
    }
}
export default withRouter(HomeMenu);