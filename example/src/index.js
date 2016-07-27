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
    name: 'ccc',
    extra: 'asdasd'
},{
    id: 4,
    url: './imgs/4.jpg',
    name: 'ddd'
},{
    id: 5,
    url: './imgs/5.jpg',
    name: 'eee'
},{
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

export default class Demo extends React.Component {
    constructor(props, context){
        super(props, context)
        this.state = {
            editable: false,
            imgs1: imgs1,
            imgs2: imgs2
        }
    }
    addImg() {
        let newImag2 = this.state.imgs2;
        newImag2.push({
            id: parseInt(Math.random() * 10000),
            url: './imgs/9.jpg',
            name: '4234234523'+ parseInt(Math.random() * 10000)
        })
        this.setState({
            imgs2: newImag2
        })
    }
    deleteImg() {
        let newImag1 = this.state.imgs1;
        newImag1.splice(4, 1);
        this.setState({
            imgs1: newImag1
        })
    }
    toggleEdit() {
        this.setState({
            editable: !this.state.editable
        })
    }
    getStableImgs(){
        console.log(this.imgList1.getImages(), this.imgList2.getImages())
    }
    swipeDoneCallback(index) {
        console.log('翻页', index)
    }
    deleteDoneCallback(index, item){
        console.log('删除', index, item)
    }
    render () {
        const {imgs1, imgs2, editable} = this.state
        return (
            <div>
                <div>
                    <button onClick={this.addImg.bind(this)}>添加照片</button>
                    <button onClick={this.deleteImg.bind(this)}>删除照片</button>
                    <button onClick={this.toggleEdit.bind(this)}>{editable? '不能' : '能'}编辑</button>
                    <button onClick={this.getStableImgs.bind(this)}>获取编辑后的照片</button>
                </div>
                <ImgList images={imgs1}
                         editable={editable}
                         deleteDoneCallback={this.deleteDoneCallback}
                         swipeDoneCallback={this.swipeDoneCallback}
                         ref={(imgList)=>{
                            this.imgList1 = imgList;
                        }}></ImgList>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <ImgList images={imgs2}
                         editable={true}
                         deleteDoneCallback={this.deleteDoneCallback}
                         swipeDoneCallback={this.swipeDoneCallback}
                         ref={(imgList)=>{
                            this.imgList2 = imgList;
                        }}></ImgList>
            </div>
        )
    }


}


ReactDom.render(
    <Demo></Demo>
    , document.getElementById('root')
)








