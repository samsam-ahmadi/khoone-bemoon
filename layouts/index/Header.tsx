import React, { ReactElement } from "react";
import styled from "styled-components";
import Box from "components/Box";
import Link from "next/link";
import Container from "components/Container";

export default function Header(): ReactElement {
  return (
    <HeaderWrap as="header" justifyContent="space-between">
      <img src="/images/logo/main-logo.svg" alt="خونه بمون - لوگو" />
      <Navbar justifyContent="flex-end" alignItems="center" as="nav">
        {links.map((item, index) => (
          <Link key={`menu-link${index}`} href={item.link}>
            <a>{item.text}</a>
          </Link>
        ))}
      </Navbar>
    </HeaderWrap>
  );
}

const HeaderWrap = styled(Container)`
  padding-top: 40px;
  img {
    height: 140px;
  }
  @media (max-width: ${p => p.theme.mobile}) {
    flex-direction: column;
    align-items: center;
    img {
      height: 100px;
    }
  }
`;

const Navbar = styled(Box)`
  a {
    color: ${p => p.theme.textColor.primary};
    font-weight: 600;
    margin: 0px 10px;
  }
  @media (max-width: ${p => p.theme.mobile}) {
    justify-content: center;
    margin-top: 30px;
  }
`;

interface IMenuLinks {
  link: string;
  text: string;
}

const links: IMenuLinks[] = [
  {
    link: "#about",
    text: "درباره کمپین",
  },
  {
    link: "#paints",
    text: "نقاشی‌ها",
  },
];
