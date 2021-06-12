import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import api from "../../../api/API";
import Header from "../../Components/Header/Header";
import Loader from "../../Components/Loader/Loader";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import Repo from "../../Components/Repo/Repo";
import { routes } from "../../routes";

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

type Username = {
  user?: string | undefined;
};

const Profile: React.FC = () => {
  const router = useRouter();
  const { user }: Username = router.query;
  const [dataUser, seDatatUser] = useState({} as User);
  const [repos, setRepos] = useState([]);

  const handleRequestAPI = useCallback(async () => {
    try {
      if (user) {
        let { data } = await api.get(user);
        seDatatUser(data);
        await getAllRepos();
      }
    } catch (e) {
      router.push(routes.searchUser);
      console.info(e);
    }
  }, []);

  const getAllRepos = useCallback(async () => {
    try {
      let { data } = await api.get(`${user}/repos`);
      setRepos(data);
    } catch (e) {
      console.info(e);
    }
  }, [dataUser]);

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
              <ProfileCard
                login={dataUser?.login}
                avatar_url={dataUser?.avatar_url}
                bio={dataUser?.bio}
                followers={dataUser?.followers}
                public_repos={dataUser?.public_repos}
                following={dataUser?.following}
                company={dataUser?.company}
                location={dataUser?.location}
              />
            </Wrapper>
            {repos ? (
              <WrapperRepo>
                {repos?.map(
                  (
                    { full_name, language, watchers_count, forks_count },
                    index
                  ) => (
                    <Repo
                      key={index}
                      full_name={full_name}
                      language={language}
                      forks_count={forks_count}
                      watchers_count={watchers_count}
                    />
                  )
                )}
              </WrapperRepo>
            ) : (
              <Loader />
            )}
          </Container>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Profile;
