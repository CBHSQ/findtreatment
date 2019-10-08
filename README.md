# SAMHSA prototype for finding treatment
[![CircleCI](https://circleci.com/gh/18F/samhsa-prototype/tree/master.svg?style=svg)](https://circleci.com/gh/18F/samhsa-prototype/tree/master)
----
[18F](https://18f.gsa.gov) is collaborating with [SAMHSA](https://www.samhsa.gov) to develop a new experience for finding treatment. This repository contains the development for the front-end application of that experience.

## Instances
`master` is our primary and stable development branch which is available at https://findtreatmentbeta.18f.gov

## Feedback

If you'd like to provide feedback or comments on the website please use [this google form](https://docs.google.com/forms/d/e/1FAIpQLSfJWR3ZmRXfVwlqn5Oq_TSn3jeav9RW6J3K0Dcyk_t_hp7ICw/viewform).

If you'd like to report a bug or technical issue with the website, please feel free to submit an issue here. We'll do our best to respond.

## Architecture
This is a React application with staging, preview, and production instances  served as static sites via [Federalist](https://federalist.18f.gov/). We're using CircleCI to power our continuous integration pipeline.

### Deploying

[Federalist](https://federalist.18f.gov/) automatically builds and deploys the application for every push to the `master` branch or submitted pull request.

## Developing

> This application relies on data provided by the SAMHSA Treatment Locator  backend (https://findtreatment.samhsa.gov). We're not currently providing an alternative source of data in this repository or elsewhere.
While you can install and run this prototype locally, you will be unable to query data and receive results via the search interface.

### Getting the code

First you'll need to get the code onto your computer. The easiest way is to
clone it with git. If you're not familiar with git, a tool like
[Github Desktop](https://desktop.github.com/) can help make the experience
easier.

Most people will use the HTTPS link, but if you're a project contributor and
you have your SSH keys configured, you'll clone from the SSH link. You can
find the link by clicking the green "Clone or download" button above the file
listing on this page.

The link is https://github.com/18F/samhsa-prototype.git

If you're familiar with git and want to work from the command line, you
may run:

```shell
git clone https://github.com/18F/samhsa-prototype.git
```

If you can't use git for some reason, you may also download the most recent
code as [a ZIP file](https://github.com/18F/samhsa-prototype/archive/master.zip).

### Running the application locally

Once you've checked out or otherwise retrieved the code, follow these steps to install the required dependencies, and start a development server in your local environment.

Run the following command from within the directory where this file, `README.md`, is located.

```
npm run dev
```

Navigate to `http://localhost:3000/`.

The app will automatically reload if you change any of the source files.

### Running integration tests
The tests in `src/integration/integration.test.js` hit the actual api endpoint and are rather resource intensive so they are not included in the suite of tests to run automatically on every build. They exist to make sure that api responses are consistent across endpoints. When running these tests, the desired endpoint should be specified with an environment variable, Ex:
```
INT_TEST_ENDPOINT=PROD npm run test:int
```

Acceptable values for `INT_TEST_ENDPOINT` are: 
| Value | Endpoint | Is Default |
| - | - | :-: |
| `LOCAL` | http://localhost:9011/locator/listing | X |
| `DEV` | https://kqszbed8ck.execute-api.us-east-1.amazonaws.com/prod/listing2 | |
| `PROD` | https://findtreatment.samhsa.gov/locator/listing | |

### Contributing

Though we're not actively soliciting contributions, we'll make our best effort to collaborate. That said, we cannot make any promises about having time to review, comment on, or accept pull requests.

Pull requests should be made into the `master` branch. Be sure to check out
our [contributing](CONTRIBUTING.md) guide.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in
[CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright
> and related rights in the work worldwide are waived through the
> [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication.
> By submitting a pull request, you are agreeing to comply with this waiver of
> copyright interest.
