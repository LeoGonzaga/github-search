import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Profile from "../../src/Screens/Profile/Profile";
import api from "../../api/API";

type User = {
  login: string;
  avatar_url: string;
  repos_url: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
};

function User() {
  const router = useRouter();
  const { username } = router.query;
  const [user, setUser] = useState({} as User);

  const handleRequestAPI = useCallback(async () => {
    try {
      let { data } = await api.get(username);
      console.log(data);
      setUser(data?.user);
    } catch (e) {
      console.info(e);
    }
  }, [username]);

  useEffect(() => {
    if (username) {
      handleRequestAPI();
    }
  }, [username]);

  return <Profile user={user} />;
}

export default User;
