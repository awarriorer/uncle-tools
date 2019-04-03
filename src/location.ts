import regexp from './regexp';

let parts = [
    'source',
    'protocol',
    'authority',
    'userInfo',
    'user',
    'password',
    'host',
    'port',
    'relative',
    'path',
    'directory',
    'file',
    'query',
    'anchor'
];

export default {
    /**
     * 信息预处理，返回一个对象
     * @param url 
     */
    parse(url?: string){
        let link = url || window.location.href,
            m: any = regexp.urlParse.exec(link),
            uri: any = {},
            i = 14;

        while (i--) {
            uri[parts[i]] = m[i] || '';
        }

        if (uri.port === '') {
            uri.port = (uri.protocol === 'https' ? 443 : 80);
        } else {
            uri.port = parseInt(uri.port);
        }

        return uri;
    },
    /**
     * 获取查询参数
     * @param name ,查询参数的名称
     * @param url, 查询的路径，默认为当前页面路径
     * 若传入了名称，则返回和名称对应的值，否则返回整个query对象
     */
    query(name?: string, url?: string){
        let link = url || window.location.href,
            parse = this.parse(link),
            queryArr = parse.query.split('&'),
            queryObj: any = {};
        
        queryArr.forEach((strItem: string) => {
            let item = strItem.split('=');
            queryObj[item[0]] = item[1]
        })

        if(name){
            return queryObj[name];
        }else{
            return queryObj;
        }
    },

    /**
     * 获取主域名
     * @param url 
     */
    domin(url?: string): string{
        let link = url || window.location.href,
            parse = this.parse(link),
            hostArr = parse.host.split('.'),
            len = hostArr.length;
        

        return `${hostArr[len -2]}.${hostArr[len - 1]}`;
    },

    /**
     * 当前路径和基础路径是否在同一个域
     * @param url 比对的地址
     * @param comparedUrl 基础地址
     */
    isCrossDomin(url: string, comparedUrl?: string): boolean{
        let urlObj = this.parse(url),
            compObj = this.parse(comparedUrl || window.location.href);

        return urlObj.host !== compObj.host || urlObj.port !== compObj.port || urlObj.protocol !== compObj.protocol;
    }
}