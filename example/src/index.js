import React from 'react'
import ReactDom from 'react/lib/ReactDOM'
import {ImgList} from '../../src/index.js'

const imgs1 = [{
    id: 1,
    url: './imgs/1.jpg',
    name: 'aaa'
},{
    id: 2,
    url: './imgs/2.jpg',
    name: 'bbb'
},{
    id: 3,
    url: './imgs/3.jpg',
    name: 'ccc'
},{
    id: 4,
    url: './imgs/4.jpg',
    name: 'ddd'
},{
    id: 5,
    url: './imgs/5.jpg',
    name: 'eee'
}]
const imgs2 = [
    {
        id: 6,
        url: './imgs/6.jpg',
        name: 'fff'
    },{
        id: 7,
        url: './imgs/7.png',
        name: 'ggg'
    },{
        id: 8,
        url: './imgs/8.jpg',
        name: 'hhh'
    },{
        id: 9,
        url: './imgs/9.jpg',
        name: 'iii'
    }
]
ReactDom.render(
        <div>
            <ImgList files={imgs1}></ImgList>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <ImgList files={imgs2}></ImgList>
        </div>
    , document.getElementById('root')
)








