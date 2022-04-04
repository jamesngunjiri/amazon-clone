import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Deliverto = ({ disp, handleDisp }) => {
  return (
    <Container disp={disp}>
      <OuterDiv>
        <Header>
          <h2>Choose your location</h2>
          <p onClick={handleDisp}>X</p>
        </Header>
        <OuterBody>
          <p>
            Delivery options and delivery speeds may vary for different
            locations
          </p>
          <Link to="login" onClick={handleDisp}>
            <SignInBtn href="#">Sign in to see your addresses</SignInBtn>
          </Link>
          <ZipCode>
            <hr />
            <p>or enter a US zip code</p>
            <hr />
          </ZipCode>
          <ZipCodeInput>
            <input type="text" />
            <button>Apply</button>
          </ZipCodeInput>
          <ZipCode2>
            <hr />
            <p>or</p>
            <hr />
          </ZipCode2>
          <ZipDropdown>
            <select name="countries" id="1">
              <option value="1">Kenya</option>
              <option value="2">Uganda</option>
              <option value="3">Tanzania</option>
              <option value="4">Ethiopia</option>
              <option value="5">Sudan</option>
            </select>
          </ZipDropdown>
          <DoneBtn>
            <Link to="#" onClick={handleDisp}>
              Done
            </Link>
          </DoneBtn>
        </OuterBody>
      </OuterDiv>
    </Container>
  );
};

export default Deliverto;
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  visibility: ${(props) => props.disp};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const OuterDiv = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 30vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;
const Header = styled.div`
  background: #f0f0f0;
  border-radius: 10px 10px 0 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  h2 {
    font-size: 20px;
  }
  p {
    font-weight: bold;
    cursor: pointer;
  }
`;
const OuterBody = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  p {
    font-size: 14px;
    color: #7a7c7c;
    margin-bottom: 10px;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const SignInBtn = styled.a`
  width: 100%;
  background-color: #f7ca00;
  border-radius: 10px;
  color: #333;
  padding: 5px 15px;
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
`;
const ZipCode = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  hr {
    color: #333;
    width: 35%;
    margin-bottom: 5px;
  }
  p {
    padding: 3px 0;
    flex: 1;
    font-size: 10px;
    text-align: center;
  }
`;
const ZipCode2 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  hr {
    color: #333;
    width: 45%;
    margin-bottom: 5px;
  }
  p {
    padding: 3px 0;
    flex: 1;
    font-size: 10px;
    text-align: center;
  }
`;
const ZipCodeInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  input {
    flex: 1;
    margin-right: 10px;
    padding: 8px 3px;
    &:focus {
      outline: 1px solid #333;
      border: 5px solid #c8f3fa;
    }
  }
  button {
    width: 25%;
    padding: 8px 3px;
    background-color: #fff;
    border: 1px solid #333;
    border-radius: 10px;
    cursor: pointer;
    font-size: 14px;
    box-shadow: 2px 5px 2px #eee;
    color: #333;
  }
`;
const ZipDropdown = styled.div`
  widht: 100%;
  margin-bottom: 10px;
  select {
    width: 100%;
    background: #eee;
    border: none;
    box-shadow: 2px 4px 2px #ddd;
    color: #333;
    padding: 5px;
    border-radius: 5px;
    &:hover {
      background: #ccc;
    }
  }
`;
const DoneBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  a {
    background-color: #f7ca00;
    border-radius: 8px;
    color: #333;
    padding: 5px 15px;
    font-size: 12px;
    font-weight: bold;
  }
`;
