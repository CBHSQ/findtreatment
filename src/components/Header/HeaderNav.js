import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link, NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { slide as Menu } from 'react-burger-menu';

import ScreenContext from '../ScreenContext';
import { ReactComponent as Logo } from '../../images/logo.svg';
import HeaderHelpLine from './HeaderHelpLine';

const StyledNav = styled.nav`
  ${tw`w-full text-sm flex mt-4`}
`;

const StyledMenu = styled.div`
  ${tw`relative`}

  .bm-burger-button {
    ${tw`h-5 w-5 absolute right-0 top-0 mr-4`}
  }

  .bm-burger-bars {
    ${tw`bg-gray-dark`}
  }

  .bm-burger-bars-hover {
    ${tw`bg-gray`}
  }

  .bm-cross-button {
    ${tw`h-4 w-4`}
  }

  .bm-cross {
    ${tw`bg-gray`}
  }

  .bm-menu-wrap {
    ${tw`top-0`}
  }

  .bm-menu {
    ${tw`bg-white p-4`}
  }

  .bm-item-list {
    ${tw`pt-10`}
  }

  .bm-item {
    ${tw`block mb-4 font-heading`}
  }

  .bm-overlay {
    ${tw`inset-0`}
    background: 'rgba(0, 0, 0, 0.3)';
  }
`;

const StyledLink = styled(NavLink)`
  ${tw`block text-gray-dark mt-4 md:inline-block md:mt-0 lg:pb-2 lg:px-2 lg:mr-2 lg:border-b-4 lg:border-transparent lg:hover:border-blue lg:hover:text-gray-dark`}

  &.active {
    ${tw`font-bold md:border-blue`}
  }
`;

export class HeaderNav extends Component {
  state = {
    menuOpen: false
  };

  handleStateChange = state => {
    this.setState({ menuOpen: state.isOpen });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const isDesktop = this.context;

    return (
      <div className="container" css={tw`py-4 lg:py-0`}>
        <div css={tw`w-full flex flex-wrap justify-between`}>
          <Link to="/" css={tw`font-semibold text-2xl tracking-tight lg:mt-4`}>
            <Logo aria-label="Link to the homepage" />
          </Link>
          <div css={tw`hidden lg:block`}>
            <HeaderHelpLine />
          </div>
          {isDesktop ? (
            <StyledNav>
              <StyledLink to="/" exact>
                Search for treatment
              </StyledLink>
              <StyledLink to="/content/understanding-addiction">
                Understanding addiction
              </StyledLink>
              <StyledLink to="/content/understanding-mental-health">
                Understanding mental health
              </StyledLink>
              <StyledLink to="/content/treatment-options">
                Treatment options
              </StyledLink>
              <StyledLink to="/content/paying-for-treatment">
                Paying for treatment
              </StyledLink>
            </StyledNav>
          ) : (
            <StyledMenu>
              <Menu
                right
                isOpen={this.state.menuOpen}
                onStateChange={state => this.handleStateChange(state)}
              >
                <Link to="/" exact onClick={() => this.closeMenu()}>
                  Search for treatment
                </Link>
                <Link
                  to="/content/understanding-addiction"
                  onClick={() => this.closeMenu()}
                >
                  Understanding addiction
                </Link>
                <Link
                  to="/content/understanding-mental-health"
                  onClick={() => this.closeMenu()}
                >
                  Understanding mental health
                </Link>
                <Link
                  to="/content/treatment-options"
                  onClick={() => this.closeMenu()}
                >
                  Treatment options
                </Link>
                <Link
                  to="/content/paying-for-treatment"
                  onClick={() => this.closeMenu()}
                >
                  Paying for treatment
                </Link>
              </Menu>
            </StyledMenu>
          )}
        </div>
      </div>
    );
  }
}
HeaderNav.contextType = ScreenContext;

HeaderNav.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(HeaderNav);
