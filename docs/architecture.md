
# Architecture

## Javascript
It was decided that this application should be a "static" application (consisting only of html, css, and javascript) since is only responsible for providing a web interface and will leverage the existing treatment locator api. This greatly simplifies development and deployment, enabling the use of productivity-enhancing tools such as [Federalist](https://federalistapp.18f.gov).

### React
[React](https://reactjs.org/), [Redux](https://redux.js.org/), and [React Router](https://reacttraining.com/react-router/) are the open-source, gold-standard for building web applications. These libraries form the basis of a "component-based" architecture that makes building, maintaining, and reasoning about the application straightforward. They are enterprise-grade, battle-tested libraries boasting a large community of active developers. To get up and running quickly and follow community best-practice, we leveraged [Create React App](https://create-react-app.dev/), a scaffold for React applications that provides out-of-the-box configuration for building and deploying that meets our needs.

## CSS

### Tailwind
Because of the unique design requirements and timeframe of this application, we chose to use the [Tailwind CSS](https://tailwindcss.com/) framework for implementing the css. Tailwind CSS is an open-source,

> utility-first CSS framework for rapidly building custom designs

that fits extremely well with the component-oriented design of the system; allowing extensive customizability and a very small learning curve.

## Data
We leverage the existing treatment locator API to provide all of the data for the application. We utilize this API in two ways:

1. Searching for facilities by location and certain filters
2. Requesting a single facility

The API itself does not provide a way to fetch a single facility so both use cases use the same endpoint to fetch facilities. However, in the second case, we limit the distance to 1 meter with the specific lat/lng to return only the facility required for that page.