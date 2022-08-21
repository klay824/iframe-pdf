import { useState, useEffect } from "react";

function App() {
  const [url, setUrl] = useState();

  useEffect(() => {
    fetch('http://localhost:3000/iframe-pdf/sample.pdf')
      .then((res) => res.blob())
      .then((myBlob) => {
        setUrl(URL.createObjectURL(myBlob));
      });
  }, []);



  return (
    <>
      <h1>iFrame Rendering of PDF Blob</h1>
      <embed title="pdf" src={url} style={{ height: '1250px', width: '100%' }}></embed>
    </>
  );
}

export default App;
