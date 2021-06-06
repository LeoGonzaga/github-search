import React from "react";
import { ActionButton, Container, SearchName } from "./styles";
import Logo from "../../../assets/logo.svg";
import useSearchUser from "./useSearchUser";

const SearchUser: React.FC = () => {
  const { handleChangeUsername, username, handleRedirectProfilePage } =
    useSearchUser();
  return (
    <Container>
      <Logo />
      <SearchName
        value={username}
        placeholder="Enter username"
        onChange={handleChangeUsername}
      />
      <ActionButton onClick={handleRedirectProfilePage}>
        <p>Search </p>
      </ActionButton>
    </Container>
  );
};

export default SearchUser;
