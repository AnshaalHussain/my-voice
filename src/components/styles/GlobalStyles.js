import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');


  font-family: 'Bebas Neue', sans-serif;


}

p {
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500&display=swap');

  font-family: 'Raleway', sans-serif;
  
  

}
`;
