import React, { useState, useEffect, useRef } from "react";
import { fabric } from "fabric";
export default function TransperentCanvas2() {
  const canvas1 = useRef(null);
  const canvas2 = useRef(null);
  const canvas3 = useRef(null);
  const canvas4 = useRef(null);
  // create two canvas elements
  canvas1.current = new fabric.Canvas("canvas1");
  canvas2.current = new fabric.Canvas("canvas2");
  canvas3.current = new fabric.Canvas("canvas3",{});
  canvas4.current = new fabric.Canvas("canvas4");
  canvas3.current.selection = false    
  //            
  // , { pointerEvents: 'none' }  
       
  // useEffect(() => {

  var anirActiveCanvas;
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
  var circle2 = new fabric.Circle({
    left: 900,
    top: 50,
    radius: 50,    
    fill: "yellow",
  });
  canvas4.current.add(circle2);
  //

  canvas4.current.on("object:modified", function () {
    // test()
  });

  // }, []);
  var base64;

  const test = () => {
    // base64 = canvas4.current.toDataURL()

    console.log("base64", base64, canvas4.current.toDataURL());
  };
  test();

  canvas1.current.renderAll();
  canvas2.current.renderAll();    
  canvas3.current.renderAll();
  // canvas4.current.renderAll();


  canvas1.current.on('mouse:up', function name() {    
    alert("canvas1 on")    
  })    
  canvas3.current.on('mouse:over', function name() {
    // alert("canvas3 on")
    anirActiveCanvas = "Canvas3"      

  })                        

  console.log("canvas3",canvas3.current.toDataURL());  
  console.log("canvas1",canvas1.current.toDataURL());  
  return (
    <div className="container" style={{ position: "relative" }}>
      TransperentCanvas <br />
      <strong> activeCanvas : {anirActiveCanvas}</strong>
      <br />
      <div style={{ position: "absolute", top: 48 }}>     
        <canvas
          id="canvas4"                  
          height={400}          
          width={1200}  
          // style={{ border: "4px solid blue" , position:'absolute', top:69 , left:80 }}
          style={{ border: "4px solid blue" , zIndex: 2 }}
        ></canvas>
      </div>      
      <div >
        <div className="d-flex " style={{ position: "relative" }}>
          <canvas
            id="canvas1"
            ref={canvas1}
            height={400}
            width={400}
            style={{ border: "4px solid red"  , zIndex: 0}}
          ></canvas>
    
          <canvas
            id="canvas2"
            height={400}
            width={400}
            style={{ border: "4px solid green" , zIndex: 0 }}
          ></canvas>

          <canvas
            id="canvas3"    
            height={400}
            width={400}
            style={{ border: "4px solid black"  , zIndex: 2}}
          ></canvas>
        </div>     
      </div>
       
    </div>
  );
}    
