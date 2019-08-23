import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link, NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

import { ReactComponent as Logo } from '../../images/logo.svg';
import HeaderHelpLine from './HeaderHelpLine';

const StyledNav = styled.div`
  ${tw`w-full text-sm md:flex md:items-center md:w-auto md:mt-8`}

  ${({ isMobileMenuHidden }) =>
    isMobileMenuHidden ? tw`hidden md:block` : tw`block`}
`;

const StyledLink = styled(NavLink)`
  ${tw`block text-gray-dark mt-4 md:inline-block md:mt-0 md:pb-2 md:px-2 md:mr-2 md:border-b-4 md:border-transparent md:hover:border-blue md:hover:text-gray-dark`}

  &.active {
    ${tw`font-bold md:border-blue`}
  }
`;

export class HeaderNav extends Component {
  state = {
    isMobileMenuHidden: true
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({
        isMobileMenuHidden: true
      });
    }
  }

  toggleMobileMenu = () => {
    this.setState({
      isMobileMenuHidden: !this.state.isMobileMenuHidden
    });
  };

  render() {
    const { isMobileMenuHidden } = this.state;

    return (
      <nav role="navigation" css={tw`relative`}>
        <div css={tw`hidden md:block absolute top-0 right-0`}>
          <HeaderHelpLine />
        </div>
        <div className="container" css={tw`py-4 md:pb-0`}>
          <div css={tw`flex items-center justify-between flex-wrap`}>
            <Link to="/" css={tw`font-semibold text-2xl tracking-tight`}>
              <Logo aria-label="Link to the homepage" />
            </Link>

            <div css={tw`block md:hidden`}>
              <button onClick={this.toggleMobileMenu}>
                <svg
                  css={tw`fill-current h-4 w-4`}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
          </div>

          <StyledNav isMobileMenuHidden={isMobileMenuHidden}>
            <StyledLink to="/" exact>
              Home
            </StyledLink>
            <StyledLink to="/content/what-to-expect">
              Understanding addiction
            </StyledLink>
            <StyledLink to="/content/what-to-expect">
              Treatment options
            </StyledLink>
            <StyledLink to="/content/what-to-expect">
              Paying for treatment
            </StyledLink>
          </StyledNav>
        </div>
      </nav>
    );
  }
}

HeaderNav.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(HeaderNav);
