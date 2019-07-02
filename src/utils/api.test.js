import { buildParams } from './api';

describe('buildParams()', () => {
  it('sets an initial value', () => {
    const query = {};
    expect(buildParams(query)).toStrictEqual({
      sType: 'BOTH',
      pageSize: 10,
      page: 1,
      sort: 0
    });
  });

  it('maps distance value to limitValue', () => {
    const query = {
      distance: 160934
    };
    expect(buildParams(query)).toStrictEqual({
      sType: 'BOTH',
      limitType: 2,
      limitValue: 160934,
      pageSize: 10,
      page: 1,
      sort: 0
    });
  });

  it('omits limitValue and limitType if distance is 100+ miles', () => {
    const query = {
      distance: 'All'
    };
    expect(buildParams(query)).toStrictEqual({
      sType: 'BOTH',
      pageSize: 10,
      page: 1,
      sort: 0
    });
  });

  it('maps language value to sLanguages', () => {
    const query = {
      languages: 'SP-Spanish'
    };
    expect(buildParams(query)).toStrictEqual({
      sType: 'BOTH',
      pageSize: 10,
      sLanguages: 'SP-Spanish',
      page: 1,
      sort: 0
    });
  });

  it('maps location value to sAddr', () => {
    const query = {
      location: {
        location: {
          lat: 32.4044445,
          lng: -110.98642940000002
        }
      }
    };
    expect(buildParams(query)).toStrictEqual({
      sType: 'BOTH',
      pageSize: 10,
      sAddr: '32.4044445, -110.98642940000002',
      page: 1,
      sort: 0
    });
  });

  it('overrides page value', () => {
    const query = {
      page: 2
    };
    expect(buildParams(query)).toStrictEqual({
      sType: 'BOTH',
      pageSize: 10,
      page: 2,
      sort: 0
    });
  });

  it('adds all other values to sCodes', () => {
    const query = {
      age: 'ADLT',
      gender: 'MALE'
    };
    expect(buildParams(query)).toStrictEqual({
      sType: 'BOTH',
      pageSize: 10,
      sCodes: 'ADLT,MALE',
      page: 1,
      sort: 0
    });
  });

  it('ignores intake type of care from sCodes', () => {
    const query = {
      type: 'Intake'
    };
    expect(buildParams(query)).toStrictEqual({
      sType: 'BOTH',
      pageSize: 10,
      page: 1,
      sort: 0
    });
  });

  it('remove sCodes if value is empty string', () => {
    const query = {
      sCodes: ''
    };
    expect(buildParams(query)).toStrictEqual({
      sType: 'BOTH',
      pageSize: 10,
      page: 1,
      sort: 0
    });
  });
});
