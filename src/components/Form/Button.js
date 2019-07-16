import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const Button = styled.button`
  ${tw`font-bold py-3 px-4 rounded leading-tight inline-flex items-center justify-center`}

  ${props =>
    props.primary &&
    tw`bg-blue-500 hover:bg-blue-700 border border-blue-500 text-white`}

  ${props => props.secondary && tw`w-full bg-gray-100 hover:bg-gray-200 border`}

  ${props => props.outline && tw`text-blue-600 border border-blue-500`}

  ${props =>
    props.base &&
    tw`hover:text-gray-900 text-gray-900 bg-gray-300 hover:bg-gray-400`}

  ${props =>
    props.disable && tw`hover:bg-blue-500 cursor-not-allowed opacity-50`}
`;

export default Button;
