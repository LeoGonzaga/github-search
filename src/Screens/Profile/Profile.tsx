import React from "react";

import { Container } from "./styles";

const Profile: React.FC = ({ user }) => {
  return <Container>{user}</Container>;
};

export default Profile;
