import number from './number';

export default {
    /**
     * 
     * @param fmt 由 yyyy(年) MM(月) dd(日) hh(小时) mm(分钟) ss(秒) S(毫秒) 自由组合
     * @param doDate 
     */
    format(fmt: string, doDate?: Date){
        let date = doDate || new Date(),
            o: any = {
                'M+': date.getMonth() + 1,
                'd+': date.getDate(),
                'h+': date.getHours(),
                'm+': date.getMinutes(),
                's+': date.getSeconds(),
                'q+': Math.floor((date.getMonth() + 3) / 3),
                'S': date.getMilliseconds()
            };

        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }

        for (var k in o) {
            if (new RegExp(`(${k})`).test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
            }
        }
    
        return fmt;
    },
    /**
     * 把秒转化成字符串,例如，输入60,输出'01:00',输入3700,输出'01:01:40',
     * @param timer 秒数
     */
    secondToStr(timer: number) {
        let minute: number = parseInt(String(timer / 60)),
            second: number = parseInt(String(timer % 60)),
            hour: number = parseInt(String(minute / 60));

        minute = parseInt(String(minute % 60));

        if(hour > 0){
            return `${number.getLen(hour, 2)}:${number.getLen(minute, 2)}:${number.getLen(second, 2)}`;
        }

        return `${number.getLen(minute, 2)}:${number.getLen(second, 2)}`;
    }
}