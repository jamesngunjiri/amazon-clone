import React from "react";
import styled from "styled-components";
import { Checkbox } from "../../node_modules/@mui/material/umd/material-ui.development";

const CartItem = () => {
  return (
    <Container>
      <div>
        <Image src="https://m.media-amazon.com/images/I/71RLMb2LvIL._AC_AA180_.jpg" />
        <Description>
          <h2>
            CUPSHE Women's Ruffled Lace Up One Piece Swimsuit, S BlackCUPSHE
            Women's Ruffled Lace Up One Piece Swimsuit, S Black
          </h2>
          <ItemStatus>In Stoc🇰</ItemStatus>
          <Gift>
            <Checkbox />
            <p>This is a gift</p>
            <p>Learn more</p>
          </Gift>
          <p>
            <span>Color: </span>Black
          </p>
          <p>
            <span>Size: </span>Small
          </p>
          <Quantity>
            <Qdrop>
              <p>Qty: </p>
              <select name="qty" id="1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </Qdrop>
            <hr />
            <p>Delete</p>
            <hr />
            <p>Save for later</p>
            <hr />
            <p>Compare with similar items</p>
          </Quantity>
        </Description>
        <Price>
          <p>$29.99</p>
        </Price>
      </div>
      <hr />
    </Container>
  );
};

export default CartItem;
const Container = styled.div`
  width: 100%;
  height: 35vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  hr {
    margin-bottom: 10px;
  }
`;
const Image = styled.img`
  width: 150px;
  height: 100%;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  h2 {
    font-weight: normal;
    color: #333;
    font-size: 20px;
    margin-bottom: 5px;
  }
  p {
    color: #333;
    font-size: 15px;
    margin-bottom: 5px;
    span {
      font-weight: bold;
    }
  }
  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;
const Price = styled.div`
  p {
    font-weight: bold;
    font-size: 20px;
  }
`;
const ItemStatus = styled.p`
  color: green;
  font-size: 14px;
`;
const Gift = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  p {
    margin-right: 4px;
  }
  a {
    &:hover {
      color: red;
    }
  }
`;
const Quantity = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-left: 0;
  padding-left: 0;
`;
const Qdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e3e6e6;
  padding: 5px;
  width: 5vw;
  height: 5vh;
  border-radius: 5px;
  box-sizing: 2px 5px 4px #333;
  select {
    background-color: #e3e6e6;
    outline: none;
    border: none;
  }
`;
