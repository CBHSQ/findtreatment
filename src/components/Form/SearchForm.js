import React from 'react';
import { Field, reduxForm } from 'redux-form';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { Location, Select } from '../Input';

let SearchForm = props => {
  const { handleSubmit } = props;
  return (
    <form css={tw`lg:max-w-5xl mx-auto mb-12`} onSubmit={handleSubmit}>
      <div css={tw`flex flex-wrap -mx-3 mb-2`}>
        <div css={tw`w-full lg:w-1/3 px-3 mb-6 lg:mb-0`}>
          <Field
            label="Location"
            component={Location}
            name="location"
            placeholder="City, state, or zip code"
          />
        </div>
        <div css={tw`w-full lg:w-1/3 px-3 mb-6 lg:mb-0`}>
          <Field
            name="type"
            label="Service type"
            component={Select}
            options={[
              { value: 'BOTH', label: 'All providers' },
              { value: 'SA', label: 'Substance use' },
              { value: 'MH', label: 'Mental health' }
            ]}
          />
        </div>
        <div css={tw`flex items-end w-full lg:w-1/3 px-3 mb-6 lg:mb-0`}>
          <button
            css={tw`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded  leading-tight border border-blue-500`}
            type="submit"
          >
            Find treatment
          </button>
        </div>
      </div>
    </form>
  );
};

SearchForm = reduxForm({
  form: 'search',
  initialValues: {
    type: 'BOTH',
    location: {
      location: {
        lat: '',
        lng: ''
      }
    },
    distance: 16093.4
  },
  destroyOnUnmount: false
})(SearchForm);

export default SearchForm;
