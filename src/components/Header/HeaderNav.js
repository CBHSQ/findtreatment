import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link, NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

import { ReactComponent as Logo } from '../../images/logo.svg';

const StyledNav = styled.nav`
  ${tw`border-b mb-6`}
`;

const StyledLink = styled(NavLink)`
  ${tw`text-gray-900 block mt-4 lg:inline-block lg:mt-0 lg:pb-2 lg:border-b-4 lg:border-transparent lg:hover:border-blue-800`}

  &.active {
    ${tw`font-bold lg:border-blue-800`}
  }
`;

const MobileNav = styled.div`
  ${tw`w-full flex-grow lg:flex lg:items-center lg:w-auto`}

  ${({ isMenuHidden }) => (isMenuHidden ? tw`hidden lg:block` : tw`block`)}
`;

export class HeaderNav extends Component {
  state = {
    isMenuHidden: true
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({
        isMenuHidden: true
      });
    }
  }

  toggleMenu = () => {
    this.setState({
      isMenuHidden: !this.state.isMenuHidden
    });
  };

  isContentSection = (match, location) => {
    return location.pathname.includes(`/content`);
  };

  render() {
    const { isMenuHidden } = this.state;

    return (
      <StyledNav role="navigation">
        <div
          className="container"
          css={tw`mx-auto py-8 flex items-center justify-between flex-wrap`}
        >
          <Link to="/" css={tw`font-semibold text-2xl tracking-tight`}>
            <Logo aria-label="Link to the homepage" />
          </Link>
          <div css={tw`block lg:hidden`}>
            <button
              onClick={this.toggleMenu}
              css={tw`flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600`}
            >
              <svg
                css={tw`fill-current h-3 w-3`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <MobileNav isMenuHidden={isMenuHidden}>
            <div css={tw`text-sm lg:flex-grow lg:mt-4`}>
              <StyledLink to="/" exact css={tw`mr-6`}>
                Search for treatment
              </StyledLink>
              <StyledLink
                to="/content/what-to-expect"
                isActive={this.isContentSection}
              >
                What to expect
              </StyledLink>
            </div>
          </MobileNav>
        </div>
      </StyledNav>
    );
  }
}

HeaderNav.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(HeaderNav);
