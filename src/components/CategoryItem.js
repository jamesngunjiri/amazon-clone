import React from 'react';
import styled from 'styled-components';

const CategoryItem = ({src, name}) => {
  return <Container>
      <img src={src} alt="" />
      <span>{name}</span>
  </Container>;
};

export default CategoryItem;
const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 5px 0;
    display: flex;
    flex-direction: column;
    img{
        width: 100%;
        height: 80%;
    }
`