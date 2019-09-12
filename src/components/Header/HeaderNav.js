import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link, NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

import ScreenContext from '../ScreenContext';
import { ReactComponent as Logo } from '../../images/logo.svg';
import HeaderHelpLine from './HeaderHelpLine';

const StyledNav = styled.nav`
  ${tw`w-full text-sm flex mt-4`}
`;

const StyledLink = styled(NavLink)`
  ${tw`text-gray-dark pb-2 px-2 mr-2 border-b-4 border-transparent hover:border-blue hover:text-gray-dark`}

  &.active {
    ${tw`font-bold text-blue border-blue`}
  }
`;

const StyledMenu = styled.div`
  ${tw`relative`}

  .bm-burger-button {
    ${tw`h-5 w-5 absolute right-0 top-0 mr-4`}
  }

  .bm-burger-bars {
    ${tw`bg-gray-dark`}

    &-hover {
      ${tw`bg-gray`}
    }
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
    const { location } = this.props;

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
              <StyledLink to="/results" exact css={tw`flex-none`}>
                Search for treatment
              </StyledLink>
              <StyledLink
                to="/content/understanding-addiction"
                css={tw`flex-none`}
              >
                Understanding addiction
              </StyledLink>
              <StyledLink
                to="/content/understanding-mental-health"
                css={tw`flex-none`}
              >
                Understanding mental health
              </StyledLink>
              <StyledLink to="/content/treatment-options" css={tw`flex-none`}>
                Treatment options
              </StyledLink>
              <StyledLink
                to="/content/paying-for-treatment"
                css={tw`flex-none`}
              >
                Paying for treatment
              </StyledLink>
              {location.pathname !== '/' && (
                <Link
                  onClick={() => window.print()}
                  css={tw`hidden lg:block w-full flex-grow text-right text-gray text-sm`}
                >
                  <FontAwesomeIcon
                    icon={faPrint}
                    css={tw`fill-current w-4 h-4 mr-1`}
                  />
                  Print
                </Link>
              )}
            </StyledNav>
          ) : (
            <StyledMenu>
              <Menu
                right
                isOpen={this.state.menuOpen}
                onStateChange={state => this.handleStateChange(state)}
              >
                <Link to="/results" exact onClick={() => this.closeMenu()}>
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
