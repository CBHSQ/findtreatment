import React, { Component } from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { withRouter, NavLink, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { theme } from '../tailwind.js';
import content from '../utils/content';

import NoMatch from './NoMatch';

const StyledPage = tw.div`flex flex-wrap -mx-6`;
const SideBar = tw.div`w-full lg:w-1/3 px-6 mb-6 lg:mb-0`;

const Main = styled.div`
  ${tw`w-full lg:w-2/3 px-6 mb-10`}

  div:last-child {
    ${tw`border-b-0 mb-0 pb-0`}
  }

  div > *:last-child {
    ${tw`mb-0`}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${tw`font-bold font-heading mb-4`}
  }

  h1 {
    ${tw`text-2xl`}
  }

  h2 {
    ${tw`text-xl`}
  }

  h3 {
    ${tw`text-lg`}
  }

  @media (min-width: ${theme.screens.lg}) {
    h1 {
      ${tw`text-4xl`}
    }

    h2 {
      ${tw`text-3xl`}
    }

    h3 {
      ${tw`text-xl`}
    }
  }

  ol,
  p,
  ul {
    ${tw`mb-4`}
  }

  ul,
  ol {
    ${tw`pl-4 ml-4 list-outside`}
  }

  ul {
    ${tw`list-disc`}
  }

  ol {
    ${tw`list-decimal`}
  }

  li {
    ${tw`mb-2`}

    & > ul,ol {
      ${tw`mt-2`}
    }
  }
`;

export class Content extends Component {
  renderSideBar = () => {
    return (
      <SideBar>
        <div css={tw`lg:sticky mb-6`} style={{ top: '1rem' }}>
          <ul>{content().map(this.renderSideBarLinks)}</ul>
        </div>
      </SideBar>
    );
  };

  renderSideBarLinks = ({ name, id, subSections }) => {
    const { match } = this.props;
    return (
      <li key={id} css={tw`mb-4`}>
        <NavLink
          to={`/content/${id}`}
          css={tw`text-gray-darkest font-heading font-bold text-xl`}
          activeStyle={{
            ...tw`border-l-4 border-blue text-blue pl-2`
          }}
        >
          {name}
        </NavLink>
        {id === match.params.sectionID && subSections && (
          <ul
            className="sidebar-subsections"
            css={tw`my-2 ml-2 border-l-4 border-transparent`}
          >
            {subSections.map(this.renderSideBarSubLinks)}
          </ul>
        )}
      </li>
    );
  };

  renderSideBarSubLinks = ({ name, id, body }) => {
    const { match } = this.props;
    return (
      <li key={id} css={tw`mb-3`}>
        <NavLink
          to={`/content/${match.params.sectionID}/${id}`}
          css={tw`text-gray-darkest py-2`}
          activeStyle={{
            ...tw`text-blue font-bold`
          }}
        >
          {name}
        </NavLink>
      </li>
    );
  };

  renderMain = section => {
    const { match } = this.props;
    const { name, subSections } = section;
    const subSection = subSections.find(
      ({ id }) => id === match.params.subSectionID
    );

    return (
      <Main>
        <Helmet>
          <title>{subSection.name}</title>
        </Helmet>
        <h1 css={tw`pb-4 border-b border-gray-lighter`}>{name}</h1>
        <h2>{subSection.name}</h2>
        {subSection.body}
      </Main>
    );
  };

  render() {
    const { match } = this.props;
    const { params } = match;
    const { sectionID, subSectionID } = params;
    const section = content().find(({ id }) => id === sectionID);

    if (section) {
      if (!subSectionID) {
        return (
          <Redirect to={`/content/${sectionID}/${section.subSections[0].id}`} />
        );
      }

      if (!section.subSections.find(({ id }) => id === subSectionID)) {
        return <NoMatch />;
      }

      return (
        <div css={tw`border-t border-gray-lighter`}>
          <div className="container" css={tw`mt-10`}>
            <StyledPage>
              {this.renderSideBar()}
              {this.renderMain(section)}
            </StyledPage>
          </div>
        </div>
      );
    } else {
      return <NoMatch />;
    }
  }
}

Content.propTypes = {
  match: PropTypes.object.isRequired
};

export default withRouter(Content);
