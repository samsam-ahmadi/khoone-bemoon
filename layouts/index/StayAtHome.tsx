import React, { ReactElement } from "react";
import styled from "styled-components";
import Box from "components/Box";
import Button from "components/Button";
import Container from "components/Container";

export default function StayAtHome(): ReactElement {
  return (
    <StayAtHomeWrapper as="section">
      <Description column justifyContent="center">
        <h1>#خونه_بمون</h1>
        <p>با استفاده از قالب رو به رو خودتو بکش!</p>
        <p>نقاشیتو در صفحه اجتماعی خودت منتشر کن و دوستاتو دعوت کن!</p>
        <Box>
          <a href="http://twitter.com/khoone_bemoon" target="_blank">
            <Button>در توییتر مارو دنبال کنید</Button>
          </a>
          <a href="http://instagram.com/khoone_bemoon" target="_blank">
            <ButtonInstagram>
              <img
                src="/images/icons/instagram_white.svg"
                alt="خونه بمون - ایکون اینستاگرام"
              />
            </ButtonInstagram>
          </a>
        </Box>
      </Description>

      <DownloadDefault column alignItems="center" justifyContent="center">
        <img src="/images/default.png" alt="" />
        <a href="/images/khoone-bemoon.jpg" download>
          <Button outline>دانلود قالب </Button>
        </a>
      </DownloadDefault>
    </StayAtHomeWrapper>
  );
}

const StayAtHomeWrapper = styled(Container)`
  margin-top: 40px;
  @media (max-width: ${p => p.theme.mobile}) {
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
`;

const Description = styled(Box)`
  @media (max-width: ${p => p.theme.mobile}) {
    margin: 30px 0px;
  }
  h1 {
    color: ${p => p.theme.textColor.primary};
    font-size: 1.78571rem;
    margin-bottom: 7px;
  }
  p {
    color: ${p => p.theme.textColor.primary};
    font-size: 1.2857rem;
    font-weight: 400;
    max-width: 350px;
    @media (max-width: ${p => p.theme.mobile}) {
      max-width: 100%;
    }
  }

  button {
    margin-top: 10px;
  }
`;
const ButtonInstagram = styled(Button)`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 40px;
  padding: unset;
  width: 40px;

  img {
    height: 20px;
    width: 20px;
  }
`;

const DownloadDefault = styled(Box)`
  box-shadow: ${p => p.theme.shadow};
  border-radius: 25px;
  height: 250px;
  width: 250px;

  img {
    margin-bottom: 7px;
    width: 100px;
  }
`;
