import React from "react";
import Home from "../../../assets/home.svg";
import Location from "../../../assets/location.svg";
import People from "../../../assets/people.svg";
import Star from "../../../assets/star.svg";
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