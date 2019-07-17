import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { handleReceiveFacilities } from '../actions/facilities';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import Homepage from './Form/Homepage';
import Button from './Form/Button';

const content = [
  {
    slug: 'understanding-addiction',
    heading: 'Understanding addiction',
    body:
      'Addiction is a chronic disease that changes the brain and alters decision-making.'
  },
  {
    slug: 'treatment-options',
    heading: 'Treatment options',
    body:
      'Learn about finding quality treatment, the different types of treatment, and what to expect when starting treatment.'
  },
  {
    slug: 'paying-for-treatment',
    heading: 'Paying for treatment',
    body: 'Learn more about the cost of treatment and payment options.'
  }
];

class Home extends Component {
  submit = values => {
    const { dispatch } = this.props;

    dispatch(handleReceiveFacilities(values));

    this.props.history.push({
      pathname: '/results'
    });
  };

  render() {
    return (
      <>
        <div className="container" css={tw`mx-auto text-center mb-10`}>
          <h2 css={tw`text-3xl lg:text-5xl font-light`}>Find help near you</h2>
          <span>
            Quickly find providers who treat{' '}
            <strong>substance use disorders</strong> and{' '}
            <strong>addiction</strong>
          </span>
        </div>
        <div css={tw`max-w-3xl mx-auto mb-10 px-6`}>
          <Homepage onSubmit={this.submit} />
          <p
            css={tw`lg:max-w-xl italic mx-auto text-xs mb-6 text-center text-gray-700`}
          >
            Provider data is collected, maintained, and verified by the
            Substance Abuse and Mental Health Services Administration (SAMHSA)
            through an annual survey. All substance use treatment facilities are
            licensed by the state they're in, though license requirements differ
            by state.
          </p>
        </div>
        <div css={tw`bg-gray-200`}>
          <div className="container" css={tw`mx-auto py-6 lg:py-12`}>
            <div css={tw`mb-6 text-center`}>
              <h3 css={tw`text-4xl font-light text-gray-700`}>
                What to expect
              </h3>
              <h4 css={tw`text-xl font-light text-gray-700`}>
                Treatment works, help is available, and people recover every
                day.
              </h4>
            </div>
            <div css={tw`flex flex-wrap -mx-2`}>
              {content.map(card => (
                <div
                  key={card.slug}
                  css={tw`flex w-full lg:w-1/3 px-2 mb-6 lg:mb-0 `}
                >
                  <div
                    css={tw`flex flex-col w-full bg-white rounded p-6 text-gray-700`}
                  >
                    <h4 css={tw`text-xl mb-4 leading-tight`}>{card.heading}</h4>
                    <p css={tw`flex-auto  mb-6 text-sm`}>{card.body}</p>
                    <Link to={`/content/${card.slug}`}>
                      <Button outline>Learn more</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(connect()(Home));
