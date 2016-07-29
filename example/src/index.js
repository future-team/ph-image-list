import React from 'react'
import ReactDom from 'react/lib/ReactDOM'
import {ImgList} from '../../src/index.js'

const imgs1 = [{
    fileId: 1,
    url: './imgs/1.jpg',
    fileName: 'aaa',
    thumbUrl: './imgs/1.jpg'
},{
    fileId: 2,
    url: './imgs/2.jpg',
    fileName: 'bbb',
    thumbUrl: './imgs/2.jpg'
},{
    fileId: 3,
    url: './imgs/3.jpg',
    fileName: 'ccc',
    extra: 'asdasd',
    thumbUrl: './imgs/3.jpg'
},{
    fileId: 4,
    url: './imgs/4.jpg',
    fileName: 'ddd',
    thumbUrl: './imgs/4.jpg'
},{
    fileId: 5,
    url: './imgs/5.jpg',
    fileName: 'eee',
    thumbUrl: './imgs/5.jpg'
},{
    fileId: 6,
    url: './imgs/6.jpg',
    fileName: 'fff',
    thumbUrl: './imgs/6.jpg'
},{
    fileId: 7,
    url: './imgs/7.png',
    fileName: 'ggg',
    thumbUrl: './imgs/7.png'
},{
    fileId: 8,
    url: './imgs/8.jpg',
    fileName: 'hhh',
    thumbUrl: './imgs/8.jpg'
},{
    fileId: 9,
    url: './imgs/9.jpg',
    fileName: 'iii',
    thumbUrl: './imgs/9.jpg'
}]

const imgs2 = [
    {
        fileId: 6,
        url: './imgs/6.jpg',
        fileName: 'fff',
        thumbUrl: './imgs/6.jpg'
    },{
        fileId: 7,
        url: './imgs/7.png',
        fileName: 'ggg',
        thumbUrl: './imgs/7.png'
    },{
        fileId: 8,
        url: './imgs/8.jpg',
        fileName: 'hhh',
        thumbUrl: './imgs/8.jpg'
    },{
        fileId: 9,
        url: './imgs/9.jpg',
        fileName: 'iii',
        thumbUrl: './imgs/9.jpg'
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
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/><br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
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
                <div className="pos-fix">就要搞点大新闻</div>
            </div>
        )
    }


}


ReactDom.render(
    <Demo></Demo>
    , document.getElementById('root')
)








