import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from "./Category";
import Books from "./Books";
const Home = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Container>
      <CarouselB>
        <Carou {...settings}>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
              alt=""
            />
          </div>
        </Carou>
      </CarouselB>
      <Categoriessection>
        <FirstSection>
          <Categories>
            <RowOne>
              <Category
                title="Gaming accessories"
                src1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
                name1="Headsets"
                src2="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
                name2="Keyboards"
                src3="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
                name3="Computer mice"
                src4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
                name4="Chairs"
              />
              <Category
                title="Shop by Category"
                src1="https://m.media-amazon.com/images/I/817DLnXqEYL._AC_SY200_.jpg"
                name1="Computer accessories"
              />
              <Category
                title="AmazonBasics"
                src1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
              />
            </RowOne>
            <RowOne>
              <Category
                title="Deals & Promotions"
                src1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg"
              />
              <Category
                title="Electronics"
                src1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
              />
              <Category
                title="Computers & Accessories"
                src1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
              />
            </RowOne>
          </Categories>
          <CategorySidebar>
            <SignInAd>
              <span>
                <h1>Sign in for the best</h1>
                <h1>experience</h1>
              </span>
              <p>Sign in securely</p>
            </SignInAd>
            <ShipAd>
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
                alt=""
              />
            </ShipAd>
            <ReturnsAd>
              <span>
                <h1>Easy returns</h1>
              </span>
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg"
                alt=""
              />
              <p>Learn more</p>
            </ReturnsAd>
          </CategorySidebar>
        </FirstSection>
        <Books
          title="Top Sellers in Books for you"
          img1src="https://m.media-amazon.com/images/I/81m6us1KNaL._AC_SY200_.jpg"
          img2src="https://m.media-amazon.com/images/I/61zGOvBSgAL._AC_SY200_.jpg"
          img3src="https://m.media-amazon.com/images/I/71nzmEGI1eL._AC_SY200_.jpg"
          img4src="https://m.media-amazon.com/images/I/711c-uf6AFL._AC_SY200_.jpg"
          img5src="https://m.media-amazon.com/images/I/81UBpZdE+FL._AC_SY200_.jpg"
          img6src="https://m.media-amazon.com/images/I/81k1b6u4YvL._AC_SY200_.jpg"
          img7src="https://m.media-amazon.com/images/I/81k1b6u4YvL._AC_SY200_.jpg"
          img8src="https://m.media-amazon.com/images/I/91R7DZIZezL._AC_SY200_.jpg"
          img9src="https://m.media-amazon.com/images/I/81Nbid9mhHL._AC_SY200_.jpg"
          img10src="https://m.media-amazon.com/images/I/61BCx3mMAGL._AC_SY200_.jpg"
          img11src="https://m.media-amazon.com/images/I/81vTTD9oyjL._AC_SY200_.jpg"
        />
        <Books
          title="International top sellers in Home"
          img1src="https://m.media-amazon.com/images/I/81Fg9rCyK0L._AC_SY200_.jpg"
          img2src="https://m.media-amazon.com/images/I/9102gVkpx8L._AC_SY200_.jpg"
          img3src="https://m.media-amazon.com/images/I/711iWf6NIuL._AC_SY200_.jpg"
          img4src="https://m.media-amazon.com/images/I/91+MwjKR-2L._AC_SY200_.jpg"
          img5src="https://m.media-amazon.com/images/I/71snn4fpY6L._AC_SY200_.jpg"
          img6src="https://m.media-amazon.com/images/I/81+TAhPCzCL._AC_SY200_.jpg"
          img7src="https://m.media-amazon.com/images/I/81dl+zuJgvL._AC_SY200_.jpg"
          img8src="https://m.media-amazon.com/images/I/71kzB-RHsqS._AC_SY200_.jpg"
          img9src="https://m.media-amazon.com/images/I/71VcHb3LjHL._AC_SY200_.jpg"
          img10src="https://m.media-amazon.com/images/I/71TrhzecF6L._AC_SY200_.jpg"
          img11src="https://m.media-amazon.com/images/I/71FRckD2N8L._AC_SY200_.jpg"
        />
        <RowOne>
          <Category
            title="Kindle E readers"
            src1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_1x._SY304_CB639752818_.jpg"
          />
          <Category
            title="Comfy styles for her"
            src1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Sweatshirt_Quad_Cat_1x._SY116_CB418609101_.jpg"
            name1="Sweatshirts"
            src2="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Joggers_Quad_Cat_1x._SY116_CB418608748_.jpg"
            name2="Joggers"
            src3="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Cardigans_Quad_Cat_1x._SY116_CB418608722_.jpg"
            name3="Cardigans"
            src4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Tees_Quad_Cat_1x._SY116_CB418608878_.jpg"
            name4="Easy tees"
          />
          <Category
            title="Shop activity trackers and smartwatches"
            src1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
          />
          <Category
            title="Shop Pet supplies"
            src1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg"
          />
        </RowOne>
        <Books
          title="International top sellers in Kitchen"
          img1src="https://m.media-amazon.com/images/I/61Rmo6TPAjL._AC_SY200_.jpg"
          img2src="https://m.media-amazon.com/images/I/71fWCDNIftL._AC_SY200_.jpg"
          img3src="https://m.media-amazon.com/images/I/81y3HTZHzKL._AC_SY200_.jpg"
          img4src="https://m.media-amazon.com/images/I/81yABXXmG8L._AC_SY200_.jpg"
          img5src="https://m.media-amazon.com/images/I/71Tjw-tHHML._AC_SY200_.jpg"
          img6src="https://m.media-amazon.com/images/I/71nA60+a7ZS._AC_SY200_.jpg"
          img7src="https://m.media-amazon.com/images/I/81-CPV4wwiL._AC_SY200_.jpg"
          img8src="https://m.media-amazon.com/images/I/91mjSKsOIDL._AC_SY200_.jpg"
          img9src="https://m.media-amazon.com/images/I/715qOOqdKNL._AC_SY200_.jpg"
          img10src="https://m.media-amazon.com/images/I/617hF6+AB6L._AC_SY200_.jpg"
          img11src="https://m.media-amazon.com/images/I/71U8w1XSqpL._AC_SY200_.jpg"
        />
        <Books
          title="Top Sellers in Toys for you"
          img1src="https://m.media-amazon.com/images/I/71I-wOS+J+L._AC_SY200_.jpg"
          img2src="https://m.media-amazon.com/images/I/61poLHUBXNL._AC_SY200_.jpg"
          img3src="https://m.media-amazon.com/images/I/61i4i1T+xQL._AC_SY200_.jpg"
          img4src="https://m.media-amazon.com/images/I/71dfXgFTeIL._AC_SY200_.jpg"
          img5src="https://m.media-amazon.com/images/I/71U7iRz4X+L._AC_SY200_.jpg"
          img6src="https://m.media-amazon.com/images/I/81LEO4OpJRL._AC_SY200_.jpg"
          img7src="https://m.media-amazon.com/images/I/51BBUmANTUL._AC_SY200_.jpg"
          img8src="https://m.media-amazon.com/images/I/71T-bHkhcDL._AC_SY200_.jpg"
          img9src="https://m.media-amazon.com/images/I/91DO3gK0KsL._AC_SY200_.jpg"
          img10src="https://m.media-amazon.com/images/I/81tsciVr8AL._AC_SY200_.jpg"
          img11src="https://m.media-amazon.com/images/I/71S5Oi3fHQL._AC_SY200_.jpg"
        />
        <RowOne>
          <Category
            title="International top sellers in Home Improvement"
            src1="https://m.media-amazon.com/images/I/61ASu-5HgBL._AC_SY195_.jpg"
            name1="Hatch Baby Rest Sound Machine, Night Light and Time-to-Rise

                $59.99$99.99"
          />
          <Category
            title="Gaming merchandise"
            src1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Apparel_1x._SY116_CB667159060_.jpg"
            name1="Apparel"
            src2="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_1x._SY116_CB667159060_.jpg"
            name2="Hats"
            src3="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Figure_1x._SY116_CB667159060_.jpg"
            name3="Action figures"
            src4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_1x._SY116_CB667159063_.jpg"
            name4="Mugs"
          />
          <Category
            title="For your Fitness Needs"
            src1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"
          />
          <Category
            title="Popular products in Wireless internationally"
            src1="https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SY195_.jpg"
            name1="Apple iPhone 12 Pro Max, 128GB, Pacific Blue - Unlocked (Renewed Pre…

                    $969.00$1,064.00"
          />
        </RowOne>
        <Books
          title="Popular products in PC internationally"
          img1src="https://m.media-amazon.com/images/I/61QYugFCxPL._AC_SY200_.jpg"
          img2src="https://m.media-amazon.com/images/I/61QYugFCxPL._AC_SY200_.jpg"
          img3src="https://m.media-amazon.com/images/I/51DpOA3FvOL._AC_SY200_.jpg"
          img4src="https://m.media-amazon.com/images/I/71JlCWrpV9S._AC_SY200_.jpg"
          img5src="https://m.media-amazon.com/images/I/51hpQIc1eZL._AC_SY200_.jpg"
          img6src="https://m.media-amazon.com/images/I/71m03KItMZL._AC_SY200_.jpg"
          img7src="https://m.media-amazon.com/images/I/71SvgLer5wL._AC_SY200_.jpg"
          img8src="https://m.media-amazon.com/images/I/51VhzoEefjL._AC_SY200_.jpg"
          img9src="https://m.media-amazon.com/images/I/71+czFNaktL._AC_SY200_.jpg"
          img10src="https://m.media-amazon.com/images/I/51b6brP4S+L._AC_SY200_.jpg"
          img11src="https://m.media-amazon.com/images/I/61DYLoyNRWL._AC_SY200_.jpg"
        />
        <br />
        <br />
        <Books
          title="Everyday essentials you might like"
          img1src="https://m.media-amazon.com/images/I/818zswVI0mL._AC_SY200_.jpg"
          img2src="https://m.media-amazon.com/images/I/61GmecE1QoL._AC_SY200_.jpg"
          img3src="https://m.media-amazon.com/images/I/61ino6WZGsL._AC_SY200_.jpg"
          img4src="https://m.media-amazon.com/images/I/71ncS1BILkL._AC_SY200_.jpg"
          img5src="https://m.media-amazon.com/images/I/81OkwZ3gbwL._AC_SY200_.jpg"
          img6src="https://m.media-amazon.com/images/I/71UUNiFFFEL._AC_SY200_.jpg"
          img7src="https://m.media-amazon.com/images/I/81YpY-uTE2L._AC_SY200_.jpg"
          img8src="https://m.media-amazon.com/images/I/71clFOCQXlL._AC_SY200_.jpg"
          img9src="https://m.media-amazon.com/images/I/71+azWrlU3L._AC_SY200_.jpg"
          img10src="https://m.media-amazon.com/images/I/81Z9IR3sycL._AC_SY200_.jpg"
          img11src="https://m.media-amazon.com/images/I/519OW1zHAtL._AC_SY200_.jpg"
        />
        <RowOne>
          <Category title="Top Sellers in Baby Products for you" />
          <Category title="New arrivals in Toys" />
          <Category title="More everyday essentials to explore" />
          <Category title="Popular products in Apparel internationally" />
        </RowOne>
        <Books
          title="Home Décor Under $20"
          img1src="https://m.media-amazon.com/images/I/613+CG1dP1L._AC_SY200_.jpg"
          img2src="https://m.media-amazon.com/images/I/71iArV-kskL._AC_SY200_.jpg"
          img3src="https://m.media-amazon.com/images/I/61XYX1tzoTL._AC_SY200_.jpg"
          img4src="https://m.media-amazon.com/images/I/41d1tq6oesL._AC_SY200_.jpg"
          img5src="https://m.media-amazon.com/images/I/61j17FjPhtL._AC_SY200_.jpg"
          img6src="https://m.media-amazon.com/images/I/81AOpcqJfHL._AC_SY200_.jpg"
          img7src="https://m.media-amazon.com/images/I/71FGSz-g+BL._AC_SY200_.jpg"
          img8src="https://m.media-amazon.com/images/I/81xiJRmOwUL._AC_SY200_.jpg"
          img9src="https://m.media-amazon.com/images/I/71dcYplfvsS._AC_SY200_.jpg"
          img10src="https://m.media-amazon.com/images/I/61D4O85d+oL._AC_SY200_.jpg"
          img11src="https://m.media-amazon.com/images/I/61VxFel4T9L._AC_SY200_.jpg"
        />
      </Categoriessection>
    </Container>
  );
};

