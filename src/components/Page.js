import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import NoMatch from './NoMatch';
import { convertToSlug } from '../utils/misc';
import topics, { lipsum } from '../utils/topics';

class Page extends Component {
  render() {
    const { match } = this.props;
    const topic = topics().find(({ id }) => id === match.params.pageId);

    if (!topic) {
      return <NoMatch />;
    }

    return (
      <div className="container">
        <div css={tw`flex flex-wrap -mx-6`}>
          <div css={tw`w-full lg:w-1/3 px-6 mb-6 lg:mb-0`}>
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
                            to={`#${convertToSlug(name)}`}
                            css={tw`text-gray-700 border-l-4 border-gray-200 px-2 py-1`}
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
          <div css={tw`w-full lg:w-2/3 px-6 mb-6`}>
            <h1 css={tw`font-bold lg:text-5xl`}>{topic.name}</h1>
            <p css={tw`text-xl font-light mb-4`}>{topic.description}</p>
            {topic.subTopics.map(({ name, body }) => (
              <div key={convertToSlug(name)}>
                <h2 id={convertToSlug(name)} css={tw`font-bold`}>
                  {name}
                </h2>
                <div css={tw`mb-4`}>{body || lipsum}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Page);
