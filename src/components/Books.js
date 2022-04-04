import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Books = ({ title, img1src, img2src, img3src, img4src, img5src, img6src, img7src, img8src, img9src, img10src, img11src}) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 12
      };
  return <Container>
        <h2>{title}</h2>
        <Carou {...settings}>
        <div>
            <img src={img1src} alt="" />
          </div>
          <div>
            <img src={img2src} alt="" />
          </div>
          <div>
            <img src={img3src} alt="" />
          </div>
          <div>
            <img src={img4src} alt="" />
          </div>
          <div>
            <img src={img5src} alt="" />
          </div>
          <div>
            <img src={img6src} alt="" />
          </div>
          <div>
            <img src={img7src} alt="" />
          </div>
          <div>
            <img src={img8src} alt="" />
          </div>
          <div>
            <img src={img9src} alt="" />
          </div>
          <div>
            <img src={img10src} alt="" />
          </div>
          <div>
            <img src={img11src} alt="" />
          </div>
          <div>
            <img src={img1src} alt="" />
          </div>
          <div>
            <img src={img2src} alt="" />
          </div>
          <div>
            <img src={img3src} alt="" />
          </div>
          <div>
            <img src={img4src} alt="" />
          </div>
          <div>
            <img src={img5src} alt="" />
          </div>
          <div>
            <img src={img6src} alt="" />
          </div>
          <div>
            <img src={img7src} alt="" />
          </div>
          <div>
            <img src={img8src} alt="" />
          </div>
          <div>
            <img src={img9src} alt="" />
          </div>
          <div>
            <img src={img10src} alt="" />
          </div>
          <div>
            <img src={img11src} alt="" />
          </div>
        </Carou>
  </Container>
};

export default Books;
const Container = styled.div`
  background: #fff;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  margin-right: 10px;
  h2{
      padding-left: 4px;
  }
`
const Carou = styled(Slider)`
  div{
      margin: 5px 0;
      width: 100%;
      height: 90%;
      margin: 0 10px;
      img{
          width: 250px;
          height: 250px;
          padding: 4px;
          object-fit: contain;
      }
  }
  .slick-prev{
      left: 25px;
      top: 120px;
      background: #aaa;
      border-radius: 5px;
      border: 1px solid #00f;
      color: blue;
      width: 30px;
      height: 40%;
      z-index: 1;
  }
  .slick-next{
      right: 25px;
      top: 120px;
      background: #aaa;
      border-radius: 5px;
      border: 1px solid #00f;
      color: blue;
      width: 30px;
      height: 40%;
  }
`