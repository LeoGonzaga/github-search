import React from "react";
import Logo from "../../../assets/logo_profile.svg";
import Back from "../../../assets/back.svg";

import useHeader from "./useHeader";
import { Container, BackButton } from "./styles";

const Header: React.FC = () => {
  const { handleRedirectSearchPage } = useHeader();
  return (
    <Container>
      <Logo />
      <BackButton onClick={handleRedirectSearchPage}>
        <Back />
      </BackButton>
    </Container>
  );
};

export default Header;
