import { buildParams } from './api';

const testProps = {
  sType: 'SA',
  pageSize: 10,
  page: 1,
  sort: 0
};

describe('buildParams()', () => {
  it('sets default values', () => {
    const query = {};
    expect(buildParams(query)).toStrictEqual(testProps);
  });

  it('maps distance value to limitValue', () => {
    const query = {
      distance: 160934
    };
    expect(buildParams(query)).toStrictEqual({
      ...testProps,
      limitType: 2,
      limitValue: 160934
    });
  });

  it('omits limitValue and limitType if distance is 100+ miles', () => {
    const query = {
      distance: ''
    };
    expect(buildParams(query)).toStrictEqual(testProps);
  });

  it('maps language value to sLanguages', () => {
    const query = {
      language: 'SP-Spanish'
    };
    expect(buildParams(query)).toStrictEqual({
      ...testProps,
      sLanguages: 'SP-Spanish'
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
      ...testProps,
      sAddr: '32.4044445, -110.98642940000002'
    });
  });

  it('overrides page value', () => {
    const query = {
      page: 2
    };
    expect(buildParams(query)).toStrictEqual({
      ...testProps,
      page: 2
    });
  });

  it('adds all other values to sCodes', () => {
    const query = {
      age: 'ADLT',
      gender: 'MALE'
    };
    expect(buildParams(query)).toStrictEqual({
      ...testProps,
      sCodes: 'ADLT,MALE'
    });
  });

  it('ignores intake type of care from sCodes', () => {
    const query = {
      type: 'Custom-Intake'
    };
    expect(buildParams(query)).toStrictEqual(testProps);
  });

  it('remove sCodes if value is empty string', () => {
    const query = {
      sCodes: ''
    };
    expect(buildParams(query)).toStrictEqual(testProps);
  });

  it('sets sType:MH, and sCode:WI if Psychiatric emergency walk-in services is chosen', () => {
    const query = {
      type: 'WI'
    };
    expect(buildParams(query)).toStrictEqual({
      ...testProps,
      sType: 'MH',
      sCodes: 'WI'
    });
  });

  it('sets sType:BOTH, and sCode:CO if Co-occurring is chosen', () => {
    const query = {
      type: 'CO'
    };
    expect(buildParams(query)).toStrictEqual({
      ...testProps,
      sType: 'BOTH',
      sCodes: 'CO'
    });
  });

  it('sets sType:MH if Mental health services only is chosen', () => {
    const query = {
      type: 'Custom-Mental_Health'
    };
    expect(buildParams(query)).toStrictEqual({
      ...testProps,
      sType: 'MH'
    });
  });
});
