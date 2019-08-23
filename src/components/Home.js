import React, { Component } from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { handleReceiveFacilities } from '../actions/facilities';
import mobileBackground from '../images/film-strip_mobile.jpg';
import mobileBackground_2x from '../images/film-strip_mobile@2x.jpg';
import backgroundLeft_2x from '../images/film-strip_l@2x.jpg';
import backgroundRight_2x from '../images/film-strip_r@2x.jpg';

import ScreenContext from './ScreenContext';
import FormHomepage from './Form/FormHomepage';
import { Button } from './Input';

const MobileBgContainer = styled.div`
  ${tw`md:hidden relative border-b-4 border-white`}
  padding-bottom: 75%;
`;

const MobileBgImage = styled.div`
  ${tw`absolute h-full w-full top-0 bg-center bg-top bg-no-repeat bg-cover`}
  background-image: url(${mobileBackground});

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${mobileBackground_2x});
  }
`;

const DecorativeHeading = styled.div`
  &:before {
    content: '';
    ${tw`hidden md:block mb-4 border-t-4 border-teal w-12 h-0`}
  }
`;

class Home extends Component {
  submit = values => {
    const { dispatch } = this.props;

    dispatch(handleReceiveFacilities(values));

    this.props.history.push({
      pathname: '/results'
    });
  };

  renderCards(card) {
    return (
      <div key={card.id} css={tw`w-full lg:w-1/2 px-2 mb-12`}>
        <div css={tw`flex -mx-2 mb-4`}>
          <div css={tw`w-1/5 px-2`}>{card.icon}</div>
          <div css={tw`flex-1 px-2`}>
            <h3 css={tw`text-xl text-gray-dark mb-4`}>{card.name}</h3>
            <p>{card.description}</p>
            <Button
              as={Link}
              to={`/content/${card.id}`}
              outline={!this.isDesktop}
              link={this.isDesktop}
              css={tw`w-full`}
              aria-label={`Button link to learn more about ${card.name}`}
            >
              Learn more ›
            </Button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const isDesktop = this.context;

    return (
      <div css={tw`overflow-hidden`}>
        <MobileBgContainer>
          <MobileBgImage />
        </MobileBgContainer>

        <div
          css={tw`pb-10 -mt-8 md:mt-0 md:py-20 bg-teal md:bg-gray-lightest md:border-t md:border-gray-lighter`}
        >
          <div className="container">
            <div css={tw`md:flex md:-mx-4 lg:-mx-8`}>
              <img
                src={backgroundLeft_2x}
                css={tw`hidden lg:block lg:px-8`}
                style={{ height: '336px' }}
                alt="photos of people looking into the camera"
              />
              <div
                css={tw`relative bg-white md:bg-transparent px-4 lg:px-8 py-6 md:py-0`}
              >
                <h1 css={tw`text-3xl pb-4`}>
                  Millions of Americans have a substance use disorder. Find
                  help; find hope.
                </h1>
                <p css={tw`mb-8`}>
                  The Substance Abuse and Mental Health Services Administration
                  (SAMHSA) collects information on thousands of state-licensed
                  providers who specialize in treating substance use disorders,
                  addiction, and mental illness.
                </p>
                <Button
                  smooth
                  primary
                  as={HashLink}
                  css={tw`w-full mb-4 md:mb-0 md:mr-4 md:w-auto md:inline-block`}
                  to={'/#home-search'}
                >
                  Find treatment
                </Button>
                <Button
                  smooth
                  outline
                  as={HashLink}
                  css={tw`w-full md:w-auto md:inline-block`}
                  to={`#home-learn-more`}
                >
                  Learn more
                </Button>
              </div>
              <img
                src={backgroundRight_2x}
                css={tw`hidden md:block px-4 lg:px-8`}
                style={{ height: '336px' }}
                alt="photos of people looking into the camera"
              />
            </div>
          </div>
        </div>
        <div
          css={tw`bg-gray-lightest md:bg-teal border-t-4 md:border-t-0 border-white`}
          id="home-search"
        >
          <div className="container">
            <div css={tw`py-10 md:py-20`}>
              <div
                css={tw`md:bg-white md:mx-auto md:max-w-4xl md:px-20 md:py-10 md:shadow-md`}
              >
                <FormHomepage onSubmit={this.submit} />
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="home-learn-more">
          <div css={tw`py-10 md:py-20`}>
            <DecorativeHeading>
              <h2 css={tw`text-2xl md:text-3xl`}>What to expect</h2>
            </DecorativeHeading>
            <p css={tw`mb-8 md:text-xl`}>
              Help is available, treatment works, and people recover every day.
            </p>
            <div css={tw`flex flex-wrap -mx-2 -mb-12`}>
              {this.props.content
                .filter(card => !card.hidden)
                .map(this.renderCards, { isDesktop })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Home.contextType = ScreenContext;

Home.propTypes = {
  content: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default withRouter(connect()(Home));
