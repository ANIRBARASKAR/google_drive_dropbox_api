import React, { useRef, useEffect } from 'react';
import { fabric } from 'fabric';

function Canvas1() {
  const upperCanvasRef = useRef(null);
  const lowerCanvasRef = useRef(null);

  useEffect(() => {
    // Create fabric.js canvases and initialize lower canvas with objects
    const upperCanvas = new fabric.Canvas(upperCanvasRef.current);
    const lowerCanvas = new fabric.Canvas(lowerCanvasRef.current);

    const rect = new fabric.Rect({
      left: 50,
      top: 50,
      fill: 'red',  
      width: 100,
      height: 100,
    });

    const circle = new fabric.Circle({
      left: 150,
      top: 150,
      fill: 'blue',
      radius: 50,
    });

    lowerCanvas.add(rect, circle);

    // Make objects in lower canvas selectable and draggable
    lowerCanvas.forEachObject((obj) => {
      obj.selectable = true;
      obj.hasControls = true;
      obj.hasBorders = true;
      obj.lockScalingX = obj.lockScalingY = obj.lockRotation = true;
      obj.on('mousedown', () => {
        lowerCanvas.bringToFront(obj);
      });
    });
  }, []);
    
  return (
    <div className=' container'>
      <canvas ref={lowerCanvasRef} height={400} width={400} style={{border:'2px solid green' , zIndex: 1  }} />
      <canvas ref={upperCanvasRef} height={400} width={400} style={{border:'2px solid red' , position: 'absolute', top:-420, zIndex: 0 }} />
    </div>    
  );      
}    
  
export default Canvas1;