import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import qs from 'qs';
import { connect } from 'react-redux';
import { withTheme } from 'styled-components';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faPhone } from '@fortawesome/free-solid-svg-icons';
import OutboundLink from '../OutboundLink';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-css';

import { handleReceiveFacility, destroyFacility } from '../../actions/facility';
import { reportFacility } from '../../actions/facilities';
import { removeHttp } from '../../utils/misc';
import { servicesOrder } from '../../utils/services';

import Error from '../Error';
import NoMatch from '../NoMatch';
import Loading from '../Loading';
import DetailsLocation from './DetailsLocation';
import DetailsPayment from './DetailsPayment';
import { Button, Label } from '../Input';
import BackToSearchResultsLink from '../BackToSearchResultsLink';
import ReturnToTop from '../ReturnToTop';

const DecorativeHeading = styled.div`
  &:before {
    content: '';
    ${tw`block mb-4 border-t-4 border-teal w-12 h-0`}
  }
`;

const StyledMasonaryGrid = styled.div`
  .masonry-grid {
    ${tw`flex -mx-4 w-auto`}

    &_column {
      ${tw`px-4`}
    }

    div:not(:last-child) {
      ${tw`mb-4`}
    }
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
      // const params = qs.parse(location.search, {
      //   ignoreQueryPrefix: true
      // });

      const [frid, latitude, longitude] = match.params.params.split(';');

      handleReceiveFacility(frid, { sAddr: `${latitude}, ${longitude}` });
    }
  }

  componentWillUnmount() {
    const { destroyFacility } = this.props;

    destroyFacility();
  }

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

  isTablet = () =>
    Math.max(document.documentElement.clientWidth, window.innerWidth || 0) >=
    Number(this.props.theme.screens.md.replace('px', ''));

  render() {
    const {
      loading,
      error,
      data,
      isInternalLink,
      isReported,
      theme
    } = this.props;
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

    const { name1, name2, services, phone, website } = data;

    return (
      <>
        <Helmet>
          <title>{name1}</title>
          <meta property="og:title" content={name1} />
          <meta
            name="description"
            content="Treatment facility details, including what services it provides, who it serves, and what payments are accepted."
          />
          <meta
            property="og:description"
            content="Treatment facility details, including what services it provides, who it serves, and what payments are accepted."
          />
        </Helmet>
        {isInternalLink && <BackToSearchResultsLink />}
        <div css={tw`border-t border-gray-lighter`}>
          <div className="container" css={tw`py-5`}>
            <div css={tw`flex flex-wrap md:justify-between -mx-2`}>
              <div css={tw`w-full md:w-auto px-2 mb-4 md:mb-0`}>
                <h1 css={tw`font-bold font-heading text-3xl`}>
                  {name1}
                  {name2 && ` ${name2}`}
                </h1>
                {website !== 'http://' && (
                  <OutboundLink
                    eventLabel="Facility website link from card"
                    to={website}
                  >
                    {removeHttp(website)}
                  </OutboundLink>
                )}
              </div>
              <div
                css={tw`w-full md:w-auto px-2 text-xl mb-2 md:mb-0 flex-none`}
              >
                <Button
                  forwardedAs={OutboundLink}
                  primary={!this.isTablet()}
                  eventLabel="Facility phone link from card"
                  to={`tel:${phone}`}
                  css={tw`w-full md:w-auto md:text-gray-darkest`}
                >
                  <span
                    css={tw`mr-2 bg-blue rounded-full h-8 w-8 flex items-center justify-center`}
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      css={tw`text-white fill-current w-4 h-4`}
                    />
                  </span>
                  {phone}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div css={tw`bg-gray-lightest`}>
          <div className="container" css={tw`py-5`}>
            <div css={tw`flex flex-wrap -mx-4`}>
              <DetailsLocation data={data} />
              <DetailsPayment services={services} />
            </div>
          </div>
        </div>
        <div className="container" css={tw`py-10`}>
          <DecorativeHeading css={tw`font-heading font-bold text-xl mb-4`}>
            Services
          </DecorativeHeading>
          <StyledMasonaryGrid>
            <Masonry
              breakpointCols={{
                default: 2,
                [parseInt(theme.screens.lg, 10)]: 1
              }}
              className="masonry-grid"
              columnClassName="masonry-grid_column"
            >
              {Object.keys(services)
                .filter(key => servicesOrder.includes(key))
                .sort(function(a, b) {
                  return servicesOrder.indexOf(a) - servicesOrder.indexOf(b);
                })
                .map(key => (
                  <div key={services[key].name}>
                    <Label as="h3" labelText={services[key].name} />
                    <ul css={tw`text-sm list-disc list-inside`}>
                      {services[key].values.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
            </Masonry>
          </StyledMasonaryGrid>
        </div>
        <ReturnToTop />
        <div css={tw`bg-gray-lightest print:hidden`}>
          <div className="container" css={tw`py-5 text-center md:text-left`}>
            {!isReported ? (
              <Button
                className="report-facility"
                secondary
                onClick={this.reportFacility}
              >
                <FontAwesomeIcon icon={faFlag} css={tw`text-white mr-2`} />
                Report a problem with this listing
              </Button>
            ) : (
              <div role="alert">
                <strong>Thank you!</strong> Your feedback has been recorded.
              </div>
            )}
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
  theme: PropTypes.object.isRequired
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
      ({ frid }) => frid === ownProps.match.params.params.split(';')[0]
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
)(withTheme(Details));
