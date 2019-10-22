# Testing

## Test Suite

`npm run test`

## API endpoint integration tests
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