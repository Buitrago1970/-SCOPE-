import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const StyledProduct = styled.div`
 font-family: 'Cinzel', serif;
 width:290px;
 height:339px;
 background-color: ${({ limited }) => limited ? '#E9DCCE' : '#1C1C1C'};
 margin:3px;
 border: 1px solid #000000;
 .top{
   display:flex;
   justify-content: ${({ limited }) => limited ? 'space-between' : 'flex-end'};
   margin-left: 5px;
   margin-right: 5px;
   .limited-edition{
    position:relative;
    display: ${({ limited }) => limited ? 'flex' : 'none'};
    flex-direction:column;
    width:15%;
    justify-content:center;
    
    h5{
      color: ${({ limited }) => limited ? '#000000' : '#D5C4BA'};
      top:5px;
      width:5px;
      position:absolute;
      font-size: 10px;
      margin: 0;
    }
    h6{
      
      top:30px;
      position:relative;
      color: red;
      margin: 0;
      align-items:center;
      text-align:center;
    }
   }
   .size-product{
    color: ${({ limited }) => limited ? '#000000' : '#D5C4BA'};
   }
 }
 .product-name{
   
   display:flex;
   justify-content:center;
   margin:0 auto;
   color: ${({ limited }) => limited ? '#000000' : '#D5C4BA'};
   font-weight: 700;
   font-size: 15px;
 }`

const StyledImage = styled.div`
cursor:pointer;
display:flex;
  align-items:center;
   justify-content:center;
   margin:0 auto;
   `
const StyledBottom = styled.div`
width:90%;
display:flex;
  /* align-items:flex-end; */
   justify-content:space-around;
   margin:0 auto;
   border-top:  ${({ limited }) => limited ? '1px solid #000000' : '1px solid #D5C4BA'};
   margin-top:40px;
   padding-top:10px;
   font-size: 15px;
   color: ${({ limited }) => limited ? '#000000' : '#D5C4BA'};
   .info, .buy{
    cursor:pointer;
     padding:0 10px;
    border:  ${({ limited }) => limited ? '1px solid #000000' : '1px solid #D5C4BA'};
   }
   /* .buy{
    cursor:pointer;
     padding:0 10px;
    border:  ${({ limited }) => limited ? '1px solid #000000' : '1px solid #D5C4BA'};
   } */
   `

const StyledCard = ({ id, limited, tallas, nombre, img, precio }) => {
  return (
    <StyledProduct id={id} limited={limited}>
      <div className="top">
        <div className="limited-edition">
          <h5>Limited Edition</h5>
          <h6>7/8</h6>
        </div>
        <h5 className="size-product" limited={limited}>{tallas.join("/")}</h5>
      </div>
      <h3 className="product-name" limited={limited}>SCOPE {nombre}</h3>
      <StyledImage>
        <Image className="img" src={img} alt="" width={210} height={210} objectFit="cover" />
      </StyledImage>
      <StyledBottom limited={limited}>
        <div className="info">INFO</div>
        <div className="price">${precio}</div>
        <div className="buy">BUY</div>
      </StyledBottom>
    </StyledProduct>
  )
}

export default StyledCard