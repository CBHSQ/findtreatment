import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const Button = styled.button`
  ${props =>
    props.primary &&
    tw`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded leading-tight border border-blue-500`}

  ${props =>
    props.outline &&
    tw`text-blue-600 font-bold py-3 px-4 rounded leading-tight border border-blue-500`}

  ${props =>
    props.disable && tw`hover:bg-blue-500 cursor-not-allowed opacity-50`}
`;

export default Button;
