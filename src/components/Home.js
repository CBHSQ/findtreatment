import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleReceiveFacilities } from '../actions/facilities';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import Homepage from './Form/Homepage';
import Button from './Form/Button';

const content = [
  {
    heading: 'Understanding addiction',
    body:
      'Substance use and mental health problems are treatable, and help is available.'
  },
  {
    heading: 'Treatment options',
    body:
      'Find out more about different types of treatment and finding a good fit.'
  },
  {
    heading: 'Getting to recovery',
    body: 'Know what to expect and how to find support on the road to recovery.'
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
            Quickly find providers who treat substance use disorders and addiction
          </span>
        </div>
        <Homepage onSubmit={this.submit} />
        <div css={tw`bg-gray-200`}>
          <div className="container" css={tw`mx-auto py-6 lg:py-12`}>
            <div css={tw`mb-6 text-center`}>
              <h3 css={tw`text-4xl font-light text-gray-700`}>
                What to expect
              </h3>
            </div>
            <div css={tw`flex flex-wrap -mx-2`}>
              {content.map((card, index) => (
                <div
                  key={index}
                  css={tw`flex w-full lg:w-1/4 px-2 mb-6 lg:mb-0 `}
                >
                  <div
                    css={tw`flex flex-col w-full bg-white rounded p-6 text-gray-700`}
                  >
                    <h4 css={tw`text-xl mb-4 leading-tight`}>{card.heading}</h4>
                    <p css={tw`flex-auto  mb-6 text-sm`}>{card.body}</p>
                    <Button outline>Learn more</Button>
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
