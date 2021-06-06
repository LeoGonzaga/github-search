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

const ProfileCard: React.FC = () => {
  return (
    <Container>
      <Avatar src="https://avatars.githubusercontent.com/u/15916913?v=4" />
      <Infos>
        <Username>LéoGonzaga</Username>
        <InstagramLink>@leogonzaga__</InstagramLink>
        <WrapperInfos>
          <WrapperInfosItem>
            <IconInfo name="Itajuba-MG" icon={icons.location} />
            <IconInfo name="D1" icon={icons.home} />
          </WrapperInfosItem>
          <WrapperInfosItem>
            <IconInfo name="132" icon={icons.people} />
            <IconInfo name="22" icon={icons.following} />
            <IconInfo name="444" icon={icons.star} />
          </WrapperInfosItem>
        </WrapperInfos>
      </Infos>
      <TotalRepos />
    </Container>
  );
};

export default ProfileCard;
