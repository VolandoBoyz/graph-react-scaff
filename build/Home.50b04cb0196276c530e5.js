webpackJsonp([1],{

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: 100%\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  h2{\n    font-size: 50px;\n  }\n  a {\n    text-decoration: none;\n    color: #007AFF;\n  }\n'], ['\n  height: 100%\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  h2{\n    font-size: 50px;\n  }\n  a {\n    text-decoration: none;\n    color: #007AFF;\n  }\n']);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(32);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Home = function Home(props) {
  return _react2.default.createElement(
    'section',
    { className: props.className + ' home-route' },
    _react2.default.createElement(
      'h1',
      null,
      'Welcome to react-redux-hot'
    ),
    _react2.default.createElement(
      'h2',
      null,
      '\uD83E\uDD18\uD83C\uDFFB'
    ),
    _react2.default.createElement(
      'a',
      { href: 'https://github.com/Influencity/react-redux-hot' },
      'View souce code'
    )
  );
};

var HomeStyled = (0, _styledComponents2.default)(Home)(_templateObject);
Home.propTypes = {
  className: _propTypes2.default.string.isRequired
};

exports.default = HomeStyled;

/***/ })

});