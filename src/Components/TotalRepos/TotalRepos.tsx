import React from "react";
import Git from "../../../assets/git.svg";
import { Container, Title, Total, Wrapper } from "./styles";

const TotalRepos: React.FC = () => {
  return (
    <Container>
      <Title>Total de repositórios:</Title>
      <Wrapper>
        <Git />
        <Total>98</Total>
      </Wrapper>
    </Container>
  );
};

export default TotalRepos;
