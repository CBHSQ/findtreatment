import React, { Component } from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet';

import { convertToSlug, hashLinkScroll } from '../utils/misc';

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
  h3 {
    ${tw`mb-4`}
  }

  h3 {
    ${tw`uppercase font-semibold text-sm`}
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

const MainLead = styled.div`
  ${tw`max-w-xl mb-8 text-xl font-light`}
`;

const MainSubTopic = styled.div`
  ${tw`border-b mb-8 pb-8 max-w-xl`}
`;

export class Content extends Component {
  componentDidMount() {
    hashLinkScroll();
  }

  renderSideBar = () => {
    const { content } = this.props;
    return (
      <SideBar>
        <div css={tw`lg:sticky mb-6`} style={{ top: '1rem' }}>
          <p css={tw`mb-2 text-sm`}>Browse all recovery resources</p>
          <ul>{content.map(this.renderSideBarLinks)}</ul>
        </div>
      </SideBar>
    );
  };

  renderSideBarLinks = ({ name, id, subTopics }) => {
    const { match } = this.props;
    return (
      <li key={id} css={tw`mb-4`}>
        <Link to={id} css={tw`text-gray-900 font-bold text-xl`}>
          {name}
        </Link>
        {id === match.params.pageId && subTopics && (
          <ul className="sidebar-subtopics" css={tw`my-2`}>
            {subTopics.map(this.renderSideBarSubLinks)}
          </ul>
        )}
      </li>
    );
  };

  renderSideBarSubLinks = ({ name, body }) => {
    const { location } = this.props;
    const slug = convertToSlug(name);
    return (
      <li key={slug} css={tw`mb-3`}>
        <HashLink
          smooth
          to={`#${slug}`}
          css={tw`text-gray-700 border-l-4 border-gray-200 px-2 py-1`}
          style={location.hash === `#${slug}` ? { borderColor: '#3182ce' } : {}}
        >
          {name}
        </HashLink>
      </li>
    );
  };

  renderMain = topic => {
    const { name, description, body, subTopics } = topic;
    return (
      <Main>
        <Helmet>
          <title>{name}</title>
        </Helmet>
        {name && <h1 css={tw`text-5xl`}>{name}</h1>}
        {description && <MainLead>{description}</MainLead>}
        {body && <MainSubTopic>{body}</MainSubTopic>}
        {subTopics && subTopics.map(this.renderMainSubTopics)}
      </Main>
    );
  };

  renderMainSubTopics = ({ name, body }) => {
    const slug = convertToSlug(name);
    return (
      <MainSubTopic key={slug}>
        <h2 id={slug}>{name}</h2>
        {body}
      </MainSubTopic>
    );
  };

  render() {
    const { content, match } = this.props;
    const topic = content.find(({ id }) => id === match.params.pageId);

    return topic ? (
      <div className="container">
        <StyledPage>
          {this.renderSideBar()}
          {this.renderMain(topic)}
        </StyledPage>
      </div>
    ) : (
      <NoMatch />
    );
  }
}

Content.propTypes = {
  content: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default withRouter(Content);
