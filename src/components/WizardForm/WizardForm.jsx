import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './WizardFormStyles';

export class WizardFormComponent extends Component {
  componentDidMount() {
    const { reduxFormOptions, children, onWizardLoad } = this.props;
    const childrenSize = Array.isArray(children) ? children.length : 1;

    onWizardLoad(childrenSize, reduxFormOptions);
  }

  componentWillReceiveProps(nextProps) {
    const { onWizardComplete } = this.props;

    if (nextProps.currentStep === nextProps.stepsSize) {
      onWizardComplete(nextProps.data);
    }
  }

  render() {
    const { children, isLoaded } = this.props;
    return <Wrapper>{isLoaded ? children : null}</Wrapper>;
  }
}

WizardFormComponent.propTypes = {
  reduxFormOptions: PropTypes.shape({
    form: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onSubmitFail: PropTypes.func,
    onSubmitSuccess: PropTypes.func
  }).isRequired,
  currentStep: PropTypes.number.isRequired,
  stepsSize: PropTypes.number.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  data: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onWizardComplete: PropTypes.func.isRequired,
  onWizardLoad: PropTypes.func.isRequired
};
