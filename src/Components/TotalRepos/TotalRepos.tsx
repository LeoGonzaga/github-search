import React from "react";
import Git from "../../../assets/git.svg";
import { Container, Title, Total, Wrapper } from "./styles";

type Total = {
  public_repos: number;
};
const TotalRepos: React.FC<Total> = ({ public_repos }) => {
  return (
    <Container>
      <Title>Total de repositórios:</Title>
      <Wrapper>
        <Git />
        <Total>{public_repos}</Total>
      </Wrapper>
    </Container>
  );
};

export default TotalRepos;
