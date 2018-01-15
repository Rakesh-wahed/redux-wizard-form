'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var reactRedux = require('react-redux');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var styled = _interopDefault(require('styled-components'));
var reduxForm = require('redux-form');

var types = {
  WIZARD_STEP_NAME_ADD: 'WIZARD_STEP_NAME_ADD',
  WIZARD_NEXT_STEP: 'WIZARD_NEXT_STEP',
  WIZARD_PREVIOUS_STEP: 'WIZARD_PREVIOUS_STEP',
  WIZARD_GO_TO_STEP: 'WIZARD_GO_TO_STEP',
  WIZARD_FORM_SUBMIT: 'WIZARD_FORM_SUBMIT',
  WIZARD_STEPS_SIZE_SET: 'WIZARD_STEPS_SIZE_SET',
  WIZARD_FORM_OPTIONS_SET: 'WIZARD_FORM_OPTIONS_SET',
  WIZARD_COMPLETE: 'WIZARD_COMPLETE',
  WIZARD_RESET: 'WIZARD_RESET'
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







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









var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};









var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var initialState = {
  stepsSize: 0,
  stepsNames: [],
  formOptions: {
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  },
  currentStep: 0,
  data: null,
  isLoaded: false,
  isWizardComplete: false
};

// UTILS
function getValidStep(prevStep, nextStep, stepSize) {
  return nextStep >= 0 && nextStep <= stepSize - 1 ? nextStep : prevStep;
}

// REDUCER
var wizardReducer = function wizardReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case types.WIZARD_FORM_OPTIONS_SET:
      return _extends({}, state, { formOptions: _extends({}, state.formOptions, action.payload), isLoaded: true });
    case types.WIZARD_STEPS_SIZE_SET:
      return _extends({}, state, { stepsSize: action.payload });
    case types.WIZARD_STEP_NAME_ADD:
      return _extends({}, state, { stepsNames: [].concat(toConsumableArray(state.stepsNames), [action.payload]) });
    case types.WIZARD_NEXT_STEP:
      return _extends({}, state, { currentStep: getValidStep(state.currentStep, state.currentStep + 1, state.stepsSize) });
    case types.WIZARD_PREVIOUS_STEP:
      return _extends({}, state, { currentStep: getValidStep(state.currentStep, state.currentStep - 1, state.stepsSize) });
    case types.WIZARD_GO_TO_STEP:
      return _extends({}, state, { currentStep: getValidStep(state.currentStep, action.payload, state.stepsSize) });
    case types.WIZARD_COMPLETE:
      return _extends({}, state, { isWizardComplete: true, data: action.payload });
    case types.WIZARD_RESET:
      return initialState;
    default:
      return state;
  }
};

// SELECTORS
var getFormOptions = function getFormOptions(state) {
  return state.wizard.formOptions;
};
var getData = function getData(state) {
  return state.wizard.data;
};
var getCurrentStep = function getCurrentStep(state) {
  return state.wizard.currentStep;
};
var getStepsSize = function getStepsSize(state) {
  return state.wizard.stepsSize;
};
var getStepsNames = function getStepsNames(state) {
  return state.wizard.stepsNames;
};
var isLoaded = function isLoaded(state) {
  return state.wizard.isLoaded;
};
var isWizardComplete = function isWizardComplete(state) {
  return state.wizard.isWizardComplete;
};

var _templateObject = taggedTemplateLiteral(['\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n'], ['\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n']);

var Wrapper = styled.div(_templateObject);

var WizardFormComponent = function (_Component) {
  inherits(WizardFormComponent, _Component);

  function WizardFormComponent() {
    classCallCheck(this, WizardFormComponent);
    return possibleConstructorReturn(this, (WizardFormComponent.__proto__ || Object.getPrototypeOf(WizardFormComponent)).apply(this, arguments));
  }

  createClass(WizardFormComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          onWizardOptionsLoad = _props.onWizardOptionsLoad,
          reduxFormOptions = _props.reduxFormOptions;

      onWizardOptionsLoad(reduxFormOptions);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var onWizardComplete = this.props.onWizardComplete;


      if (nextProps.isWizardComplete) {
        onWizardComplete(nextProps.data);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.wizardReset();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          isLoaded = _props2.isLoaded;


      if (!isLoaded) {
        return null;
      }

      return React__default.createElement(
        Wrapper,
        null,
        children
      );
    }
  }]);
  return WizardFormComponent;
}(React.Component);

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

var wizardStepsSizeSet = function wizardStepsSizeSet(stepsSize) {
  return {
    type: types.WIZARD_STEPS_SIZE_SET,
    payload: stepsSize
  };
};

var wizardStepNameAdd = function wizardStepNameAdd(stepName) {
  return {
    type: types.WIZARD_STEP_NAME_ADD,
    payload: stepName
  };
};

var nextStep = function nextStep() {
  return {
    type: types.WIZARD_NEXT_STEP
  };
};



