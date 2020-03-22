import { DefaultTheme } from "styled-components";

function calcFontSize(size: number) {
  return size / 14;
}

export const theme: DefaultTheme = {
  primary: "#17C37B",
  secondry: "#009758",
  textColor: {
    primary: "#404040",
    red: "#FF6D6D",
  },
  shadow: "rgba(0,0,0,0.2) 0px 3px 20px 0px",
  fs13: calcFontSize(13) + "rem",
  fs14: calcFontSize(14) + "rem",
  fs15: calcFontSize(15) + "rem",
  fs16: calcFontSize(16) + "rem",
  fs20: calcFontSize(20) + "rem",
  fs25: calcFontSize(25) + "rem",
  mobile: "600px",
  tablet: "960px",
  laptop: "1280px",
  desktop: "1650px",
};
