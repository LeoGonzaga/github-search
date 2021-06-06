import React from "react";
import { GetStaticPaths } from "next";

import Profile from "../src/Screens/Profile/Profile";

// import { Container } from './styles';

function User({ user }) {
  return <Profile user={user} />;
}

export default User;

export const getStaticPaths: GetStaticPaths<{ params: string }> = async () => {
  
  return {
    props: {
      user: slug,
    },
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
