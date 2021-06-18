import React from "react";
import IconInfo from "../IconInfo/IconInfo";
import { icons } from "../../Constants/icons";
import { Container, Title, Infos } from "./styles";

type RepoProps = {
  full_name: string;
  language: string;
  watchers_count: number;
  forks_count: number;
};

const Repo: React.FC<RepoProps> = ({
  full_name,
  watchers_count,
  language,
  forks_count,
}) => {
  return (
    <Container>
      <Title>{full_name}</Title>
      <Infos>
        <IconInfo name={watchers_count} icon={icons.star} />
        <IconInfo name={forks_count} icon={icons.fork} />
        <IconInfo name={language} icon={icons.linguage} />
      </Infos>
    </Container>
  );
};

export default Repo;
