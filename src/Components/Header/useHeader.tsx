import { useRouter } from "next/router";
import { useCallback } from "react";
import { routes } from "../../routes";

type Header = {
  handleRedirectSearchPage: () => void;
};

const useHeader = (): Header => {
  const router = useRouter();
  const handleRedirectSearchPage = useCallback(() => {
    router.push(routes.searchUser);
  }, []);

  return {
    handleRedirectSearchPage,
  };
};

export default useHeader;
