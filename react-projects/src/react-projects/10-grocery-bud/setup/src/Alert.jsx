import React, { useEffect } from 'react'

const Alert = ({ show, text, status, resetShowAlert }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      resetShowAlert();
    }, 2000);
    return () => { clearTimeout(timeoutId) }
  }, [])
  let classes = "alert " + status;
  return <>
    {show && <p className={classes}>{text}</p>}
  </>
}

export default Alert
