import React from 'react'
import Image from 'next/image'


const PayStep = () => {
  return (
    <>
                <div className="title">
                    <h1>¿Cómo prefieres pagar?</h1>
                    <h2>Método de pago</h2>
                </div>
                <div className="pay-methods-top">
                    <h2>pago electrónico</h2>
                    <a>
                        <h3>PSE</h3>
                    </a>
                    <a>
                        <div className='svgIcon'>
                            <Image className="img" src="/3/card.svg" alt="codigo de barras" width="43px" height="25px" objectFit="cover" />
                        </div>
                        <h3>Credit/debit</h3>
                    </a>
                </div>
                <div className="pay-methods-bottom">
                    <h2>Contra-Entrega</h2>
                    <a>
                        <h3>Efectivo</h3>
                    </a>
                </div>
    </>
  )
}

export default PayStep