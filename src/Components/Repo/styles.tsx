import styled from "styled-components";
import { colors } from "../../Constants/colors";

export const Container = styled.div`
  background-color: ${colors.secundary};
  height: 135px;
  width: 282px;
  margin: 20px;
  padding: 20px;



  p {
    color: ${colors.text};
    padding-top: 5px;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.text};
`;

export const Infos = styled.div`
  display: flex;
  padding-top: 15px;
`;