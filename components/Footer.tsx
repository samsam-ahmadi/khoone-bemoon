import React, { ReactElement } from "react";
import styled from "styled-components";
import Box from "./Box";
import Container from "./Container";

export default function Footer(): ReactElement {
  return (
    <FooterWrapper justifyContent="space-between" as="footer" column>
      <Logo justifyContent="center">
        <img src="/images/logo/main-logo.svg" alt="خونه بمون - لوگو" />
      </Logo>

      <Box>
        <Box>
          <p>ساخته شده با</p>
          <Heart />
        </Box>
        <Box justifyContent="flex-end">
          {socials.map((social, index) => (
            <a key={`social-link${index}`} href={social.link} target="_blank">
              <img src={social.src} alt={social.alt} />
            </a>
          ))}
        </Box>
      </Box>
    </FooterWrapper>
  );
}

const FooterWrapper = styled(Container)`
  margin: 25px 0px;
  p {
    font-size: ${p => p.theme.fs15};
    color: ${p => p.theme.textColor.primary};
    span {
      color: ${p => p.theme.textColor.red};
    }
  }

  img {
    width: 25px;
    height: 25px;
    margin: 0px 7px;
  }
`;

const Logo = styled(Box)`
  img {
    width: 250px;
    height: 250px;
  }
`;

const Heart = styled.div`
  animation: heartbeat 1s infinite;
  height: 25px;
  position: relative;
  top: 3px;
  width: 25px;
  &:before,
  &:after {
    position: absolute;
    content: "";
    background: ${p => p.theme.textColor.red};
    border-radius: 40px 40px 0 0;
    height: 18px;
    left: 10px;
    transform: rotate(-45deg);
    top: 0;
    transform-origin: 0 100%;
    width: 12px;
  }
  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }

  @keyframes heartbeat {
    0% {
      transform: scale(0.75);
    }
    20% {
      transform: scale(1);
    }
    40% {
      transform: scale(0.75);
    }
    60% {
      transform: scale(1);
    }
    80% {
      transform: scale(0.75);
    }
    100% {
      transform: scale(0.75);
    }
  }
`;

interface ISocials {
  src: string;
  alt: string;
  link: string;
}

const socials: ISocials[] = [
  {
    src: "/images/icons/instagram_black.svg",
    alt: "خونه بمون - ایکون اینستاگرام",
    link: "http://instagram.com/khoone_bemoon",
  },
  {
    src: "/images/icons/twitter.svg",
    alt: "خونه بمون - ایکون توییتر",
    link: "http://twitter.com/khoone_bemoon",
  },
];
