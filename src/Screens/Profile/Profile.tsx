import React from "react";

import { Container } from "./styles";

type User = {
  login: string;
  avatar_url: string;
  repos_url: string;

  bio: string;
  followers: number;
  following: number;
  public_repos: number;
};

const Profile: React.FC<User> = ({ login }) => {
  return (
    <Container>
      <h1>{login}</h1>
    </Container>
  );
};

export default Profile;
