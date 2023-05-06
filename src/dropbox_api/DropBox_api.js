import React from 'react'
import Dropbox from 'dropbox';
const dbx = new Dropbox({ accessToken: 'sl.BdWAOTy2wTN-zeTmOAwLenACAZy2m8KQ2mI67QBzLTgtb9ZEGr842otg7CyKC5UB-p-Rdbgq6yKyWPFvT9NJ0Y4wLAvwENLqoGj_h9ih5ii95kD4IkmtoJhQQtfJAu_OdiVzclQ' });
export default function DropBox_api() {

//     dbx.filesListFolder({ path: '/images' })
//   .then(response => {
//     console.log(response.entries);
//   })
//   .catch(error => {
//     console.error(error);
//   });

console.log("dbx",dbx);
  return (
    <div>DropBox_api</div>
  ) 
}
