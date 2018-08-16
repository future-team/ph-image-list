import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Modal from './Modal'
import Swiper from './Swiper'
import ImgList from './ImgList'

export default class ImgView extends ImgList {


    constructor (props, context) {
        super(props, context)
    }

    show(index=0){
        this.viewImg(index)
    }

    render() {
        return (
            this.renderModal()
        )
    }
}