import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const Button = styled.button`
  ${tw`font-bold font-heading text-2xl py-2 px-4 rounded inline-flex items-center justify-center`}

  ${props =>
    props.primary &&
    tw`bg-blue hover:bg-blue border border-blue text-white hover:text-white`}

  ${props => props.secondary && tw`w-full bg-gray-100 hover:bg-gray-200 border`}

  ${props => props.outline && tw`font-normal text-blue border border-blue`}

  ${props =>
    props.base &&
    tw`hover:text-gray-900 text-gray-900 bg-gray-300 hover:bg-gray-400`}

  ${props => props.disable && tw`hover:bg-blue cursor-not-allowed opacity-50`}

  ${props => props.link && tw`text-blue hover:text-blue font-normal p-0`}
`;

export default Button;
