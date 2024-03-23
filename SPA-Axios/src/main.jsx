import React from 'react'
import ReactDOM from 'react-dom/client'
import GetEx2 from './components/GetEx2'
import GetAll from './components/GetAll'
import DeleteExp from './components/DeleteExp'
import GetOneRecord from './components/GetOne'
import AddRecord from './components/AddRecord'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AddRecord/>
    <GetEx2/>
    <GetAll/>
    <DeleteExp/>
    <GetOneRecord/>
  </React.StrictMode>,
)
