import React,{useState , useEffect} from "react";
import { fabric } from "fabric";
export default function PhotoBook() {
  const canvas1 = new fabric.Canvas("canvas1");
   
  const [activeCanvas, setactiveCanvas] = useState("")
  useEffect(() => {
  
    fabric.Image.fromURL('https://images.unsplash.com/photo-1681404141874-633aa2de7c76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=60', function(img) {
        img.set({
          left: 100,  
          top: 100,
          scaleX: 0.5,  
          scaleY: 0.5  
        });  
        canvas1.add(img);
        canvas1.renderAll();
      });  
  
  canvas1.on("mouse:over",function (event) {  
    console.log("mouseup", event);
    setactiveCanvas("canvas1")
    // alert("canvas1 Active",canvas1);
  });

  const canvas2 = new fabric.Canvas("canvas2");
  canvas2.on("mouse:over",function (event) {  
    console.log("mouseup", event);
    setactiveCanvas("canvas2")

    // alert("canvas2 Active");
  });      

  const canvas3 = new fabric.Canvas("canvas3");
  canvas3.on("mouse:over",function (event) {  
    console.log("mouseup", event);
    setactiveCanvas("canvas3")

    // alert("canvas3 Active");
  });  
//   canvas1.on("after:render", function (event) {
//     console.log("after:render", event);

//     alert("canvas1 after:render");
//   });
//   canvas1.on("before:render", function (event) {
//     console.log("mouseup", event);

//     alert("canvas1 before:render");
//   });

canvas1.renderAll(); 
  canvas2.renderAll(); 
  canvas3.renderAll(); 
}, [])

  
      
  return (
    <div className="container mt-5">
      PhotoBook
      <br />
      <h6 className="ms-5">Active Canvas : {activeCanvas}</h6>
      <br />
      <div className="d-flex justify-content-center ">
    
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
            width={100}
            style={{ border: "4px solid green" }}
          ></canvas>
        </div>
        <div>
          {" "}
          <canvas
            id="canvas3"
            height={400}
            width={400}
            style={{ border: "4px solid blue" }}
          ></canvas>
        </div>
      </div>
    </div>
  );
}
