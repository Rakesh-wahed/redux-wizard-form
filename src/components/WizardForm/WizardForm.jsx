import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

export class WizardFormComponent extends Component {
  componentDidMount() {
    const { onWizardOptionsLoad, reduxFormOptions } = this.props;
    onWizardOptionsLoad(reduxFormOptions);
  }

  componentWillReceiveProps(nextProps) {
    const { isFinalStep, onWizardComplete } = this.props;
    if (nextProps.data && isFinalStep) {
      onWizardComplete(nextProps.data);
    }
  }

  render() {
    const { children, isLoaded } = this.props;

    if (!isLoaded) {
      return null;
    }

    return <Wrapper>{children}</Wrapper>;
  }
}

WizardFormComponent.propTypes = {
  data: PropTypes.shape({}),
  reduxFormOptions: PropTypes.shape({
    form: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onSubmitFail: PropTypes.func,
    onSubmitSuccess: PropTypes.func
  }).isRequired,
  isLoaded: PropTypes.bool.isRequired,
  isFinalStep: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onWizardOptionsLoad: PropTypes.func.isRequired,
  onWizardComplete: PropTypes.func.isRequired
};

WizardFormComponent.defaultProps = {
  data: null
};
