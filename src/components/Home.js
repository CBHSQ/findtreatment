import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { handleReceiveFacilities } from '../actions/facilities';
import 'styled-components/macro';
import tw from 'tailwind.macro';

import FormHomepage from './Form/FormHomepage';
import { Button } from './Input';

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
      <div key={card.id} css={tw`flex w-full lg:w-1/3 px-2 mb-6 lg:mb-0`}>
        <div
          css={tw`flex flex-col w-full bg-white text-gray-700 text-center rounded shadow-md p-6 `}
        >
          <div>
            <Link css={tw`inline-block mb-4`} to={`/content/${card.id}`}>
              {card.icon}
            </Link>
          </div>
          <h4 css={tw`text-xl leading-tight mb-4`}>{card.name}</h4>
          <p css={tw`flex-auto text-sm mb-6`}>{card.description}</p>
          <div>
            <Button as={Link} to={`/content/${card.id}`} outline="true">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <>
        <div className="container">
          <div css={tw`text-center mb-10`}>
            <h2 css={tw`text-3xl lg:text-5xl font-light`}>
              Find help near you
            </h2>
            Quickly find providers who treat{' '}
            <strong>substance use disorders</strong> and{' '}
            <strong>addiction</strong>
          </div>
          <div css={tw`lg:max-w-2xl lg:mx-auto mb-10`}>
            <FormHomepage onSubmit={this.submit} />
            <p
              css={tw`lg:max-w-xl lg:mx-auto italic text-xs mb-6 text-center text-gray-700`}
            >
              Provider data is collected, maintained, and verified by the
              Substance Abuse and Mental Health Services Administration (SAMHSA)
              through an annual survey.
            </p>
          </div>
        </div>
        <div css={tw`bg-gray-200`}>
          <div className="container">
            <div css={tw`py-6 lg:py-12`}>
              <div css={tw`mb-6 text-center text-gray-700`}>
                <h3 css={tw`text-2xl lg:text-4xl font-light`}>
                  What to expect
                </h3>
                <span css={tw`block lg:text-xl`}>
                  Help is available, treatment works, and people recover every
                  day.
                </span>
              </div>
              <div css={tw`flex flex-wrap -mx-2`}>
                {this.props.content
                  .filter(card => !card.hidden)
                  .map(this.renderCards)}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(connect()(Home));
