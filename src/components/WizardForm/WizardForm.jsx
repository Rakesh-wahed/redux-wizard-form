// @flow
import * as React from 'react';
import { Wrapper } from './styles';
import type { ReduxFormProps } from '../../typed';

type Props = {
  reduxFormOptions: ReduxFormProps,
  children: React.Node,
  data?: ?Object,
  isWizardComplete: boolean,
  isLoaded: boolean,
  wizardReset: Function,
  onWizardOptionsLoad: Function,
  onWizardComplete: Function
};

export class WizardFormComponent extends React.Component<Props> {
  static defaultProps = {
    data: null
  };

  componentDidMount(): void {
    const { onWizardOptionsLoad, reduxFormOptions } = this.props;
    onWizardOptionsLoad(reduxFormOptions);
  }

  componentWillReceiveProps(nextProps: Props): void {
    const { onWizardComplete } = this.props;

    if (nextProps.isWizardComplete) {
      onWizardComplete(nextProps.data);
    }
  }

  componentWillUnmount(): void {
    this.props.wizardReset();
  }

  render(): ?React.Node {
    const { children, isLoaded } = this.props;

    if (!isLoaded) {
      return null;
    }

    return <Wrapper>{children}</Wrapper>;
  }
}
