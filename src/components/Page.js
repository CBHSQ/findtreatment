import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import NoMatch from './NoMatch';
import { convertToSlug } from '../utils/misc';
import topics from '../utils/topics';

const StyledPage = styled.div`
  ${tw`flex flex-wrap -mx-6`}
`;

const SideBar = styled.div`
  ${tw`w-full lg:w-1/3 px-6 mb-6 lg:mb-0`}
`;

const Content = styled.div`
  ${tw`w-full lg:w-2/3 px-6 mb-6`}

  div:last-child {
    ${tw`border-b-0 mb-0 pb-0`}
  }

  div > *:last-child {
    ${tw`mb-0`}
  }

  h1,
  h2,
  h3 {
    ${tw`font-bold mb-4`}
  }

  h3 {
    ${tw`uppercase font-semibold text-sm`}
  }

  p {
    ${tw`mb-4`}
  }

  ul,
  ol {
    ${tw`pl-4 ml-4 mb-4 list-outside`}
  }

  ul {
    ${tw`list-disc`}
  }

  ol {
    ${tw`list-decimal`}
  }

  li {
    ${tw`mb-2`}
  }

  li > ul {
    ${tw`mt-2`}
  }
`;

const Topic = styled.div`
  ${tw`border-b mb-8 pb-8 max-w-xl`}
`;

class Page extends Component {
  render() {
    const { match, location } = this.props;
    const topic = topics().find(({ id }) => id === match.params.pageId);

    if (!topic) {
      return <NoMatch />;
    }

    return (
      <div className="container">
        <StyledPage>
          <SideBar>
            <div css={tw`lg:sticky mb-6`} style={{ top: '1rem' }}>
              <p css={tw`mb-2 text-sm`}>Browse all recovery resources</p>
              <ul>
                {topics().map(({ name, id, subTopics }) => (
                  <li key={id} css={tw`mb-4`}>
                    <Link to={id} css={tw`text-gray-900 font-bold text-xl`}>
                      {name}
                    </Link>
                    {id === match.params.pageId && (
                      <ul css={tw`my-2`}>
                        {subTopics.map(({ name, body }) => (
                          <li key={convertToSlug(name)} css={tw`mb-3`}>
                            <HashLink
                              smooth
                              to={`#${convertToSlug(name)}`}
                              css={tw`text-gray-700 border-l-4 border-gray-200 px-2 py-1`}
                              style={
                                location.hash === `#${convertToSlug(name)}`
                                  ? {
                                      borderColor: '#3182ce'
                                    }
                                  : {}
                              }
                            >
                              {name}
                            </HashLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </SideBar>
          <Content>
            <h1 css={tw`text-5xl`}>{topic.name}</h1>
            <p css={tw`text-xl font-light mb-8 max-w-xl`}>
              {topic.description}
            </p>
            {topic.subTopics.map(({ name, body }) => (
              <Topic key={convertToSlug(name)}>
                <h2 id={convertToSlug(name)}>{name}</h2>
                {body}
              </Topic>
            ))}
          </Content>
        </StyledPage>
      </div>
    );
  }
}

export default withRouter(Page);
