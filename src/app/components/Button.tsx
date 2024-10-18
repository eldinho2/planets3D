import styled from "styled-components";

export const Button = styled.div`
span {
  display: flex;
  margin: 10px 0px;
  position: relative;
  top: 20px;
  left: 400px;
  border: 1px solid grey;
  padding: 5px;
  background-color: black;
  color: white;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  cursor: pointer;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 10px;
    top: 30px;
    left: 64px;
  }
}
`;