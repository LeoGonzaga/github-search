import styled from "styled-components";
import { colors } from "../../Constants/colors";

export const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border:4px solid ${colors.details};
`;

export const Username = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.details};
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;

export const InstagramLink = styled.h1`
  font-size: 16px;
  color: ${colors.text};
`;

export const WrapperInfos = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const WrapperInfosItem = styled.div`
  display: flex;
  padding: 4px;
`;
