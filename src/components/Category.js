import React from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';

const Category = ({title, src1, name1, src2, name2, src3, name3, src4, name4}) => {
  return <Container>
      <CategoryTitle>
          {title}
      </CategoryTitle>
      <CategoryItems>
          <RowOne>
              {src1 && <CategoryItem src={src1} name={name1} />}
              {src2 && <CategoryItem src={src2} name={name2} />}
          </RowOne>
          <RowOne>
              {src3 && <CategoryItem src={src3} name={name3} />}
              {src4 && <CategoryItem src={src4} name={name4} />}
          </RowOne>
      </CategoryItems>
      <CategoryLink href='#'>See more</CategoryLink>
  </Container>;
};

export default Category;
const Container = styled.div`
  width: 21vw;
  background-color: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
`
const CategoryTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #0F1111;
  padding: 5px 0;
`
const CategoryItems = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  padding-bottom: 10px;
`
const RowOne = styled.div`
  display: flex;
`
const CategoryLink = styled.a`

`