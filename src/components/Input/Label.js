import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledLabel = styled.label`
  ${tw`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
`;

const Label = ({ label, name }) => {
  return <StyledLabel htmlFor={name}>{label}</StyledLabel>;
};

export default Label;
