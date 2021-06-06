import React from "react";

import { Container } from "./styles";

type User = {
  user: any;
};

const Profile: React.FC<User> = ({ user }) => {
  console.log(user);
  return <Container><h1>{user?.login}</h1></Container>;
};

export default Profile;
