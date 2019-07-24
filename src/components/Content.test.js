import React from 'react';
import { shallow } from 'enzyme';

import { Content } from './Content';

const testProps = {
  location: {},
  match: {
    params: {
      pageId: 'content-id'
    }
  },
  topics: [
    {
      name: 'Content name',
      id: 'content-id',
      description: 'Content description',
      body: 'Content body',
      subTopics: [
        {
          name: 'Content subtopic',
          body: 'Content subtopic body'
        }
      ]
    }
  ]
};

describe('Content component', () => {
  it('displays NoMatch component if topic id is not found', () => {
    const props = {
      ...testProps,
      match: {
        params: {
          pageId: 'i-do-not-exist'
        }
      }
    };

    const component = shallow(<Content {...props} />);

    expect(component.find('NoMatch').length).toBe(1);
  });

  describe('sidebar', () => {
    it('it renders a link', () => {
      const component = shallow(<Content {...testProps} />);
      const link = component.find('Content___StyledLink');

      expect(link.prop('to')).toBe('content-id');
      expect(link.text()).toBe('Content name');
    });

    it('does not display subTopics if not present', () => {
      const { subTopics, ...rest } = testProps.topics[0];
      const props = {
        ...testProps,
        topics: [
          {
            ...rest
          }
        ]
      };
      const component = shallow(<Content {...props} />);

      expect(component.find('.sidebar-subtopics').length).toBe(0);
    });

    it('it renders a sublink', () => {
      const component = shallow(<Content {...testProps} />);
      const link = component.find('Content___StyledHashLink');

      expect(link.prop('to')).toBe('#content-subtopic');
      expect(link.text()).toBe('Content subtopic');
    });

    it('it highlights an active sublink', () => {
      const props = {
        ...testProps,
        location: { hash: '#content-subtopic' }
      };
      const component = shallow(<Content {...props} />);
      const link = component.find('Content___StyledHashLink');

      expect(link.prop('style')).toEqual(
        expect.objectContaining({
          borderColor: expect.any(String)
        })
      );
    });
  });

  describe('main', () => {
    it('it renders a subTopic', () => {
      const component = shallow(<Content {...testProps} />);
      const link = component.find('Content__MainSubTopic h2');

      expect(link.text()).toBe('Content subtopic');
    });

    it('does not display elements if not present', () => {
      const {
        name,
        description,
        body,
        subTopics,
        ...rest
      } = testProps.topics[0];
      const props = {
        ...testProps,
        topics: [
          {
            ...rest
          }
        ]
      };
      const component = shallow(<Content {...props} />);

      expect(component.find('Content___StyledH').length).toBe(0);
      expect(component.find('Content__MainLead').length).toBe(0);
      expect(component.find('Content__MainSubTopic').length).toBe(0);
    });
  });
});
