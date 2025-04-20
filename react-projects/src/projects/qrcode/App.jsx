import { useEffect, useRef } from 'react'
function App() {
  const qr = useRef()
  useEffect(() => {
    const newQR = QRCode(qr.current, {
      text: "http://jindo.dev.naver.com/collie",
      width: 128,
      height: 128,
    });
  }, [])
  return (
    <div ref={qr}>App</div>
  )
}

export default App
