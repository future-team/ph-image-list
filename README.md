# ph-image-list
image list to show

```jsx
import {ImgList,ImgView} from 'ph-image-list'

<ImgList images={imgs1}
     editable={editable}
     deleteDoneCallback={this.deleteDoneCallback}
     swipeDoneCallback={this.swipeDoneCallback}}></ImgList>

//单独使用ImgView图片预览功能
<ImgView images={[
    {
        fileId: 9,
        url: './imgs/9.jpg',
        fileName: 'iii',
        thumbUrl: './imgs/9.jpg'
    }
]} ref={(imgview)=>{this.imgview=imgview}} />

<button onClick={()=>{
    //此处可传入图片索引，默认为0
    this.imgview.show()
}}>点击打开imageView</button>
```


## ImgList API
View [example](/example/src/index.js) to get more details

#### `<ImgList>` Props:
- maxShowNum is used to set default show image number.
- editable is used to set list item is deletable.
- images is used to define how many images can show.
- swipeDoneCallback is used to handler swipe done when full screen watch image.
- deleteDoneCallback: is used to handler delete done when that is editable

And if you want to get image list after delete some,you can call `ImgList.getImages()`.

### Contributing

- Fork the project
- Run the project in development view demo: `$ npm run demo`
- Make changes.
- Add appropriate tests
- `$ npm run test`
- If tests don't pass, make them pass.
- Update README with appropriate docs.
- Rnn build
- `$ npm run build`
- Commit and PR.
