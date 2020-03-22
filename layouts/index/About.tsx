import React, { ReactElement } from "react";
import styled from "styled-components";
import Box from "components/Box";
// import Container from "components/Container";

export default function About(): ReactElement {
  return (
    <AboutWrapper as="section" id="#about" name="about">
      <Box alignItems="center">
        <img
          src="/images/user-paints.png"
          srcSet="/images/user-paints.png 1400w,
         /images/user-paints@2x.png 1600w
         "
          sizes="(max-width:1400px) 100%,
          (min-width:1800px) 100%
         "
          alt="خونه بمون - نقاشی‌ها"
        />
      </Box>

      <Description column justifyContent="center" alignItems="flex-end">
        <h3>هدف ما سلامتی شماست.</h3>
        <p>
          ما در کمپین آزاد و مستقل #خونه_بمون نقاشی کشیدن رو بهونه کردیم برای
          نزدیک کردن دلهامون به هم دیگه و معتقدیم با این عشق و محبت که گوهر
          وجودی نقاشی های شماست، می تونیم پیام سلامتی رو به همدیگه هدیه بدیم.
        </p>
        <p>
          طبق آمارهای سازمان جهانی بهداشت و توصیه پزشکان عزیزمون، ماندن در خانه
          یکی از راه های مهم و کلیدی برای جلوگیری از گسترش بیماری کروناست. و
          رسوندن این پیام رو وظیفه ای مهم برای خودمون و همه میدونیم.
        </p>
        <Box justifyContent="center" className="hashtags">
          <HashTag>#خودتو_بکش</HashTag>
          <HashTag>#خونه_بمون</HashTag>
        </Box>
      </Description>
    </AboutWrapper>
  );
}

const AboutWrapper = styled(Box)`
  background-color: ${p => p.theme.primary};
  margin-top: 60px;
  height: 80vh;
  img {
    object-fit: contain;
    height: 100%;
    margin-top: 15px;
  }

  @media (max-width: ${p => p.theme.mobile}) {
    flex-direction: column;
    height: auto;
    padding: 35px 0px;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;

const Description = styled(Box)`
  text-align: left;
  color: #fff;
  padding: 25px;
  margin: auto;
  @media (max-width: ${p => p.theme.mobile}) {
    width: 100%;
    max-width: 410px;
  }
  h3 {
    font-size: 2.14rem;
    font-weight: 600;
    margin-bottom: 40px;
    @media (max-width: ${p => p.theme.mobile}) {
      font-size: 2rem;
    }
  }
  p {
    font-size: 1.1rem;
    max-width: 410px;
    text-align: justify;
    direction: rtl;
  }

  .hashtags {
    max-width: 410px;
  }
`;
const HashTag = styled.p`
  border: 0px;
  color: ${p => p.theme.textColor.primary};
  background-color: #fff;
  border-radius: 31px;
  padding: 9px 35px;
  margin: 30px 7px;
`;
