import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const StyledLabel = styled.label`
  ${tw`block mb-4`}

  ${props => props.inline && tw`flex`}

  span {
    ${tw`block font-bold font-heading uppercase text-sm mb-2`}

    ${props =>
      props.inline &&
      tw`font-sans normal-case leading-none mb-1 sm:leading-normal sm:-mt-px`}

    ${props => props.large && tw`normal-case text-2xl md:text-3xl`}
  }

  p {
    ${tw`text-sm text-gray-darker`}
  }
`;

const Label = props => {
  return (
    <>
      {props.inline ? (
        <StyledLabel {...props}>
          {props.children}
          <div>
            <span>{props.labelText}</span>
            {props.description && <p>{props.description}</p>}
          </div>
        </StyledLabel>
      ) : (
        <StyledLabel {...props}>
          {props.help ? (
            <div css={tw`flex justify-between items-center`}>
              <span>{props.labelText}</span>
              <Link to={props.help.url} css={tw`mb-2 text-sm`}>
                {props.help.text}
              </Link>
            </div>
          ) : (
            <span>{props.labelText}</span>
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
  large: PropTypes.bool,
  labelText: PropTypes.string.isRequired
};

export default Label;
