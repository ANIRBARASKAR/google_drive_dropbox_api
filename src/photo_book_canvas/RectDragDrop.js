import React,{useRef} from 'react'
import { fabric } from 'fabric'
export default function RectDragDrop() {

    const canvas4 = useRef(null)
     
    canvas4.current = new fabric.Canvas('canvas4')

    var rect1 = new fabric.Rect({
        left: 0,
        top: 0,  
        width: 400,  
        height: 400,  
        fill:'transparent',
        stroke:'black',
        selectable:false   
         
      });  
    var rect2= new fabric.Rect({
        left: 400,  
        top: 0,  
        width: 400,  
        height: 400,  
        fill:'transparent',
        stroke:'red',
        selectable:false 

      });  
    var rect3 = new fabric.Rect({
        left: 800,
        top: 0,  
        width: 400,  
        height: 400,  
        fill:'transparent',
        stroke:'green',
        selectable:false   

      });  
   
      var circle = new fabric.Circle({
        left: 500,
        top: 200,
        radius: 50,  
        fill: "green",    
      });

      fabric.Image.fromURL(
        "https://images.unsplash.com/photo-1681433803589-cb603ab7a96b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=60",
        function (img) {
          canvas4.current.add(rect1,rect2,rect3,circle,img);  
        }  
      );      
    //   canvas4.current.add(rect1,rect2,rect3,circle,img);
      canvas4.current.renderAll()

    console.log('  rect1.toDataURL()',  rect1.toDataURL());   
    
    rect1.on('mousemove',function () {
        // alert("RECT1 On")  
        console.log(canvas4.current.toDataURL());
    })  

   
  return (
    <div className='container'>RectDragDrop
    
    
    <br />
    <canvas  
          id="canvas4"    
          ref={canvas4}     
          height={400}    
          width={1200}  
          // style={{ border: "4px solid blue" , position:'absolute', top:69 , left:80 }}
          style={{ border: "4px solid blue" }}
        ></canvas>
    </div>  
  )
}
