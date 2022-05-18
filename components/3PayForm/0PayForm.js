import React, { useState } from 'react';
import styled from 'styled-components'
import Image from 'next/image'

import PayStep from "./1PayStep"
import DirStep from "./2DirStep"
import PhoneStep from './3PhoneStep';

const StyledForm = styled.div`
 font-family: 'Cinzel', serif;
 color: #FFFFFF;
 h1{
    /* font-family: 'Copperplate Gothic Bold'; */
    margin-top:5.1%;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 56px;
 }
 h2{
    /* font-family: 'Copperplate Gothic Bold'; */
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
 }
 h3{
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 28px;
 }
 a{
     display:flex;
     align-items:center;
     justify-content:center;
     cursor:pointer;
    /* font-family: 'Copperplate Gothic Bold'; */
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 28px;
    padding: 10px 25px;
    border: 3px solid white;
    text-align:center;
    border-radius: 5px;
 }
 background-color: pink;
 display:flex;
 /* max-height:70vh; */
 width:100%;
 grid-area: SectionShopProducts;
 position:relative;
 .imgBg{
    /* position:relative; */
    /* height:70vh; */
    display:flex;
 }`

const StyledTitle = styled.div`
 display:flex;
 flex-direction:column;
 position:absolute;
 width:100%;
 left: 0;
 right: 0;
 top:0;
 bottom:0;
 justify-content: space-between;
 align-items:center;
 .title{
    
    display:flex;
    flex-direction:column;
    align-items:center;
 }
 .pay-methods-top{
     height:25%;
     width:35%;
     justify-content: space-between;
    display:flex;
    flex-direction:column;
    position:relative;
    .svgIcon{
        position:absolute;
        left: 7%;
    }
 }
 .pay-methods-bottom{
     margin-top:5%;
     height:15%;
     width:35%;
     justify-content: space-between;
    display:flex;
    flex-direction:column;
    position:relative;
 }
 .contra-Entrega{
     height:13%;
     width:35%;
     justify-content: space-between;
    display:flex;
    flex-direction:column;
 }


 .progress-line{
     width:100%;
     align-items:center;
     display:flex;
     flex-direction:column;
     margin-bottom:5px;
     position:relative;
     h2{
         
         margin-bottom:5px;
        font-size: 20px;
        font-weight: 600;
        text-align:center;
     }
 }
 
 input{
     color:white;
     background:none;
    display:flex;
     align-items:center;
     justify-content:center;
     cursor:pointer;
    /* font-family: 'Copperplate Gothic Bold'; */
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 28px;
    border: 3px solid white;
    text-align:center;
    border-radius: 5px;
    
 }
 .inputs{
     
    padding: 10px 25px;
 }
 `

const StyledButtonContainer = styled.div`
 justify-content:${({back}) => back ? 'space-between' : 'flex-end'};
 width:100%;
 display:flex;
 .nextContainer{
    width:20%;
     margin-right:5%;
     text-align:center;
     background:none;
     border:none;
     h2{
        font-family: 'Cinzel', serif;
        color:white;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 17px;
        }
     .flechita{
        /* font-weight: 800; */
        margin-bottom:5px;
     }
     .flechita-back{
        transform: scaleX(-1);
        margin-bottom:5px;
     }
     &:nth-child(1) {
        margin-left:${({back}) => back ? '5%' : '0'};
        display:${({back}) => back ? 'block' : 'none'};
     }
 }
 `

const StyledProgress = styled.div`
 width:80%;
 align-items:center;
 display:flex;
 flex-direction:column;
     .line{
         position:relative;
        width: 100%;
        height: 6px;
        background: #000000;
        border-radius: 30px;
     }
     .progress{
        position:relative;
        top:-6px;
        left:0;
        right:1;
        /* width: 378px; */
        width:${({progress}) => progress === 0 ? `${100/3}%` : progress === 1 ? `${100/2}%` : `${100/1}%`};
        height: 6px;
        transition: 0.5s ease;
        background: #FFFFFF;
        border-radius: 30px;
     }`

const PayForm = () => {
    const [page,setPage] = useState(0)
    const [back,setBack] = useState(false)
    const [formData,setFormData] = useState({
        pay:"",
        password:"",
    })

    const HandleBack = () =>{
        if ( page === 1){
            setBack(current => false)
        }else{
            setBack(current => true)
        }
    }
    const HandleNext = () =>{
        if ( page === 0){
            setBack(current => true)
        }
    }
    const PageDisplay = () =>{
        if ( page === 0 ){
            return <DirStep />
        }else if ( page === 1 ){
            return <PhoneStep />
        }else{
            return <PayStep />
        }
    }
  return (
    <StyledForm>
        <div className='imgBg'>
            <Image className="img" src="/3/3bg.png" alt="codigo de barras" width="1890px" height="100" objectFit="cover" />
        </div>
            <StyledTitle>
                {PageDisplay()}
                <StyledButtonContainer back={back ? 1 : 0}>
                    <button className='nextContainer'
                    disabled={page === 0}
                        onClick={() => {
                        setPage((p) => p -1)
                        HandleBack()
                        }}>
                        <a className='flechita-back'>
                            <Image className='flechitaImg' src="/3/flechita.svg" alt="flechita" width="19px" height="19px"/>
                        </a>
                        {/* <p>siguiente</p> */}
                        <h2>anterior</h2>
                    </button>
                    <button className='nextContainer'
                    disabled={page === 2}
                        onClick={() => {
                        setPage((p) => p +1)
                        HandleNext()
                        }}>
                        <a className='flechita'>
                            <Image className='flechitaImg' src="/3/flechita.svg" alt="flechita" width="19px" height="19px"/>
                        </a>
                        {/* <p>siguiente</p> */}
                        <h2>siguiente</h2>
                    </button>
                </StyledButtonContainer>
                <div className='progress-line'>
                    <h2>{page+1}/3</h2>
                    <StyledProgress progress={page}>
                        <div className='line'></div>
                        <div progress={page} className='progress'></div>
                    </StyledProgress>
                </div>
            </StyledTitle>
    </StyledForm>
  )
}

export default PayForm