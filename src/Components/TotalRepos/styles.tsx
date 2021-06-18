import styled from "styled-components";
import { colors } from "../../Constants/colors";

export const Container = styled.div`
  background-color: ${colors.secundary};
  width: 200px;
  height: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  padding: 10px 0px;

  @media(max-width: 800px) {
    margin-left: 0px;
  }
 
`;

export const Title = styled.p`
  color: ${colors.text};
`;

export const Total = styled.p`
  font-size: 22px;
  font-weight: bold;
  padding-left: 5px;
  color: ${colors.text};
`;

export const Wrapper = styled.div`
  display: flex;
  padding-top: 5px;
`;
