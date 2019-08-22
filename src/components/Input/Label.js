import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const StyledLabel = styled.label`
  ${tw`block`}

  span {
    ${tw`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}

    ${props =>
      props.inline &&
      tw`inline normal-case tracking-normal text-gray-900 text-sm font-normal`}

    ${props =>
      props.lg &&
      tw`normal-case tracking-normal text-gray-900 text-2xl font-heading`}
  }
`;

const Label = props => {
  return (
    <>
      {props.inline ? (
        <StyledLabel {...props}>
          {props.children}
          <span>{props.value}</span>
        </StyledLabel>
      ) : (
        <StyledLabel {...props}>
          {props.help ? (
            <div css={tw`flex justify-between items-center`}>
              <span>{props.value}</span>
              <Link to={props.help.url} css={tw`mb-2 text-sm`}>
                {props.help.text}
              </Link>
            </div>
          ) : (
            <span>{props.value}</span>
          )}
          {props.children}
        </StyledLabel>
      )}
    </>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  help: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string
  }),
  inline: PropTypes.bool,
  lg: PropTypes.bool,
  value: PropTypes.string.isRequired
};

export default Label;
