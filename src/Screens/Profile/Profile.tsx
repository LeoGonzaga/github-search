import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import api from "../../../api/API";
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
  location: string;
  company: string;
};

const Profile: React.FC = () => {
  const router = useRouter();
  const { user } = router.query;
  const [dataUser, seDatatUser] = useState({} as User);

  const handleRequestAPI = async () => {
    try {
      let { data } = await api.get(user);
      seDatatUser(data);
    } catch (e) {
      console.info(e);
    }
  };

  useEffect(() => {
    if (user) {
      handleRequestAPI();
    }
  }, [user]);

  return (
    <>
      {dataUser?.login ? (
        <>
          <Header />
          <Container>
            <Wrapper>
              {console.log(dataUser)}
              <ProfileCard
                login={dataUser?.login}
                avatar_url={dataUser?.avatar_url}
                bio={dataUser?.bio}
                followers={dataUser?.followers}
                public_repos={dataUser?.public_repos}
                repos_url={dataUser?.repos_url}
                following={dataUser?.following}
                company={dataUser?.company}
                location={dataUser?.location}
              />
            </Wrapper>
            <WrapperRepo>
              <Repo />
              <Repo />
              <Repo />
            </WrapperRepo>
          </Container>
        </>
      ) : (
        <h2>...</h2>
      )}
    </>
  );
};

export default Profile;
