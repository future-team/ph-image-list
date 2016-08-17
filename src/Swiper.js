import React, {PropTypes, Component} from 'react'
import classNames from 'classnames';

export default class Swiper extends Component {

    static propTypes = {
        swipeDone: PropTypes.func,
        curIndex: PropTypes.number,
        count: PropTypes.number
    };

    static defaultProps = {
        swipeDone: function(){},
        curIndex: 0,
        count: 0
    };

    constructor(props, context){
        super(props, context);
        this.screen = window.screen;
        this.state = {
            distance: this.screen.width * this.props.curIndex,
            count: this.props.count,
            swipeClass: ''
        }
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            distance: this.screen.width * nextProps.curIndex,
            count: nextProps.count
        })
    }

    onTouchStartHandler(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        const _self = this;
        // Test for flick.
        this.longTouch = false;
        setTimeout(function() {
            _self.longTouch = true;
        }, 200);
        // Get the original touch position.
        this.touchstartx =  evt.touches[0].pageX;
        // The movement gets all janky if there's a transition on the elements.
        this.setState({
            swipeClass: ''
        })
    }
    // TODO animation
    onTouchMoveHandler(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        // Continuously return touch position.
        this.touchmovex =  evt.touches[0].pageX;
        // Calculate distance to translate holder.
        this.movex = this.props.curIndex * this.screen.width + (this.touchstartx - this.touchmovex);
        // Makes the holder stop moving when there is no more content.
        if (this.movex < (this.state.count-1)* this.screen.width) {
            this.setState({
                distance: this.movex
            })
        }
    }

    onTouchEndHandler(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        // Calculate the distance swiped.
        let curIndex = this.props.curIndex;
        const clientWidth = this.screen.width;
        var absMove = Math.abs(curIndex * clientWidth - this.movex);
        // Calculate the index. All other calculations are based on the index.
        if (absMove > clientWidth/4 && this.longTouch === true) {
            if (this.movex > curIndex * clientWidth && curIndex < (this.state.count - 1)) {
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
        this.props.swipeDone && this.props.swipeDone(curIndex)
    }
    render () {
        const {distance, swipeClass} = this.state;
        const className = classNames((this.props.children.props.className || ''), swipeClass);
        const translate = `translate(-${distance}px, 0) translateZ(0)`;
        const styles = {
            'WebkitTransform': translate,
            'MozTransform':    translate,
            'MsTransform':     translate,
            'OTransform':      translate,
            'transform':       translate
        }
        return (
            React.cloneElement(React.Children.only(this.props.children), {
                    onTouchStart : this.onTouchStartHandler.bind(this),
                    onTouchMove : this.onTouchMoveHandler.bind(this),
                    onTouchEnd : this.onTouchEndHandler.bind(this),
                    className: className,
                    style: {...this.props.children.props.style, ...styles}
                })
        );
    }
}