import React from 'react'
import GoogleDriveImage from './GoogleDriveImage'
import PhotoBook from './photo_book_canvas/PhotoBook'
import PhotoBookWithDragNDrop from './photo_book_canvas/PhotoBookWithDragNDrop'
import DragNDrop from './photo_book_canvas/DragNDrop'
import DragNDrop2 from './photo_book_canvas/DragNDrop2'
import TransperentCanvas from './photo_book_canvas/TransperentCanvas'
import TransperentCanvas2 from './photo_book_canvas/TransperentCanvas2'
import RectDragDrop from './photo_book_canvas/RectDragDrop'
import AlphaCanvas_DrgNDrop from './photo_book_canvas/AlphaCanvas_DrgNDrop'
import Canvas1 from './Canvas1'
import GoogleDriveApi from './drive_api/GoogleDriveApi'
import DropboxImages from './dropbox_api/DropboxImages'
import FacebookPhotos from './facebook/FacebookPhotos'
import ImageExtentionConverter from './imageConverter/ImageExtentionConverter'
import SvgToPngConverter from './imageConverter/SvgToPngConverter'
import PDFToPNGConverter from './imageConverter/PDFToPNGConverter'

export default function App() {
  return (
    <div>App
    {/* create google drive api */}
    {/* <GoogleDriveImage/> */}

{/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 GOOGLE DRIVE API */}
    {/* <GoogleDriveApi/>   */}
{/*  */}
{/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 DROPBOX API */}
{/* <DropboxImages/> */}

{/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 FACEBOOK API */}


{/* <FacebookPhotos/> */}








    {/* <PhotoBook/> */}

    {/* <PhotoBookWithDragNDrop/>   */}

    {/* <DragNDrop/> */}
  
  {/* calculated DragNDrop2  by calculation we can manage if obj is gonna outside of canvas we can handle drag and drop  */}
    {/* <DragNDrop2/> */}

{/* this with 3 canvas in lower side N on top one canvas 1200*400  */}
    {/* <TransperentCanvas/> */}


{/* in this set canvas 4 is lower side and then on top side add 3 canvas but we can't move canvas4's obj's  */}
    {/* <TransperentCanvas2/> */}
  
{/* here add one canvas in that add 3 rect 400*400 and also add 2/3 object in that */}
    {/* <RectDragDrop/> */}
    
    {/* <AlphaCanvas_DrgNDrop/> */}
    
    {/* <Canvas1/> */}


    {/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 Image Extenstion Converter 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */}

       {/* <ImageExtentionConverter/> */}

       {/* <SvgToPngConverter/> */}


       <PDFToPNGConverter/>
    </div>
  )
}  
