import React from 'react'
import ReactDOM from 'react-dom/client'
import Student from './Student'
import Employee from './Employee'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Student  rollNo={"200"} name={"shiva"} fees={"100.20"} arr={[21,22,23,24 ]}/> 
    <Employee id={"200"} name={"tharun"} salary={"200.20"} />
  </React.StrictMode>,
)
