import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

export class WizardFormComponent extends Component {
  componentDidMount() {
    const { onWizardOptionsLoad, reduxFormOptions } = this.props;
    onWizardOptionsLoad(reduxFormOptions);
  }

  componentWillReceiveProps(nextProps) {
    const { onWizardComplete } = this.props;

    if (nextProps.isWizardComplete) {
      onWizardComplete(nextProps.data);
    }
  }

  componentWillUnmount() {
    this.props.wizardReset();
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
  reduxFormOptions: PropTypes.shape({
    form: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onSubmitFail: PropTypes.func,
    onSubmitSuccess: PropTypes.func
  }).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  data: PropTypes.shape({}),
  isWizardComplete: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  wizardReset: PropTypes.func.isRequired,
  onWizardOptionsLoad: PropTypes.func.isRequired,
  onWizardComplete: PropTypes.func.isRequired
};

WizardFormComponent.defaultProps = {
  data: {}
};
