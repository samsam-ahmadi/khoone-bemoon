import React, { ReactElement } from "react";
import styled from "styled-components";
import Box from "./Box";

export interface IPaint {
  imageSrc: string;
  painter: string;
}

export default function Paint({ imageSrc, painter }: IPaint): ReactElement {
  return (
    <PaintWrapper as="article" column alignItems="flex-end">
      <Image justifyContent="center" alignItems="center">
        <img src={imageSrc} alt={`خونه بمون - ${painter}`} />
      </Image>
      <p>{painter}</p>
    </PaintWrapper>
  );
}

const PaintWrapper = styled(Box)`
  width: 260px;
  height: 260px;
  margin: 7px;
`;

const Image = styled(Box)`
  border-radius: 13px;
  border: 1px solid #bfc6c3;
  width: 260px;
  height: 260px;
  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }
`;
