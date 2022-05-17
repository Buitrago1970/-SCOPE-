import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import { device } from '../../device/device';
import imgPrueba from '../../public/productos/cap.png'


const StyledSectionOrders = styled.div`
    grid-area: SectionShopProducts; 
    background-color: black;
    overflow-y: scroll;
    scroll-behavior: smooth;
    max-height: 37rem;
    .Container-title-order{
        text-align: center;
        color: #ffff;
    }
     @media ${device.tablet} { 
        grid-area: SectionMainDescription; 
        height: 40rem;
    }
`
const StyledContainerOrder = styled.div`
`
const StyledOrder = styled.div`
    font-family: Inter;
    font-size: 14px;
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr; 
    grid-template-rows: 0.1fr 1.9fr; 
    border: 3px solid white;
    margin: 20px;
    @media ${device.tablet} { 
        margin: 20px 10px;
        }
        @media ${device.mobileL} { 
        font-size: 9px;
        }
`
const StyledHeaderInfoOrder = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 3px solid white;
color: #BFBFBF;
padding: 0 15px;
`
const StyledContainerStatus = styled.div`
color: #66FD20;
`
// header
const StyledOrderInfo = styled.div`
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr 1.5fr 1fr; 
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  border-bottom: 2px solid white;
  min-height: 160px;
    .btn-order{
            background: transparent;
            border: 1px solid white;
            width: 120px;
            color: #FFFF;
            height: 35px;
        }
        .btn-order:hover{
            border: 2px solid white;
        }
        @media ${device.tablet} { 
            grid-auto-columns: 1fr; 
            grid-template-columns: 1fr 1fr; 
            grid-template-rows: 1fr 1fr; 
            gap: 0px 0px; 
            grid-template-areas: 
                "img info"
                "img btn"; 
                .container-img-order{
                    grid-area: img;
                }
    }
    @media ${device.mobileL} { 
        .btn-order{
            width: 90px;
            height: 25px;
            font-size: 10px;
        }
        }
`
const StyledInfoOrder = styled.div`
    p{
        color: #FFFFFF;
        margin: 5px 0;
    }
    .info-order-p{
        color: #D5C4BA;
    }
    .uni-color-order{
        display: flex;
    }
    @media ${device.tablet} { 
        grid-area: info;

    }
`
export default function Orders() {
    return (
        <StyledSectionOrders>
            <StyledContainerOrder>
                <div className='Container-title-order'>
                    <h1>PEDIDOS</h1>
                </div>
                <StyledOrder>
                    <StyledHeaderInfoOrder>
                        <div className='p-info-header-order'>
                            <p>19 de abril del 2022</p>
                        </div>
                        <StyledContainerStatus>
                            <p>ENTREGADO</p>
                        </StyledContainerStatus>
                        <div className='p-info-header-order'>
                            <p>Numero de pedido:EC7567-hgff8-866</p>
                        </div>
                    </StyledHeaderInfoOrder>
                    <StyledOrderInfo>
                        <div className='container-img-order'>
                            <Image src={imgPrueba} alt='Logo' />
                        </div>
                        <StyledInfoOrder>
                            <p>
                                Llegó el 19 de abril
                            </p>
                            <div className='info-order-p'>
                                <p>
                                    SCOPE T-SHIRT
                                </p>
                                <div className='uni-color-order'>
                                    <p>
                                        UNI:1
                                    </p>
                                    <p>
                                        Color:Gris Espacial
                                    </p>
                                </div>

                            </div>
                        </StyledInfoOrder>
                        <div className='container-btn-order'>
                            <button className='btn-order'>
                                Ver mi factura
                            </button>
                        </div>
                    </StyledOrderInfo>
                    <StyledOrderInfo>
                        <div className='container-img-order'>
                            <Image src={imgPrueba} alt='Logo' />
                        </div>
                        <StyledInfoOrder>
                            <p>
                                Llegó el 19 de abril
                            </p>
                            <div className='info-order-p'>
                                <p>
                                    SCOPE T-SHIRT
                                </p>
                                <div className='uni-color-order'>
                                    <p>
                                        UNI:1
                                    </p>
                                    <p>
                                        Color:Gris Espacial
                                    </p>
                                </div>

                            </div>
                        </StyledInfoOrder>
                        <div className='container-btn-order'>
                            <button className='btn-order'>
                                Ver mi factura
                            </button>
                        </div>
                    </StyledOrderInfo>
                    <StyledOrderInfo>
                        <div className='container-img-order'>
                            <Image src={imgPrueba} alt='Logo' />
                        </div>
                        <StyledInfoOrder>
                            <p>
                                Llegó el 19 de abril
                            </p>
                            <div className='info-order-p'>
                                <p>
                                    SCOPE T-SHIRT
                                </p>
                                <div className='uni-color-order'>
                                    <p>
                                        UNI:1
                                    </p>
                                    <p>
                                        Color:Gris Espacial
                                    </p>
                                </div>

                            </div>
                        </StyledInfoOrder>
                        <div className='container-btn-order'>
                            <button className='btn-order'>
                                Ver mi factura
                            </button>
                        </div>
                    </StyledOrderInfo>


                </StyledOrder>
                <StyledOrder>
                    <StyledHeaderInfoOrder>
                        <div className='p-info-header-order'>
                            <p>19 de abril del 2022</p>
                        </div>
                        <StyledContainerStatus>
                            <p>ENTREGADO</p>
                        </StyledContainerStatus>
                        <div className='p-info-header-order'>
                            <p>Numero de pedido:EC7567-hgff8-866</p>
                        </div>
                    </StyledHeaderInfoOrder>
                    <StyledOrderInfo>
                        <div className='container-img-order'>
                            <Image src={imgPrueba} alt='Logo' />
                        </div>
                        <StyledInfoOrder>
                            <p>
                                Llegó el 19 de abril
                            </p>
                            <div className='info-order-p'>
                                <p>
                                    SCOPE T-SHIRT
                                </p>
                                <div className='uni-color-order'>
                                    <p>
                                        UNI:1
                                    </p>
                                    <p>
                                        Color:Gris Espacial
                                    </p>
                                </div>

                            </div>
                        </StyledInfoOrder>
                        <div className='container-btn-order'>
                            <button className='btn-order'>
                                Ver mi factura
                            </button>
                        </div>
                    </StyledOrderInfo>


                </StyledOrder>
                <StyledOrder>
                    <StyledHeaderInfoOrder>
                        <div className='p-info-header-order'>
                            <p>19 de abril del 2022</p>
                        </div>
                        <StyledContainerStatus>
                            <p>ENTREGADO</p>
                        </StyledContainerStatus>
                        <div className='p-info-header-order'>
                            <p>Numero de pedido:EC7567-hgff8-866</p>
                        </div>
                    </StyledHeaderInfoOrder>
                    <StyledOrderInfo>
                        <div className='container-img-order'>
                            <Image src={imgPrueba} alt='Logo' />
                        </div>
                        <StyledInfoOrder>
                            <p>
                                Llegó el 19 de abril
                            </p>
                            <div className='info-order-p'>
                                <p>
                                    SCOPE T-SHIRT
                                </p>
                                <div className='uni-color-order'>
                                    <p>
                                        UNI:1
                                    </p>
                                    <p>
                                        Color:Gris Espacial
                                    </p>
                                </div>

                            </div>
                        </StyledInfoOrder>
                        <div className='container-btn-order'>
                            <button className='btn-order'>
                                Ver mi factura
                            </button>
                        </div>
                    </StyledOrderInfo>


                </StyledOrder>

            </StyledContainerOrder>
        </StyledSectionOrders>
    )
}
