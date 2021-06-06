import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Profile from "../../src/Screens/Profile/Profile";
import api from "../../api/API";

function User() {
  const { query } = useRouter();

  const [user, setUser] = useState();
  const [username, setUsernae] = useState("");

  const handleRequestAPI = useCallback(async () => {
    try {
      let { data } = await api.get(query.user);
      setUser(data);
    } catch (e) {
      console.info(e);
    }
  }, [query]);

  useEffect(() => {
    if (query) {
      handleRequestAPI();
    }
  }, [query]);
  return <Profile user={user} />;
}

export default User;
