

import React,{useRef,useState} from 'react'
import { fabric } from 'fabric';
export default function ImageExtentionConverter() {

    const [file, setfile] = useState('')

    console.log("file",file);  

    const canvasRef = useRef()
    canvasRef.current = new fabric.Canvas('canvas');
   
    var base65;
  
    // 
    // fabric.Image.fromURL('https://images.unsplash.com/photo-1682965637063-ee8066428da8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', (img) => {
    fabric.Image.fromURL(file, (img) => {
        img.scaleToWidth(canvasRef.current.width);
        img.scaleToHeight(canvasRef.current.height);
        canvasRef.current.add(img);
        canvasRef.current.renderAll()
        base65 = canvasRef.current.toDataURL("image/png")
});
    //   console.log("canvasRef",canvasRef);

    // create  a png image using toDataURL method  

    // const base64 = canvasRef.current.toDataURL("image/png")
    console.log("base64",base65);

    // 
   
       
  
  return (
    <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-3">

            <div>
            <input type="file" onChange={e => setfile(URL.createObjectURL(e.target.files[0]))} />
    
    
    <div>

    <br />

     <canvas ref={canvasRef} id='canvas' width={600} height={400} style={{border:'2px solid red'}} />
           {/* <button onClick={addImageToCanvas}>Add Image</button>
           <button onClick={generatePng}>Generate PNG</button> */}
           <br /><br />
     
           <img src={file} alt="IMG" className='img-fluid' accept="application/pdf"/>
           
           <object data={file} width="600" height="500"> pdf file</object>
         </div>
   </div>  
   <div style={{height:'500px'}}></div>
            </div>
        </div>

        
        
        
    </div>
  )
}
