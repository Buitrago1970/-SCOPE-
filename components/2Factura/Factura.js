import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const StyledFactura = styled.div`
 display:flex;
 flex-direction:column;
 font-family: 'Cinzel', serif;
 width:100%;
 grid-area: SectionMainDescription;
 height:100vh;
 /* height:10; */
 /* justify-content:center; */
 align-items:center;
 justify-content: space-between;
 /* height:100%; */
 /* margin: 0 auto; */
 background: #E6E6E6;
 
 h1{
    /* font-family: cooper-black-std, serif; */
    font-weight: 700;
    font-size: 150px;
    line-height: 100px;
    color:#E6E6E6;
    border-bottom: 1px solid #000000;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
 }
 h2{
    font-size: 20px;
    line-height: 25px;
 }
 p{
    font-size: 15px;
    color: #474747;
    margin-bottom:3px;
 }
 .companyName{
    margin-top:5%;
 }
 `
const StyleDatos = styled.div`
 width:80%;
 /* height:50%; */
 display:flex;
 /* align-self:center; */
 padding-bottom:2%;
 .dCliente{
     width:50%;
     .dcNombre, .dcPhone{
         margin-top:20px;
     }
 }
 .dPedido{
    line-height: 25px;
    display: grid;
    width:50%;
    /* grid-template-columns: repeat(5, 1fr) */
    /* grid-template-rows: repeat(5, 1fr); */
    /* grid-column-gap: 200px; */
    /* grid-row-gap: 0px; */
    
    .infoPedido{
        grid-area: 1 / 1 / 3 / 3;
        /* margin-right:25px; */

    }
    .dataPedido{
        grid-area: 1 / 2 / 2 / 3;
        .dTiempo{
            color: #000000;
        }
    }
    .iCount{
        margin-top:40px;
        border-top: 1px solid #000000;
        grid-area: 2 / 1 / 3 / 3;
        display:flex;
        padding-top:20px;
        justify-content:space-around;
        .dcNombre{
            margin-right:20px;
        }
    }
 }
 .shipping-method{
    /* margin-top:5px; */
    color: #000000;
 }
 `

const StyleProductos = styled.div`

 width:80%;
 /* flex-direction:column; */
 .pColumnas{
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    padding: 2% 0px;

     display:flex;
     width:100%;
     justify-content:space-between;
     .column{
         flex-direction:column;

         .dTitle{
             margin-bottom:10px;
         }
     }
 }
 .pColumnas2{
     display:flex;
     justify-content:flex-end;
     margin-top:5%;
     .pTotal{
         display:flex;
         .ptText{
             margin: auto 0 0 0;
             padding-left:10px;
         }
     }
 }
 `

const StyledFirma = styled.div`
width:80%;
 display:flex;
 margin-bottom:10px;
 .fText{
     align-self:flex-end;

     
 }
 .fSignatureImg{
        border-bottom: 1px solid #000000;
        overflow:visible;
        .styledImg{
            position:relative;
            top:20px;
            margin-left:10px;
            overflow:visible;
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
    font-size:35px;

}
h5{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
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
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
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
            <h1 className='companyName'> SCOPE</h1>
            <StyleDatos>
                <div className='dCliente'>
                    <h2>Invoice To</h2>
                    <p className='dcNombre'>Kahyn Kim</p>
                    <p className='dcDir'>117, Jamwon-ro, Seocho-gu,</p>
                    <p className='dcCiudad'>SOUL 06508</p>
                    <p className='dcPhone'>phone: 010 3734 3174</p>
                    <p className='dcMail'>E--mail: kahyun21@naver.com</p>

                </div>
                <div className='dPedido'>
                    <div className='infoPedido'>
                        <p className='iTiempo'>Date of Order:</p>
                        <p className='iTiempo'>Order Number:</p>
                        <p className='iTiempo'>Pick List #:</p>
                        <p className='shipping-method'>FEDEX Priority Service</p>
                    </div>
                    <div className='dataPedido'>
                        <p className='dTiempo'>11/25/2020</p>
                        <p className='dTiempo'>12000161790</p>
                        <p className='dTiempo'>4793670</p>
                    </div>
                    <div className='iCount'>
                        <p className='dcNombre'>Item Count:</p>
                        <Image className="img" src="/factura/barras.jpg" alt="codigo de barras" width="180px" height="70px" objectFit="cover" />
                        {/* <img src="../" */}
                    </div>
                </div>
                {/* <div className="shipping-method">FEDEX Priority Service</div> */}
            </StyleDatos>
            <StyleProductos>
                <div className='pColumnas'>
                    <div className='column cDesc'>
                        <h2 className='cdTitulo dTitle'>Description</h2>
                        <p className='cdNameProducto'>SCOPE T-SHIRT</p>
                        <p className='cdNameProducto' exclusive='true'>SCOPE gabban</p>
                    </div>
                    <div className='column cRef'>
                        <h2 className='crTitulo dTitle'>REF</h2>
                        <p className='crRefProducto'>A1208PB70</p>
                        <p className='crRefProducto'>Limited-g-1/10</p>
                    </div>
                    <div className='column cQty'>
                        <h2 className='cqTitulo dTitle'>Qty</h2>
                        <p className='cqQtyProducto'>1</p>
                        <p className='cqQtyProducto'>1</p>
                    </div>
                    <div className='column cPrice'>
                        <h2 className='cpTitulo dTitle'>Price</h2>
                        <p className='cpPriceProducto'>$129,000</p>
                        <p className='cpPriceProducto'>$889,000</p>
                    </div>
                </div>
                <div className="pColumnas2">
                    <div className='pTotal'>
                        <h2 className='ptText'>Total:</h2>
                        <p className='ptText'>$1’080,000</p>
                    </div>
                </div>
            </StyleProductos>
            <StyledFirma>
                <h2 className='fText'>Signature:</h2>
                <div className='fSignatureImg'>
                    {/* <Image /> */}
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