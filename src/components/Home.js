import React, { Component } from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { handleReceiveFacilities } from '../actions/facilities';
import { hashLinkScroll } from '../utils/misc';
import background from '../images/film-strip_mobile.jpg';
import background_2x from '../images/film-strip_mobile@2x.jpg';

import FormHomepage from './Form/FormHomepage';
import { Button } from './Input';

const StyledHome = styled.div`
  ${tw`bg-teal bg-center bg-top bg-no-repeat bg-contain pt-64`}
  background-image: url(${background});

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${background_2x});
  }
`;

class Home extends Component {
  componentDidMount() {
    hashLinkScroll();
  }

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
          <div css={tw`px-2 w-1/5`}>{card.icon}</div>
          <div css={tw`flex-1 px-2`}>
            <h3 css={tw`text-lg text-gray-dark`}>{card.name}</h3>
            <p css={tw`mb-0`}>{card.description}</p>
          </div>
        </div>
        <Button
          as={Link}
          to={`/content/${card.id}`}
          outline
          css={tw`w-full`}
          aria-label={`Button link to learn more about ${card.name}`}
        >
          Learn more
        </Button>
      </div>
    );
  }

  render() {
    return (
      <>
        <StyledHome>
          <div className="container" css={tw`pb-8`}>
            <div css={tw`bg-white px-4 py-8`}>
              <h1 css={tw`text-3xl pb-4`}>
                Millions of Americans have a substance use disorder. Find help;
                find hope.
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
                css={tw`w-full mb-4`}
                to={'/#home-search'}
              >
                Find treatment
              </Button>
              <Button
                smooth
                outline
                as={HashLink}
                css={tw`w-full`}
                to={`#home-learn-more`}
              >
                Learn more
              </Button>
            </div>
          </div>
        </StyledHome>
        <div
          css={tw`bg-gray-lightest border-t-4 border-white`}
          id="home-search"
        >
          <div className="container">
            <div css={tw`py-8`}>
              <FormHomepage onSubmit={this.submit} />
            </div>
          </div>
        </div>
        <div className="container" id="home-learn-more">
          <div css={tw`py-8`}>
            <h2 css={tw`text-2xl`}>What to expect</h2>
            <p css={tw`mb-8`}>
              Help is available, treatment works, and people recover every day.
            </p>
            <div css={tw`flex flex-wrap -mx-2`}>
              {this.props.content
                .filter(card => !card.hidden)
                .map(this.renderCards)}
            </div>
          </div>
        </div>
      </>
    );
  }
}

Home.propTypes = {
  content: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default withRouter(connect()(Home));
