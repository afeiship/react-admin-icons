import noop from '@jswork/noop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const CLASS_NAME = 'react-admin-icons';

export default class ReactAdminIcons extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The icon name.
     */
    value: PropTypes.string,
    /**
     * The icon size(width/height).
     */
    size: PropTypes.number,
    /**
     * The icon color.
     */
    color: PropTypes.string
  };

  static defaultProps = {
    size: 16
  };

  static Icons(inValue, inProps) {
    return React.createElement(this, {
      ...inProps,
      value: inValue
    });
  }

  get size() {
    const { size } = this.props;
    return { fontSize: size };
  }

  render() {
    const { className, value, size, ...props } = this.props;
    return (
      <i
        data-component={CLASS_NAME}
        style={this.size}
        className={classNames(CLASS_NAME, 'jswork', `icon${value}`, className)}
        {...props}
      />
    );
  }
}
