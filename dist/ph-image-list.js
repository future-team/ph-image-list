(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react/lib/ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react/lib/ReactDOM"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react/lib/ReactDOM")) : factory(root["React"], root["ReactDom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _ImgList2 = __webpack_require__(2);

	var _ImgList3 = _interopRequireDefault(_ImgList2);

	exports.ImgList = _ImgList3['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Modal = __webpack_require__(4);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _Swiper = __webpack_require__(6);

	var _Swiper2 = _interopRequireDefault(_Swiper);

	__webpack_require__(8);

	var loop = function loop() {};
	var imageItem = _react.PropTypes.shape({
	    fileId: _react.PropTypes.number.isRequired,
	    fileName: _react.PropTypes.string.isRequired,
	    url: _react.PropTypes.string.isRequired,
	    thumbUrl: _react.PropTypes.string.isRequired
	});
	/**
	 *  - 图片查看组件提供图片列表展示及全屏查看功能<br/>
	 *  - 在设置 `editable` 为 `true` 的情况下可删除图片列表里的图片<br/>
	 *  - 可以通过 maxShowNum 设置显示的图片个数<br/>
	 *  主要属性和接口：
	 *  @class ImgList
	 *  @module ImgList
	 *  @extends Component
	 *  @constructor
	 *  @demo ImgList.js {源码}
	 * */

	var ImgList = (function (_Component) {
	    _inherits(ImgList, _Component);

	    _createClass(ImgList, null, [{
	        key: 'propTypes',

	        /**
	         *
	         * @type {{maxShowNum: (*|string|boolean|is.number|t.exports.number|e.exports.number), editable: *, images: *, swipeDoneCallback: (*|!Function|null), deleteDoneCallback: (*|!Function|null)}}
	         */
	        value: {
	            /**
	             * 最多显示个数
	             * @property maxShowNum
	             * @type number
	             * @default 4
	             * */
	            maxShowNum: _react.PropTypes.number,

	            /**
	             * 是否允许删除
	             * @property  editable
	             * @type boolean
	             * @default false
	             */
	            editable: _react.PropTypes.bool,

	            /**
	             * 查看的图片列表
	             * @property  images
	             * @type array
	             * @default []
	             */
	            images: _react.PropTypes.arrayOf(imageItem).isRequired,

	            /**
	             * 全屏查看翻页的回调
	             * @property  swipeDoneCallback
	             * @type function
	             * @default function(index){}
	             */
	            swipeDoneCallback: _react.PropTypes.func,

	            /**
	             * 可删除时删成功时的回调
	             * @property  deleteDoneCallback
	             * @type function
	             * @default function(index, item){}
	             */
	            deleteDoneCallback: _react.PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            maxShowNum: 4,
	            editable: false,
	            images: [],
	            swipeDoneCallback: loop,
	            deleteDoneCallback: loop
	        },
	        enumerable: true
	    }]);

	    function ImgList(props, context) {
	        _classCallCheck(this, ImgList);

	        _Component.call(this, props, context);
	        // get viewport size
	        this.screen = window.screen;
	        this.state = {
	            isEditAble: this.props.editable,
	            images: this.props.images,
	            imgIndex: 0,
	            showImgListFull: false,
	            sliderStyles: null,
	            sliderItemStyle: {
	                width: this.screen.width + 'px',
	                height: this.screen.height + 'px'
	            }
	        };
	    }

	    /**
	     *
	     * @param nextProps
	     */

	    ImgList.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.state = {
	            isEditAble: nextProps.editable || false,
	            images: nextProps.images || [],
	            sliderItemStyle: {
	                width: this.screen.width + 'px',
	                height: this.screen.height + 'px'
	            }
	        };
	    };

	    /**
	     * delete item
	     * @param index
	     * @param evt
	     * @returns {boolean}
	     */

	    ImgList.prototype.deleteItem = function deleteItem(index, evt) {
	        evt.preventDefault();
	        evt.stopPropagation();
	        index = index == undefined ? this.state.imgIndex : index;
	        var _index = -1,
	            _item = null;
	        var images = this.state.images;
	        images.forEach(function (d, i) {
	            if (index == i) {
	                _index = i;
	                _item = d;
	            }
	        });
	        if (_index != -1) {
	            images.splice(_index, 1);
	            this.setState({
	                imgIndex: 0,
	                images: images
	            });
	            this.props.deleteDoneCallback.call(this, _index, _item);
	        }
	        if (this.state.showImgListFull) {
	            this.viewImg(0);
	        }
	        return false;
	    };

	    /**
	     *  @demo ImgList.js {源码}
	     *  @returns {*|Array|HTMLCollection}
	     */

	    ImgList.prototype.getImages = function getImages() {
	        return this.props.images || [];
	    };

	    /**
	     * view img handler
	     * @param index
	     */

	    ImgList.prototype.viewImg = function viewImg(index) {
	        // 计算宽高 & transation
	        var fullWidth = (this.props.images.length || 0) * this.screen.width;
	        this.setState({
	            showImgListFull: true,
	            imgIndex: index,
	            sliderStyles: {
	                width: fullWidth + 'px',
	                height: (this.screen.height || 0) + 'px'
	            }
	        });
	    };

	    /**
	     * close modal
	     */

	    ImgList.prototype.closeModal = function closeModal() {
	        this.setState({
	            showImgListFull: false,
	            sliderStyles: null
	        });
	    };

	    /**
	     * swiper handler
	     * @param curIndex
	     */

	    ImgList.prototype.swipeDoneHandler = function swipeDoneHandler(curIndex) {
	        curIndex != undefined && (this.setState({
	            imgIndex: curIndex
	        }), this.props.swipeDoneCallback.call(this, curIndex));
	    };

	    ImgList.prototype.render = function render() {
	        var _this = this;

	        var _state = this.state;
	        var images = _state.images;
	        var imgIndex = _state.imgIndex;
	        var showImgListFull = _state.showImgListFull;
	        var isEditAble = _state.isEditAble;

	        return _react2['default'].createElement(
	            'div',
	            { className: 'ph-img-list' },
	            images.length ? (isEditAble ? images : images.slice(0, this.props.maxShowNum)).map(function (item, index) {
	                return _react2['default'].createElement(
	                    'div',
	                    { key: item.fileId, className: 'ph-img-item' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'ph-img-ctn', onClick: _this.viewImg.bind(_this, index) },
	                        _react2['default'].createElement('img', { className: 'ph-img', src: item.thumbUrl, alt: item.fileName })
	                    ),
	                    isEditAble && _react2['default'].createElement(
	                        'div',
	                        { className: 'ph-img-option' },
	                        _react2['default'].createElement('span', { className: 'ph-img-delete', onClick: _this.deleteItem.bind(_this, index) })
	                    )
	                );
	            }) : _react2['default'].createElement(
	                'div',
	                { className: 'ph-img-empty' },
	                _react2['default'].createElement(
	                    'p',
	                    null,
	                    '暂无可供展示的图片'
	                )
	            ),
	            !isEditAble && images.length > this.props.maxShowNum && _react2['default'].createElement(
	                'div',
	                { className: 'ph-img-count' },
	                images.length
	            ),
	            _react2['default'].createElement(
	                _Modal2['default'],
	                { className: 'ph-img-slider-modal' },
	                showImgListFull === true && _react2['default'].createElement(
	                    'div',
	                    { className: 'ph-img-slider' },
	                    _react2['default'].createElement(
	                        _Swiper2['default'],
	                        { count: images.length, curIndex: imgIndex, swipeDone: this.swipeDoneHandler.bind(this) },
	                        _react2['default'].createElement(
	                            'div',
	                            { className: 'ph-img-slider-ctn', style: this.state.sliderStyles },
	                            images.map(function (item, index) {
	                                return _react2['default'].createElement(
	                                    'div',
	                                    { key: item.fileId, className: 'ph-img-item', style: _this.state.sliderItemStyle },
	                                    _react2['default'].createElement(
	                                        'div',
	                                        { className: 'ph-img-ctn', style: { 'lineHeight': _this.state.sliderItemStyle.height } },
	                                        _react2['default'].createElement('img', { className: 'ph-img ', src: item.url, alt: item.fileName })
	                                    )
	                                );
	                            })
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'ph-img-slider-option' },
	                        _react2['default'].createElement(
	                            'p',
	                            { className: 'ph-img-close' },
	                            _react2['default'].createElement(
	                                'a',
	                                { href: 'javascript:;', onClick: this.closeModal.bind(this) },
	                                '关闭'
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            'p',
	                            { className: 'ph-img-delete' },
	                            this.state.isEditAble && _react2['default'].createElement(
	                                'a',
	                                { href: 'javascript:;', onClick: this.deleteItem.bind(this, undefined) },
	                                '删除'
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            'span',
	                            { className: 'ph-img-cur' },
	                            (imgIndex || 0) + 1
	                        ),
	                        _react2['default'].createElement(
	                            'span',
	                            { className: 'ph-img-count' },
	                            '/',
	                            images.length
	                        )
	                    )
	                )
	            )
	        );
	    };

	    return ImgList;
	})(_react.Component);

	exports['default'] = ImgList;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactLibReactDOM = __webpack_require__(5);

	var _reactLibReactDOM2 = _interopRequireDefault(_reactLibReactDOM);

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
	        document.body.removeChild(this.portalElement);
	    };

	    Modal.prototype.componentDidUpdate = function componentDidUpdate() {
	        _reactLibReactDOM2['default'].render(_react2['default'].createElement(
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

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(7);

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
	        var _self = this;
	        // Test for flick.
	        this.longTouch = false;
	        setTimeout(function () {
	            _self.longTouch = true;
	        }, 250);
	        // Get the original touch position.
	        this.touchstartx = evt.touches[0].pageX;
	        // The movement gets all janky if there's a transition on the elements.
	        this.setState({
	            swipeClass: ''
	        });
	    };

	    // TODO animation

	    Swiper.prototype.onTouchMoveHandler = function onTouchMoveHandler(evt) {
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

	    Swiper.prototype.onTouchEndHandler = function onTouchEndHandler() {
	        // Calculate the distance swiped.
	        var curIndex = this.props.curIndex;
	        var clientWidth = this.screen.width;
	        var absMove = Math.abs(curIndex * clientWidth - this.movex);
	        // Calculate the index. All other calculations are based on the index.
	        if (absMove > clientWidth / 2 && this.longTouch === true) {
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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, ".ph-img-item {\n  position: relative;\n  width: 25%;\n  padding: 1vw;\n  box-sizing: border-box;\n  height: 24vw;\n}\n.ph-img-item .ph-img-ctn {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.ph-img-item .ph-img-option {\n  position: absolute;\n  top: -3px;\n  right: -2px;\n}\n.ph-img-item .ph-img-option .ph-img-delete {\n  background: rgba(0, 0, 0, 0.8);\n  height: 20px;\n  width: 20px;\n  display: inline-block;\n  border-radius: 20px;\n  text-align: center;\n}\n.ph-img-item .ph-img-option .ph-img-delete:before {\n  content: \"X\";\n  line-height: 20px;\n  color: #fff;\n}\n.ph-img-list {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.ph-img-list .ph-img-count {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  padding: 2px 5px;\n  color: #fff;\n  border-radius: 5px;\n  font-size: 14px;\n  background: rgba(0, 0, 0, 0.8);\n}\n.ph-img-list .ph-img-empty {\n  flex: 1;\n  text-align: center;\n  color: #ccc;\n}\n.ph-img-slider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  background-color: #000;\n}\n.ph-img-slider .ph-img-slider-animation {\n  transition: transform 0.3s ease-out;\n}\n.ph-img-slider .ph-img-slider-ctn .ph-img-item {\n  float: left;\n  padding: 0;\n  z-index: 1;\n  text-align: center;\n}\n.ph-img-slider .ph-img-slider-ctn .ph-img-item .ph-img-ctn {\n  transform-origin: 0 0 0;\n  transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);\n  transition-duration: 0ms;\n  transform: translate(0px, 0px) scale(1) translateZ(0px);\n}\n.ph-img-slider .ph-img-slider-ctn .ph-img-item .ph-img-ctn .ph-img {\n  max-width: 100%;\n  vertical-align: middle;\n}\n.ph-img-slider .ph-img-slider-option {\n  position: fixed;\n  bottom: 30px;\n  left: 0;\n  z-index: 99;\n  width: 100%;\n  line-height: 30px;\n  text-align: center;\n  color: #fff;\n}\n.ph-img-slider .ph-img-slider-option .ph-img-close,\n.ph-img-slider .ph-img-slider-option .ph-img-delete {\n  width: 72px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 16px;\n}\n.ph-img-slider .ph-img-slider-option .ph-img-close a,\n.ph-img-slider .ph-img-slider-option .ph-img-delete a {\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-decoration: none;\n  color: #fff;\n  background: rgba(128, 128, 128, 0.4);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3) inset;\n  border-radius: 2px;\n}\n.ph-img-slider .ph-img-slider-option .ph-img-close {\n  float: right;\n  margin: 0 15px 0 0;\n}\n.ph-img-slider .ph-img-slider-option .ph-img-delete {\n  float: left;\n  margin: 0 0 0 15px;\n}\n.ph-img-slider .ph-img-slider-close:before {\n  content: \"X\";\n}\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;