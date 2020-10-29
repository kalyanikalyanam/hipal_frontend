import React from "react";
import { Link } from "react-router-dom";

import HeaderMenu from '../web/header_menu';
import HipalIcon from '../web/hipal_icon_page';
import {Form} from 'reactstrap';
import firebase from '../config';
import FileUploader from "react-firebase-file-uploader";
import SimpleReactValidator from "simple-react-validator";



export default class SignUpDuplicate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      contact_number: "",
      email_id: "",
      password: "",
      employer_sevice_message: "",
      user_name:'',
      created_on: new Date().toLocaleString(),
      mobile_message:'',
      gender:'',
      age:'',
      signup_date_time:'',
      birthday:'',
      how_did_the_user_hear_about_hipal:'',
      does_the_user_authorize_us_to_spend_promotional_materials:'',
      photo:'',
      address:'',
      validError:false,

      showLoading: false,

      avatar: "",
      isUploading: false,
      progress: 0,
      avatarURL: "",
      filenames: [],
      downloadURLs: "",
      uploadProgress: 0,

  }
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
        }
    }
});

}

componentWillMount(){
    document.getElementById('root').className='h-100'
    
  }
    componentWillUnmount(){
    document.getElementById('root').className=''
   
  }



  handleUploadStart = () => this.setState({isUploading: true, uploadProgress: 0});
  handleFrontImageUploadStart = () => this.setState({isUploading: true, uploadProgress: 0, avatarURL: ''});
  handleProgress = progress => this.setState({uploadProgress: progress});

  handleUploadError = error => {
      this.setState({
          isUploading: false
          // Todo: handle error
      });
      console.error(error);
  };

  handleImageSuccess = (filename) => {

      firebase
          .storage()
          .ref("images")
          .child(filename)
          .getDownloadURL()
          .then(url => this.setState({photo: url}));
  };






handleSubmit = (event) => {
  event.preventDefault();

  if (this.validator.allValid()&&this.state.validError===true) {
    
      var user = null;
     
     

      firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email_id, this.state.password)
          .then((result) => {

              var userId = result.user;
              // user.sendEmailVerification();
              user = firebase
                  .auth()
                  .currentUser;
             
              console.log(user);
              var key=(Math.round((new Date().getTime() / 1000)));
              let dbCon = firebase
                  .database()
                  .ref('users/' + userId.uid);
                dbCon.set({
                    first_name: this.state.first_name, 
                    last_name: this.state.last_name,
                    contact_number: this.state.contact_number,
                    role:"Users",
                    status:"Active",
                    email_id: this.state.email_id, 
                    user_name:this.state.user_name,
                    age:this.state.age,
                    gender:this.state.gender,
                    signup_date_time:this.state.signup_date_time,
                    birthday:this.state.birthday,
                    how_did_the_user_hear_about_hipal:this.state.how_did_the_user_hear_about_hipal,
                    does_the_user_authorize_us_to_spend_promotional_materials:this.state.does_the_user_authorize_us_to_spend_promotional_materials,
                    photo:this.state.photo,
                    address:this.state.address,
                    uniqueid:key,
                    created_on: this.state.created_on});

                    var user = result.user;

                    if (user != null){
                      user.sendEmailVerification();
                    }
 

                    this
                    .props
                    .history
                    
                    .push("/");
            
    

          })
          
          // .then(() => {
          //   return  user.sendEmailVerification();
          // })
          .catch(error => {
              this.setState({error});
              console.log(this.state.error);
              this.setState({employer_sevice_message: this.state.error.message});
          });
     
      
  
} else {
  this
      .validator
      .showMessages();
  this.forceUpdate();
}
 

};



onChange = (event) => {
  this.setState({
      [event.target.name]: event.target.value
  });
};




