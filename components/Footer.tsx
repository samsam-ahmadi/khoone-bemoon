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

      <Box className="footer">
        <Info>
          <Box className="made-with-love">
            <p>ساخته شده با</p>
            <Heart />
            <p>در ایران</p>
          </Box>
          <Github
            as="a"
            href="https://github.com/amin3mej/khoone-bemoon"
            target="_blank"
          >
            <svg
              height="32"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
            توسعه دهید
          </Github>
        </Info>
        <Box className="social" justifyContent="flex-end">
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
  margin: 25px auto;

  img {
    width: 25px;
    height: 25px;
    margin: 0px 7px;
  }
  .social {
    width: auto;
  }

  @media (max-width: ${p => p.theme.mobile}) {
    .footer {
      align-items: center;
    }
  }
`;

const Logo = styled(Box)`
  img {
    width: 250px;
    height: 250px;
  }
`;

const Github = styled(Box)`
  width: auto;
  color: ${p => p.theme.textColor.primary};
  margin-right: 10px;
  svg {
    width: 25px;
    height: 25px;
    margin: 0px 7px;
  }
`;

const Info = styled(Box)`
  p {
    direction: rtl;
    font-size: ${p => p.theme.fs15};
    color: ${p => p.theme.textColor.primary};
    span {
      color: ${p => p.theme.textColor.red};
    }
  }

  .made-with-love {
    width: auto;
  }

  @media (max-width: ${p => p.theme.mobile}) {
    flex-direction: column;
    svg,
    a {
      margin-right: 0px;
    }
  }
`;
const Heart = styled.div`
  animation: heartbeat 2.3s infinite;
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
    left: 12px;
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
