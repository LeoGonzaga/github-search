import styled from "styled-components";
import { motion } from "framer-motion";

import { colors } from "../../Constants/colors";

export const Container = styled(motion.div)`
  background-color: ${colors.secundary};
  height: 115px;
  min-width: 300px;
  margin: 20px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p {
    color: ${colors.text};
    padding-top: 5px;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.text};
  word-wrap: break-word;
`;

export const Infos = styled.div`
  display: flex;
  padding-top: 15px;
`;
