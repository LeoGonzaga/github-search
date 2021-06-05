import React from "react";

import { ActionButton, Container, SearchName } from "./styles";
import Logo from "../../../assets/logo.svg";

const SearchUser: React.FC = () => {
  return (
    <Container>
      <Logo />
      <SearchName placeholder="Enter username" />
      <ActionButton>
        <p>Search</p>
      </ActionButton>
    </Container>
  );
};

export default SearchUser;
