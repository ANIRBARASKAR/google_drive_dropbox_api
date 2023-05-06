import React from 'react'

import FacebookLogin from 'react-facebook-login';
export default function FaceBook() {

    const appId = 698194938728020


    function responseFacebook(response) {
        console.log(response);
      }

    //   2

    // function responseFacebook(response) {
    //     const imageUrl = response.picture.data.url;
    //     console.log(imageUrl);
    //   }

  return (
    <div>FaceBook
    
    <FacebookLogin
  appId={appId}
  fields="id,name,picture"
  callback={responseFacebook}
/>
    
    
    </div>
  )
}
