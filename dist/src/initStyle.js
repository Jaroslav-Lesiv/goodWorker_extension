import { injectGlobal } from "styled-components";
import { color } from "./ui/variables";
import { APP_NAME } from "./config";
import { font } from "./ui/variables";
injectGlobal`
body {
    overflow-x: hidden !important;
}

#${APP_NAME} {
    @font-face {
        font-family: ${font.default};
        font-style: normal;
        font-weight: 700;
        src: url('/fonts/fonts/Roboto-Regular.ttf'); 
        }
    font-family: ${font.default};
}

`;
