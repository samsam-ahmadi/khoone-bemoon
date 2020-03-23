import React, { ReactElement } from "react";
import styled from "styled-components";
import Box from "components/Box";
import Container from "components/Container";
import toFa from "core/toFa";

export default function HowToPaint(): ReactElement {
  return (
    <HowToPaintWrapper as="section">
      <Container column>
        <h3>کجا و چطور نقاشیم را منتشر کنم؟</h3>

        <PaintsList justifyContent="space-evenly">
          {items.map((item, index) => (
            <ItemWrapper key={`item-how${index}`} column alignItems="center">
              <span>{toFa(index + 1)}</span>
              <p>{item}</p>
            </ItemWrapper>
          ))}
        </PaintsList>
      </Container>
    </HowToPaintWrapper>
  );
}

const HowToPaintWrapper = styled(Box)`
  background-color: ${p => p.theme.primary};
  margin-top: 60px;
  height: 500px;
  width: 100%;
  @media (max-width: ${p => p.theme.mobile}) {
    height: auto;
    padding: 35px 0px;
  }
  h3 {
    font-size: 2.14rem;
    font-weight: 600;
    margin-bottom: 40px;
    color: #fff;
    margin: 60px 0px;
    @media (max-width: ${p => p.theme.mobile}) {
      font-size: 1.6rem;
    }
  }
`;

const PaintsList = styled(Box)`
  @media (max-width: ${p => p.theme.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ItemWrapper = styled(Box)`
  width: 280px;
  color: #fff;
  @media (max-width: ${p => p.theme.mobile}) {
    margin-bottom: 20px;
  }
  span {
    background-color: #fff;
    border-radius: 50%;
    color: ${p => p.theme.textColor.primary};
    height: 40px;
    text-align: center;
    line-height: 44px;
    margin-bottom: 20px;
    width: 40px;
  }
  p {
    text-align: center;
    font-size: 1.28rem;
  }
`;

const items = [
  "نقاشی های خودتون رو می تونید در اینستاگرام و توییتر منتشر کنید.",
  "با دعوت کردن دوستانتون، اونها رو به چالش کشیدن نقاشی دعوت کنید",
  "نقاشیاتونو با هشتگ #خونه_بمون و #خودتو_بکش منتشر کنید، ما همه اونها رو میبینم و در سایت و شبکه های احتماعی با اسم خودتون به اشتراک میگذاریم.",
];
