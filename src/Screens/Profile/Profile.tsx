import React from "react";
import Header from "../../Components/Header/Header";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";

import { Container, Wrapper } from "./styles";

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
      <Header />
      <Wrapper>
        <ProfileCard />
      </Wrapper>
    </Container>
  );
};

export default Profile;
