'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Swiper = require('./Swiper');

var _Swiper2 = _interopRequireDefault(_Swiper);

var _ImgList2 = require('./ImgList');

var _ImgList3 = _interopRequireDefault(_ImgList2);

var ImgView = (function (_ImgList) {
    _inherits(ImgView, _ImgList);

    function ImgView(props, context) {
        _classCallCheck(this, ImgView);

        _ImgList.call(this, props, context);
    }

    ImgView.prototype.show = function show() {
        var index = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

        this.viewImg(index);
    };

    ImgView.prototype.render = function render() {
        return this.renderModal();
    };

    return ImgView;
})(_ImgList3['default']);

exports['default'] = ImgView;
module.exports = exports['default'];