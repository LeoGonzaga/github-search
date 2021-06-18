import styled, { keyframes } from "styled-components";
import { colors } from "../../Constants/colors";

const looping = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  border: 16px solid ${colors.text}; /* Light grey */
  border-top: 16px solid ${colors.details}; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${looping} 2s linear infinite;


  display: flex;
  align-self: center;
`;
