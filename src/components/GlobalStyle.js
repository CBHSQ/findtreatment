import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

const GlobalStyle = createGlobalStyle`
  body {
    ${tw`font-sans text-gray-darkest leading-normal`}
  }

  a {
    ${tw`text-blue hover:text-blue`}
  }

  @media print {
    * {
      ${tw`text-black`}
    }
  }
`;

export default GlobalStyle;
