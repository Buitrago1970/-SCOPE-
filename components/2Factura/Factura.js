import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const StyledFactura = styled.div`
 display:flex;
 flex-direction:column;
 font-family: 'Cinzel', serif;
 grid-area: SectionMainDescription;
 height:100vh;
 background: #E6E6E6;
 
 h2{
    font-size: 17px;
    line-height: 25px;
 }
 .companyName{
    margin-top:5%;
 }
 `

const StyledContainerTitle = styled.div`
 font-weight: bold;
    font-size: 30px;
    line-height: 100px;
    text-align: center;
    color: transparent;
    border-bottom: 1px solid #000000;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #000000;
 `
const StyleDatos = styled.div`
padding: 0 20px;
margin-top: 45px;
color: #474747;
font-size: 14px;
 .dPedido{
    line-height: 25px;
    display: flex;
    width: 100%;
    justify-content: space-between;
border-bottom: 1px solid;
padding-bottom: 30px;


 }
 `

const StyleProductos = styled.div`
padding: 15px 20px;
font-size: 12px;
  .pColumnas{
    min-height: 200px;
    border-bottom: 1px solid;
      display:flex;
      width:100%;
      justify-content:space-between;
      .column{
          flex-direction:column;

          .dTitle{
              margin-bottom:15px;
              font-size: 17px;
          }
      }
      .product-bill{
          color: #474747;
          line-height: 22px;
      }
  }
  .pTotal{
        display: flex;
     justify-content: flex-end;
     margin-top: 15px;
    align-items: center;
      }
  .p-total-text{
         margin: 0 10px;
         font-size: 17px;
     }
     .p-total-number{
         color: #474747;
         font-size: 15px;
          
        }
`

const StyledFirma = styled.div`
  display:flex;
  margin-bottom:10px;
padding: 15px 20px;

  .fText{
      align-self:flex-end;
  }
  .fSignatureImg{
         border-bottom: 1px solid #000000;
         overflow:visible;
         .styledImg{
             max-width: 100px;
         }
      }
     `
const StyledInfo = styled.div`
 color: #1A1919;
 display:flex;
 flex-direction:column;
 align-items:center;
 .iFinalData{
     display:flex;
     margin-top:7px;
     margin-bottom:5%;
     .ifCompanyInstagram{
         margin-right:5px;
     }
 }
 h4{
     font-family: cooper-black-std, serif;
     font-size:15px;

 }
 h5{
     font-family: 'Inter';
     font-size: 10px;
     line-height: 12px;
     display: flex;
     align-items: center;
     text-align: center;
     color: #000000;
     text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
     margin-top:5px;
 }
 h6{
     font-family: 'Inter';
     font-size: 10px;
     line-height: 12px;
     display: flex;
     align-items: center;
     text-align: center;
     color: #000000;
 }
 `
const Factura = () => {
    return (
        <StyledFactura>
            <StyledContainerTitle>
                <h1 className='companyName'> SCOPE</h1>

            </StyledContainerTitle>
            <StyleDatos>
                <div className='dPedido'>
                    <div className='infoPedido'>
                        <p className='iTiempo'>Order Number:</p>
                        <p className='iTiempo'>Pick List:</p>
                        <p className='shipping-method'>Shipping Method:</p>

                    </div>
                    <div className='dataPedido'>
                        <p className='dTiempo'>#12000161790</p>
                        <p className='dTiempo'>#4793670</p>
                        <p className='shipping-method'>FEDEX Priority Service</p>

                    </div>
                </div>
            </StyleDatos>
            <StyleProductos>
                <div className='pColumnas'>
                    <div className='column cDesc'>
                        <p className='cdTitulo dTitle'>Description</p>
                        <p className='product-bill'>SCOPE T-SHIRT</p>
                        <p className='product-bill' exclusive='true'>SCOPE gabban</p>
                    </div>
                    <div className='column cRef'>
                        <p className='crTitulo dTitle'>REF</p>
                        <p className='product-bill'>A1208PB70</p>
                        <p className='product-bill'>Limited-g-1/10</p>
                    </div>
                    <div className='column cQty'>
                        <p className='cqTitulo dTitle'>Qty</p>
                        <p className='product-bill'>1</p>
                        <p className='product-bill'>1</p>
                    </div>
                    <div className='column cPrice'>
                        <p className='cpTitulo dTitle'>Price</p>
                        <p className='product-bill'>$129,000</p>
                        <p className='product-bill'>$889,000</p>
                    </div>
                </div>
                <div className="pColumnas2">
                    <div className='pTotal'>
                        <p className='p-total-text'>Total:</p>
                        <p className='p-total-number'>$1’080,000</p>
                    </div>
                </div>
            </StyleProductos>
            <StyledFirma>
                <h2 className='fText'>Signature:</h2>
                <div className='fSignatureImg'>

                    <div className="styledImg" >
                        <Image className="img" src="/factura/signaturee.png" alt="codigo de barras" width="161.88px" height="58px" objectFit="cover" />
                    </div>
                </div>
            </StyledFirma>
            <StyledInfo>
                <h4 className='iCompanyName'>{`(SCOPE)`}</h4>
                <h5 className='iIpModerna'>{`(SCOPE) 192.158.1.38. 171.53.148.215;`}</h5>
                <h5 className='iCompanyEmail'>{`(SCOPE) <3@scope.com;`}</h5>
                <div className='iFinalData'>
                    <h6 className='ifCompanyInstagram'>{`instagram@scope.oficial `}</h6>
                    <h6 className='ifCompanyWebsite'>{` www.(scope).com ;`}</h6>
                </div>
            </StyledInfo>
        </StyledFactura>
    )
}

export default Factura