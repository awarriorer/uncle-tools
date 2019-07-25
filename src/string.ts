/**
 * 字符串方法拓展
 */
export default {
    /**
     * 返回字符串的字节长度
     */
    codeLength(str: string): number{
        if(str === ''){
            return 0;
        }

        return str.replace(/[\u0391-\uFFE5]/g, 'aa').length;
    }
};