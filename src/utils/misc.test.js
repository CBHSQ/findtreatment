import * as misc from './misc';

describe('servicesToObject()', () => {
  it('converts array into object with service code as key', () => {
    const services = [
      {
        f1: 'Type of Care',
        f2: 'TC',
        f3: 'Substance use treatment'
      }
    ];

    expect(misc.servicesToObject(services)).toStrictEqual({
      TC: {
        name: 'Type of Care',
        values: ['Substance use treatment']
      }
    });
  });
});

describe('linkToFacility()', () => {
  it('forms a link with proper path and query params', () => {
    const params = {
      frid: '2037b07b2bfb78e1bdaf2b46dd94ceb41c2da1493e7c0c22796d82762c4cbb53',
      latitude: 32.4044445,
      longitude: -110.98642940000002
    };
    expect(misc.linkToFacility({ ...params })).toStrictEqual({
      pathname:
        '/details/2037b07b2bfb78e1bdaf2b46dd94ceb41c2da1493e7c0c22796d82762c4cbb53',
      search: 'sAddr=32.4044445%2C%20-110.98642940000002'
    });
  });
});
