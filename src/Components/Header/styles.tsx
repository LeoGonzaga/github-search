import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;

  @media (max-width: 800px) {
  margin-bottom: 50px;
  }
`;

export const BackButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`;
