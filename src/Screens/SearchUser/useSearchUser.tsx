import { ChangeEvent, useCallback, useState } from "react";
import { useRouter } from "next/router";
import { routes } from "../../routes";
type SearchUser = {
  username: string;
  loading: boolean;
  handleChangeUsername: (event: ChangeEvent<HTMLInputElement>) => void;
  handleRedirectProfilePage: (e: any) => void;
};

const useSearchUser = (): SearchUser => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleChangeUsername = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setUsername(target.value);
    },
    []
  );

  const handleRedirectProfilePage = useCallback(
    (e) => {
      e.preventDefault();
      setLoading(true);
      if (username.length < 3) {
        alert("Ops! Digite um usuário com o nome válido.");
        setLoading(false);
        return;
      }

      router.push(routes.profileUser + username);
      setLoading(false);
    },
    [username]
  );

  return {
    username,
    handleChangeUsername,
    handleRedirectProfilePage,
    loading,
  };
};

export default useSearchUser;
