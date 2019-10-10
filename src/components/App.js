import React, { Component } from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { TOP_ID } from '../utils/constants';

import ScreenContext from './ScreenContext';
import GlobalStyle from './GlobalStyle';
import SkipNav from './SkipNav';
import Header from './Header';
import Home from './Home';
import Results from './Results';
import Details from './Details';
import Content from './Content';
import Error from './Error';
import NoMatch from './NoMatch';
import Footer from './Footer';

class App extends Component {
  state = {
    mounted: false
  };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {
    return (
      <ScreenContext.Provider value={this.props}>
        <Helmet
          titleTemplate={`%s | ${process.env.REACT_APP_SITE_TITLE}`}
          defaultTitle={process.env.REACT_APP_SITE_TITLE}
        >
          <title>{process.env.REACT_APP_SITE_TITLE}</title>
          <meta
            property="og:title"
            content={process.env.REACT_APP_SITE_TITLE}
          />
          <meta
            name="description"
            content="Find state-licensed treatment near you for addiction and substance use disorder."
          />
          <meta
            property="og:description"
            content="Find state-licensed treatment near you for addiction and substance use disorder."
          />
          <meta
            property="og:url"
            content={
              process.env.REACT_APP_SITE_DOMAIN + this.props.location.pathname
            }
          />
          <meta
            property="og:image"
            content={`${process.env.REACT_APP_SITE_DOMAIN}/thumbnail.png`}
          />
          <meta
            property="og:site_name"
            content={process.env.REACT_APP_SITE_TITLE}
          />
        </Helmet>
        <GlobalStyle />
        <SkipNav skipToMain={this.skipToMain} />
        <div id={TOP_ID} css={tw`overflow-hidden`} tabIndex="-1">
          <Header />
          <main role="main" id="main" tabIndex="-1">
            <Switch>
              <Route exact path="/" component={Home} />} />
              <Route path="/results" component={Results} />
              <Route path="/details/:frid" component={Details} />
              <Route
                path="/content/:sectionID/:subSectionID?"
                component={Content}
              />
              />
              <Route path="/error" component={Error} />
              <Route component={NoMatch} />
            </Switch>
          </main>
          <Footer />
        </div>
      </ScreenContext.Provider>
    );
  }
}

export default withRouter(App);
