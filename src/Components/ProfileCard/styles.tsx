import styled from "styled-components";
import { colors } from "../../Constants/colors";

export const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;


  @media(max-width: 800px) {
    flex-direction: column;
  }
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border:4px solid ${colors.details};

  margin: 30px;
  
  @media(max-width: 800px) {
   margin-bottom: 10px;
  }
`;

export const Username = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.details};
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const InstagramLink = styled.a`
  font-size: 16px;
  color: ${colors.text};
`;

export const WrapperInfos = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  align-items: center;

  @media(max-width: 800px) {
   margin-bottom: 10px;
  }
`;

export const WrapperInfosItem = styled.div`
  display: flex;
  padding: 4px;
`;
