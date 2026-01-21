import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Greeting() {
  return (
    <div className="greeting">
      <h1>Hallo</h1>
      <p>Selamat pagi</p>
    </div>
  );
}

function Biodata(props) {
  return (
    <div className="biodata">
      <p>Nama : {props.nama}</p>
      <p>Kelas : {props.kelas}</p>
      <p>NISN : {props.nisn}</p>
    </div>
  );
}
function App() {
  return (
    <div className="container">
      <Greeting/>
      <Biodata nama="AMBARAM" kelas="XI PULUPULU 4" nisn="9835769"/>
      <Biodata nama="RUSDITANK" kelas="XI PULUPULU 4" nisn="7695674"/>
    </div>
  )
}

export default App
