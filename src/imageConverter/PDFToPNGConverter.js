import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function PDFToPNGConverter() {
  const [pngData, setPngData] = useState('');
  const [pdfFile, setpdfFile] = useState('')



  const uploadImg = (e) => {
    console.log("e",e.target.files[0] );
    setpdfFile(e.target.files[0])

  }

  const handlePDFLoad = async () => {
    const canvas = document.createElement('canvas');
    const pdfPage = await pdfFile.getPage(1);
    const viewport = pdfPage.getViewport({ scale: 1.5 });
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    const canvasContext = canvas.getContext('2d');
    await pdfPage.render({ canvasContext, viewport }).promise;

    const pngData = canvas.toDataURL('image/png');
    setPngData(pngData);
  };

  return (
    <>

<div className="container">
        <div className="row">
            <div className="col-sm-6 offset-3">

<input type="file" onChange={e => uploadImg(e)} />

<br /><br /><br />
      <Document file={pdfFile} onLoadSuccess={handlePDFLoad}>
        <Page pageNumber={1} />
      </Document>
      {pngData && <img src={pngData} alt="PDF converted to PNG" />}

      </div>
</div>
</div>
    </>
  );
}

export default PDFToPNGConverter;