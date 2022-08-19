function App() {
  const samplePdf = "http://www.pdf995.com/samples/pdf.pdf"

  const blob = new Blob([samplePdf], { type: 'application/pdf' });

  const url = URL.createObjectURL(blob)

  return (
    <>
      <h1>iFrame Rendering of PDF Blob</h1>
      <iframe title="pdf" src={url} style={{ height: '1250px', width: '100%' }}></iframe>
    </>
  );
}

export default App;
