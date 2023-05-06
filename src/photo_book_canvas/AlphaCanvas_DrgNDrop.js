import React, { useRef ,useEffect} from "react";
import { fabric } from "fabric";
export default function AlphaCanvas_DrgNDrop() {
  const canvas4 = useRef(null);
  const canvas1 = useRef(null);
  const canvas2 = useRef(null);
  const canvas3 = useRef(null);
   
  canvas4.current = new fabric.Canvas("canvas4");
  canvas1.current = new fabric.Canvas("canvas1");
  canvas2.current = new fabric.Canvas("canvas2");
  canvas3.current = new fabric.Canvas("canvas3");

    
  var circle1 = new fabric.Circle({
    left: 50,
    top: 200,
    radius: 50,    
    fill: "red",    
  });
  var circle2 = new fabric.Circle({
    left: 500,
    top: 200,
    radius: 50,    
    fill: "green",    
  });
  var circle3 = new fabric.Circle({
    left: 900,
    top: 200,
    radius: 50,    
    fill: "blue",      
  });
  canvas4.current.add(circle1, circle3 , circle2)
  canvas4.current.renderAll()    
  
  
  canvas1.current.on('mouse:over', function name() {
    alert("canvas1 on")
  })
  canvas2.current.on('mouse:over', function name() {
    alert("canvas2 on")
  })
  canvas3.current.on('mouse:over', function name() {
    alert("canvas3 on")
  })    

   
   
    
  return (     
    <div>
      AlphaCanvas_DrgNDrop  
      <div className="container">   
        <canvas
          id="canvas4"
          ref={canvas4}
          height={400}
          width={1200}
          // style={{ border: "4px solid blue" , position:'absolute', top:69 , left:80 }}
          style={{ border: "4px solid blue" , zIndex: 1 }}
        ></canvas>

        <canvas
          id="canvas1"    
          ref={canvas1}    
          height={390}
          width={400}
          style={{ border: "1px solid red ", position: "absolute", top: 50 , left:130, zIndex: 0 }}
        ></canvas>
        <canvas        
          id="canvas2"         
          ref={canvas2}    
          height={390}    
          width={400}
          style={{ border: "1px solid black ", position: "absolute", top: 50 , left:525  , zIndex: 2}}
        ></canvas>
        <canvas       
          id="canvas3"    
          ref={canvas3}    
          height={390}  
          width={400}
          style={{ border: "1px solid green ", position: "absolute", top: 50 , left:925  , zIndex: 0}}
        ></canvas>
      </div>
    </div>  
  );
}  
  