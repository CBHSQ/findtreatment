import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { Field } from 'redux-form';
import { PropTypes } from 'prop-types';

import { Label, Radio } from '../Input';

const RadioGroup = ({ legend, name, options }) => {
  return (
    <fieldset css={tw`-mb-4`}>
      <Label as="legend" value={legend} />
      <Field
        component={({ input, options }) =>
          options.map(option => (
            <Radio key={option.id} input={input} option={option} />
          ))
        }
        name={name}
        options={options}
      />
    </fieldset>
  );
};

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  legend: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default RadioGroup;
