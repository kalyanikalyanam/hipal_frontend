import React, { useState } from "react";
import firebase from '../config';
import QRScanner from "qr-code-scanner";
const Scan2 = props => {
  const [code, setCode] = useState("");



  
  const initialFormState = { id: null, name: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };
  QRScanner.initiate({
    onResult: result => {
      setCode(decodeURI(result));
    },
    timeout: 20000
  });


  return (
    // <form
    //   onSubmit={event => {
    //     event.preventDefault();
    //     if (!user.name || !user.username) return;

    //     props.addUser(user);
    //     setUser(initialFormState);
    //   }}
    // >
    //   <label>Name</label>
    //   <input
    //     type="text"
    //     name="name"
    //     value={user.name}
    //     onChange={handleInputChange}
    //   />
    //   <label>Username</label>
    //   <input
    //     type="text"
    //     name="username"
    //     value={user.username}
    //     onChange={handleInputChange}
    //   />
    //   <button>Add new user</button>
    // </form>
  <>
  
    <div className="approw scan_show">
    <span>
 
  
    
  {code ? (
          <>
           
            <p>
              Your Table Number is:{" "}
              <strong>
                {code.split("/").pop()}
              </strong>
            </p>


          
          
          </>
        ) : (
         
       ''
        )}
        
        <form
      onSubmit={event => {
            event.preventDefault();
            if (!user.name ) return;
    
            props.addUser(user);
            setUser(initialFormState);
          }}
      >


<input
        type="text"
        name="name"
        value={code}
      
      />
      <span className="btn"> <input type="submit" value="Next" /></span>

    </form>
    </span>
    </div>
     <div className="approw scan_box checkout-btn mt-0">
 
    </div>
    
    </>
  );
};

export default Scan2;
