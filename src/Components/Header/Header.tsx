import React from "react";
import Logo from "../../../assets/logo_profile.svg";
import Back from "../../../assets/back.svg";
import { Container, BackButton } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Logo />
      <BackButton>
        <Back />
      </BackButton>
    </Container>
  );
};

export default Header;
