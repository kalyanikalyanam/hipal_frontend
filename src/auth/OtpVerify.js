import React from "react";
import {Link} from "react-router-dom";


import { Form} from 'reactstrap';
import firebase from '../config';
import SimpleReactValidator from "simple-react-validator";
import axios from "axios";


class OtpVerify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        otp: '',
        password: '',
        error: '',
        employer_sevice_message: "",
        date: new Date().toLocaleString(),
      
      
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
         
      }
  });
   

}


  handleSubmit = (event) => {
    event.preventDefault();
   
        if (this.validator.allValid()) {
            
            
            const formData = new FormData();
            formData.append("mobile", localStorage.getItem("otp_mobile_number"));
            formData.append("otp", this.state.otp);
          
                  
                  
                  const url = 'https://www.idlimachine.com/api/service/verifyOTP';
                  axios(url, {
                      method: 'POST',
                      data: formData,
                      headers: {
                          "Content-type": "application/json; charset=UTF-8"
                      }
                  }).then((res) =>{
                      console.log(res);
                      if (res.status === 200) {
                        if(res.data.status ===1){
                         this.registerSuccess();
                        }else{
                          this.setState({employer_sevice_message: res.data.message});
                        }
                          //this.props.history.push("/Login");
                      }
                        
             
            }).catch(error => {
                this.setState({error});
                console.log(this.state.error);
                this.setState({employer_sevice_message: this.state.error.message});
            });
                  
           
        
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }


  
  };
  registerSuccess= (event) => {
    const formData = new FormData();
            formData.append("mobile", localStorage.getItem("otp_mobile_number"));
            formData.append("message", "Thank you for starting journey with Gootes +"
            +" Do shop to get more discounts. Gootes is +"
            +" Offering best organic product from traditional suppliers +"
            +" Thanks & regards +"
            +" GOOTES TEAM");
    // var mobile = "9640721171";
    // var message = "Thank you for starting journey with Gootes +"
    //         +" Do shop to get more discounts. Gootes is +"
    //         +" Offering best organic product from traditional suppliers +"
    //         +" Thanks & regards +"
    //         +" GOOTES TEAM";
    // var settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": "https://api.msg91.com/api/sendhttp.php?mobiles="+mobile+"&authkey=294809AVKMi1NV5d83007f&route=4&sender=Gootes&message="+message+"&country=91",
    //     "method": "GET",
       
    //   }
    
     const url = 'https://www.idlimachine.com/api/service/sendSMS';
    axios(url, {
      method: 'POST',
      data: formData,
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }}).then((res) =>{
        console.log(res);
        if (res.status === 200) {
           
                
                 this.props.history.push("/");
            
            
        }        // if (res.status === 200) {
        //     this.props.history.push("/Login");
        // }
       
    })
  }
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

render() {
   
    return (
      <div>
      <section className="welcome-area bg-home">


          <div className="breadcrumb-area">

              <div className="container">

                  <div className="breadcrumb-content">

                      <ul>

                          <li>
                              <Link to="/">Home</Link>

                          </li>

                          <li className="active">Otp Verification</li>

                      </ul>

                  </div>

              </div>

          </div>
          </section>
      <section className="hami-price-plan-area mt-50">
        <div className="container">
            <div className="row">
             
                <div className="col-12">
                    <div className="section-heading text-center">
                        <h2>Otp Verification</h2>
                      
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">

               
                
            <div className="col-12 col-md-6 col-lg-5">


            <div className="single-price-plan mb-50">

            <div className="single-widget-area">
                    
                    
           
            <Form
      onSubmit={this.handleSubmit}
        id="login-form"
        className="widget-form"
      >

            <div className="row">
            <input type="text"  
                name="otp"
                value={this.state.otp}
               
         onChange={this.onChange} className="form-control mb-20" placeholder="Enter Otp "/>
          {this.validator.message(
                  "Otp",
                  this.state.otp,
                  "required|numeric|min:6|max:6"
                )}
           
         

            <div className="col-md-12 no-padd mt-20">
            <span className="pull-left">
            <div href="#">
            <button className="register-button mt-0 reg_hvr"
                                                        type="submit"
                                                        data-toggle="modal"
                                                        data-target="#myModal">Submit</button>
                                                        {/* <Link to="/Login"> <button type="button"  className="register-button mt-0 reg_hvr pull-right">Cancel
                                                            </button></Link> */}
                                                        </div>


                                                        
                                                        </span>
            </div>
            {this.state.employer_sevice_message ? (
                              <div className="alert alert-warning" role="alert">
                                {this.state.employer_sevice_message}
                              </div>
                            ) : (
                              ""
                            )}{" "}

            </div>      

            </Form>
                                                
                
                            </div>



            </div>
            </div>




            </div>
        </div>
    </section>
         

        </div>
    );
}
}

export default OtpVerify;
