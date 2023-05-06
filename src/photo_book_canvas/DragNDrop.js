import React,{useState} from "react";
import { fabric } from "fabric";
export default function DragNDrop() {
    

  const [activeObject, setactiveObject] = useState(null)
  const [activeCanvas, setactiveCanvas] = useState(null)
  // create two canvas objects
  var canvas1 = new fabric.Canvas("canvas1",{
    preserveObjectStacking: true,
  });        
  var canvas2 = new fabric.Canvas("canvas2");
  
  // create an image object in the first canvas
  fabric.Image.fromURL(  
    "https://images.unsplash.com/photo-1681433803589-cb603ab7a96b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=60",
    function (img) {
      img.left = 50  
      img.top = 50           
      img.height = 200   
        
     
      canvas1.add(img);       

      // enable drag and drop on the image object  
    }     
  );         
    
  canvas1.on('object:modified', function () {
    console.log("canvas1 on mouse modified event called", canvas1.getActiveObject());

  })
      
  // canvas1.on("mouse:over", function (options) {
  //   setactiveCanvas("canvas1")
  
  //   console.log("option from canvas1.on",options);   
  //   if (options.target) {  
  //     canvas1.setActiveObject(options.target);  

  //     setactiveObject(canvas1.setActiveObject(options.target))
  //     // canvas2.remove(options.target);
  //     canvas1.add(options.target);
  //     canvas1.renderAll();    
  //   }      
  // });  
  // canvas2.on("mouse:over", function (options) {
  //   setactiveCanvas("canvas2")    
         
  //   console.log("canvas2 on", "options",options);
  //   if (options.target) {
  //     canvas2.setActiveObject(options.target);
  //     setactiveObject(canvas2.setActiveObject(options.target))
  
  //     // canvas1.remove(options.target);
  //     canvas2.add(options.target);
  //     canvas2.renderAll();  
  //   }     
  // });
   
  console.log("canvas1.getActiveObject()",canvas1.getActiveObject());
    
  console.log("activeObject", activeObject?._activeObject);
  console.log("activeCanvas",activeCanvas);   
  return (  
    <div className="container">
      DragNDrop
      <hr />     
      <br />    
<strong>
Active_Canvas : {activeCanvas}  
<hr />

</strong>      <div className="d-flex justify-content-center">
        <div>
          {" "} 
          <canvas
            id="canvas1"
            height={400}
            width={400}
            style={{ border: "4px solid red" }}
          ></canvas>
        </div>
        <div>   
          {" "}
          <canvas
            id="canvas2"
            height={400}
            width={400}
            style={{ border: "4px solid green" }}
          ></canvas>
        </div>
      </div>
    </div>
  );
}
  

