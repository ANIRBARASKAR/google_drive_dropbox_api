import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
export default function DragNDrop2() {
  // create two canvas elements
  var canvas1 = new fabric.Canvas("canvas1");
  var canvas2 = new fabric.Canvas("canvas2");
  var canvas3 = new fabric.Canvas("canvas3");

  //  

  const [activeObject, setactiveObject] = useState(null);
  const [activeCanvas, setactiveCanvas] = useState(null);
  var anirActiveCanvas = null;
  var anirActiveObject = null;       

  // load the image into the first canvas
  fabric.Image.fromURL(
    "https://images.unsplash.com/photo-1681433803589-cb603ab7a96b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=60",
    function (img) {
      canvas1.add(img);
    }
  );

  // Add a rectangle, an image and a circle to the first canvas
  var rect = new fabric.Rect({
    left: 100,
    top: 100,
    width: 50,
    height: 50,
    fill: "red",
  });
  canvas1.add(rect);

  var circle = new fabric.Circle({
    left: 300,
    top: 300,
    radius: 25,
    fill: "green",
  });
  canvas1.add(circle);
  //
  
  canvas1.on("mouse:out", function () {
    anirActiveCanvas = canvas1;
    // console.log("canvas1 on mouse modified event called", );
    // setactiveCanvas("canvas1")
    anirActiveObject = canvas1.getActiveObject();
    console.log(" canvas1.getActiveObject()", anirActiveObject);

    console.log("anirActiveCanvas", anirActiveCanvas);

    clonedObj1(anirActiveCanvas);
  });
  canvas2.on("mouse:out", function () {
    // console.log("canvas1 on mouse modified event called", );
    // setactiveCanvas("canvas2")
    anirActiveCanvas = canvas2;
    anirActiveObject = canvas2.getActiveObject();

    clonedObj2(anirActiveCanvas);
    console.log("anirActiveCanvas", anirActiveCanvas);
  });
  canvas3.on("mouse:out", function () {
    // console.log("canvas1 on mouse modified event called", );
    // setactiveCanvas("canvas2")
    anirActiveCanvas = canvas3;
    anirActiveObject = canvas3.getActiveObject();

    clonedObj3(anirActiveCanvas);
    console.log("anirActiveCanvas", anirActiveCanvas);
  });

  const clonedObj1 = (anirActiveCanvas) => {
    // get active obj from canvas1

    var activeObj = canvas1.getActiveObject();

    // if (activeObj) {
    //   var cloned = fabric.util.object.clone(activeObj);
    //   console.log("cloned", cloned);
    //   canvas2.add(cloned);
    //   // anirActiveCanvas.add(cloned)
    //   canvas1.remove(activeObj);
    // }      
// 🌟🌟🌟🌟🌟🌟🌟🌟 calculations for right side

    console.log("activeObj.left",activeObj.left , "activeObj.getScaledWidth()",activeObj.getScaledWidth(), "canvas1.width",canvas1.width);
    console.log("activeObj.left",activeObj.left + activeObj.getScaledWidth());


    var cloned = fabric.util.object.clone(activeObj);

    if ((activeObj.left + activeObj.getScaledWidth() ) > canvas1.width ||  (activeObj.top + activeObj.getScaledHeight() ) > canvas1.height ) { 
      
      canvas2.add(cloned);
      canvas1.remove(activeObj);    
          
    }  

    if (  
      activeObj.left < 0 ||
      activeObj.top < 0 ||
      activeObj.left + activeObj.width > canvas2.width ||
      activeObj.top + activeObj.height > canvas2.height
    ) {
      // display alert
      // alert("Object is outside of canvas!");

      // console.log("cloned", cloned);
      canvas3.add(cloned);
      canvas1.remove(activeObj);
    }
  };
  const clonedObj2 = (arg) => {

    var activeObj = canvas2.getActiveObject();

   
    var cloned = fabric.util.object.clone(activeObj);

    if ((activeObj.left + activeObj.getScaledWidth() ) > canvas2.width ||  (activeObj.top + activeObj.getScaledHeight() ) > canvas2.height ) { 
      
      canvas3.add(cloned);
      canvas2.remove(activeObj);    
          
    }  

    if (
      activeObj.left < 0 ||
      activeObj.top < 0 ||
      activeObj.left + activeObj.width > canvas2.width ||
      activeObj.top + activeObj.height > canvas2.height
    ) {
    

      console.log("cloned", cloned);
      canvas1.add(cloned);
      canvas2.remove(activeObj);
    }
  };

  const clonedObj3 = (arg) => {

    var activeObj = canvas3.getActiveObject();
    var cloned = fabric.util.object.clone(activeObj);
  
  
    if ((activeObj.left + activeObj.getScaledWidth() ) > canvas3.width ||  (activeObj.top + activeObj.getScaledHeight() ) > canvas3.height ) { 
      
      canvas1.add(cloned);  
      canvas3.remove(activeObj);    
          
    }  

    if (
      activeObj.left < 0 ||
      activeObj.top < 0 ||
      activeObj.left + activeObj.width > canvas3.width ||
      activeObj.top + activeObj.height > canvas3.height
    ) {
      

      canvas2.add(cloned);
      canvas3.remove(activeObj);
    }
   
  };

  canvas1.renderAll();
  canvas2.renderAll();
  canvas3.renderAll();

  useEffect(() => {}, []);
  return (
    <div>
      DragNDrop2
      <strong> activeCanvas :</strong>
      <br />
      <div className="d-flex justify-content-center">
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
        <div>
          {" "}
          <canvas
            id="canvas3"
            height={400}
            width={400}
            style={{ border: "4px solid black" }}
          ></canvas>
        </div>
      </div>
    </div>
  );
}
