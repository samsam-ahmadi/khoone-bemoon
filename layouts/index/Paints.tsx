import React, { ReactElement } from "react";
import Box from "components/Box";
import styled from "styled-components";
// import Paint from "components/Paint";
import Container from "components/Container";

export default function Paints(): ReactElement {
  return (
    <PaintsWrapper as="section" column id="#paints" name="paints">
      <h3>نقاشی‌ها</h3>
      <Box flex="1" column justifyContent="center" alignItems="center">
        {/* will uncomment after add paints */}
        {/* {painters.map((paint, index) => (
          <Paint key={`paint-${index}`} {...paint} />
        ))} */}

        <img
          src="/images/empty-painter.png"
          srcSet="/images/empty-painter.png 1400w,
         /images/empty-painter@2x.png 1600w
         "
          sizes="(max-width:1400px) 100%,
          (min-width:1800px) 100%
         "
          alt="خونه بمون - نقاشی‌ها"
        />

        <p>به زودی نقاشی های زیبای شما رو اینجا منتشر میکنیم</p>
      </Box>
    </PaintsWrapper>
  );
}

const PaintsWrapper = styled(Container)`
  height: 80vh;
  margin: 60px auto;
  h3 {
    font-size: 2.14rem;
    font-weight: 600;
    margin-bottom: 40px;
    color: ${p => p.theme.textColor.primary};
  }

  img {
    max-width: 400px;
  }

  p {
    font-weight: 500;
    color: ${p => p.theme.textColor.primary};
  }

  @media (max-width: ${p => p.theme.mobile}) {
    img {
      width: 100%;
    }
  }
`;

// interface IPaint {
//   imageSrc: string;
//   painter: string;
// }

// const painters: IPaint[] = [
//   {
//     imageSrc: "/images/default.png",
//     painter: "samsam ahmadi",
//   },
//   {
//     imageSrc: "/images/default.png",
//     painter: "samsam ahmadi",
//   },
//   {
//     imageSrc: "/images/default.png",
//     painter: "samsam ahmadi",
//   },
// ];
