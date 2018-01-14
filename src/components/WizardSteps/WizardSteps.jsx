import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class WizardStepsComponent extends Component {
  componentWillMount() {
    const { children, setWizardStepsSize } = this.props;
    const childrenSize = Array.isArray(children) ? children.length : 1;

    setWizardStepsSize(childrenSize);
  }

  render() {
    const { children } = this.props;

    if (Array.isArray(children)) {
      return children.map((child, i) => React.cloneElement(child, { step: i, key: i }));
    }

    return children;
  }
}

WizardStepsComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  setWizardStepsSize: PropTypes.func.isRequired
};
