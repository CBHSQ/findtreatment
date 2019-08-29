import React, { Component } from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { Field } from 'redux-form';
import { PropTypes } from 'prop-types';

import { Button, Checkbox, Label, Radio } from '../Input';

class InputGroup extends Component {
  state = {
    showAllOptions: false
  };

  components = {
    checkbox: Checkbox,
    radio: Radio
  };

  toggleShowAllOptions = () => {
    this.setState({
      showAllOptions: !this.state.showAllOptions
    });
  };

  render() {
    const { legend, name, options, type, visible } = this.props;
    const { showAllOptions } = this.state;
    const visibleOptions = showAllOptions ? options.length : visible;
    const Input = this.components[type || 'radio'];

    return (
      <>
        <fieldset>
          <Label as="legend" value={legend} />
          <Field
            component={({ input, options }) =>
              options
                .slice(0, visibleOptions)
                .map(option => (
                  <Input key={option.value} input={input} option={option} />
                ))
            }
            name={name}
            options={options}
          />
        </fieldset>
        {visible && (
          <Button
            css={tw`text-sm`}
            link
            onClick={this.toggleShowAllOptions}
            type="button"
          >
            {showAllOptions ? '- Show less' : '+ Show more'}
          </Button>
        )}
      </>
    );
  }
}

InputGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  legend: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  visible: PropTypes.number
};

export default InputGroup;
