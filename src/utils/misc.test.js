import { GOOGLE_MAP_EXTERNAL_URL } from './constants';
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

describe('formatAddress()', () => {
  const address = {
    street1: '19201 120th Avenue NE',
    city: 'Bothell',
    state: 'WA',
    zip: '98011'
  };

  const addressWithStreet2 = {
    ...address,
    street2: 'Suite 108'
  };

  it('formats the address without street2', () => {
    expect(misc.formatAddress(address)).toEqual(
      '19201 120th Avenue NE, Bothell, WA 98011'
    );
  });

  it('formats the address with street2', () => {
    expect(misc.formatAddress(addressWithStreet2)).toEqual(
      '19201 120th Avenue NE, Suite 108, Bothell, WA 98011'
    );
  });

  it('adds a line break when `lineBreak` is true', () => {
    expect(misc.formatAddress(address, true)).toEqual(
      `19201 120th Avenue NE,\nBothell, WA 98011`
    );
  });

  it('adds a line break when `lineBreak` is true and street2', () => {
    expect(misc.formatAddress(addressWithStreet2, true)).toEqual(
      '19201 120th Avenue NE, Suite 108,\nBothell, WA 98011'
    );
  });
});

describe('googleMapUrl()', () => {
  const address = {
    street1: '19201 120th Avenue NE',
    city: 'Bothell',
    state: 'WA',
    zip: '98011'
  };

  expect(misc.googleMapUrl(address)).toEqual(
    `${GOOGLE_MAP_EXTERNAL_URL}?api=1&destination=${encodeURI(
      misc.formatAddress(address)
    )}`
  );
});

describe('formatMiles()', () => {
  it('displays distance even if it is zero', () => {
    const miles = 0;
    expect(misc.formatMiles(miles)).toBe('0 miles');
  });

  it('does not pluralize 1 mile', () => {
    const miles = 1;
    expect(misc.formatMiles(miles)).toBe('1 mile');
  });
});
