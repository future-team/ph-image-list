import React,{PropTypes,Component} from 'react'
import Modal from './Modal'
import Swiper from './Swiper'

import '../css/index.less'

const loop = function(){};
const imageItem = PropTypes.shape({
    fileId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    fileName: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    thumbUrl: PropTypes.string.isRequired
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
export default class ImgList extends Component {

    /**
     *
     * @type {{maxShowNum: (*|string|boolean|is.number|t.exports.number|e.exports.number), editable: *, images: *, swipeDoneCallback: (*|!Function|null), deleteDoneCallback: (*|!Function|null)}}
     */
    static propTypes = {
        /**
         * 最多显示个数
         * @property maxShowNum
         * @type number
         * @default 4
         * */
        maxShowNum: PropTypes.number,

        /**
         * 是否允许删除
         * @property  editable
         * @type boolean
         * @default false
         */
        editable: PropTypes.bool,

        /**
         * 查看的图片列表
         * @property  images
         * @type array
         * @default []
         */
        images: PropTypes.arrayOf(imageItem).isRequired,

        /**
         * 全屏查看翻页的回调
         * @property  swipeDoneCallback
         * @type function
         * @default function(index){}
         */
        swipeDoneCallback: PropTypes.func,

        /**
         * 可删除时删成功时的回调
         * @property  deleteDoneCallback
         * @type function
         * @default function(index, item){}
         */
        deleteDoneCallback: PropTypes.func,
        
        /**
         * 根据哪个字段名来判断当前是图片还是video，默认图片
         * @property  typeParam
         * @type string
         * @default 无
         */
        typeParam: PropTypes.string
    }

    static defaultProps = {
        maxShowNum: 4,
        editable: false,
        images: [],
        swipeDoneCallback: loop,
        deleteDoneCallback: loop
    }

    constructor (props, context) {
        super(props, context);
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
                width: this.screen.width+'px',
                height: this.screen.height+'px'
            }
        }
    }

    /**
     *
     * @param nextProps
     */
    componentWillReceiveProps (nextProps) {
        this.screen = {
            width: window.screen.width,
            height: window.innerHeight
        };
        this.state = {
            isEditAble: nextProps.editable || false,
            images: nextProps.images || [],
            sliderItemStyle: {
                width: this.screen.width+'px',
                height: this.screen.height+'px'
            }
        }
    }
    componentDidUpdate(){
        const {showImgListFull} = this.state;
        let bodyClassName = document.getElementsByTagName('html')[0].className;
        if(showImgListFull && bodyClassName.indexOf('ph-img-list-body-overflow-hidden') == -1){
            bodyClassName += ' ph-img-list-body-overflow-hidden';
        }
        if(!showImgListFull){
            bodyClassName = bodyClassName.replace(/\bph-img-list-body-overflow-hidden\b\s*/g,'')
        }
        document.getElementsByTagName('html')[0].className = bodyClassName;
    }
    /**
     * delete item
     * @param index
     * @param evt
     * @returns {boolean}
     */
    deleteItem(index, evt) {
        evt.preventDefault();
        evt.stopPropagation();
        index = index == undefined ? this.state.imgIndex : index;
        let _index = -1, _item = null;
        let images = this.state.images;
        images.forEach((d, i)=>{
            if( index== i){
                _index = i;
                _item = d;
            }
        });
        if(_index != -1){
            images.splice(_index, 1);
            this.setState({
                imgIndex: 0,
                images: images
            });
            this.props.deleteDoneCallback.call(this, _index, _item)
        }
        if(this.state.showImgListFull){
            this.viewImg(0);
        }
        return false
    }
    /**
     *  @demo ImgList.js {源码}
     *  @returns {*|Array|HTMLCollection}
     */
    getImages(){
        return this.props.images || []
    }

    /**
     * view img handler
     * @param index
     */
    viewImg(index) {
        // 计算宽高 & transation
        const fullWidth = (this.props.images.length||0) * this.screen.width;
        this.setState({
            showImgListFull: true,
            imgIndex: index,
            sliderStyles: {
                width: fullWidth +'px',
                height: (this.screen.height || 0) + 'px'
            }
        })

    }

    /**
     * close modal
     */
    closeModal() {
        this.setState({
            showImgListFull: false,
            sliderStyles: null
        })
    }

    /**
     * swiper handler
     * @param curIndex
     */
    swipeDoneHandler(curIndex){
        curIndex != undefined && (
            this.setState({
                imgIndex: curIndex
            }),
            this.props.swipeDoneCallback.call(this, curIndex)
        )
    }

    isImage(url){ // 判断是图片还是vedio
        let imgSuffixReg = /\.(jpg|gif|jpeg|png|bmp)+$/

        return imgSuffixReg.test(url)
    }
    getMimeType(url) {
        return (url || '').split('/')[0]
    }
    renderItem(item, isThumb){
        let {typeParam, renderItemCallback} = this.props
        
        if(typeParam == 'fileName' && !this.isImage(item[typeParam]) && !isThumb){
            return <video width='100%' className="ph-img" src={item.url} controls="controls"/>
        }

        if(typeParam == 'mimeType' && this.getMimeType(item[typeParam]) == 'video' && !isThumb){
            return <video width='100%' className="ph-img" src={item.url} controls="controls"/>
        }
        
        const isFunc = Object.prototype.toString.call(renderItemCallback).slice(8, -1) == 'Function'
        if(typeParam && typeParam == 'defined' && isFunc){
            return renderItemCallback(item, isThumb)
        }

        return this.renderImage(item, isThumb)
    }

    renderImage(item, isThumb){
        return <img className="ph-img" src={isThumb? item.thumbUrl:item.url} alt={item.fileName}/>
    }

    renderPlayButton(item){
        let {typeParam} = this.props

        if(typeParam == 'mimeType' && this.getMimeType(item[typeParam]) == 'video'){
            return <span className='ph-play-button'></span>
        }

        if(typeParam == 'fileName' && !this.isImage(item[typeParam])){
            return <span className='ph-play-button'></span>
        }
    }

    renderModal(){
        const  {images, imgIndex,showImgListFull} = this.state;
        return (
            <Modal className="ph-img-slider-modal">
                    { showImgListFull === true &&
                    <div className="ph-img-slider">
                        <div className="ph-img-slider-option">
                            <a className="ph-img-return" href="javascript:;" onClick={this.closeModal.bind(this)}></a>
                        </div>
                        <Swiper count={images.length} curIndex={imgIndex} swipeDone={this.swipeDoneHandler.bind(this)}>
                            <div className="ph-img-slider-ctn" style={this.state.sliderStyles}>
                                {
                                    images.map((item, index) => (
                                        <div key={item.fileId} className="ph-img-item" style={this.state.sliderItemStyle}>
                                            <div className="ph-img-ctn" style={{'lineHeight': this.state.sliderItemStyle.height}}>
                                                {this.renderItem(item)}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </Swiper>
                        <div className="ph-img-slider-pager">
                            <span>
                                <span className="ph-img-cur">{(imgIndex||0)+1}</span>
                                <span className="ph-img-count">/{images.length}</span>
                            </span>
                        </div>
                    </div>
                    }
                </Modal>
        )
    }

    render() {
        const  {images, imgIndex, showImgListFull, isEditAble} = this.state

        return (
            <div className="ph-img-list">
                {
                    images.length ? ((isEditAble? images : images.slice(0, this.props.maxShowNum)).map((item, index) => (
                        <div key={item.fileId} className="ph-img-item">
                            <div className="ph-img-ctn" onClick={this.viewImg.bind(this, index)}>
                                {this.renderItem(item, true)}
                                {this.renderPlayButton(item)}
                            </div>
                            {
                                isEditAble && <div className="ph-img-option">
                                    <span className="ph-img-delete" onClick={this.deleteItem.bind(this, index)}></span>
                                </div>
                            }
                        </div>
                    ))):""
                }
                {
                    !isEditAble && images.length > this.props.maxShowNum && <div className="ph-img-count">{images.length}</div>
                }
                {this.props.children}
                {this.renderModal() }
            </div>
        )
    }
}