phoneNumberChange  = (e) => {
  this.setState({
      contact_number: e.target.value
  });
  if(e.target.value.length==10 && this.state.validError!=true){
     
      
      var ref = firebase
      .database()
      .ref('users/').orderByChild("contact_number").equalTo(e.target.value);
      ref.on('value', snapshot => {
          var  user_exist = snapshot.numChildren();
          console.log(user_exist);
     
      if(user_exist>0 && this.state.validError!=true){
         
         
          this.setState({mobile_message: "Mobile number already exist",validError:false});
      }
      else if((this.state.contact_number=="1234567890" || this.state.contact_number=="9876543210")&& this.state.validError!=true){
         
         
        this.setState({mobile_message: "Mobile number is invalid",validError:false});
        
    }
      else
      {
          this.setState({mobile_message: "",validError:true});
         
      }
     
  })
}
 
};
  

  render() {
    
    const divStyle = {
      'height': '300px'
  };

    return (


      
<div className="body-back h-100">
	
    <div className="masthead pdng-stn1 h-100">
        <HipalIcon/>
    
     
        
        <div className="phone-box wrap push h-100" id="home">
        <HeaderMenu/>
        
          
<div className="body-container h-100 in_pa">

<div className="food-ord-blk">

 <div className="approw mt-2">
<div className="col-lg-12 p-0 ful-row">
<div className="deliver-home">
{/* <a href="/MyAddress"><img src="images/back_o.svg" className="b_arrow"/></a> */}
Hipal- Sign Up
</div>
</div>
</div> 

<Form onSubmit={this.handleSubmit} >

<div className="approw pt-0">
<div className="col-lg-12 p-0 ful-row food-ord items-row_blk">


{/* <div className="addnew-add">
<img src="images/view_m-ico.svg"/> View on map
</div> */}

<div className="fields_block pt-0 pb-0">



<div className="field-row">
<div className="col-md-6">
<input type="email" placeholder="Email Address*" name="email_id"
                                                        value={this.state.email_id}
                                                        onChange={this.onChange}/>
<span style={{color:"red"}}>
{this
                                                        .validator
                                                        .message("Email", this.state.email_id, "required|email|min:6|max:70")}
                                                        {this.state.employer_sevice_message}
  </span> 
  </div>
  <div className="col-md-6">
  <input  type="text" placeholder="First Name*" name="first_name"
value={this.state.first_name}
onChange={this.onChange}/>
<span style={{color:"red"}}>
{this.validator.message("First Name", this.state.first_name, "required|specialCharText|whitespace|min:2|max:70")}
  </span>
      </div>
</div>


      <div className="field-row">
      <div className="col-md-6">
      <input  type="text" placeholder="Last Name*" name="last_name"
                                                        value={this.state.last_name}
                                                        onChange={this.onChange}/>
<span style={{color:"red"}}>
{this.validator.message("Last Name", this.state.last_name, "required|specialCharText|whitespace|min:2|max:70")}
  </span> 
      </div>

      <div className="col-md-6">
<input  type="number" placeholder="Phone Number*" name="contact_number"
                                                        onChange={this.phoneNumberChange}
                                                        value={this.state.contact_number}/>
<span style={{color:"red"}}>
{this
                                                        .validator
                                                        .message("Contact Number", this.state.contact_number, "required|phone|min:10|max:10")}
{this.state.mobile_message}
  </span> 
    </div>
</div>






    <div className="field-row">
    <div className="col-md-6">
  <input  type="text" placeholder="UserName*" name="user_name"
value={this.state.user_name}
onChange={this.onChange}/>
<span style={{color:"red"}}>
{this.validator.message("UserName", this.state.user_name, "required|specialCharText|whitespace|min:2|max:70")}
  </span>
      </div>



      <div className="col-md-6">
      <input type="password" placeholder="Password*" name="password"  id="password_input"
                                                        value={this.state.password}
                                                        onChange={this.onChange}/>
<span style={{color:"red"}}>
{this
                                                        .validator
                                                        .message("Password", this.state.password, "required|passwordvalid|min:6|max:30")}
  </span>
  </div>
</div>





<div className="field-row">
<div className="col-md-6">
<input type="number" placeholder="Age*" name="age"
                                                        value={this.state.age}
                                                        onChange={this.onChange}/>
<span style={{color:"red"}}>
{this
                                                        .validator
                                                        .message("Age", this.state.age, "required|number")}
                                                     
  </span> 
  </div>

  <div className="col-md-6">
<input type="text" placeholder="How did the user hear about the hipal*" name="how_did_the_user_hear_about_hipal"
                                                        value={this.state.how_did_the_user_hear_about_hipal}
                                                        onChange={this.onChange}/>
<span style={{color:"red"}}>
{this
                                                        .validator
                                                        .message("How did the user hear about the hipal", this.state.how_did_the_user_hear_about_hipal, "required|specialCharText|whitespace|min:2|max:70")}
                                                     
  </span> 
  </div>


  
</div>




<div className="field-row">
<div className="col-md-6">
  <div className="col-md-8">
<span>Gender</span>
</div>
<div className="col-md-4">
  <label>
                                                                    <input
                                                                        type="radio"
                                                                        name="gender"
                                                                        value="Male"
                                                                        onChange={this.onChange}
                                                                        checked={this.state.gender === "Male"}
                                                                       />
                                                                    Male &nbsp;&nbsp;</label>
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        name="gender"
                                                                        value="Female"
                                                                        onChange={this.onChange}
                                                                        checked={this.state.gender === "Female"}
                                                                       />
                                                                    Female &nbsp;&nbsp;</label>
                                                                    </div>
                                                                    <span style={{color:"red"}}>
{this.validator.message("gender", this.state.gender, "required")}
  </span>
    

      </div>

  <div className="col-md-6">
  <div className="col-md-8">
<span>Does the User Authorize us to Spend Promotional Materials</span>
</div>
<div className="col-md-4">
  <label>
                                                                    <input
                                                                        type="radio"
                                                                        name="does_the_user_authorize_us_to_spend_promotional_materials"
                                                                        value="Yes"
                                                                        onChange={this.onChange}
                                                                        checked={this.state.does_the_user_authorize_us_to_spend_promotional_materials === "Yes"}
                                                                       />
                                                                    Yes &nbsp;&nbsp;</label>
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        name="does_the_user_authorize_us_to_spend_promotional_materials"
                                                                        value="No"
                                                                        onChange={this.onChange}
                                                                        checked={this.state.does_the_user_authorize_us_to_spend_promotional_materials === "No"}
                                                                       />
                                                                    No &nbsp;&nbsp;</label>
                                                                    </div>
                                                                    <span style={{color:"red"}}>
{this
                                                        .validator
                                                        .message("Does the User Authorize us to Spend Promotional Materials< ", this.state.does_the_user_authorize_us_to_spend_promotional_materials, "required")}
                                                     
  </span> 
 
      </div>
</div>


<div className="field-row">
<div className="col-md-6">
<div className="col-md-6">
<span> Sign Up Date and Time</span>
</div>
<div className="col-md-6">
<input placeholder="Date SignUp"
                                                        type="datetime-local"
                                                        name="signup_date_time"
                                                        onChange={this.onChange}
                                                        value={this.state.signup_date_time}
                                                       /> 

<span style={{color:"red"}}>
{this
                                                        .validator
                                                        .message("signup date time", this.state.signup_date_time, "required")}
                                                     
  </span> 
  </div>
  </div>
  <div className="col-md-6">
  <div className="col-md-6">
<span> Birthday/Anniversary</span>
</div>
<div className="col-md-6">
  <input placeholder="birthday"
                                                        type="date"
                                                        name="birthday"
                                                        onChange={this.onChange}
                                                        value={this.state.birthday}/> 
<span style={{color:"red"}}>
{this.validator.message("birthday", this.state.birthday, "required")}
  </span>
  </div>
      </div>
</div>
<div className="field-row">
<div className="col-md-6">
<div className="col-md-6">
<span> Image</span>
</div>
<div className="col-md-6">
{this.state.photo && <img src={this.state.photo} style={divStyle}/>}
                                                 <FileUploader
                                                accept="image/*"
                                                name="photo"
                                                randomizeFilename
                                                storageRef={firebase
                                                .storage()
                                                .ref("images")}
                                                onUploadStart={this.handleFrontImageUploadStart}
                                                onUploadError={this.handleUploadError}
                                                onUploadSuccess={this.handleImageSuccess}
                                                onProgress={this.handleProgress}/>
                                                 {/* {this
                                                .validator
                                                .message("image", this.state.photo, "required")} */}
  </div>
  </div>

  <div className="col-md-6">
  <div className="col-md-6">
<span> Adddress</span>
</div>
<div className="col-md-6">
  <textarea placeholder="addresss"
                                                        type="text"
                                                        name="address"
                                                        onChange={this.onChange}
                                                        value={this.state.address}/> 
<span style={{color:"red"}}>
{this.validator.message("Address", this.state.address, "required")}
  </span>
  </div>
      </div>
 
</div>

</div>


</div>
</div>





<div className="approw p-0  bg-g4">
<div className="col-lg-12 checkout-box pt-0">
<div className="checkout-btn mt-0" >
   <span>
<button className="btn"  type="submit"  >Sign Up
</button>
</span>
</div>
</div>
</div>

</Form>

</div>


</div>
</div>
</div>
</div>
    
    );
  }
}


