
# Architecture

As this application is focused solely on the display of data from external sources, it has been implemented as a a "static" application (consisting only of html, css, and javascript). This greatly simplifies development and deployment, enabling the use of productivity-enhancing tools such as [Federalist](https://federalistapp.18f.gov).

## React
We've chosen [React](https://reactjs.org/), [Redux](https://redux.js.org/), and [React Router](https://reacttraining.com/react-router/) for this application. As open-source and broadly used tools for building modern web applications these libraries form the basis of a "component-based" architecture that facilitates building, maintaining, and reasoning about the application. They also benefit from a large and active community of practice. To get up and running quickly and follow community best-practice, we leveraged [Create React App](https://create-react-app.dev/), a scaffold for React applications that provides out-of-the-box configuration for building and deploying that meets our needs.

## CSS

### Tailwind
We chose to use the [Tailwind CSS](https://tailwindcss.com/) framework for implementing the css. Tailwind CSS is an open-source,

> utility-first CSS framework for rapidly building custom designs

that fits extremely well with the component-oriented design of the system; allowing extensive customizability and a relatively small learning curve.

## Data
We leverage the existing SAMHSA treatment locator API to provide the data for the application. We utilize this API in two ways:

1. Searching for facilities by location and selected filters
2. Requesting a single facility

The API itself does not currently provide a way to fetch a single facility so both use cases use the same endpoint to fetch facilities. However, in the second case, we limit the distance to 1 meter with the specific lat/lng to return only the facility required for that page.

## Analytics

This application has the ability to collect anonymized metrics via three primary mechanisms.

1. [The Digital Analytics Program (DAP)](https://digital.gov/services/dap/)
    * Executive branch federal agencies are required to implement the DAP JavaScript code on all public facing federal websites
    * DAP provides broad insights across agencies, checkout their dashboard: https://analytics.usa.gov
    * This application has the ability to send virtual page views to DAP as visitors navigate the site
2. [Google Analytics (GA)](https://analytics.google.com)
    * CBSHQ maintains a GA account to improve their websites and provide a better user experience for all visitors.
    * This information is available only to web managers and other designated staff who require this information to perform their duties. It is retained only for as long as needed for proper analysis. There is no PII included in this data
    * This application has the ability to send virtual page views to GA as visitors navigate the site
    * This application has the ability to send custom events when specific actions of events happen on the site. Such as: Filters selected for search, the number of results returned for a given search, errors returned by underlying APIs, clicks on outbound links, and buttons clicked to report an issue with information on a facility details page
3. [CrazyEgg](https://crazyegg.com)
    * This application has the ability to send data to CrazyEgg
    * This data is only collected when the site operators are actively running an analysis campaign
    * This data includes anonymized click and scrolling information which are used to generate aggregated heatmaps, scrollmaps, and Click Reports

## Feedback

During the beta and initial launch, we gathered feedback by leveraging google forms.
This functionality has been since disabled and links removed from the site.

Disabled in:
- https://github.com/CBHSQ/findtreatment/pull/562/commits/c4f9eb0fbb8ad19426a56e9467a7f58dad6f9deb
- https://github.com/CBHSQ/findtreatment/pull/562/commits/7e19d6a1cf82a1ec3f2040213a80a8639c89fa6e

To re-enable these links for visitors to provide feedback, a developer could use the `Header/HeaderBeta.js` component but *must* specify a value for the URL for the `OutboundLink` therein.

This URL should be set in the environment variable `REACT_APP_FEEDBACK_FORM_URL`. See [Environment Variables](./deploying.md) in the deployment docs for more details.
