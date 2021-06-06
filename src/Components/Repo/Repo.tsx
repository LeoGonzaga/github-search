import React from "react";
import IconInfo from "../IconInfo/IconInfo";
import { icons } from "../../Constants/icons";
import { Container, Title, Infos } from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Title>Acelerar-Audio-Whats</Title>
      <p>A simple to do list in a pure vanilla javascript </p>
      <Infos>
        <IconInfo name="2" icon={icons.star} />
        <IconInfo name="22" icon={icons.fork} />
        <IconInfo name="Javascript" icon={icons.linguage} />
      </Infos>
    </Container>
  );
};

export default Repo;
