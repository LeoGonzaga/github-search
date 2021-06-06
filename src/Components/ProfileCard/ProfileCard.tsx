import React from "react";
import IconInfo from "../IconInfo/IconInfo";
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
            <IconInfo name="Itajuba-MG" icon="Location" />
            <IconInfo name="D1" icon="Home" />
          </WrapperInfosItem>
          <WrapperInfosItem>
            <IconInfo name="132" icon="People" />
            <IconInfo name="22" icon="Home" />
            <IconInfo name="444" icon="Star" />
          </WrapperInfosItem>
        </WrapperInfos>
      </Infos>
    </Container>
  );
};

export default ProfileCard;
