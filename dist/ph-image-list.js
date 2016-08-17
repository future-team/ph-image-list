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
	        this.screen = {
	            width: window.screen.width,
	            height: window.innerHeight
	        };
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
	        this.screen = {
	            width: window.screen.width,
	            height: window.innerHeight
	        };
	        this.state = {
	            isEditAble: nextProps.editable || false,
	            images: nextProps.images || [],
	            sliderItemStyle: {
	                width: this.screen.width + 'px',
	                height: this.screen.height + 'px'
	            }
	        };
	    };

	    ImgList.prototype.componentDidUpdate = function componentDidUpdate() {
	        var showImgListFull = this.state.showImgListFull;

	        var bodyClassName = document.getElementsByTagName('html')[0].className;
	        if (showImgListFull && bodyClassName.indexOf('ph-img-list-body-overflow-hidden') == -1) {
	            bodyClassName += ' ph-img-list-body-overflow-hidden';
	        }
	        if (!showImgListFull) {
	            bodyClassName = bodyClassName.replace(/\bph-img-list-body-overflow-hidden\b\s*/g, '');
	        }
	        document.getElementsByTagName('html')[0].className = bodyClassName;
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
	            }) : "",
	            !isEditAble && images.length > this.props.maxShowNum && _react2['default'].createElement(
	                'div',
	                { className: 'ph-img-count' },
	                images.length
	            ),
	            this.props.children,
	            _react2['default'].createElement(
	                _Modal2['default'],
	                { className: 'ph-img-slider-modal' },
	                showImgListFull === true && _react2['default'].createElement(
	                    'div',
	                    { className: 'ph-img-slider' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'ph-img-slider-option' },
	                        _react2['default'].createElement('a', { className: 'ph-img-return', href: 'javascript:;', onClick: this.closeModal.bind(this) })
	                    ),
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
	                        { className: 'ph-img-slider-pager' },
	                        _react2['default'].createElement(
	                            'span',
	                            null,
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
	        var translate = 'translate(-' + distance + 'px, 0) translateZ(0)';
	        var styles = {
	            'WebkitTransform': translate,
	            'MozTransform': translate,
	            'msTransform': translate,
	            'OTransform': translate,
	            'transform': translate
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
	var update = __webpack_require__(12)(content, {});
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
	exports.push([module.id, ".ph-img-item {\n  position: relative;\n  width: 25%;\n  padding: 1vw;\n  box-sizing: border-box;\n  height: 24vw;\n}\n.ph-img-item .ph-img-ctn {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.ph-img-item .ph-img-option {\n  position: absolute;\n  top: -3px;\n  right: -2px;\n}\n.ph-img-item .ph-img-option .ph-img-delete {\n  background: url(" + __webpack_require__(11) + ") 110px 0;\n  background-size: cover;\n  height: 20px;\n  width: 20px;\n  display: inline-block;\n  border-radius: 20px;\n  text-align: center;\n}\n.ph-img-list {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.ph-img-list .ph-img-count {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  padding: 2px 5px;\n  color: #fff;\n  border-radius: 5px;\n  font-size: 14px;\n  background: rgba(0, 0, 0, 0.8);\n}\n.ph-img-list .ph-img-empty {\n  flex: 1;\n  text-align: center;\n  color: #ccc;\n}\n.ph-img-slider {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  background-color: #000;\n}\n.ph-img-slider .ph-img-slider-option,\n.ph-img-slider .ph-img-slider-pager {\n  position: fixed;\n  left: 0;\n  z-index: 99;\n  width: 100%;\n  line-height: 30px;\n}\n.ph-img-slider .ph-img-slider-option {\n  top: 30px;\n  text-align: right;\n}\n.ph-img-slider .ph-img-slider-option .ph-img-return {\n  display: inline-block;\n  margin-right: .97rem;\n  color: #fff;\n  text-decoration: none;\n}\n.ph-img-slider .ph-img-slider-option .ph-img-return:before {\n  margin-top: 3px;\n  float: left;\n  content: \" \";\n  width: 28px;\n  height: 28px;\n  line-height: 1.5rem;\n  background: url(" + __webpack_require__(11) + ") -35px 0;\n  background-size: cover;\n}\n.ph-img-slider .ph-img-slider-animation {\n  transition: transform 0.3s ease-out;\n}\n.ph-img-slider .ph-img-slider-ctn .ph-img-item {\n  float: left;\n  padding: 0;\n  z-index: 1;\n  text-align: center;\n}\n.ph-img-slider .ph-img-slider-ctn .ph-img-item .ph-img-ctn {\n  transform-origin: 0 0 0;\n  transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);\n  transition-duration: 0ms;\n  transform: translate(0px, 0px) scale(1) translateZ(0px);\n}\n.ph-img-slider .ph-img-slider-ctn .ph-img-item .ph-img-ctn .ph-img {\n  max-width: 100%;\n  vertical-align: middle;\n}\n.ph-img-slider .ph-img-slider-pager {\n  bottom: 30px;\n  color: #fff;\n  text-align: center;\n}\n.ph-img-slider .ph-img-slider-pager > span {\n  border: 1px solid #fff;\n  border-radius: 15px;\n  padding: 0.3rem .9rem;\n}\n.ph-img-list-body-overflow-hidden {\n  overflow: hidden!important;\n}\n", ""]);

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
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAnCAYAAACL4Y8gAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjVBMjNDNzk0RDVGMTFFNjhFN0RDNTRFODIyNzRDQzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjVBMjNDN0E0RDVGMTFFNjhFN0RDNTRFODIyNzRDQzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNUEyM0M3NzRENUYxMUU2OEU3REM1NEU4MjI3NENDNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNUEyM0M3ODRENUYxMUU2OEU3REM1NEU4MjI3NENDNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PveNY3IAAAlxSURBVHja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"

/***/ },
/* 12 */
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