import React, { useState } from 'react';
import DropboxChooser from 'react-dropbox-chooser';

const DropBox_WithAuth = () => {
  const [dropboxToken, setDropboxToken] = useState(null);
  const handleDropboxChoose = (files) => {
    console.log(files[0].link);
  };
  return (
    <div>
      {dropboxToken ?
        <DropboxChooser
          appKey={'teiman0ekvkc4o8'}
          success={handleDropboxChoose}
          multiselect={true}
          linkType={'direct'}
          token={dropboxToken}
        >
          <button>Select files from Dropbox</button>
        </DropboxChooser> :
        <button onClick={() => {
          window.location.href = 'https://www.dropbox.com/oauth2/authorize?client_id=YOUR_APP_KEY&response_type=token';
        }}>Authorize with Dropbox</button>
      }
    </div>
  );
};

export default DropBox_WithAuth;