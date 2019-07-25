export default {
    noop: function(){
        
    },
    /**
     * 下载文件
     * url, 下载地址
     * title, 名称
     * newWindow，是否新窗口打开
     */
    download: (url: string, title: string, newWindow?: boolean) => {
        let dlLink = document.createElement('a');

        dlLink.download = title;
        dlLink.href = url;

        if(newWindow){
            dlLink.target = '_blank';
        }

        dlLink.click();
    },
    /**
     * 获取黏贴到输入框中的文件对象
     * 接受event事件
     * 返回一个fiel对象
     */
    getPasteFile: (event: any) => {
        if(event.clipboardData || event.originalEvent){
            // not for ie11  某些chrome版本使用的是event.originalEvent
            let clipboardData = event.clipboardData || event.originalEvent.clipboardData;

            if(clipboardData.items){
                // for chrome
                let items = clipboardData.items;
                let len = items.length;
                let blob = null;
      
                // 在items里找粘贴的image,据上面分析,需要循环
                for (let i = 0; i < len; i++) {
                    if (items[i].type.indexOf('image') !== -1) {
                        // getAsFile() 此方法只是living standard firefox ie11 并不支持
                        blob = items[i].getAsFile();
                        // 阻止默认行为即不让剪贴板内容在div中显示出来
                        event.preventDefault();
                        
                        return blob;
                    }
                }
            }else{
                // for firefox
                setTimeout(() => {
                    // 设置setTimeout的原因是为了保证图片先插入到div里，然后去获取值
                    let imgList: any = document.querySelectorAll('#aaa img');
                    let len = imgList.length;
                    let srcStr = '';
                    let i
                    for (i = 0; i < len; i++) {
                        if (imgList[i].className !== 'my_img') {
                            // 如果是截图那么src_str就是base64 如果是复制的其他网页图片那么src_str就是此图片在别人服务器的地址
                            srcStr = imgList[i].src
                            break
                        }
                    }
                    if (srcStr) {
                        // 阻止默认行为即不让剪贴板内容在div中显示出来
                        event.preventDefault();

                        return srcStr;
                    }
                }, 1)
            }
        }else{
            setTimeout(() => {
                let imgList: any = document.querySelectorAll('#aaa img')
                let len = imgList.length
                let srcStr = ''
                let i
                for (i = 0; i < len; i++) {
                  if (imgList[i].className !== 'my_img') {
                    srcStr = imgList[i].src
                    break
                  }
                }
                // uploadImgFromPaste(src_str, 'paste', isChrome);
                if (srcStr) {
                  // 阻止默认行为即不让剪贴板内容在div中显示出来
                  event.preventDefault()
                  return srcStr;
                }
            }, 1)
        }
    }
};