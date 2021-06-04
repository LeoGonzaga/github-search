import React from "react";

import { Container, SearchName } from "./styles";
import Logo from "../../../assets/logo.svg";

const Login: React.FC = () => {
  return (
    <Container>
      <Logo />
      <SearchName placeholder="Enter username" />
    </Container>
  );
};

export default Login;
