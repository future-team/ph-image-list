'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Swiper = (function (_Component) {
    _inherits(Swiper, _Component);

    _createClass(Swiper, null, [{
        key: 'propTypes',
        value: {
            swipeDone: _react.PropTypes.func,
            curIndex: _react.PropTypes.number,
            count: _react.PropTypes.number
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            swipeDone: function swipeDone() {},
            curIndex: 0,
            count: 0
        },
        enumerable: true
    }]);

    function Swiper(props, context) {
        _classCallCheck(this, Swiper);

        _Component.call(this, props, context);
        this.screen = window.screen;
        this.state = {
            distance: this.screen.width * this.props.curIndex,
            count: this.props.count,
            swipeClass: ''
        };
    }

    Swiper.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.setState({
            distance: this.screen.width * nextProps.curIndex,
            count: nextProps.count
        });
    };

    Swiper.prototype.onTouchStartHandler = function onTouchStartHandler(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var _self = this;
        // Test for flick.
        this.longTouch = false;
        setTimeout(function () {
            _self.longTouch = true;
        }, 200);
        // Get the original touch position.
        this.touchstartx = evt.touches[0].pageX;
        // The movement gets all janky if there's a transition on the elements.
        this.setState({
            swipeClass: ''
        });
    };

    // TODO animation

    Swiper.prototype.onTouchMoveHandler = function onTouchMoveHandler(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        // Continuously return touch position.
        this.touchmovex = evt.touches[0].pageX;
        // Calculate distance to translate holder.
        this.movex = this.props.curIndex * this.screen.width + (this.touchstartx - this.touchmovex);
        // Makes the holder stop moving when there is no more content.
        if (this.movex < (this.state.count - 1) * this.screen.width) {
            this.setState({
                distance: this.movex
            });
        }
    };

    Swiper.prototype.onTouchEndHandler = function onTouchEndHandler(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        // Calculate the distance swiped.
        var curIndex = this.props.curIndex;
        var clientWidth = this.screen.width;
        var absMove = Math.abs(curIndex * clientWidth - this.movex);
        // Calculate the index. All other calculations are based on the index.
        if (absMove > clientWidth / 4 && this.longTouch === true) {
            if (this.movex > curIndex * clientWidth && curIndex < this.state.count - 1) {
                curIndex++;
            } else if (this.movex < curIndex * clientWidth && curIndex > 0) {
                curIndex--;
            }
        }
        // Move and animate the elements.
        this.setState({
            distance: curIndex * clientWidth,
            swipeClass: 'ph-img-slider-animation'
        });
        this.props.swipeDone && this.props.swipeDone(curIndex);
    };

    Swiper.prototype.render = function render() {
        var _state = this.state;
        var distance = _state.distance;
        var swipeClass = _state.swipeClass;

        var className = _classnames2['default'](this.props.children.props.className || '', swipeClass);
        var styles = {
            transform: 'translate(-' + distance + 'px, 0) translateZ(0)'
        };
        return _react2['default'].cloneElement(_react2['default'].Children.only(this.props.children), {
            onTouchStart: this.onTouchStartHandler.bind(this),
            onTouchMove: this.onTouchMoveHandler.bind(this),
            onTouchEnd: this.onTouchEndHandler.bind(this),
            className: className,
            style: _extends({}, this.props.children.props.style, styles)
        });
    };

    return Swiper;
})(_react.Component);

exports['default'] = Swiper;
module.exports = exports['default'];