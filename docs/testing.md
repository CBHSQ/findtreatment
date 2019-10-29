# Testing

## Test Suite
To execute the test suite manually you'll first need to follow the [local devleopment setup instructions](./Developing.md)
This requires that node and npm are installed on the machine and the steps in Developing have already been completed.

Once completed, execute the `test` command configured in `packages.json`
```
$ npm run test
```

## API endpoint integration tests
The tests in `src/integration/integration.test.js` were developed to test API data endpoint and are rather resource intensive. They are not included in the suite of tests to run automatically on every build. These were originally developed to confirm functionality across multiple instances of the API.

When running these tests, the desired endpoint should be specified with an environment variable, Ex:
```
INT_TEST_ENDPOINT=PROD npm run test:int
```

Acceptable values for `INT_TEST_ENDPOINT` are:
| Value | Endpoint | Is Default |
| - | - | :-: |
| `LOCAL` | http://localhost:9011/locator/listing | X |
| `DEV` | https://kqszbed8ck.execute-api.us-east-1.amazonaws.com/prod/listing2 | |
| `PROD` | https://findtreatment.samhsa.gov/locator/listing | |


> **Warning**: These endpoints have likely changed since the time of internal testing. `src/integration/integration.test.js` may be modified to specify new endpoints if need.