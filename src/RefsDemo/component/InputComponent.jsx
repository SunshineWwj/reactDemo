import React from 'react';
import PropTypes from 'prop-types';
export default class InputComponent extends React.Component {
  state = {
      value: undefined,
  };
  onChange = e => {
      this.setState({value: e.target.value});
      if(typeof this.props.onChange === 'function')
          this.props.onChange(e.target.value, this.props.name);
  };
  render() {
      const {onChange, onBlur, defaultValue, value, ...rest} = this.props;
      return (
          <input
              {...rest}
              type="text"
              value={this.state.value}
              onChange={this.onChange}/>
      );
  }
}
InputComponent.propTypes = {
    name: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
};
