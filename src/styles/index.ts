import { createGlobalStyle, css } from "styled-components";

const colorVariants = {
  primary: "#11A2DD",
  grey: "#888",
  error: "#E12F26",
  disabled: "#CCCCCC",
} as const;

const cssColorVariants = css`
  ${Object.entries(colorVariants)
    .map(([key, value]) => `--${key}-color: ${value};`)
    .join(" ")}
`;

export const COLOR_VARIANTS = Object.keys(colorVariants).reduce(
  (acc, current) => {
    acc[current as keyof typeof colorVariants] = `var(--${current}-color)`;

    return acc;
  },
  {} as Record<keyof typeof colorVariants, string>
);

export type ColorsVariant = keyof typeof colorVariants;

const GlobalStyles = createGlobalStyle`
  :root {
   /* Variant colors  */     
   ${cssColorVariants}

    --white-color: #ffffff;

    /* Text Shadow  */ 
    --background-light-opacity: rgb(0,0,0, 0.8); 

    /* Font Colors */
    --typeface-light-color: #888;
    --typeface-medium-color: #555;
    --typeface-dark-color: #111111;
    
    /* Borders  */
    --border-light-color: #f4f4f4;
    --border-color: #dddddd;
    --container-border-radius: 4px;

    /* Shadow colors  */   
    --background-box-shadow: 3px 2px 10px 0px rgba(150, 150, 150, 0.4);

   /* Background  */ 
    --background-dark-color: #444444;
    --background-light-color: #fdfdfd;
    --background-white-color: #ffffff;

    /* Font-family  */  
     --typeface-sans-serif: Arial, Helvetica, sans-serif;

  }


  /* Resets and defaults */
  body, p, section, h1, h2 ,h3 ,h4 ,h5 , h6, article, span, ul, li, dialog {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
      vertical-align: baseline;
      font-family: var(--typeface-sans-serif);
      line-height: 1;
      color: var(--typeface-dark-color);
    }

    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
    }
    
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    width: 100vw;

      .root{
        width: 100%;
        height: 100%;
      .im-app{
        width: 100%;
        height: 100%;
      }
      .dialog-root{
        width: 100%;
        height: 100%;
      }
    }


  } 


`;

export default GlobalStyles;
