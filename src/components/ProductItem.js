import React, { useState } from "react";
import styled from "styled-components";
import Rating from "@mui/material/Rating";

const ProductItem = () => {
  const [value, setValue] = useState(2);
  return (
    <Container>
      <Image src="https://images-na.ssl-images-amazon.com/images/I/518MOGQSDRL._AC_UL100_SR100,100_.jpg" />
      <Description>
        <div>Smismivo Tummy...</div>
        <StarRating>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <div href="#">20</div>
        </StarRating>
        <p>$28.99</p>
        <BuyingOptions>See all buying options</BuyingOptions>
      </Description>
    </Container>
  );
};

export default ProductItem;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
const Image = styled.img``;
const Description = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5px;
`;
const StarRating = styled.div`
  display: flex;
  align-items: center;
`;
const BuyingOptions = styled.div``;
