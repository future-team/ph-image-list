'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var Modal = (function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal(props, context) {
        _classCallCheck(this, Modal);

        _React$Component.call(this, props, context);
        this.portalElement = null;
    }

    Modal.prototype.componentDidMount = function componentDidMount() {
        var p = this.props.className && document.getElementById(this.props.className);
        if (!p) {
            var p = document.createElement('div');
            p.id = this.props.className;
            document.body.appendChild(p);
        }
        this.portalElement = p;
        this.componentDidUpdate();
    };

    Modal.prototype.componentWillUnmount = function componentWillUnmount() {
        if(this.portalElement && _reactDom.findDOMNode(this.portalElement) && document.querySelector('.ph-img-slider-modal')) {
            document.body.removeChild(this.portalElement);
        }
    };

    Modal.prototype.componentDidUpdate = function componentDidUpdate() {
        _reactDom2['default'].render(_react2['default'].createElement(
            'div',
            this.props,
            this.props.children
        ), this.portalElement);
    };

    Modal.prototype.render = function render() {
        return null;
    };

    return Modal;
})(_react2['default'].Component);

exports['default'] = Modal;
module.exports = exports['default'];