import React from 'react'
import styled from 'styled-components'


const StyledConfirmOrder = styled.div`
 background-color:black;
 color:#0DFF09;
 h1{
    font-weight: 400;
    font-size: 35px;
    line-height: 39px;
 }
 h2{
    font-weight: 400;
    font-size: 20px;
    line-height: 22px;
 }
 h3{
    font-weight: 400;
    font-size: 20px;
    line-height: 22px;
 }
 p{
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 14px;
 }
 h4{
    font-weight: 400;
    font-size: 20px;
    line-height: 22px;
 }
 `
//top bar
const StyledTopBar = styled.div`
display: flex;
justify-content: space-between;
margin: 15px 10px;
p{
    margin: 0;
}

`

const ConfirmOrder = () => {
  return (
    <StyledConfirmOrder>
        <StyledTopBar>
                <div className='container'>
                    <p>A VERY GOOD</p>
                    <p>JOB © 2022</p>
                </div>
                <div className='container'>
                    <p>WEDNESDEY</p>
                    <p>{`(CO)`}</p>
                </div>
                <div className='container'>
                    <p>03:32:12 </p>
                    <p>AM</p>
                </div>
            </StyledTopBar>
            <div className='top'>
                <h2>{`Gracias por tu compra <3`}</h2>
                <p>{`:)`}</p>
            </div>
    </StyledConfirmOrder>
  )
}

export default ConfirmOrder