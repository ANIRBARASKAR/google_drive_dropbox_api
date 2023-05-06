import React, { useState, useEffect , useRef} from "react";
import { fabric } from "fabric";
export default function TransperentCanvas() {

    const canvas1 = useRef()
    const canvas2 = useRef()
    const canvas3 = useRef()
    const canvas4 = useRef()
  // create two canvas elements
   canvas1.current = new fabric.Canvas("canvas1");
   canvas2.current = new fabric.Canvas("canvas2");
   canvas3.current = new fabric.Canvas("canvas3");
   canvas4.current = new fabric.Canvas("canvas4");

  //               

// useEffect(() => {
  
  var anirActiveCanvas = null;     
  var anirActiveObject = null;

  // load the image into the first canvas
  fabric.Image.fromURL(
    "https://images.unsplash.com/photo-1681433803589-cb603ab7a96b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=60",
    function (img) {
      canvas4.current.add(img);  
    }
  );  

  // Add a rectangle, an image and a circle to the first canvas
  var rect = new fabric.Rect({
    left: 200,
    top: 100,  
    width: 50,  
    height: 50,
    fill: "red",
  });  
  canvas4.current.add(rect);

  var circle = new fabric.Circle({
    left: 300,
    top: 300,
    radius: 25,
    fill: "green",    
  });
  canvas4.current.add(circle);  
  //  
    
                  
  canvas4.current.on("object:modified" ,function () {
    // test()  
})     

     
  
// }, []); 
var base64;
              
const test = () => {
    // base64 = canvas4.current.toDataURL()
      
    console.log("base64",base64, canvas4.current.toDataURL());       
}
test()       
      
    
    
canvas1.current.renderAll();  
canvas2.current.renderAll();                
canvas3.current.renderAll();           
// canvas4.current.renderAll();            
  return (
    <div className="container" style={{position:'relative'}}>
      TransperentCanvas <br />

      <strong> activeCanvas :</strong>       
      <br />
      <div className="d-flex " style={{position:'relative'}}>
        
          <canvas  
            id="canvas1"
            ref={canvas1}
            height={400}
            width={400}
            style={{ border: "4px solid red" }}
          ></canvas>
       
          <canvas
            id="canvas2"
            height={400}
            width={400}
            style={{ border: "4px solid green" }}
          ></canvas>
        
          <canvas     
            id="canvas3"
            height={400}
            width={400}
            style={{ border: "4px solid black" }}
          ></canvas>  
            
                   
         
      </div>

      <div             style={{  position:"absolute", top:48 }}
>
      
      <canvas
            id="canvas4"      
            height={400}    
            width={1200}
            // style={{ border: "4px solid blue" , position:'absolute', top:69 , left:80 }}
            // style={{ border: "4px solid blue" }}
          ></canvas>
      </div>
      
     
    </div>  
  );    
}    