export default Home;
const Container = styled.main`
  width: 100vw;
  height: calc(100vh - 100px);
  background-color: #eaeded;
  position: relative;
`;
const CarouselB = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
const Carou = styled(Slider)`
  div {
    img {
      width: 100%;
      height: 100%;
    }
  }
  button {
    top: 20vh;
    right: 25px;
  }
  .slick-prev {
    left: 25px;
    z-index: 1;
  }
`;
const Categoriessection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;
  padding-top: 30vh;
  width: 100vw;
`;
const FirstSection = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin-bottom: 50px;
`;
const Categories = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0px 26px;
  grid-gap: 25px;
`;
const RowOne = styled.div`
  display: flex;
  grid-gap: 25px;
  margin-bottom: 25px;
`;
const CategorySidebar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 25px;
  margin-top: 25px;
`;
const SignInAd = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    font-size: 20px;
    font-weight: bold;
    color: #0f1111;
    letter-spacing: 0.9;
    margin-top: 5px;
  }
  a {
    width: 100%;
    padding: 10px 0;
    background-color: #f9ce0c;
    border-radius: 15px;
    color: #0f1111;
    margin-bottom: 30px;
    text-align: center;
    font-size: 14px;
    align: center;
    margin-top: 10px;
    &:hover {
      background-color: #f7ca00;
    }
  }
`;

const ShipAd = styled.div`
  width: 21vw;
  margin-top: 10px;
`;

const ReturnsAd = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 0 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 20px;
    font-weight: bold;
    color: #0f1111;
    letter-spacing: 0.9;
    margin-top: 5px;
  }
  img {
    width: 100%;
    height: 200px;
  }
`;
