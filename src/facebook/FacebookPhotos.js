import React, { useEffect, useState } from "react";

function FacebookPhotos({ userId }) {
  const [photos, setPhotos] = useState([]);

  const appid =1683350455497968
  const appsecret = "f9be009d7586f56109f0177788b0b99e"

  var userAccessToken = "EAAX6ZC5HutPABAPAcm5XmLXU1BtuhsCr5gbiVuyusOleJi24gyNMqzBja4ZANC879TccLuG9fWTJGSZAhZCsHvWQqjvPU7QETd1ZBWCM98zsJCZBhW605ScvrpXZCvgSS1ZAnbxqj4MsdzqmZCrqdGbSfFKbYD3ZAMmxBJU3BZBrAxhSsKaQeZBuyhih82yEhX0LQZBaHkD8UbAcZBKrVgkXoTVhX4lAkZCFwmCzW4Uxx2gGKlWRu2YEfnt6Uli"

  useEffect(() => {
    async function fetchPhotos() {

      // `https://graph.facebook.com/oauth/access_token?client_id={app-id}&client_secret={app-secret}&grant_type=client_credentials`

      // 
      //  `https://graph.facebook.com/${user-id}/photos?fields=images&access_token=${accessToken.access_token}`
      
      const accessTokenResponse = await fetch( 
         `https://graph.facebook.com/oauth/access_token?client_id=${appid}&client_secret=${appsecret}&grant_type=client_credentials`
      );

      console.log("accessTokenResponse",accessTokenResponse);

      const accessToken = await accessTokenResponse.json();

      console.log("accessToken",accessToken);

      const response = await fetch(
        `https://graph.facebook.com/${100088870212391}/photos?fields=images&access_token=${userAccessToken}`
      );

      console.log("response",response);

      const data = await response.json();

      console.log("data",data);
      // setPhotos(data.data);
    }
    fetchPhotos();
  }, [userId]);

  return (
    <div>
    FacebookPhotos
      {/* {photos.map((photo) => (
        <img key={photo.id} src={photo.images[0].source} alt="Facebook Photo" />
      ))} */}
    </div>
  );
}

export default FacebookPhotos;