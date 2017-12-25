'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var reduxForm = require('redux-form');

var Steps = function Steps(props) {
  return React__default.createElement(
    'div',
    null,
    props.steps.map(function (InnerStep, i) {
      return props.currentStep === i && props.children(InnerStep, i, props);
    }),
    React__default.createElement(
      'div',
      null,
      props.steps.map(function (InnerStep, i) {
        var isActive = props.activatedSteps.includes(i);

        return React__default.createElement('span', { key: i, onClick: function onClick() {
            return isActive ? props.onGoToStep(i) : false;
          } });
      })
    )
  );
};

Steps.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.func).isRequired,
  activatedSteps: PropTypes.arrayOf(PropTypes.number).isRequired,
  currentStep: PropTypes.number.isRequired,
  children: PropTypes.func.isRequired,
  onGoToStep: PropTypes.func.isRequired
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};









var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Step = function Step(props) {
  var StepForm = reduxForm.reduxForm(_extends({}, props.formOptions, {
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  }))(props.component);

  return React__default.createElement(StepForm, props);
};

Step.propTypes = {
  formOptions: PropTypes.shape({}).isRequired,
  component: PropTypes.func.isRequired,
  isCurrentStep: PropTypes.bool.isRequired
};

var reduxWizardForm = function reduxWizardForm(formOptions) {
  return function (steps) {
    if (!Array.isArray(steps)) {
      return function () {
        return null;
      };
    }

    var WizardForm = function (_Component) {
      inherits(WizardForm, _Component);

      function WizardForm() {
        var _temp, _this, _ret;

        classCallCheck(this, WizardForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
          formData: {},
          currentStep: 0,
          activatedSteps: [0]
        }, _this.onNextStep = function () {
          var nextStep = _this.state.currentStep + 1;

          if (_this.isValidStep(nextStep)) {
            _this.setState({ currentStep: nextStep });
          }
        }, _this.onPreviousStep = function () {
          var nextStep = _this.state.currentStep - 1;

          if (_this.isValidStep(nextStep)) {
            _this.setState({ currentStep: nextStep });
          }
        }, _this.onGoToStep = function (step) {
          if (_this.isValidStep(step)) {
            _this.setState({ currentStep: step });
          }
        }, _this.onSubmit = function (data) {
          var _this$state = _this.state,
              formData = _this$state.formData,
              activatedSteps = _this$state.activatedSteps,
              currentStep = _this$state.currentStep;

          var nextFormData = _extends({}, formData, data);

          if (_this.state.currentStep === _this.stepSize - 1) {
            return _this.props.onWizardComplete(nextFormData);
          }

          _this.setState({
            formData: nextFormData,
            activatedSteps: [].concat(activatedSteps, [currentStep + 1])
          });

          return _this.onNextStep();
        }, _this.stepSize = steps.length, _temp), possibleConstructorReturn(_this, _ret);
      }

      WizardForm.prototype.isValidStep = function isValidStep(step) {
        return step > 0 || step < this.stepSize;
      };

      WizardForm.prototype.render = function render() {
        var _this2 = this;

        var _state = this.state,
            currentStep = _state.currentStep,
            activatedSteps = _state.activatedSteps;


        return React__default.createElement(
          Steps,
          {
            steps: steps,
            currentStep: currentStep,
            activatedSteps: activatedSteps,
            onGoToStep: this.onGoToStep,
            onNextStep: this.onNextStep,
            onPreviousStep: this.onPreviousStep
          },
          function (InnerStep, i, props) {
            return React__default.createElement(Step, _extends({
              key: i,
              isCurrentStep: currentStep === i,
              formOptions: formOptions,
              component: InnerStep,
              onSubmit: _this2.onSubmit
            }, props, _this2.props));
          }
        );
      };

      return WizardForm;
    }(React.Component);

    WizardForm.propTypes = {
      onWizardComplete: PropTypes.func.isRequired
    };

    return WizardForm;
  };
};

exports.reduxWizardForm = reduxWizardForm;
//# sourceMappingURL=bundle.js.map
