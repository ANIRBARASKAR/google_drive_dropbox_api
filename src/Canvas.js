import "./App.css";

function Canvas() {
    return "hello "
  }

export default Canvas; 


// import "./App.css";
// import React , { useRef, useEffect } from "react";

// const Canvas = props => {
  
//     const canvasRef = useRef(null)
    
//     useEffect(() => {
//       const canvas = canvasRef.current
//       const context = canvas.getContext('2d')
//       //Our first draw
//       context.fillStyle = 'grey'
//       context.fillRect(0, 0, context.canvas.width, context.canvas.height)
//     }, [])
    
//     return <canvas ref={canvasRef} {...props}/>
//   }
// export default Canvas; 