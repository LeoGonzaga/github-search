import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { colors } from "../../Constants/colors";

const looping = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;
export const LoadingIcon = styled(AiOutlineLoading3Quarters)`
  animation: ${looping} 2s linear infinite;
`;
export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
  }
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
  color: ${colors.text};
`;

export const ActionButton = styled(motion.button)`
  background-color: ${colors.details};
  height: 45px;
  width: 18rem;

  max-width: 18rem;
  margin-top: 1rem;

  border-radius: 5px;
  border: none;
  outline: none;

  &:hover {
    filter: brightness(80%);
  }

  p {
    color: ${colors.text};
    font-weight: 700;
  }
`;
