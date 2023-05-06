const {google} = require('googleapis')
const path = require('path')
const fs =  require('fs')

const CLIEN_ID = '784417599626-ran361llgo5o7dc76sd8d6r87m3fjv2a.apps.googleusercontent.com'
const CLIENT_SECRET_ID = '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'
const RedirectURI = "https://developers.google.com/oauthplayground"
const RefreshToken = '1//04m7pU8aMLw6nCgYIARAAGAQSNwF-L9IrTed2sDb78ve5Q4ifK6dRq0ofH9afjt_n2QDzLq_IKpPCXIu5UaB8zECVslK9MEk0GMM'

const Oauth2Client = new google.auth.OAuth2(
    CLIEN_ID ,
    CLIENT_SECRET_ID,
    RedirectURI
)

Oauth2Client.setCredentials({refresh_token:RefreshToken,})

const drive  = google.drive({
    version:"v3",
    auth:Oauth2Client
})

// file path

const filePath = path.join(__dirname , 'shri_ram.jpeg')

// upload File

async function uploadFile (){

    try {
        
        const response = await drive.files.create({
            requestBody:{
                name:"ShriRam image.jpeg",
                mimeType:"image/jpeg"
            },
            media : {
                mimeType :"image/jpeg",
                body : fs.createReadStream(filePath)
            }
        })
        console.log(response.data);
    } catch (error) {
        console.log("error",error);
    }
}
uploadFile()