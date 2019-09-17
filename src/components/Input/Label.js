import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const StyledLabel = styled.label`
  ${tw`block mb-2`}

  ${props => props.inline && tw`flex`}

  span {
    ${tw`block font-bold font-heading uppercase text-sm mb-2`}

    ${props => props.inline && tw`font-sans normal-case mb-0`}

    ${props => props.large && tw`normal-case text-2xl md:text-3xl`}
  }

  p {
    ${tw`text-sm`}
  }
`;

const Label = props => {
  return (
    <>
      {props.inline ? (
        <StyledLabel {...props}>
          {props.children}
          {props.description ? (
            <div css={tw`-mt-px`}>
              <span>{props.labelText}</span>
              <p>{props.description}</p>
            </div>
          ) : (
            <span>{props.labelText}</span>
          )}
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