var goToStep = function goToStep(step) {
  return {
    type: types.WIZARD_GO_TO_STEP,
    payload: step
  };
};

var formOptionsSet = function formOptionsSet(formOptions) {
  return {
    type: types.WIZARD_FORM_OPTIONS_SET,
    payload: formOptions
  };
};

var wizardComplete = function wizardComplete(data) {
  return {
    type: types.WIZARD_COMPLETE,
    payload: data
  };
};

var wizardReset = function wizardReset() {
  return {
    type: types.WIZARD_RESET
  };
};

var WizardForm = reactRedux.connect(function (state) {
  return {
    isWizardComplete: isWizardComplete(state),
    isLoaded: isLoaded(state),
    data: getData(state)
  };
}, function (dispatch) {
  return {
    wizardReset: function wizardReset$$1() {
      return dispatch(wizardReset());
    },
    onWizardOptionsLoad: function onWizardOptionsLoad(formOptions) {
      return dispatch(formOptionsSet(formOptions));
    }
  };
})(WizardFormComponent);

var _templateObject$1 = taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  width: 100%;\n'], ['\n  display: flex;\n  justify-content: center;\n  width: 100%;\n']);

var Wrapper$1 = styled.form(_templateObject$1);

var WizardStepComponent = function (_Component) {
  inherits(WizardStepComponent, _Component);

  function WizardStepComponent(props) {
    classCallCheck(this, WizardStepComponent);

    var _this = possibleConstructorReturn(this, (WizardStepComponent.__proto__ || Object.getPrototypeOf(WizardStepComponent)).call(this, props));

    var formOptions = props.formOptions,
        component = props.component,
        onSubmit = props.onSubmit,
        name = props.name,
        addStepName = props.addStepName,
        onWizardComplete = props.onWizardComplete,
        stepsSize = props.stepsSize,
        step = props.step;

    var InnerComponent = component;

    _this.WizardStepForm = reduxForm.reduxForm(formOptions)(function (formProps) {
      return React__default.createElement(
        Wrapper$1,
        { onSubmit: formProps.handleSubmit(step === stepsSize - 1 ? onWizardComplete : onSubmit) },
        React__default.createElement(InnerComponent, formProps)
      );
    });

    addStepName(name);
    return _this;
  }

  createClass(WizardStepComponent, [{
    key: 'render',
    value: function render() {
      var WizardStepForm = this.WizardStepForm;
      var _props = this.props,
          currentStep = _props.currentStep,
          step = _props.step;


      return WizardStepForm && currentStep === step && React__default.createElement(WizardStepForm, null);
    }
  }]);
  return WizardStepComponent;
}(React.Component);

WizardStepComponent.propTypes = {
  name: PropTypes.string,
  currentStep: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  stepsSize: PropTypes.number.isRequired,
  formOptions: PropTypes.shape({
    form: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onSubmitFail: PropTypes.func,
    onSubmitSuccess: PropTypes.func
  }).isRequired,
  component: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onWizardComplete: PropTypes.func.isRequired,
  addStepName: PropTypes.func.isRequired
};

WizardStepComponent.defaultProps = {
  name: 'Step'
};

var WizardStep = reactRedux.connect(function (state) {
  return {
    formOptions: getFormOptions(state),
    currentStep: getCurrentStep(state),
    stepsSize: getStepsSize(state)
  };
}, function (dispatch) {
  return {
    addStepName: function addStepName(stepName) {
      return dispatch(wizardStepNameAdd(stepName));
    },
    onSubmit: function onSubmit() {
      return dispatch(nextStep());
    },
    onWizardComplete: function onWizardComplete(data) {
      return dispatch(wizardComplete(data));
    }
  };
})(WizardStepComponent);

var WizardStepsComponent = function (_Component) {
  inherits(WizardStepsComponent, _Component);

  function WizardStepsComponent() {
    classCallCheck(this, WizardStepsComponent);
    return possibleConstructorReturn(this, (WizardStepsComponent.__proto__ || Object.getPrototypeOf(WizardStepsComponent)).apply(this, arguments));
  }

  createClass(WizardStepsComponent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          children = _props.children,
          setWizardStepsSize = _props.setWizardStepsSize;

      var childrenSize = Array.isArray(children) ? children.length : 1;

      setWizardStepsSize(childrenSize);
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      if (Array.isArray(children)) {
        return children.map(function (child, i) {
          return React__default.cloneElement(child, { step: i, key: i });
        });
      }

      return children;
    }
  }]);
  return WizardStepsComponent;
}(React.Component);

WizardStepsComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  setWizardStepsSize: PropTypes.func.isRequired
};

var WizardSteps = reactRedux.connect(null, function (dispatch) {
  return {
    setWizardStepsSize: function setWizardStepsSize(stepsSize) {
      return dispatch(wizardStepsSizeSet(stepsSize));
    }
  };
})(WizardStepsComponent);

