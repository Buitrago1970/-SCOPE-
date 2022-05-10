import React from 'react'
import styled from 'styled-components'

const StyledFactura = styled.div`
 display:flex;
 flex-direction:column;
 font-family: 'Cinzel', serif;
 width:100%;
 grid-area: Bill; 
 height:100vh;
 /* height:10; */
 justify-content:center;
 align-items:center;
 margin: 0 auto;
 background: #E6E6E6;

 .companyName{
    font-weight: 700;
    font-size: 150px;
    line-height: 100px;
    color:#E6E6E6;
    border-bottom: 2px solid #000000;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
 }
 `
const StyleDatos = styled.div`
 width:90%;
 display:flex;
 /* justify-content:space-between; */
 .dCliente{
     width:50%;
    font-size: 20px;
    line-height: 25px;
     .dcNombre{
         margin-top:20px;
     }
     .dcNombre, .dcDir, .dcCiudad, .dcMail{
        font-size: 15px;
        color: #474747;
     }
     .dcPhone{
        margin-top:20px;
        font-size: 15px;
        color: #474747;
     }
 }
 .dPedido{
    line-height: 25px;
     display:flex;
     
    .infoPedido{
        color: #474747;
        font-size: 15px;
        margin-right:25px;
        .iTiempo{
            font-size: 15px;
        }
    }
    .dataPedido{
        color: #000000;
        font-size: 20px;
        .dTiempo{
            font-size: 15px;
        }
    }
 }
 .shipping-method{
    /* margin-top:5px; */
    font-size: 15px;
    color: #000000;
 }`

const Factura = () => {
    return (
        <StyledFactura>
            <h1 className='companyName'> SCOPE</h1>
            <StyleDatos>
                <div className='dCliente'>
                    Invoice To
                    <h6 className='dcNombre'>Kahyn Kim</h6>
                    <h6 className='dcDir'>117, Jamwon-ro, Seocho-gu,</h6>
                    <h6 className='dcCiudad'>SOUL 06508</h6>
                    <h6 className='dcPhone'>phone: 010 3734 3174</h6>
                    <h6 className='dcMail'>E--mail: kahyun21@naver.com</h6>

                </div>
                <div className='dPedido'>
                    <div className='infoPedido'>
                        <h6 className='iTiempo'>Date of Order:</h6>
                        <h6 className='iTiempo'>Order Number:</h6>
                        <h6 className='iTiempo'>Pick List #:</h6>
                        <h6 className='shipping-method'>FEDEX Priority Service</h6>
                    </div>
                    <div className='dataPedido'>
                        <h6 className='dTiempo'>11/25/2020</h6>
                        <h6 className='dTiempo'>12000161790</h6>
                        <h6 className='dTiempo'>4793670</h6>

                    </div>
                </div>
                {/* <div className="shipping-method">FEDEX Priority Service</div> */}
            </StyleDatos>
        </StyledFactura>
    )
}

export default Factura