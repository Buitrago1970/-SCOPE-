import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const StyledProduct = styled.div`
 font-family: 'Cinzel', serif;
 /* font-family: 'Inter'; */
 background-image: linear-gradient(to right, #8e2de263, #4a00e07d);

 /* background-image: linear-gradient(to right, #fc5c7d94, #6a82fbc9); */
 border: 1px solid #d5c4ba;
 margin-top:20px;
 width: 14rem;
 height: 20rem;
 padding: 5px;

 .top{
   display:flex;
   justify-content: ${({ limited }) => limited ? 'space-between' : 'flex-end'};
   .limited-edition{
    display: ${({ limited }) => limited ? 'flex' : 'none'};
    flex-direction:column;
    width:15%;
    justify-content:center;
    font-size: 8px;
    align-items: center;
    
    .limited-edition-p{
      color: ${({ limited }) => limited ? '#000000' : '#D5C4BA'};
    }
    .limited-edition-p-number{
      color: #FF0000;
    }
   }
   .size-product{
    color: ${({ limited }) => limited ? '#000000' : '#D5C4BA'};
    font-size: 10px;
    min-height: 33px;
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

  display:flex;
   justify-content:space-around;
   margin:0 auto;
   border-top:  ${({ limited }) => limited ? '1px solid #000000' : '1px solid #D5C4BA'};
   margin-top:10px;
   padding-top:10px;
   font-size: 15px;
   color: ${({ limited }) => limited ? '#000000' : '#D5C4BA'};
   .info, .buy{
    cursor:pointer;
     padding:0 10px;
    border:  ${({ limited }) => limited ? '1px solid #000000' : '1px solid #D5C4BA'};
   }
   .price{
    font-size: 15px;
    display: flex;
    /* font-family: 'Inter'; */
    align-items: center;
   }

   `

const StyledCard = ({ id, limited, tallas, nombre, img, precio }) => {
  return (
    <StyledProduct id={id} limited={limited}>
      <div className="top">
        <div className="limited-edition">
          <p className='limited-edition-p'>Limited Edition</p>
          <p className='limited-edition-p-number'>7/8</p>
        </div>
        <p className="size-product" limited={limited}>{tallas.join("/")}</p>
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