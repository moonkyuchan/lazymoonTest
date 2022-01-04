import React from "react";
import styled from "styled-components";

interface PropsType {
  data: any;
}

const PhotoCard: React.FC<PropsType> = ({ data }) => {
  return <PhotoCardBack src={data}></PhotoCardBack>;
};

const PhotoCardBack = styled.img`
  width: 80px;
  height: 80px;
  transition: all 0.1s linear;
  border: 1.5px solid white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2, 1.2);
  }
`;

export default PhotoCard;
