(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["React"], root["ReactDom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_12__) {
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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _ImgList2 = __webpack_require__(2);

	var _ImgList3 = _interopRequireDefault(_ImgList2);

	exports.ImgList = _ImgList3['default'];

	var _ImgView2 = __webpack_require__(20);

	var _ImgView3 = _interopRequireDefault(_ImgView2);

	exports.ImgView = _ImgView3['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _Modal = __webpack_require__(11);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _Swiper = __webpack_require__(13);

	var _Swiper2 = _interopRequireDefault(_Swiper);

	__webpack_require__(15);

	var loop = function loop() {};
	var imageItem = _propTypes2['default'].shape({
	    fileId: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]).isRequired,
	    fileName: _propTypes2['default'].string.isRequired,
	    url: _propTypes2['default'].string.isRequired,
	    thumbUrl: _propTypes2['default'].string.isRequired
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
	            maxShowNum: _propTypes2['default'].number,

	            /**
	             * 是否允许删除
	             * @property  editable
	             * @type boolean
	             * @default false
	             */
	            editable: _propTypes2['default'].bool,

	            /**
	             * 查看的图片列表
	             * @property  images
	             * @type array
	             * @default []
	             */
	            images: _propTypes2['default'].arrayOf(imageItem).isRequired,

	            /**
	             * 全屏查看翻页的回调
	             * @property  swipeDoneCallback
	             * @type function
	             * @default function(index){}
	             */
	            swipeDoneCallback: _propTypes2['default'].func,

	            /**
	             * 可删除时删成功时的回调
	             * @property  deleteDoneCallback
	             * @type function
	             * @default function(index, item){}
	             */
	            deleteDoneCallback: _propTypes2['default'].func,

	            /**
	             * 根据哪个字段名来判断当前是图片还是video，默认图片
	             * @property  typeParam
	             * @type string
	             * @default 无
	             */
	            typeParam: _propTypes2['default'].string
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

	    ImgList.prototype.isImage = function isImage(url) {
	        // 判断是图片还是vedio
	        var imgSuffixReg = /\.(jpg|gif|jpeg|png|bmp)+$/;

	        return imgSuffixReg.test(url);
	    };

	    ImgList.prototype.getMimeType = function getMimeType(url) {
	        return (url || '').split('/')[0];
	    };

	    ImgList.prototype.renderItem = function renderItem(item, isThumb) {
	        var _props = this.props;
	        var typeParam = _props.typeParam;
	        var renderItemCallback = _props.renderItemCallback;

	        if (typeParam == 'fileName' && !this.isImage(item[typeParam]) && !isThumb) {
	            return _react2['default'].createElement('video', { width: '100%', className: 'ph-img', src: item.url, controls: 'controls' });
	        }

	        if (typeParam == 'mimeType' && this.getMimeType(item[typeParam]) == 'video' && !isThumb) {
	            return _react2['default'].createElement('video', { width: '100%', className: 'ph-img', src: item.url, controls: 'controls' });
	        }

	        var isFunc = Object.prototype.toString.call(renderItemCallback).slice(8, -1) == 'Function';
	        if (typeParam && typeParam == 'defined' && isFunc) {
	            return renderItemCallback(item, isThumb);
	        }

	        return this.renderImage(item, isThumb);
	    };

	    ImgList.prototype.renderImage = function renderImage(item, isThumb) {
	        return _react2['default'].createElement('img', { className: 'ph-img', src: isThumb ? item.thumbUrl : item.url, alt: item.fileName });
	    };

	    ImgList.prototype.renderPlayButton = function renderPlayButton(item) {
	        var typeParam = this.props.typeParam;

	        if (typeParam == 'mimeType' && this.getMimeType(item[typeParam]) == 'video') {
	            return _react2['default'].createElement('span', { className: 'ph-play-button' });
	        }

	        if (typeParam == 'fileName' && !this.isImage(item[typeParam])) {
	            return _react2['default'].createElement('span', { className: 'ph-play-button' });
	        }
	    };

	    ImgList.prototype.renderModal = function renderModal() {
	        var _this = this;

	        var _state = this.state;
	        var images = _state.images;
	        var imgIndex = _state.imgIndex;
	        var showImgListFull = _state.showImgListFull;

	        return _react2['default'].createElement(
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
	                                    _this.renderItem(item)
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
	        );
	    };

	    ImgList.prototype.render = function render() {
	        var _this2 = this;

	        var _state2 = this.state;
	        var images = _state2.images;
	        var imgIndex = _state2.imgIndex;
	        var showImgListFull = _state2.showImgListFull;
	        var isEditAble = _state2.isEditAble;

	        return _react2['default'].createElement(
	            'div',
	            { className: 'ph-img-list' },
	            images.length ? (isEditAble ? images : images.slice(0, this.props.maxShowNum)).map(function (item, index) {
	                return _react2['default'].createElement(
	                    'div',
	                    { key: item.fileId, className: 'ph-img-item' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'ph-img-ctn', onClick: _this2.viewImg.bind(_this2, index) },
	                        _this2.renderItem(item, true),
	                        _this2.renderPlayButton(item)
	                    ),
	                    isEditAble && _react2['default'].createElement(
	                        'div',
	                        { className: 'ph-img-option' },
	                        _react2['default'].createElement('span', { className: 'ph-img-delete', onClick: _this2.deleteItem.bind(_this2, index) })
	                    )
	                );
	            }) : "",
	            !isEditAble && images.length > this.props.maxShowNum && _react2['default'].createElement(
	                'div',
	                { className: 'ph-img-count' },
	                images.length
	            ),
	            this.props.children,
	            this.renderModal()
	        );
	    };

	    return ImgList;
	})(_react.Component);

	exports['default'] = ImgList;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(6)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(10)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var assign = __webpack_require__(7);

	var ReactPropTypesSecret = __webpack_require__(8);
	var checkPropTypes = __webpack_require__(9);

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = __webpack_require__(8);
	  var loggedTypeFailures = {};

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          )

	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = __webpack_require__(8);

	function emptyFunction() {}

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(12);

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
	        document.body.removeChild(this.portalElement);
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

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _classnames = __webpack_require__(14);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Swiper = (function (_Component) {
	    _inherits(Swiper, _Component);

	    _createClass(Swiper, null, [{
	        key: 'propTypes',
	        value: {
	            swipeDone: _propTypes2['default'].func,
	            curIndex: _propTypes2['default'].number,
	            count: _propTypes2['default'].number
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

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2017 Jed Watson.
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
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
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
			classNames.default = classNames;
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


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/_css-loader@0.17.0@css-loader/index.js!../node_modules/_less-loader@2.2.3@less-loader/index.js!./index.less", function() {
				var newContent = require("!!../node_modules/_css-loader@0.17.0@css-loader/index.js!../node_modules/_less-loader@2.2.3@less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	// imports


	// module
	exports.push([module.id, ".ph-img-item {\n  position: relative;\n  width: 25%;\n  padding: 1vw;\n  box-sizing: border-box;\n  height: 24vw;\n}\n.ph-img-item .ph-img-ctn {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.ph-img-item .ph-img-option {\n  position: absolute;\n  top: -3px;\n  right: -2px;\n}\n.ph-img-item .ph-img-option .ph-img-delete {\n  background: url(" + __webpack_require__(18) + ") 110px 0;\n  background-size: cover;\n  height: 20px;\n  width: 20px;\n  display: inline-block;\n  border-radius: 20px;\n  text-align: center;\n}\n.ph-img-list {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.ph-img-list .ph-img-count {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  padding: 2px 5px;\n  color: #fff;\n  border-radius: 5px;\n  font-size: 14px;\n  background: rgba(0, 0, 0, 0.8);\n}\n.ph-img-list .ph-img-empty {\n  flex: 1;\n  text-align: center;\n  color: #ccc;\n}\n.ph-img-slider {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  background-color: #000;\n}\n.ph-img-slider .ph-img-slider-option,\n.ph-img-slider .ph-img-slider-pager {\n  position: fixed;\n  left: 0;\n  z-index: 99;\n  width: 100%;\n  line-height: 30px;\n}\n.ph-img-slider .ph-img-slider-option {\n  top: 30px;\n  text-align: right;\n}\n.ph-img-slider .ph-img-slider-option .ph-img-return {\n  display: inline-block;\n  margin-right: .97rem;\n  color: #fff;\n  text-decoration: none;\n}\n.ph-img-slider .ph-img-slider-option .ph-img-return:before {\n  margin-top: 3px;\n  float: left;\n  content: \" \";\n  width: 28px;\n  height: 28px;\n  line-height: 1.5rem;\n  background: url(" + __webpack_require__(18) + ") -35px 0;\n  background-size: cover;\n}\n.ph-img-slider .ph-img-slider-animation {\n  transition: transform 0.3s ease-out;\n}\n.ph-img-slider .ph-img-slider-ctn .ph-img-item {\n  float: left;\n  padding: 0;\n  z-index: 1;\n  text-align: center;\n}\n.ph-img-slider .ph-img-slider-ctn .ph-img-item .ph-img-ctn {\n  transform-origin: 0 0 0;\n  transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);\n  transition-duration: 0ms;\n  transform: translate(0px, 0px) scale(1) translateZ(0px);\n}\n.ph-img-slider .ph-img-slider-ctn .ph-img-item .ph-img-ctn .ph-img {\n  max-width: 100%;\n  vertical-align: middle;\n}\n.ph-img-slider .ph-img-slider-pager {\n  bottom: 30px;\n  color: #fff;\n  text-align: center;\n}\n.ph-img-slider .ph-img-slider-pager > span {\n  border: 1px solid #fff;\n  border-radius: 15px;\n  padding: 0.3rem .9rem;\n}\n.ph-img-list-body-overflow-hidden {\n  overflow: hidden!important;\n}\n.ph-play-button {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 40px;\n  height: 40px;\n  padding: 5px;\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n}\n.ph-play-button:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  margin-left: 4px;\n  border-width: 15px 0 15px 30px;\n  border-color: transparent transparent transparent #f1f1f1;\n  box-sizing: border-box;\n  transform: translate(-50%, -50%);\n}\n", ""]);

	// exports


/***/ }),
/* 17 */
/***/ (function(module, exports) {

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


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAnCAYAAACL4Y8gAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjVBMjNDNzk0RDVGMTFFNjhFN0RDNTRFODIyNzRDQzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjVBMjNDN0E0RDVGMTFFNjhFN0RDNTRFODIyNzRDQzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNUEyM0M3NzRENUYxMUU2OEU3REM1NEU4MjI3NENDNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNUEyM0M3ODRENUYxMUU2OEU3REM1NEU4MjI3NENDNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PveNY3IAAAlxSURBVHja7FsNUBVVFL6AhCBkUKhDUaFgP1qJigyio5aClQ0SgYEKPUVospl0plIrxR/MSZ0xpxlsEhHkJ9T8IccUwURDhwSHHycINZEUUjEoUH5TOud19s1h5fF2H/swp87Mx3vv7u65u989e8/PvVh1dnaK/6jYAzwATwJcAQ8DHgD0B7QC2gG/A+oAlwBVgBa1nVj9Bwn2BIylz34qrvsLcAFQBPgF0Pk/wV3FHTAd8KgGumoAhwGXLUnwEEA6wA+wArDRxPn4cCmAG4Agsoa+ELTSQLJaK36gpKREHDt2TP958eJF0dDQIJqamoSTk5NwdnYWQ4cOFaNGjRJTpkzRf8qkk6w5m6xbU4LdAN8DnqLfzYABJq7JAUxlFvAi4JyFyR0ICCdj0EtbW5vYuXOnSEpKElVVVYoVIdk6nU7MmjVL2NnZ8UNXAZmAP7Qi+FEidzhr2w8INnHdx4B49ruWSK60ELnouOYQyXrJzc0Vy5cvF7W1tWYrdXNzE2vWrBFTp07lzX8C0sgh9opgdyLXk7UdJnJbTVxrA0imh5bkN8BLgAqNyX0QEE2foqOjQ6xYsUJkZGRo1kFERIRYvXq1sLW1lZoaAYn0aRbBjwOO4dvC2r4DvI5vnkIdSPI2QBRru0aWXK7hnBstTQu3bt0SCxYsECdPntT8FfH39xdbt24VAwYM4NMFPl+H1GCtUBfGinkycg+Q5bapuKfbgPmAJNY2mAbuOY2eO0AiFy03OjraIuSioF7Uj/0wxx/Az1FCsAeR68HasgBvUDCuVm6ThSWytkGAo4AXNAjFfKQfK1euFKdOnbKoF0X92A+TsXQfiggeSuQ+wdr2AsLMJJeHODGAL2VOCUn2NlOnFYWC+lAsOztbpKWl9UkciP3k5OTI78MkwV5E7uOs7RvAm70kl5P8DiCBtWG6mgsYbYa+YVISgaGYzKoMcvr06VjA2yNGjHBS2wGEag75+fnzy8rK3pMfi4uLE62trTzSGtYTwcNpXnRnbbsopuzQcPCR5HcBX7A2F7LksSp1Gc7HONdYKHblypVrg0HS09N13t7eA5UqxwHZtWtXlLu7+2Og+9pdqV1NjYDjvMnHGMFPEbk8pfwaI5OeMpZekowW8Tlre4gs2VdF4cZL+rF9+3ajJ0KikFVUVFQCmZpzamrqfD8/PxdTyn19fZ1xQFxdXQedPXu2PCQkZHd358n6xfuxlxP8DE0LbqwN0+G55JwsJUjyYlm6PZDS0PEKHTGGgKK0tFSf9hoT8PidoaGhWfCqF0JK7ASkzIekYZCx8yFNdt22bZsOBwSmluLg4OBvIPTrlgvst7i4mIekHpzgZ8lyh7C2FIpZLUkulw8A62UkHwJMMHGdwQmfOHHCZCd37twRs2fP/g4cU769vb1DQkLCvKCgoLuKQDNmzHDbsmXLWzgQeXl5BWD93+IA9aQbBq7LfUkEP0fkDuYWTzFrX5EryRLAp7KsDEme2MM1Bgs8c+aM4o4ghj26b9++o3YgGzdujJw7d64hFA0PD39i06ZNkTgABw8ezIuKisrGgTElsv4HYdbzNDkVV3YAY9RYHOx7VFr8mPr+hH47EsmvkSHIxTCPXrigrki3aNGi/KamprbIyMhXIPKIcHBw2A1Edi5dujSsH0hmZmb2kiVLCpTqk/XvgqlyBZEsyVeAt4XCgrKFBWOtOO6sAY91c94ygB15e3Hz5k3VHS1btuyF2NjYICRX7/2tra0SExMPxMfHF6vRg2lzebkh62+zJo/N5dd/Cbk2UizJpMHIuYb6oTnkoqxbt660sLCwxMbGxhqBDk0tuVLtg9+XNTmxZtYYz17Ne0luajeVtyAj5xvqIY6OjmZ1uGHDBr9x48Z5/0UCodnotWvXjlOrhxV+DBZ8BPCqjOQ19HreC+lHoWG4bGqYjJGQkWsMKRSuRKgViBQmh4WFBbS3t7fBVJEKWVk6fp8zZ87LmzdvnqBGl4tLl7C6VVr0w9j3ZSo/SkMQR5a0vA/JxeJqBhWSJMF1L6wZn+/hunoK6YSnp6e4fPmyos5gnhXJycnTJ02a5NvS0tK8ePHitEOHDuGbgktHqevXr589c+bMl8Aq+0PEkatEJ/bP74vHwSeI5CbW9oksZLKk4JJ5pozcX8lyz5u49rr0ZfRoZWUMW1tbK0htg5BcILMJHNx2iVx9uTArq2bhwoXJzc3Nt6ZNm+afkZHxKg6IKRkzZgz/WSe/4gciuVHmoT/rA3IxkX+dtV0yMS1wqZa+TJw4Uck8abN///5QHx+fUQ0gEOMmHT9+/Ib8vNzc3Os6nS4JB8Df33/snj17gnFgetI9YUKXGeVSd0Nykkj+k7V9iH7AguTukTmwKiJX6apklZQQeXt7Cw8PD6MnwhxtC9YZPnLkyGfq6uquQ0KRBMnBH8bOLygoqI+IiEjEgYC343kcGBygbvN16Bf7J8H7qTJm81ilDpSR/D5gk5AtffdSMLzCBdMZrO0XIrdahZ4WPo3MmzfP6Il79+6N8PLyGlZbW1sTEhKSXFFRYTKuKysra4Q0OQkHBAcGLDm0u/Nk/eL9tPQ0qfwo/llm56O7iKpeWpCMFbAselv4TU2muVetFElfICLQr/4amR76nzt37jw4r9Tq6mrFW6EqKytvhoaGpoADvQK6h8iPY3/YL5NC/KNk0XMMhXI8/kigOq65CYkDYJ/oun5VSdFCjZk6cdCjpTIrrmjExMT0WfgDWZ8AZ8jDyq36SEXBtWfIkn9nbdJKhJWZ5B6QkfszVgZ7Qa5U8jwsDXpgYCBWzPqEXOyHkSvdh1BqwZLg3iFceHqkF3ULJPcgTQOSlJPlXtXoeV8B6DMwXO2NjIy06MLn+PHjxY4dO/j+iEJ6RqHUgiUpISL47pUYqrwpsWRHGllO7k9kuVc1fOYcSR8+NL66uH/BEuLn56fXz8i9StOpMIdgvUMlQq5z50kRhinB1WgepJZ2o0sL6aBssFGqDaSkpOh34mgpqA8tl9UeGqnfLmuW5m7+w9UP3EIlFehxaWe6glCqP3sbcNK6YcGp8a69aUeOHNGv/vZ2b9qqVatEQECX/SWa7U3jMhKAi3/O9CCmcnVcDvqIUnId1Q8sLZrtrsQkAuPcvthdeb+J4v3B9fX1+noyljyxKnYv9wffj3Lf7XC/XwVXSXBTiNr/0bhNmWYhpfPKsp///8vI8F9Gj1DhCSdYXCFpJyfcq/8y+luAAQBAPmdq0N64JwAAAABJRU5ErkJggg=="

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _Modal = __webpack_require__(11);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _Swiper = __webpack_require__(13);

	var _Swiper2 = _interopRequireDefault(_Swiper);

	var _ImgList2 = __webpack_require__(2);

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

/***/ })
/******/ ])
});
;