var _templateObject$2 = taggedTemplateLiteral(['\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 20px;\n  position: relative;\n  width: 100%;\n'], ['\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 20px;\n  position: relative;\n  width: 100%;\n']);
var _templateObject2 = taggedTemplateLiteral(['\n  left: ', '%;\n  height: 3px;\n  top: 13px;\n  position: absolute;\n  width: ', '%;\n'], ['\n  left: ', '%;\n  height: 3px;\n  top: 13px;\n  position: absolute;\n  width: ', '%;\n']);
var _templateObject3 = taggedTemplateLiteral(['\n  align-items: center;\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n\n  span {\n    font-size: 1rem;\n  }\n\n  .step-name {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 90%;\n  }\n'], ['\n  align-items: center;\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n\n  span {\n    font-size: 1rem;\n  }\n\n  .step-name {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 90%;\n  }\n']);
var _templateObject4 = taggedTemplateLiteral(['\n  background: ', ';\n  border-radius: 10px;\n  height: 100%;\n  transition: width 600ms cubic-bezier(0, 0.89, 0.69, 0.98);\n  width: ', '%;\n'], ['\n  background: ', ';\n  border-radius: 10px;\n  height: 100%;\n  transition: width 600ms cubic-bezier(0, 0.89, 0.69, 0.98);\n  width: ', '%;\n']);
var _templateObject5 = taggedTemplateLiteral(['\n  background-color: ', ';\n  border-radius: 50%;\n  color: white;\n  font-weight: 800;\n  height: 20px;\n  overflow: hidden;\n  position: relative;\n  padding: 5px;\n  margin-bottom: 10px;\n  text-align: center;\n  transition: background-color 300ms cubic-bezier(0, 0.89, 0.69, 0.98);\n  width: 20px;\n'], ['\n  background-color: ', ';\n  border-radius: 50%;\n  color: white;\n  font-weight: 800;\n  height: 20px;\n  overflow: hidden;\n  position: relative;\n  padding: 5px;\n  margin-bottom: 10px;\n  text-align: center;\n  transition: background-color 300ms cubic-bezier(0, 0.89, 0.69, 0.98);\n  width: 20px;\n']);

var barColor = '#00bcd4';

var Wrapper$2 = styled.div(_templateObject$2);

var ProgressBarWrapper = styled.div(_templateObject2, function (props) {
  return 100 / props.stepsSize / 2;
}, function (props) {
  return 100 - 100 / props.stepsSize;
});

var Block = styled.div(_templateObject3);

var ProgressBar = styled.div(_templateObject4, barColor, function (props) {
  return props.currentStep / (props.stepsSize - 1) * 100;
});

var NumberStep = styled.div(_templateObject5, function (props) {
  return props.isActive ? barColor : '#9E9E9E';
});

var WizardNavigationComponent = function WizardNavigationComponent(_ref) {
  var currentStep = _ref.currentStep,
      stepsSize = _ref.stepsSize,
      stepsNames = _ref.stepsNames,
      children = _ref.children,
      onGoToStep = _ref.onGoToStep;
  return typeof children !== 'function' ? React__default.createElement(
    Wrapper$2,
    null,
    React__default.createElement(
      ProgressBarWrapper,
      { stepsSize: stepsSize },
      React__default.createElement(ProgressBar, { currentStep: currentStep, stepsSize: stepsSize })
    ),
    stepsNames.map(function (stepName, i) {
      return React__default.createElement(
        Block,
        { key: i, onClick: function onClick() {
            return onGoToStep(currentStep, i);
          } },
        React__default.createElement(
          NumberStep,
          { isActive: currentStep >= i },
          React__default.createElement(
            'span',
            null,
            i + 1
          )
        ),
        React__default.createElement(
          'span',
          { className: 'step-name' },
          stepName
        )
      );
    })
  ) : children(currentStep, stepsSize, stepsNames);
};

WizardNavigationComponent.propTypes = {
  children: PropTypes.func,
  currentStep: PropTypes.number.isRequired,
  stepsSize: PropTypes.number.isRequired,
  stepsNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGoToStep: PropTypes.func.isRequired
};

WizardNavigationComponent.defaultProps = {
  children: null
};

var WizardNavigation = reactRedux.connect(function (state) {
  return {
    currentStep: getCurrentStep(state),
    stepsSize: getStepsSize(state),
    stepsNames: getStepsNames(state)
  };
}, function (dispatch) {
  return {
    onGoToStep: function onGoToStep(currentStep, step) {
      if (step < currentStep) {
        dispatch(goToStep(step));
      }
    }
  };
})(WizardNavigationComponent);

exports.WizardForm = WizardForm;
exports.WizardStep = WizardStep;
exports.WizardSteps = WizardSteps;
exports.WizardNavigation = WizardNavigation;
exports.wizardReducer = wizardReducer;
