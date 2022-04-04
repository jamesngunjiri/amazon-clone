import { Checkbox } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';
import ProductItem from './ProductItem';

const Cart = () => {
  return <Container>
      <ShoppingCart>
          <h1>Shopping Cart</h1>
          <PriceTitle>
              <p>Price</p>
          </PriceTitle>
          <hr />
          <CartItem />
          <CartItem />
          <SubTotal>
              <p>Subtotal (<span>2 </span>items): </p>
              <Spant>$58.88</Spant>
          </SubTotal>
      </ShoppingCart>
      <Sidebar>
          <CheckView>
              <SubT>
                <p>Subtotal (<span>2 </span>items): </p>
                <Spant>$58.88</Spant>
              </SubT>
              <CheckT>
                  <Checkbox />
                  <p>This order contains a gift</p>
              </CheckT>
              <WholeDiv>
                <CheckoutBtn href="#">Proceed to checkout</CheckoutBtn>
              </WholeDiv>
          </CheckView>
          <SponsoredProducts>
              <h2>Sponsored Products related to items in your cart</h2>
              <ProductItem />
              <ProductItem />
          </SponsoredProducts>
      </Sidebar>
  </Container>;
};

export default Cart;
const Container = styled.div` 
  display: flex;
  justify-content: space-between;
  margin: 10px;
`
const ShoppingCart = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  h1{
      color: #333;
      font-weight: normal;
      font-size: 30px;
      margin-bottom: 10px;
  }
`
const Sidebar = styled.div`
  width: 30%;
`
const PriceTitle = styled.div` 
  display: flex;
  justify-content: flex-end;
  p{
      color: #333;
  }
`
const SubTotal = styled.div` 
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  p{
      margin-right: 4px;
  }
`
const Spant = styled.div` 
  font-weight: bold;
  font-size: 20px;
`
const CheckView = styled.div` 
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  padding: 10px;
  
`
const WholeDiv = styled.div` 
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const CheckT = styled.div` 
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const SubT = styled.div` 
  display: flex;
  font-size: 20px;
  p{
      margin-right: 2px;
  }
`
const CheckoutBtn = styled.a`
  width: 100%; 
  margin: 5px;
  background-color: #f9d843;
  border-radius: 8px;
  padding: 8px;
  text-align: center;
  margin-right: 10px;
  font-size: 12px;
  font-weight: bold;
  color: #333;
  &:hover{
      background-color: #F7CA00;
  }
`
const SponsoredProducts = styled.div` 
  background-color: #fff;
  margin: 10px;
  border-radius: 5px;
  width: 98%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  h2{
      color: #333;
      font-size: 20px;
  }
`
