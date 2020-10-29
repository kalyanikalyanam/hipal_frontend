import React from 'react';
import SimpleReactValidator from "simple-react-validator";
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Autocomplete from 'react-google-autocomplete';
import Geocode from "react-geocode";
import firebase from '../config';
import {connect} from 'react-redux';


Geocode.setApiKey("AIzaSyC26N6wnyvXNmGR4jsSnnVx8GS7COgCM4E");
Geocode.enableDebug();



class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            
            locality: '',
            land_mark: '',
            full_address: '',
            city:'',
            country:'',
            state:'',
          
            mapPosition: {

                lat: this.props.center.lat,
                lng: this.props.center.lng
               },
               markerPosition: {
                lat: this.props.center.lat,
                lng: this.props.center.lng
            },
           
        };
        this.validator = new SimpleReactValidator({
            className: "text-danger",
            validators: {
                
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

    handleChange = (event) => {
        // console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (this.validator.allValid()) {

      
    //         const data ={
           

           
    //         locality: this.state.locality,
    //         landMark: this.state.land_mark,
    //         fullAddress: this.state.full_address,
    //        };
    //        this.props.dispatch({
    //         type:'ADD_POST',
    //         data
    //       });
    //     } else {
    //         this
    //             .validator
    //             .showMessages();
    //         this.forceUpdate();
    //     }

    // };
   
    componentDidMount() {
        Geocode.fromLatLng( this.state.mapPosition.lat , this.state.mapPosition.lng ).then(
         response => {
          const full_address = response.results[0].formatted_address,
           addressArray =  response.results[0].address_components,
           city = this.getCity( addressArray ),
           land_mark = this.getLand_mark( addressArray ),
           locality = this.getLocality( addressArray ),
           country = this.getCountry( addressArray ),
          state = this.getState( addressArray );
          this.setState( {
            full_address: ( full_address ) ? full_address : '',
            city: ( city ) ? city : '',
            land_mark: ( land_mark ) ? land_mark : '',
            locality: ( locality ) ? locality : '',
           country: ( country ) ? country : '',
            state: ( state ) ? state : '',
           
          } )
          //this.props.onFormChange(this.state.full_address);
         },
         error => {
          console.error(error);
         }
        );
       };
      
       getCity = ( addressArray ) => {
        let city = '';
        for( let i = 0; i < addressArray.length; i++ ) {
           
         if ( addressArray[ i ].types[0] && 'administrative_area_level_2' === addressArray[ i ].types[0] ) {
          city = addressArray[ i ].long_name;
          return city;
         }
        }
       };
       getState = ( addressArray ) => {
        let state = '';
        for( let i = 0; i < addressArray.length; i++ ) {
         for( let i = 0; i < addressArray.length; i++ ) {
          if ( addressArray[ i ].types[0] && 'administrative_area_level_1' === addressArray[ i ].types[0] ) {
           state = addressArray[ i ].long_name;
           return state;
          }
         }
        }
       };
       getCountry = ( addressArray ) => {
          // console.log(addressArray);
        let country = '';
        
         for( let i = 0; i < addressArray.length; i++ ) {
           
          if ( addressArray[ i ].types[0] && 'country' === addressArray[ i ].types[0] ) {
            country = addressArray[ i ].long_name;
           return country;
          
         }
        }
       };
       shouldComponentUpdate( nextProps, nextState ){
        if (
         this.state.markerPosition.lat !== this.props.center.lat ||
         this.state.full_address !== nextState.full_address ||
      //   this.state.city !== nextState.city ||
         this.state.land_mark !== nextState.land_mark ||
         this.state.locality !== nextState.locality 
         //this.state.state !== nextState.state ||
        // this.state.country !== nextState.country

        
        ) {
         return true
        } else if ( this.props.center.lat === nextProps.center.lat ){
         return false
        }
       }
      
      

       getFull_address = ( addressArray ) => {
        let full_address = '';
        for( let i = 0; i < addressArray.length; i++ ) {
         if ( addressArray[ i ].types[0]  ) {
          for ( let j = 0; j < addressArray[ i ].types.length; j++ ) {
           if ( 'sublocality_level_1' === addressArray[ i ].types[j] || 'locality' === addressArray[ i ].types[j] ) {
            full_address = addressArray[ i ].long_name;
            return full_address;
           }
          }
         }
        }
       };
     
       getLand_mark = ( addressArray ) => {
        let land_mark = '';
        for( let i = 0; i < addressArray.length; i++ ) {
         if ( addressArray[ i ].types[0]  ) {
          for ( let j = 0; j < addressArray[ i ].types.length; j++ ) {
           if ( 'sublocality_level_1' === addressArray[ i ].types[j] || 'locality' === addressArray[ i ].types[j] ) {
            land_mark = addressArray[ i ].long_name;
            return land_mark;
           }
          }
         }
        }
       };

      

       getLocality= ( addressArray ) => {
        let locality = '';
        for( let i = 0; i < addressArray.length; i++ ) {
         for( let i = 0; i < addressArray.length; i++ ) {
          if ( addressArray[ i ].types[0] && 'administrative_area_level_1' === addressArray[ i ].types[0] ) {
            locality = addressArray[ i ].long_name;
           return locality;
          }
         }
        }
       };


       onPlaceSelected = ( place ) => {
        const full_address = place.formatted_address,
           addressArray =  place.address_components,
          city = this.getCity( addressArray ),
           land_mark = this.getLand_mark( addressArray ),
           locality = this.getLocality( addressArray ),
           country = this.getCountry( addressArray ),
           state = this.getState( addressArray ),
           latValue = place.geometry.location.lat(),
           lngValue = place.geometry.location.lng();
        // Set these values in the state.
          this.setState({
            full_address: ( full_address ) ? full_address : '',
             city: ( city ) ? city : '',
             land_mark: ( land_mark ) ? land_mark : '',
             locality: ( locality ) ? locality : '',
             country: ( country ) ? country : '',
           state: ( state ) ? state : '',
           markerPosition: {
            lat: latValue,
            lng: lngValue
           },
           mapPosition: {
            lat: latValue,
            lng: lngValue
           },
          })
          const data ={
           

           
            locality: this.state.locality,
            land_mark: this.state.land_mark,
            full_address: this.state.full_address,
            longitude:this.state.mapPosition.lng,
            latitude:this.state.mapPosition.lat,
           };
           this.props.dispatch({
            type:'ADD_POST',
            data
          });
        //   console.log(this.state.mapPosition.lat);
        //   console.log(this.state.mapPosition.lng);
         };
        
         onMarkerDragEnd = ( event ) => {
            console.log( 'event', event );
            let newLat = event.latLng.lat(),
             newLng = event.latLng.lng(),
             addressArray = [];
             console.log(newLat);
             console.log(newLng);

          Geocode.fromLatLng( newLat , newLng ).then(
             response => {
                const full_address = response.results[0].formatted_address,
                addressArray =  response.results[0].address_components,
                city = this.getCity( addressArray ),
                land_mark = this.getLand_mark( addressArray ),
                locality = this.getLocality( addressArray ),
                country = this.getCountry( addressArray ),
                state = this.getState( addressArray );
          this.setState( {
            full_address: ( full_address ) ? full_address : '',
            city: ( city ) ? city : '',
            land_mark: ( land_mark ) ? land_mark : '',
            locality: ( locality ) ? locality : '',
            country: ( country ) ? country : '',
            state: ( state ) ? state : '',
            markerPosition: {
                lat: newLat,
                lng: newLng
               },
               mapPosition: {
                lat: newLat,
                lng: newLng
               },
              })
              const data ={
                locality: this.state.locality,
                land_mark: this.state.land_mark,
                full_address: this.state.full_address,
                longitude:this.state.mapPosition.lng,
                latitude:this.state.mapPosition.lat,
               };
               this.props.dispatch({
                type:'ADD_POST',
                data
              });
              //this.props.onFormChange(full_address,this.state.full_address);
             },
             error => {
              console.error(error);
             }
            );
           };
          


         
    
  
   
  
    render(){
        const AsyncMap = withScriptjs(
           withGoogleMap(
            props => (
             <GoogleMap google={this.props.google}
              defaultZoom={this.props.zoom}
              defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
             >
              {/* For Auto complete Search Box */}
              <Autocomplete
               style={{
                width: '100%',
                height: '40px',
                paddingLeft: '16px',
                marginTop: '2px',
                marginBottom: '100px'
               }}
               onPlaceSelected={ this.onPlaceSelected }
               types={['(regions)']}
              />
        {/*Marker*/}
              <Marker google={this.props.google}
               name={'Dolores park'}
                  draggable={true}
                  onDragEnd={ this.onMarkerDragEnd }
                     position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
              />
              <Marker />
        {/* InfoWindow on top of marker */}
              <InfoWindow
               onClose={this.onInfoWindowClose}
               position={{ lat: ( this.state.markerPosition.lat + 0.0018 ), lng: this.state.markerPosition.lng }}
              >
               <div>
                <span style={{ padding: 0, margin: 0 }}>{ this.state.full_address }</span><br></br>
                Latitude Value :<span style={{ padding: 0, margin: 0 }}>{ this.state.markerPosition.lat }</span> <br></br>
                Longitude Value :<span style={{ padding: 0, margin: 0 }}>{ this.state.markerPosition.lng }</span> 
                City :<span style={{ padding: 0, margin: 0 }}>{ this.state.city }</span> 
                State :<span style={{ padding: 0, margin: 0 }}>{ this.state.state }</span> 
                country :<span style={{ padding: 0, margin: 0 }}>{ this.state.country }</span> 
               </div>
              </InfoWindow>
        </GoogleMap>
        )
           )
          );
        let map;
          if( this.props.center.lat !== undefined ) {
           map = <div className="row" >
         
        
        

                                                       

                                                       
                                                        <div className="col-12 col-lg-8">
                                                            {/* <label>Google Map :</label> */}
                                                            <AsyncMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC26N6wnyvXNmGR4jsSnnVx8GS7COgCM4E&libraries=places"
      loadingElement={
       <div style={{ height: "100%" }} />
      }
      containerElement={
       <div style={{ height: this.props.height }} />
      }
      mapElement={
       <div style={{ height: "80%"}} />
      }
     />
         </div>
        

       

                                          
           
          </div>
      
        } else {
           map = <div style={{height: this.props.height}} />
          }
          return( map )
         }
        }
        
  
// export default Map;
export default connect() (Map);