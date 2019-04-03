/**
 * 一些函数写法
 */
export default {
    /**
     * 函数链
     * @param filters 执行的函数过滤器
     * @param args 参数
     * @param next 回调
     */
    doChain(filters: Array<Function>, args: any, next: Function){
        let i = 0;

        let doFilter = function(err: any, args: any) {
            if (err) { 
                return next(err); 
            }

            if (i < filters.length) {
                filters[i++](args, doFilter);
            } else {
                const res = next(null, args);

                return res;
            }
        };

        return doFilter(null, args);
    }
}