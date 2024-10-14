import styled from "styled-components";

const StyledCard = styled.div`
  width: 255px;
  border-top: cyan;
  text-align: center;
`;

const StyledImg = styled.img`
  width: 20px;
  height: 20px;
`;

const StyledName = styled.p`
  color: #8c98c6;
  font-size: 12px;
`;

const StyledFollowersNumber = styled.h1`
  font-size: 56px;
  letter-spacing: -2px;
`;

const StyledFollowers = styled.h2`
  color: #8c98c6;
  font-size: 12px;
`;
const StyledToday = styled.p`
  color: #1eb589;
  font-size: 12px;
`;

export {
  StyledImg,
  StyledName,
  StyledFollowersNumber,
  StyledFollowers,
  StyledToday,
  StyledCard,
};
