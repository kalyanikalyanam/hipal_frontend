import React from "react";

import firebase from '../config';


import {Link} from "react-router-dom";


class CategoryListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            itemList: [],
            loading: true,
            plpID:'',
            date: new Date().toLocaleString()
        }

    }
        

componentDidMount(){
    const {plpID}=this.props.match.params;
    this.productsDetails(plpID);
   
}
componentWillReceiveProps(nextProps, prevState) {
    console.log(nextProps);
    const {plpID}=nextProps.match.params;
    this.productsDetails(plpID);
   
}
    productsDetails(plpID) {
       
        this.setState({loading: false});
    console.log(plpID);
        var ref = firebase
            .database()
            .ref(`items`).orderByChild("category").equalTo(plpID);
       

        ref.on('value', snapshot => {
            const data = [];
             console.log(snapshot.val());

            snapshot.forEach(element => {

                const Products = {
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
					category:element.val().category,
					
					subCategory:element.val().subCategory,
                };

                data.push(Products);
            });

            this.setState({itemList: data, loading: true});
            console.log(this.state.itemList);

        });

    }
    
    render() {
        const {plpID}=this.props.match.params;
        return ( <div>
          
            <div className="body-wrapper">

           
                <div className="breadcrumb-area">

                    <div className="container-fluid">

                        <div className="breadcrumb-content">

                            <ul>

                                <li>
                                    <Link to="/">Home</Link>
                                </li>

                                <li className="active">{plpID}</li>

                            </ul>

                        </div>

                    </div>

                </div>

                <div className="content-wraper">

                    <div className="container-fluid">

                        <div className="row">

                            <div className="col-lg-12 order-1 order-lg-2">

                                {/* <div className="shop-top-bar mt-30">

                                    <div className="shop-bar-inner">

                                        <div className="product-view-mode">

                                            <ul className="nav shop-item-filter-list" role="tablist">

                                                <li role="presentation">
                                                    <a data-toggle="tab" role="tab" aria-controls="grid-view" href="#grid-view">
                                                        <i className="fa fa-th"></i>
                                                    </a>
                                                </li>

                                            </ul>

                                        </div>

                                    </div>

                                </div> */}

                                <div className="shop-products-wrapper">

                                    <div className="tab-content">

                                       

                                            <div className="product-area shop-product-area">

                                                <div className="row">
                                                    {this.state.itemList.length>0? this.state.itemList.map((data, index) => {

                                                        return (
                                                            <div className="col-lg-3 col-md-3 col-sm-6 mt-40" key={index}>

                                                                <div className="single-product-wrap">

                                                                    <div className="product-image">
                                                                        <Link to={`/SingleProduct/${data.itemsId}`}>

                                                                            <img src={data.item_photo_for_menupage} alt=""/>

                                                                        </Link>
                                                                    </div>

                                                                    <div className="product_desc">

                                                                        <div className="product_desc_info">

                                                                            <div className="product-review">

                                                                                <h5 className="manufacturer">

                                                                                    <a href="#">{data.item_name}</a>

                                                                                </h5>

                                                                                <div className="rating-box">

                                                                                    <ul className="rating">

                                                                                        <li>
                                                                                            <i className="fa fa-star-o"></i>
                                                                                        </li>

                                                                                        <li>
                                                                                            <i className="fa fa-star-o"></i>
                                                                                        </li>

                                                                                        <li>
                                                                                            <i className="fa fa-star-o"></i>
                                                                                        </li>

                                                                                        <li className="no-star">
                                                                                            <i className="fa fa-star-o"></i>
                                                                                        </li>

                                                                                        <li className="no-star">
                                                                                            <i className="fa fa-star-o"></i>
                                                                                        </li>

                                                                                    </ul>

                                                                                </div>

                                                                            </div>

                                                                            <h4>
                                                                                <a className="product_name" href="">{data.item_name}</a>
                                                                            </h4>

                                                                            <div className="price-box">

                                                                                <span className="new-price">
                                                                                    <i className="fa fa-inr" aria-hidden="true"></i>{data.item_price}</span>

                                                                            </div>

                                                                        </div>

                                                                        <div className="add-actions">

                                                                            <ul className="add-actions-link">

                                                                                <li className="add-cart active">

                                                                                    {/* <Link onClick={this.handleSubmit}>Add to Cart
                </Link> */}
                                                                                    <Link to={`/SingleProduct/${data.productId}`}>Add to Cart</Link>

                                                                                </li>

                                                                                <li>

                                                                                    <Link onClick={this.wishListSubmit}>
                                                                                        <i className="fa fa-heart-o"></i>
                                                                                    </Link>
                                                                                </li>

                                                                                {/* <li>
                <a
                    href="#"
                    title="quick view"
                    className="quick-view-btn"
                    data-toggle="modal"
                    data-target={"#" + data.productId}>
                    <i className="fa fa-eye"></i>
                </a>
            </li> */}

                                                                            </ul>

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>

                                                        )
        }):<div className="col-sm-8 col-lg-12 boder-cart empty_top">
           
                                                    <h5 className="text_center">No Product Found (in case product is empty)</h5>
                                                    <br/>
                                                    <p className="text_center"><img src="/images/noproduct.png" alt="Shipping Icon" height="160"/></p>
                                                    <br/>
                                                    <p className="text_center">
                                 
                                  <Link to="/" className="btn btn-success continue-btn">Continue Shopping</Link>
                                </p>
                                                    
                                                   
                                                        </div>
}


                                                </div>

                                            </div>

                                        </div>

                                        {/* <div className="paginatoin-area">

                                            <div className="row">

                                                <div className="col-lg-6 col-md-6">

                                                    <p>Showing 1-12 of 13 item(s)</p>

                                                </div>

                                                <div className="col-lg-6 col-md-6">

                                                    <ul className="pagination-box">

                                                        <li>
                                                            <a href="#" className="Previous">
                                                                <i className="fa fa-chevron-left"></i>
                                                                Previous</a>

                                                        </li>

                                                        <li className="active">
                                                            <a href="#">1</a>
                                                        </li>

                                                        <li>
                                                            <a href="#">2</a>
                                                        </li>

                                                        <li>
                                                            <a href="#">3</a>
                                                        </li>

                                                        <li>

                                                            <a href="#" className="Next">
                                                                Next
                                                                <i className="fa fa-chevron-right"></i>
                                                            </a>

                                                        </li>

                                                    </ul>

                                                </div>

                                            </div>

                                        </div> */}

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

export default CategoryListPage;
