'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Swiper = require('./Swiper');

var _Swiper2 = _interopRequireDefault(_Swiper);

require('../css/index.less');

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