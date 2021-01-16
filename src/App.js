import axios from 'axios';
import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import './App.css';

function App() {
  const componentClicked = () => console.log("Clicked")
  const responseFacebook = (response) => {
    console.log("Facebook", response);
  }
  const responseGoogle = (response) => {
    console.log(response);
    axios.post("http://localhost:4000/api/v1/users/gAuth", {tokenId: response.tokenObj.id_token}).then(respo => console.log(respo))
  }
  return (
    <div className="App">
      
    <GoogleLogin
    clientId="533205270663-9lk46kvu7i796d0tk5ris955trt4eie0.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  <FacebookLogin
    appId="473320520736504"
    autoLoad={false}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />
    </div>
  );
}

export default App;
