import React,{useState} from 'react'

export default function SvgToPngConverter() {

    const [newBase64, setnewBase64] = useState('')

const uploadImg = async (e)  => {
// alert("Anir")

    const file = e.target.files[0]

    const base64 = await convertBase64(file)
    // console.log("file",file);
    // console.log("base64",base64);
    setnewBase64(base64)
}
    

const convertBase64 = (file) => {
// debugger
    return new Promise((resolve, reject) => {

        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)



        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error)

            // console.log('error',error);
        }
    })
}

  return (
    <div>

    SvgToPngConverter

    <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-3">
                <input type="file" onChange={e => uploadImg(e)} />

<br /><br />

<img src={newBase64} alt="IMG" className='img-fluid' height={300} width={400}/>
       
</div>
</div>
</div>

    </div>
  )
}
