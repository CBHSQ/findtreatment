import React, { Component } from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { Field } from 'redux-form';
import { PropTypes } from 'prop-types';

import { Button, Label, Radio } from '../Input';

class RadioGroup extends Component {
  state = {
    showAllOptions: false
  };

  toggleShowAllOptions = () => {
    this.setState({
      showAllOptions: !this.state.showAllOptions
    });
  };

  render() {
    const { legend, name, options, visible } = this.props;
    const { showAllOptions } = this.state;
    const visibleOptions = showAllOptions ? options.length : visible;

    return (
      <>
        <fieldset>
          <Label as="legend" value={legend} />
          <Field
            component={({ input, options }) =>
              options
                .slice(0, visibleOptions)
                .map(option => (
                  <Radio key={option.id} input={input} option={option} />
                ))
            }
            name={name}
            options={options}
          />
        </fieldset>
        {visible && (
          <Button link onClick={this.toggleShowAllOptions} type="button">
            {showAllOptions ? '- Show less' : '+ Show more'}
          </Button>
        )}
      </>
    );
  }
}

RadioGroup.propTypes = {
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

export default RadioGroup;
