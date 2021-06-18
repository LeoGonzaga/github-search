import React from "react";

import { ActionButton, Container, SearchName, LoadingIcon } from "./styles";
import Logo from "../../../assets/logo.svg";
import useSearchUser from "./useSearchUser";

const SearchUser: React.FC = () => {
  const {
    handleChangeUsername,
    username,
    handleRedirectProfilePage,
    loading,
  } = useSearchUser();
  return (
    <Container>
      <Logo />
      <form>
        <SearchName
          value={username}
          placeholder="Enter username"
          onChange={handleChangeUsername}
        />
        <ActionButton
          onClick={handleRedirectProfilePage}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
          type="submit"
        >
          {loading ? <LoadingIcon color="#fff" /> : <p>Search </p>}
        </ActionButton>
      </form>
    </Container>
  );
};

export default SearchUser;
