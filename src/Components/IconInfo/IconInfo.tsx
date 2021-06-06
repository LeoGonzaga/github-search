import React from "react";
import Home from "../../../assets/home.svg";
import Location from "../../../assets/location.svg";
import People from "../../../assets/people.svg";
import Following from "../../../assets/people (2).svg";
import Star from "../../../assets/star.svg";
import Fork from "../../../assets/fork.svg";
import Linguage from "../../../assets/linguage.svg";
import { Container } from "./styles";

type IconType = {
  name: string;
  icon: string;
};
const IconInfo: React.FC<IconType> = ({ name, icon }) => {
  const Icon = () => {
    switch (icon) {
      case "Home":
        return <Home />;
      case "Location":
        return <Location />;
      case "People":
        return <People />;
      case "Star":
        return <Star />;
      case "Following":
        return <Following />;
      case "Fork":
        return <Fork />;
      case "Linguage":
        return <Linguage />;
      default:
        break;
    }
  };

  return (
    <Container>
      {Icon()}
      <p>{name}</p>
    </Container>
  );
};

export default IconInfo;
