import React,{useState} from 'react'
import DropboxChooser from 'react-dropbox-chooser'
export default function DropboxImages() {

    const APP_KEY= 'teiman0ekvkc4o8'
    const accessToken = 'sl.BdnYVKkiVzBvONMR6XIQKtPSqok_dwsnJbqR2ic9XZeW4YXvebrD_IrtySPh-YLWR0QiW3LAGbCeJzy1tIGE0V38T4ftCdz2fNz0cXhHb2VMLFJ3e7ZEpUt_cPfLBbDvFbf0GOgQ-84'

    const [myFile, setmyFile] = useState('')

    const handleSuccess = (files) => {
        console.log("files",files);
        setmyFile(files[0].thumbnailLink)
    }
  return (

    <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-3">

         <div className='mt-5'>DropboxImages
         <br /><br /><br /><br /><br /> 
          <DropboxChooser  appKey={APP_KEY}
            success={handleSuccess}
            cancel={() => console.log("Closed")}
            multiselect={true}
            token={accessToken}
            >
          </DropboxChooser>

          <br /><br />
          <hr />
          <img src={myFile} alt="IMG"  className='img-fluid'/>

</div>
            </div>
        </div>
    </div>
  )
}
