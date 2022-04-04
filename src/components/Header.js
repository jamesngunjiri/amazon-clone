import React, { useState } from "react";
import styled from "styled-components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link, useNavigate } from "react-router-dom";
import Deliverto from "./Deliverto";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
const Header = () => {
  const [disp, setDisp] = useState("hidden");
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    e.preventDefault();
    await signOut(auth)
      .then(() => {
        console.log("signed out");
        navigate("/login");
      })
      .catch(() => {
        console.log("sign out failed");
      });
  };

  const handleDisp = () => {
    if (disp === "hidden") {
      setDisp("visible");
    } else {
      setDisp("hidden");
    }
  };
  return (
    <Container>
      <Deliverto disp={disp} handleDisp={handleDisp} />
      <HeaderOne>
        <HeaderTitle>
          {auth.currentUser ? (
            <Link to="/home">
              <Logo
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
              />
            </Link>
          ) : (
            <Link to="/">
              <Logo
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
              />
            </Link>
          )}
          <Description onClick={handleDisp}>
            <LocationOnIcon />
            <div>
              <span>Deliver to</span>
              <SpanTwo href="#">Kenya</SpanTwo>
            </div>
          </Description>
        </HeaderTitle>
        <HeaderSearch>
          <SearchDropDown>
            <option value="1">All Departments</option>
            <option value="2">Arts & Crafts</option>
            <option value="3">Automotive</option>
            <option value="4">Baby</option>
            <option value="5">Beauty & Personal Care</option>
            <option value="6">Books</option>
          </SearchDropDown>
          <SearchInput />
          <SearchButton>
            <SearchIcon />
          </SearchButton>
        </HeaderSearch>
        <HeaderMenu>
          <Country>
            <span>
              <img src="/flag.png" alt="" />
            </span>
            <Arrod>
              <ArrowDropDownIcon />
            </Arrod>
          </Country>
          {auth.currentUser ? (
            <Link to="/login">
              <SignIn onClick={handleSignOut}>
                <HelloR>
                  <HelloRt2>
                    <p>welcome, </p>
                    <p>{auth.currentUser.email}</p>
                  </HelloRt2>
                  <HelloRb>Sign Out</HelloRb>
                </HelloR>
                <Arrod>
                  <ArrowDropDownIcon />
                </Arrod>
              </SignIn>
            </Link>
          ) : (
            <Link to="/signup">
              <SignIn>
                <HelloR>
                  <HelloRt>
                    <p>Hello, </p>
                    <p>Sign in</p>
                  </HelloRt>
                  <HelloRb>Account & Lists</HelloRb>
                </HelloR>
                <Arrod>
                  <ArrowDropDownIcon />
                </Arrod>
              </SignIn>
            </Link>
          )}
          <Link to="/returnsandorders">
            <Returns>
              <HelloR>
                <HelloRt>
                  <p>Returns</p>
                </HelloRt>
                <HelloRb href="#">& Orders</HelloRb>
              </HelloR>
            </Returns>
          </Link>
          <Link to="/cart">
            <Cart>
              <div>
                <ShoppingCartOutlinedIcon />
              </div>
              <span>Cart</span>
              <Counter>0</Counter>
            </Cart>
          </Link>
        </HeaderMenu>
      </HeaderOne>
      <HeaderTwo>
        <MenuTag>
          <MenuOutlinedIcon />
          <p>All</p>
        </MenuTag>
        <NavItem href="#">Today's Deals</NavItem>
        <NavItem href="#">Customer Service</NavItem>
        <NavItem href="#">Registry</NavItem>
        <NavItem href="#">Gift Cards</NavItem>
        <NavItem href="#">Sell</NavItem>
      </HeaderTwo>
    </Container>
  );
};

export default Header;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderOne = styled.div`
  width: 100%;
  height: 60px;
  background-color: #131921;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderTwo = styled.div`
  color: #fff;
  background-color: #232f3e;
  height: 40px;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  border: none;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HeaderSearch = styled.div`
  background-color: #fff;
  border-radius: 5px;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  margin-right: 20px;
  position: relative;

  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 2px solid #ff9900;
      border-radius: 5px;
    }
  }
`;
const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Logo = styled.img`
  width: 7vw;
  height: 40px;
  margin-right: 20px;
  padding-top: 5px;
  position: relative;
  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 1px solid #fff;
    }
  }
`;
const Description = styled.p`
  display: flex;
  color: #fff;
  align-items: flex-end;
  margin-right: 10px;
  position: relative;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 12px;
    }
  }

  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 1px solid #fff;
    }
  }
`;
const SpanTwo = styled.a`
  font-weight: bold;
  cursor: pointer;
  color: #fff;
`;
const SearchInput = styled.input`
  flex: 1;
  line-outline: none;
  border: none;
  font-size: 14px;
  width: 100%;
  padding: 0 5px;
  z-index: 1;

  &:focus {
    border: none;
    line-outline: none;
    text-decoration: none;
    outline: none;
  }
`;
const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3a847;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 0 5px 5px 0;
  &:hover {
    background: #ea9125;
  }
`;
const SearchDropDown = styled.select`
  background-color: #dadada;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 0;
  border: none;
  border-radius: 5px 0 0 5px;

  &:focus {
    border: 2px solid #ff9900;
    border-radius: 5px 0 0 5px;
    cursor: pointer;
  }
  &:hover {
    background: #bcb7b7;
  }
`;
const Country = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 5px;
  padding: 0 5px;
  position: relative;

  span {
    width: 2vw;
    height: 2vh;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 1px solid #fff;
    }
  }
`;
const SignIn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  padding: 0 5px;
  cursor: pointer;
  position: relative;
  a {
    text-decoration: none;
    color: #fff;
  }

  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 1px solid #fff;
    }
  }
`;

const Returns = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  padding: 0 5px;
  cursor: pointer;
  position: relative;
  a {
    text-decoration: none;
    color: #fff;
  }
  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 1px solid #fff;
    }
  }
`;

const Cart = styled.div`
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0 5px;
  cursor: pointer;
  font-size: 15px;
  position: relative;
  div {
    transform: scale(1.8);
    margin-right: 3px;
    margin-top: 5px;
    position: relative;
  }
  span {
    margin-top: 10px;
  }
  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 1px solid #fff;
    }
  }
`;

const HelloR = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
`;

const HelloRt = styled.div`
  display: flex;
  color: #fff;
  font-size: 12px;
`;
const HelloRt2 = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 12px;
`;

const HelloRb = styled.a`
  font-weight: bold;
`;
const Arrod = styled.div`
  color: #a7acb2;
  padding-top: 20px;
`;
const Counter = styled.p`
  color: #cf7708;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  padding-left: 8px;
  padding-top: 2px;
  position: absolute;
  top: 0;
  left: 10;
  right: 50;
  bottom: 16;
`;
const MenuTag = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0 5px;
  position: relative;
  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 1px solid #fff;
    }
  }
`;
const NavItem = styled.a`
  color: #fff;
  margin: 0 5px;
  padding: 0 5px;
  position: relative;
  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 1px solid #fff;
    }
  }
`;
