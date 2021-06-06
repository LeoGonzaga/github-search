import { ChangeEvent, useCallback, useState } from "react";
import { useRouter } from "next/router";
import { routes } from "../../routes";
type SearchUser = {
  username: string;
  handleChangeUsername: (event: ChangeEvent<HTMLInputElement>) => void;
  handleRedirectProfilePage: () => void;
};

const useSearchUser = (): SearchUser => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const handleChangeUsername = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setUsername(target.value);
    },
    []
  );

  const handleRedirectProfilePage = useCallback(() => {
    router.push(routes.profileUser + username);
  }, [username]);

  return { username, handleChangeUsername, handleRedirectProfilePage };
};

export default useSearchUser;
