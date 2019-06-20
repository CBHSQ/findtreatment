import React from 'react';
import { Field, reduxForm } from 'redux-form';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { Location, Select } from '../Input';

let FilterForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div css={tw`w-full mb-6`}>
        <Field
          label="Location"
          component={Location}
          name="location"
          placeholder="City, state, or zip code"
        />
      </div>
      <div css={tw`w-full mb-6`}>
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
      <div css={tw`w-full mb-6`}>
        <Field
          name="distance"
          label="Distance"
          component={Select}
          options={[
            { value: 8046.72, label: '5 miles' },
            { value: 16093.4, label: '10 miles' },
            { value: 40233.6, label: '25 miles' },
            { value: 80467.2, label: '50 miles' },
            { value: 160934, label: '100 miles' }
          ]}
        />
      </div>
      <div css={tw`w-full mb-6`}>
        <button
          css={tw`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded  leading-tight border border-blue-500`}
          type="submit"
        >
          Update providers
        </button>
      </div>
    </form>
  );
};

FilterForm = reduxForm({
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
})(FilterForm);

export default FilterForm;
