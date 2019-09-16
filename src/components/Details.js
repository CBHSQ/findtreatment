import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import qs from 'qs';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { OutboundLink } from 'react-ga';
import { Helmet } from 'react-helmet';

import { handleReceiveFacility, destroyFacility } from '../actions/facility';
import { reportFacility } from '../actions/facilities';
import { removeHttp } from '../utils/misc';

import Error from './Error';
import NoMatch from './NoMatch';
import Loading from './Loading';
import MapContainer from './Map/MapContainer';
import { Button } from './Input';

const DecorativeHeading = styled.div`
  &:before {
    content: '';
    ${tw`block mb-4 border-t-4 border-teal w-12 h-0`}
  }
`;

export class Details extends Component {
  componentDidMount() {
    const {
      handleReceiveFacility,
      location,
      match,
      isInternalLink
    } = this.props;

    if (!isInternalLink) {
      const params = qs.parse(location.search, {
        ignoreQueryPrefix: true
      });

      handleReceiveFacility(match.params.frid, params);
    }
  }

  componentWillUnmount() {
    const { destroyFacility } = this.props;

    destroyFacility();
  }

  returnToResults = () => {
    this.props.history.goBack();
  };

  reportFacility = () => {
    const { data, reportFacility } = this.props;

    reportFacility(data.frid);
  };

  renderService = ({ name, values }) => (
    <div css={tw`mb-4`} key={name}>
      <h3 css={tw`font-bold font-heading uppercase text-sm mb-4`}>{name}</h3>
      <ul css={tw`text-sm leading-relaxed text-gray-700 list-disc list-inside`}>
        {values.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  render() {
    const { loading, error, data, isInternalLink } = this.props;
    const hasResult = data && Object.keys(data).length > 0;

    if (error) {
      return <Error />;
    }

    if (loading) {
      return <Loading />;
    }

    if (!loading && !hasResult) {
      return <NoMatch />;
    }

    const {
      frid,
      longitude,
      latitude,
      name1,
      name2,
      street1,
      street2,
      city,
      state,
      zip,
      services,
      phone,
      website
    } = data;

    return (
      <>
        <Helmet>
          <title>{name1}</title>
        </Helmet>
        {isInternalLink && (
          <div css={tw`bg-gray-lightest border-t border-b border-gray-lighter`}>
            <div className="container" css={tw`py-5`}>
              <Button
                link
                className="back-link"
                onClick={this.returnToResults}
                css={tw`print:hidden`}
              >
                ❮ Return to results
              </Button>
            </div>
          </div>
        )}
        <div css={tw`border-t border-gray-lighter`}>
          <div className="container" css={tw`py-5`}>
            <div css={tw`flex flex-wrap md:justify-between -mx-2`}>
              <div css={tw`px-2`}>
                <h1 css={tw`font-bold font-heading text-3xl`}>
                  {name1}
                  {name2 && ` ${name2}`}
                </h1>
                {website !== 'http://' && (
                  <OutboundLink
                    eventLabel="Facility website link from card"
                    to={website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {removeHttp(website)}
                  </OutboundLink>
                )}
              </div>
              <div css={tw`px-2 font-bold text-xl mt-2 flex-none`}>
                <div css={tw`flex items-center `}>
                  <span
                    css={tw`mr-2 bg-blue rounded-full h-8 w-8 flex items-center justify-center`}
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      css={tw`text-white fill-current w-4 h-4`}
                    />
                  </span>
                  {phone}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div css={tw`bg-gray-lightest`}>
          <div className="container" css={tw`py-5`}>
            <div css={tw`flex flex-wrap -mx-4`}>
              <div css={tw`w-full md:w-1/2 px-4 mb-6`}>
                <div css={tw`bg-white h-full shadow p-4`}>
                  <h2 css={tw`font-heading font-bold mb-4 text-xl`}>
                    Location
                  </h2>
                  <div css={tw`relative h-64 w-full mb-4`}>
                    <MapContainer
                      frid={frid}
                      latitude={latitude}
                      longitude={longitude}
                      name1={name1}
                      phone={phone}
                    />
                  </div>
                  <div css={tw`text-gray-700`}>
                    {street1}, {street2 && street2 + ','}
                    <br />
                    {city}, {state} {zip}
                    <br />
                    <OutboundLink
                      eventLabel="Driving directions link from details"
                      to={`https://www.google.com/maps/dir/?api=1&destination=${encodeURI(
                        `${street1}, ${street2 &&
                          street2 + ','} ${city}, ${state} ${zip}`
                      )}`}
                      css={tw`font-bold`}
                    >
                      Get driving directions
                    </OutboundLink>
                  </div>
                </div>
              </div>
              <div css={tw`w-full md:w-1/2 px-4 mb-6`}>
                <div css={tw`bg-white h-full  shadow p-4`}>
                  <h2 css={tw`font-heading font-bold mb-4 text-xl`}>
                    Payment, insurance, or funding accepted
                  </h2>
                  <ul>
                    {services.PAY.values.map((value, index) => (
                      <li key={index} css={tw`mb-2`}>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" css={tw`py-5`}>
          <div css={tw`flex flex-wrap -mx-4`}>
            <div css={tw`w-full md:w-1/2 px-4 mb-6`}>
              <DecorativeHeading css={tw`font-heading font-bold text-xl mb-4`}>
                Treatment details
              </DecorativeHeading>
              <ul></ul>
            </div>
            <div css={tw`w-full md:w-1/2 px-4 mb-6`}>
              <DecorativeHeading css={tw`font-heading font-bold text-xl mb-4`}>
                Facility details
              </DecorativeHeading>
              <ul></ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Details.propTypes = {
  data: PropTypes.object.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  isReported: PropTypes.bool.isRequired,
  isInternalLink: PropTypes.bool.isRequired,
  reportFacility: PropTypes.func.isRequired,
  handleReceiveFacility: PropTypes.func.isRequired,
  destroyFacility: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  reportFacility(frid) {
    dispatch(reportFacility(frid));
  },

  handleReceiveFacility(frid, params) {
    dispatch(handleReceiveFacility(frid, params));
  },

  destroyFacility() {
    dispatch(destroyFacility());
  }
});

const mapStateToProps = ({ facility, facilities }, ownProps) => {
  let data, isInternalLink;

  // If facility results exist in the store, match frid using the existing data
  if ((facilities.data.rows || {}).length > 0) {
    data = facilities.data.rows.find(
      ({ frid }) => frid === ownProps.match.params.frid
    );
    isInternalLink = true;
  } else {
    data = facility.data;
    isInternalLink = false;
  }

  return {
    data,
    error: facility.error,
    loading: facility.loading,
    isReported: facilities.reported.includes(data.frid),
    isInternalLink
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
