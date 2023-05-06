import React, { useState, useEffect } from "react";
import axios from "axios"
const Dropbox = () => {
  const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch("https://api.dropboxapi.com/2/files/list_folder", {
//         method: "POST",
//         headers: {
//           "Authorization": "sl.BX7DjfZKuZlrPELqH6pVJkFOguxFLixq3fRDlH4yiwQQepR4sLjQ2A-sSlhsKn7XzJd9zssrRnWiE35fBGra9rLlILdYUEw_RrKDztg-aiJSKdG9da34mbQHGMYDHBOV6yl0Nx4",
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ path: "" })
//       });
//       const data = await res.json();
//       const images = data.entries
//         .filter(entry => entry[".tag"] === "file")
//         .filter(entry => entry.name.match(/\.(jpeg|jpg|png|gif)$/i))
//         .map(entry => entry.name);
//       setImages(images);
//     };
//     fetchData();
//   }, []);
const  client_id ="teiman0ekvkc4o8"
const test = async () => {
     const data = await axios.get(`https://www.dropbox.com/oauth2/authorize?client_id=${client_id}&response_type=code`)
     console.log(data,"data");
}
test()

  return (
    <div>
      <h1>Images from Dropbox</h1>
      <ul>
        {/* {images.map((image, index) => (
          <li key={index}>{image}</li>
        ))} */}
        hello
      </ul>
    </div>
  );
};

export default Dropbox;
