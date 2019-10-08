// REACT_APP_PROD_API_URL=https://findtreatment.samhsa.gov/locator/
// REACT_APP_DEV_API_URL=https://bhsis01.eagletechva.com/locator/
// REACT_APP_DEV_API_URL=http://localhost:9011/locator/

import axios from 'axios';
import qs from 'qs';

import { buildParams } from './utils/api';
import { DEFAULT_PAGE_SIZE, METERS_PER_MILE } from './utils/constants';

const API = axios.create({
  baseURL: 'http://localhost:9011/locator/',
  responseType: 'json'
});

const send = query =>
  API({
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(buildParams(query)),
    url: '/listing'
  });

const defaultQuery = {
  distance: METERS_PER_MILE * 10,
  pageSize: 100000, // Setting enormous default page size so we don't have to deal with pagination unless we want to!
  location: {
    // address: '',
    latLng: {
      // 98021
      lat: 47.7972338,
      lng: -122.20291309999999
    }
  }
};

describe('Integration Tests', () => {
  it('sorts by distance ascending', async () => {
    const { data } = await send({
      ...defaultQuery,
      distance: null
    });

    // Assert there are results
    expect(data.rows.length).toBeGreaterThan(0);

    // Assert the distances are in ascending order
    const anyDecreases = data.rows.some(
      (row, idx, array) => idx > 0 && row.miles < array[idx - 1].miles
    );
    expect(anyDecreases).toEqual(false);
  });

  it('sorts in order of `_irow`', async () => {
    const { data } = await send(defaultQuery);

    // Assert there are results
    expect(data.rows.length).toBeGreaterThan(0);

    // Assert the returned order matches `_irow` values
    const anyRowMismatches = data.rows.some(
      (row, idx) => idx + 1 !== row._irow
    );
    expect(anyRowMismatches).toEqual(false);
  });

  it('respects distance radius', async () => {
    const smallRadius = 5;
    const largeRadius = 15;

    const [smallRadiusData, largeRadiusData] = await Promise.all([
      send({ ...defaultQuery, distance: METERS_PER_MILE * smallRadius }),
      send({ ...defaultQuery, distance: METERS_PER_MILE * largeRadius })
    ]);

    const smallRadiusRows = smallRadiusData.data.rows;
    const largeRadiusRows = largeRadiusData.data.rows;

    // Assert there are no locations outside the radius
    expect(smallRadiusRows.some(row => row.miles > smallRadius)).toEqual(false);
    expect(largeRadiusRows.some(row => row.miles > largeRadius)).toEqual(false);

    // Assert the large radius results contain all of the small radius results
    expect(largeRadiusRows).toEqual(expect.arrayContaining(smallRadiusRows));

    // Assert the small radius results DO NOT contain all of the large radius results
    expect(smallRadiusRows).not.toEqual(
      expect.arrayContaining(largeRadiusRows)
    );
  });

  it('respects pagination', async () => {
    const firstPage = 1;
    const paginationQuery = {
      ...defaultQuery,
      pageSize: DEFAULT_PAGE_SIZE,
      page: firstPage
    };

    /*
       Query the first Page
    */
    const { data: firstPageData } = await send(paginationQuery);

    // Assert the metadata is coherent
    expect(firstPageData.page).toEqual(firstPage);
    expect(firstPageData.totalPages).toBeGreaterThanOrEqual(
      Math.floor(firstPageData.recordCount / DEFAULT_PAGE_SIZE)
    );
    expect(firstPageData.totalPages).toBeLessThanOrEqual(
      Math.ceil(firstPageData.recordCount / DEFAULT_PAGE_SIZE)
    );

    // Assert the number returned is correct
    expect(firstPageData.rows.length).toEqual(DEFAULT_PAGE_SIZE);

    // Assert the row ids are within the expected range
    const anyOutOfRange = inPageRangeByIRow(
      firstPageData.rows,
      firstPageData.page,
      DEFAULT_PAGE_SIZE
    );
    expect(anyOutOfRange).toEqual(false);

    // Assert this just to make sure the following assertions are valid
    expect(firstPageData.totalPages).toBeGreaterThan(1);

    /*
       Query the next Page
    */
    const nextPage = firstPageData.page + 1;
    const { data: nextPageData } = await send({
      ...paginationQuery,
      page: nextPage
    });

    // Assert the metadata is coherent
    expect(nextPageData.page).toEqual(nextPage);

    // Assert the metadata is the same
    expect(firstPageData.totalPages).toEqual(nextPageData.totalPages);
    expect(firstPageData.recordCount).toEqual(nextPageData.recordCount);

    // Assert the number returned is correct
    expect(nextPageData.rows.length).toEqual(DEFAULT_PAGE_SIZE);

    // Assert the row ids are within the expected range
    const anyNextOutOfRange = inPageRangeByIRow(
      nextPageData.rows,
      nextPageData.page,
      DEFAULT_PAGE_SIZE
    );
    expect(anyNextOutOfRange).toEqual(false);

    // Assert the results are different
    expect(intersectByIRow(firstPageData.rows, nextPageData.rows)).toEqual(
      false
    );

    /*
       Query the last Page
    */
    const lastPage = firstPageData.totalPages;
    const { data: lastPageData } = await send({
      ...paginationQuery,
      page: lastPage
    });

    // Assert the metadata is coherent
    expect(lastPageData.page).toEqual(lastPage);

    // Assert the metadata is the same
    expect(firstPageData.totalPages).toEqual(lastPageData.totalPages);
    expect(firstPageData.recordCount).toEqual(lastPageData.recordCount);

    // Assert the number returned is correct
    expect(lastPageData.rows.length).toEqual(
      lastPageData.recordCount % DEFAULT_PAGE_SIZE || DEFAULT_PAGE_SIZE // Replaces 0 with the page size
    );

    // Assert the row ids are within the expected range
    const anyLastOutOfRange = inPageRangeByIRow(
      lastPageData.rows,
      lastPageData.page,
      DEFAULT_PAGE_SIZE
    );
    expect(anyLastOutOfRange).toEqual(false);

    // Assert the results are different
    expect(intersectByIRow(lastPageData.rows, firstPageData.rows)).toEqual(
      false
    );
    expect(intersectByIRow(lastPageData.rows, nextPageData.rows)).toEqual(
      false
    );

    /*
       Query an out of range page
       TODO - verify this is the expected behavior!!!!
    */
    const outOfRangePage = firstPageData.totalPages + 1;
    const { data: outOfRangePageData } = await send({
      ...paginationQuery,
      page: outOfRangePage
    });

    // Assert the metadata is coherent
    expect(outOfRangePageData.page).toEqual(outOfRangePage);

    // Assert the metadata is the same
    expect(outOfRangePageData.totalPages).toEqual(lastPageData.totalPages);
    expect(outOfRangePageData.recordCount).toEqual(lastPageData.recordCount);
    expect(outOfRangePageData.rows).toHaveLength(0);
  });

  it('handles 100+ mile radius', async () => {
    const { data: firstPageData } = await send({
      ...defaultQuery,
      distance: null
    });

    // Originally, I grabbed the absolute last record, but it did NOT have a miles attribute...
    // TODO - Verify this isn't the case in production????
    // Assert it is farther away than 100 miles
    const lastLocation = firstPageData.rows[firstPageData.rows.length - 1];
    expect(lastLocation.miles).toBeGreaterThan(100);
  });

  /*
     It's too much to check every filter as the shape of the returned data does
     not correspond to how we break down the filters. Lets just pick a few to
     spot check individually and combined.
  */
  describe('filters', () => {
    it('respects treatment type of `Detox`', async () => {
      const { data } = await send({
        ...defaultQuery,
        type: 'DT'
      });

      // Assert there is data
      expect(data.rows.length).toBeGreaterThan(0);

      // Assert all rows include the filter
      const anyMissingFilter = data.rows.some(row =>
        row.services.find(
          service =>
            service.f2 === 'TC' &&
            service.f3 !== 'Detoxification; Substance use treatment'
        )
      );

      expect(anyMissingFilter).toEqual(false);
    });

    it('respects payment option of `Medicaid`', async () => {
      const { data } = await send({
        ...defaultQuery,
        payment: 'MD'
      });

      // Assert there is data
      expect(data.rows.length).toBeGreaterThan(0);

      // Assert all rows include the filter
      const anyMissingFilter = data.rows.some(row =>
        row.services.find(
          service =>
            service.f2 === 'PAY' && !service.f3.split('; ').includes('Medicaid')
        )
      );

      expect(anyMissingFilter).toEqual(false);
    });

    it('respects ages option of `18+`', async () => {
      const { data } = await send({
        ...defaultQuery,
        ages: 'ADLT'
      });

      // Assert there is data
      expect(data.rows.length).toBeGreaterThan(0);

      // Assert all rows include the filter
      const anyMissingFilter = data.rows.some(row =>
        row.services.find(
          service =>
            service.f2 === 'AGE' && !service.f3.split('; ').includes('Adults')
        )
      );

      expect(anyMissingFilter).toEqual(false);
    });

    it('respects languages option of `Spanish`', async () => {
      const { data } = await send({
        ...defaultQuery,
        language: 'SP-Spanish'
      });

      // Assert there is data
      expect(data.rows.length).toBeGreaterThan(0);

      // Assert all rows include the filter
      const anyMissingFilter = data.rows.some(row =>
        row.services.find(
          service =>
            service.f2 === 'OL' && !service.f3.split('; ').includes('Spanish')
        )
      );

      expect(anyMissingFilter).toEqual(false);
    });

    it('respects special programs option of `Veterans`', async () => {
      const { data } = await send({
        ...defaultQuery,
        special: ['VET']
      });

      // Assert there is data
      expect(data.rows.length).toBeGreaterThan(0);

      // Assert all rows include the filter
      const anyMissingFilter = data.rows.some(row =>
        row.services.find(
          service =>
            service.f2 === 'SG' && !service.f3.split('; ').includes('Veterans')
        )
      );

      expect(anyMissingFilter).toEqual(false);
    });

    it('respects special programs options of `Veterans` AND `LGBT`', async () => {
      const { data } = await send({
        ...defaultQuery,
        special: ['VET', 'GL']
      });

      // Assert there is data
      expect(data.rows.length).toBeGreaterThan(0);

      // Assert all rows include the filters
      const anyMissingFilter = data.rows.some(row =>
        row.services.find(
          service =>
            service.f2 === 'SG' &&
            (!service.f3.split('; ').includes('Veterans') ||
              !service.f3
                .split('; ')
                .includes(
                  'Lesbian, gay, bisexual, or transgender (LGBT) clients'
                ))
        )
      );

      expect(anyMissingFilter).toEqual(false);
    });

    it('respects medication-assisted treatment option of `Naltrexone`', async () => {
      const { data } = await send({
        ...defaultQuery,
        mat: 'NU'
      });

      // Assert there is data
      expect(data.rows.length).toBeGreaterThan(0);

      // Assert all rows include the filter
      const anyMissingFilter = data.rows.some(row =>
        row.services.find(
          service =>
            service.f2 === 'OT' &&
            !service.f3.split('; ').includes('Naltrexone used in Treatment')
        )
      );

      expect(anyMissingFilter).toEqual(false);
    });

    it('respects a handful of options', async () => {
      const { data } = await send({
        ...defaultQuery,
        distance: METERS_PER_MILE * 25,
        ages: 'ADLT',
        mat: 'NU',
        special: ['VET']
      });

      // Assert there is data
      expect(data.rows.length).toBeGreaterThan(0);

      // Assert all rows include the filters
      const anyMissingFilter = data.rows.some(row =>
        row.services.find(
          service =>
            (service.f2 === 'AGE' &&
              !service.f3.split('; ').includes('Adults')) ||
            (service.f2 === 'SG' &&
              !service.f3.split('; ').includes('Veterans')) ||
            (service.f2 === 'OT' &&
              !service.f3.split('; ').includes('Naltrexone used in Treatment'))
        )
      );

      expect(anyMissingFilter).toEqual(false);
    });
  });
});

/*
   Helpers
*/
function intersectByIRow(ary1, ary2) {
  return ary1.some(r1 => ary2.some(r2 => r2._irow === r1._irow));
}

function inPageRangeByIRow(ary, page, pageSize) {
  return ary.some(
    row => row._irow <= (page - 1) * pageSize || row._irow > page * pageSize
  );
}
