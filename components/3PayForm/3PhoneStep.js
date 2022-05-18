import React from 'react'

const PhoneStep = () => {
  return (
    <>
    <div className="title">
        <h1>¿Cuál es tu número de celular?</h1>
        <h2>contacto</h2>
    </div>
    <div className="pay-methods-top">
        <h2>celular</h2>
        <input className="inputs" type="text" value="phone" />
        <h2>celular 2 {`(opcional)`}</h2>
        <input className="inputs" type="text" value="phone2" />
    </div>
    </>
  )
}

export default PhoneStep