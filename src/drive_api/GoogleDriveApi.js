import { useEffect,useState } from "react";
import useDrivePicker from "react-google-drive-picker";

function GoogleDriveApi() {

  const [imgData, setimgData] = useState('')
  const [openPicker, data, authResponse] = useDrivePicker();
  // const customViewsArray = [new google.picker.DocsView()]; // custom view
  const handleOpenPicker = () => {
    openPicker({
      // clientId: "784417599626-ran361llgo5o7dc76sd8d6r87m3fjv2a.apps.googleusercontent.com",
      clientId:
        "784417599626-rl78vj9irscgji8tcsb2u6mh4em3e7c9.apps.googleusercontent.com",
      // developerKey: "AIzaSyDyN_dSZBnBjbdOKlFh6Z3wqElAvNkoSlo",
      // developerKey: "AIzaSyADBbCDwEePyvTKo9OTchkerkGJg5s5p7g",
      developerKey:
      //  "AIzaSyDJwDWzcdA2x7IdbUrNlSidRvUgtFg-tUs",
      "AIzaSyCvk1s2U4OJc4BkyFhahY8n4WO8WJimZE8",
      viewId:
       "DOCS",  
      // token: token, // pass oauth token in case you already have one
      // token:
      //     "ya29.a0Ael9sCNkH_1L8cz57mGQgQmDnwrWexRxytBgFKZ0Vle8KXRuTsoW0Q0b2ZUlmWcbQBLHY1zvG_wUSrokEWE95f49rVETKG_CUGVPA0egpGpMnk0iq0pb9gN0rrdZTuokWWCwjs0jzkiI66CSNKOag_NYJF5waCgYKAYcSARESFQF4udJhJ0LcKDOjVHKmL9r-B6RYQA0163",

      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,    
      multiselect: true, 
      showDeleteView:true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === "cancel") {     
          console.log("User clicked cancel/close button");
        }
        console.log("data", data);
        console.log("selected file's URL", data.docs[0].url);
        // setimgData(data.docs[0].url)
      },  
    });
  };

  useEffect(() => {
    if (data) {
      // data.map((i) => console.log("i", i));
      console.log("Anir");
    }
  }, [data]);

    
  useEffect(() => {
    console.log("imgData",imgData);
    
  
  }, [imgData])
  

  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3 mt-5">

      <button className="btn btn-dark" onClick={() => handleOpenPicker()}>Google Drive</button>

      <br /><br /><br />
          <img src={imgData} alt="IMG" className="img-fluid" crossOrigin="anonymous"/>
      
        </div>
      </div>
    </div>
    </div>
  );
}

export default GoogleDriveApi;
