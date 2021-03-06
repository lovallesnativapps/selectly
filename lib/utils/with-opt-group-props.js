'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = withOptGroupProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withOptGroupProps(WrappedComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isAllSelected: false }, _this.options = [], _this._addOption = function (option) {
        _this.options.push(option);
      }, _this._removeOption = function (value) {
        _this.options = _this.options.filter(function (option) {
          return option.value !== value;
        });
      }, _this.selectAll = function () {
        _this.options.forEach(function (option) {
          return option.setSelectedState(true);
        });
        _this.setState({ isAllSelected: true });
      }, _this.deselectAll = function () {
        _this.options.forEach(function (option) {
          return option.setSelectedState(false);
        });
        _this.setState({ isAllSelected: false });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          optgroup: {
            addOption: this._addOption,
            removeOption: this._removeOption
            // onChange: this
          }
        };
      }
    }, {
      key: '_isAllSelected',
      value: function _isAllSelected() {
        this.setState({
          isAllSelected: this.options.every(function (option) {
            return option.getSelectedState();
          })
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return (0, _react.createElement)(WrappedComponent, _extends({}, this.props, {
          isAllSelected: this.state.isAllSelected,
          selectAll: this.selectAll,
          deselectAll: this.deselectAll
        }));
      }
    }]);

    return _class;
  }(_react.Component), _class.childContextTypes = {
    optgroup: _react.PropTypes.object
  }, _temp2;
}
module.exports = exports['default'];