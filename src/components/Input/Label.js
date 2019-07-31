import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';

const StyledLabel = styled.label`
  ${tw`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
`;

const Label = ({ label, name }) => {
  return <StyledLabel htmlFor={name}>{label}</StyledLabel>;
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Label;
