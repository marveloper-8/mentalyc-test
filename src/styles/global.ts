import { createGlobalStyle } from "styled-components";

export const theme = {};

export type MyProps = {
  theme: typeof theme;
};

export const GlobalStyles = createGlobalStyle<any>`
  ${props => `
    :root {
      // color
      --app-bg: #fff;
      --text-color: #000;
      --white-color: #fff;
      --violet-color: #731054;
      --violet-color-2: #DE0D6F;
      --gradient-violet-color: linear-gradient(295.67deg, #DE0D6F 16.23%, #731054 83.77%);
      --grey-color: #666666;
      --grey-color-2: #F2F2F2;
      --grey-color-3: #B2B2B2;
      --grey-color-4: #E5E5E5;
      --red-color-2: #FF6079;
      --green-color-2: #3BC171;

      // fonts
      --font-family: Montserrat;
    };
  `};
`;