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
          <p>
            ساخته شده با <span>عشق</span>
          </p>
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
