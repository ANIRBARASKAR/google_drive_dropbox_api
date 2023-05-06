import React,{useEffect} from 'react'
import useDrivePicker  from "react-google-drive-picker"
export default function GoogleDriveImage() {


const [openPicker, data , authResponse]= useDrivePicker()

const handleOpenPicker = () => {
  openPicker({
    clientId:'',
    developerKey:'',
    viewId:'DOCS',
    showUploadView:true,
    showUploadFolders:true,
    supportDrives : true,
    multiselect : true
  })
}

useEffect(() => {

  if (data) {
    data.docs.map((i) => console.log(i))
  }
 
}, [data])

  return (
    <div>GoogleDriveImage
    
    <br />
    <button className='btn btn-dark' onClick={() => {
      handleOpenPicker()
    }}>open Picker</button>
    
    
    </div>
  )
}
