import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const StyledLabel = styled.label`
  ${tw`block mb-4`}

  ${props => props.inline && tw`flex items-start`}

  .label-text {
    ${tw`block font-bold font-heading uppercase text-sm mb-2`}

  ${props => props.help && tw`inline-block mb-0`}

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
          <span css={tw`block`}>
            <span className="label-text">{props.labelText}</span>
            {props.description && <p>{props.description}</p>}
          </span>
        </StyledLabel>
      ) : (
        <StyledLabel {...props}>
          {props.help ? (
            <span css={tw`flex items-center`}>
              <span className="label-text">{props.labelText}</span>
              <Link to={props.help.url} css={tw`inline-block flex-none`}>
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  css={tw`fill-current ml-1`}
                  aria-label={props.help.text}
                  title={props.help.text}
                />
              </Link>
            </span>
          ) : (
            <span className="label-text">{props.labelText}</span>
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
