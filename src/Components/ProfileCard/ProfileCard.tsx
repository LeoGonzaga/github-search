import React from "react";
import IconInfo from "../IconInfo/IconInfo";
import TotalRepos from "../TotalRepos/TotalRepos";
import { icons } from "../../Constants/icons";
import {
  Container,
  Avatar,
  Username,
  Infos,
  WrapperInfos,
  InstagramLink,
  WrapperInfosItem,
} from "./styles";

type User = {
  login: string;
  avatar_url: string;
  repos_url: string;

  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  company: string;
  location: string;
};

const ProfileCard: React.FC<User> = ({
  login,
  avatar_url,
  bio,
  followers,
  following,
  location,
  public_repos,
  company,
  repos_url,
}: User) => {
  return (
    <Container>
      <Avatar src={avatar_url} />
      <Infos>
        <Username>{login}</Username>
        <InstagramLink>{bio}</InstagramLink>
        <WrapperInfos>
          <WrapperInfosItem>
            <IconInfo name={location} icon={icons.location} />
            <IconInfo name={company} icon={icons.home} />
          </WrapperInfosItem>
          <WrapperInfosItem>
            <IconInfo name={followers} icon={icons.people} />
            <IconInfo name={following} icon={icons.following} />
          </WrapperInfosItem>
        </WrapperInfos>
      </Infos>
      <TotalRepos public_repos={public_repos} />
    </Container>
  );
};

export default ProfileCard;
