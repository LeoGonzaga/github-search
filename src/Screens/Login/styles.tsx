import styled from "styled-components";
import { colors } from "../../Constants/colors";
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.primary};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchName = styled.input`
  max-width: 18rem;
  width: 18rem;

  border: none;
  border-bottom: 2px solid ${colors.details};
  background-color: ${colors.primary};

  text-align: center;
  padding: 10px;
  outline: none;
`;
