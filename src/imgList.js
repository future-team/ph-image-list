import React,{PropTypes,Component} from 'react'
import Modal from './Modal'
import Swiper from './Swiper'

import '../css/index.less';

export default class ImgList extends Component {
    static defaultProps = {
        maxShowNum: 4,
        maxLength: 10,
        editable: false,
        images: []
    };
    constructor (props, context) {
        super(props, context)
        // get viewport size
        this.screen = window.screen
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

    componentDidMount () {

    }

    componentWillUnmount() {

    }

    componentWillReceiveProps (nextProps) {
        this.state = {
            isEditAble: nextProps.editable || false,
            images: nextProps.images || [],
            sliderItemStyle: {
                width: this.screen.width+'px',
                height: this.screen.height+'px'
            }
        }
    }
    // delete
    deleteItem(index, evt) {
        evt.preventDefault()
        evt.stopPropagation()
        index = index == undefined ? this.state.imgIndex : index
        let _index = -1;
        let images = this.state.images;
        images.forEach((d, i)=>{
            if( index== i){
                _index = i;
            }
        });
        if(_index != -1){
            images.splice(_index, 1)
            this.setState({
                imgIndex: 0,
                images: images
            })
        }
        if(this.state.showImgListFull){
            this.viewImg(0);
        }
        return false
    }
    // export get images api
    getImages(){
        return this.props.images
    }

    viewImg(index) {
        // 计算宽高 & transation
        const fullWidth = (this.props.images.length||0) * this.screen.width
        const transLeft = -1 * this.screen.width * index || 0
        this.setState({
            showImgListFull: true,
            imgIndex: index,
            sliderStyles: {
                width: fullWidth +'px',
                height: (this.screen.height || 0) + 'px',
                // transform: `translate(${transLeft}px, 0) translateZ(0)`
            }
        })

    }
    closeModal() {
        this.setState({
            showImgListFull: false,
            sliderStyles: null
        })
    }
    swipeDoneHandler(curIndex){
        curIndex != undefined && this.setState({
            imgIndex: curIndex
        })
    }
    render() {
        const  {images, imgIndex, showImgListFull, isEditAble} = this.state;
        return (
            <div className="ph-img-list">
                {
                    images.length ? ((isEditAble? images : images.slice(0, this.props.maxShowNum)).map((item, index) => (
                        <div key={item.id} className="ph-img-item">
                            <div className="ph-img-ctn" onClick={this.viewImg.bind(this, index)}>
                                <img className="ph-img" src={item.url} alt={item.name}/>
                            </div>
                            {
                                isEditAble && <div className="ph-img-option">
                                    <span className="ph-img-delete" onClick={this.deleteItem.bind(this, index)}></span>
                                </div>
                            }
                        </div>
                    ))):(
                        <div className="ph-img-empty"><p>暂无可供展示的图片</p></div>
                    )
                }
                {
                    !isEditAble && images.length > this.props.maxShowNum && <div className="ph-img-count">{images.length}</div>
                }
                <Modal className="ph-img-slider-modal">
                    { showImgListFull === true &&
                        <div className="ph-img-slider">
                            <Swiper count={images.length} curIndex={imgIndex} swipeDone={this.swipeDoneHandler.bind(this)}>
                                <div className="ph-img-slider-ctn" style={this.state.sliderStyles}>
                                    {
                                        images.map((item, index) => (
                                            <div key={item.id} className="ph-img-item" style={this.state.sliderItemStyle}>
                                                <div className="ph-img-ctn" style={{'lineHeight': this.state.sliderItemStyle.height}}>
                                                    <img className="ph-img " src={item.url} alt={item.name}/>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </Swiper>
                            <div className="ph-img-slider-option">
                                <p className="ph-img-close"><a href="javascript:;" onClick={this.closeModal.bind(this)}>关闭</a></p>
                                <p className="ph-img-delete">{
                                    this.state.isEditAble &&
                                    <a href="javascript:;" onClick={this.deleteItem.bind(this, undefined)}>删除</a>
                                }</p>
                                <span className="ph-img-cur">{(imgIndex||0)+1}</span>
                                <span className="ph-img-count">/{images.length}</span>
                            </div>
                        </div>
                    }
                </Modal>
            </div>
        )
    }
}
