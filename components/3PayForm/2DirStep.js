import React from 'react'
import Image from 'next/image'
const DirStep = () => {
  return (
    <>
    <div className="title">
        <h1>¿Cuál es tu dirección?</h1>
        <h2>entrega del pedido</h2>
    </div>
    <div className="pay-methods-top">
        <h2>país</h2>
        <input className="inputs" type="text" value="pais" />
        <h2>ciudad</h2>
        <input className="inputs" type="text" value="pais" />
    </div>
    <div className="pay-methods-bottom">
        <h2>dirección</h2>
        <input className="inputs" type="text" value="pais" />
    </div>
</>
  )
}

export default DirStep