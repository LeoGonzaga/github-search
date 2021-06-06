import React from "react";
import Header from "../../Components/Header/Header";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import Repo from "../../Components/Repo/Repo";

import { Container, Wrapper, WrapperRepo } from "./styles";

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
    <>
      <Header />
      <Container>
        <Wrapper>
          <ProfileCard />
        </Wrapper>
        <WrapperRepo>
          <Repo />
          <Repo />
          <Repo />
        </WrapperRepo>
      </Container>
    </>
  );
};

export default Profile;
