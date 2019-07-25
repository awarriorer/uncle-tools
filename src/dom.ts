import logger from '@/logger';

export default {
    /**
     * 图片的大小
     */
    imgSize: function(img: any) {
        return new Promise((resolve, reject) => {

            if(img){
                resolve({
                    width: img.naturalWidth,
                    height: img.naturalHeight
                })

                return;
            }

            let image = new Image()

            image.src = img
            image.onload = function () {
                resolve({
                    width: image.width,
                    height: image.height
                })
            }

            image.onload = function (err) {
                reject(err)
            }
        })
    },
    /**
     * 是否有包含关系
     
    isContains: function(parentsDom: any, childDom: any, debug = false): boolean{
        // 无论domA传进来的是数组还是单个dom，都整合到数组里，统一处理
        let parentArr = [].concat(parentsDom)

        parentArr = parentArr.filter((dom) => {
            return !!dom
        })

        if (debug) {
            logger.debug('dom isContains')
            logger.debug('parentsDom', parentsDom)
            logger.debug('childDom', childDom)
        }

        // 判断两者是否相等
        for (let item of parentArr) {
            if (item === childDom) {
                return true
            }
        }

        // 判断是否是根元素
        for (let item of parentArr) {
            if (item.nodeType && item.nodeType === 9) {
                return true
            }
        }

        // 如果支持contains
        // contains 方法支持情况：chrome+ firefox9+ ie5+, opera9.64+(估计从9.0+),safari5.1.7+
        if (document.contains) {
            for (let item of parentArr) {
            if (item.contains(childDom)) {
                return true
            }
            }
            return false
        } else
        // firefox只支持compareDocumentPosition，且compareDocumentPosition返回的是一个2进制的数值，其中16是包含关系
        if (document.compareDocumentPosition) {
            for (let item of parentArr) {
                if (item.compareDocumentPosition(childDom) === 16) {
                    return true
                }
            }
            return false
        }

        // 如果前两者都不支持，那么就手动遍历
        for (let item of parentArr) {
            if (this.isSameDom(item, parentArr)) {
                return true
            }
        }

        return false
    },
    */
    /**
     * 两个dom是否相同
     
    isSameDom: function (domA, domB) {
        // body...
        while (domB !== undefined && domB !== null && domB.tagName.toUpperCase() !== 'BODY' && domB.tagName.toUpperCase() !== 'HTML') {
            if (domA === domB) {
                return true
            }
            domB = domB.parentNode
        }

        return false
    }*/
}