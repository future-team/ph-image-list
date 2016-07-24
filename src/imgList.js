import React,{PropTypes,Component} from 'react'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Modal from './Modal'

import '../css/index.less';


export default class ImgList extends Component {

    constructor (props, context) {
        super(props, context)
        this.screen = window.screen

        this.state = {
            imgIndex: null,
            showImgListFull: false,
            sliderStyles: null,
            sliderItemStyle: {
                width: this.screen.width+'px',
                height: this.screen.height+'px'
            }
        }
        // get view port
    }

    componentDidMount () {

    }
    componentWillUnmount() {

    }
    componentWillReceiveProps (nextProps) {

    }

    deleteItem(item, evt) {
        console.log("delete", evt, item)
        evt.preventDefault()
        evt.stopPropagation()
    }

    viewImg(index, evt) {
        // 计算宽高 & transation
        const fullWidth = (this.props.files.length||0)* this.screen.width
        const transLeft = -1 * this.screen.width * index || 0
        this.setState({
            showImgListFull: true,
            imgIndex: index,
            sliderStyles: {
                width: fullWidth +'px',
                height: (this.screen.height || 0) + 'px',
                transform: `translate(${transLeft}px, 0px) translateZ(0px)`
            }
        })

    }
    closeModal() {
        this.setState({
            showImgListFull: false,
            sliderStyles: null
        })
    }
    render() {
        const  {files} = this.props;
        return (
            <div className="ph-img-list">
                {
                    files.slice(0,4).map((item, index) => (
                        <div key={item.id} className="ph-img-item">
                            <div className="ph-img-ctn" onClick={this.viewImg.bind(this, index)}>
                                <img className="ph-img" src={item.url} alt={item.name}/>
                            </div>
                            <div className="ph-img-option"><span className="ph-img-delete" onClick={this.deleteItem.bind(this, item)}></span></div>
                        </div>
                    ))
                }
                <div className="ph-img-count">{files.length}</div>
                <Modal className="ph-img-slider-modal">
                    { this.state.showImgListFull === true &&
                        <div className="ph-img-slider">
                            <div className="ph-img-slider-ctn" style={this.state.sliderStyles}>
                                {
                                    files.map((item, index) => (
                                        <div key={item.id} className="ph-img-item" style={this.state.sliderItemStyle}>
                                            <div className="ph-img-ctn" style={{'lineHeight': this.state.sliderItemStyle.height}}>
                                                <img className="ph-img" src={item.url} alt={item.name}/>
                                            </div>
                                            <div className="ph-img-option"><span className="ph-img-delete" onClick={this.closeModal.bind(this)}></span></div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="ph-img-slider-option">
                                <a href="javascript:;" className="ph-img-close" onClick={this.closeModal.bind(this)}>关闭</a>
                                <a href="javascript:;" className="ph-img-delete">删除</a>
                                <span className="ph-img-cur">{(this.state.imgIndex||0)+1}</span>
                                <span className="ph-img-count">/{files.length}</span>
                            </div>
                        </div>
                    }
                </Modal>
            </div>
        )
    }
}
