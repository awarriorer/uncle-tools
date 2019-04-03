/* eslint-disable no-console */
import util from '@/util';
import location from '@/location';

// 修改有修浏览器不支持
console.info = console.info || console.log || util.noop;
console.log = console.log || console.log || util.noop;
console.warn = console.warn || console.log || util.noop;
console.error = console.error || console.log || util.noop;


const getLogLevel = function() {
    let para = location.query('log_level');

    if (para === null
        && process
        && process.env
        && process.env.NODE_ENV
        && process.env.NODE_ENV === 'development') {
        return 4;
    }

    let level = parseInt(para);
    level = Number.isNaN(level) ? 3 : level;
    return level;
};

const logLevel = getLogLevel();

/**
 * @constant 日志记录工具，在项目中使用此工具记录日志，不直接使用 console.log 等等
 * @description 每个方法采用 getter 方式返回 console 对应的函数。
 * 在打印的信息时候, 与使用 console.log 一样，可以定位到真正的位置。
 * 在开发模式下，默认打印所有级别的日志。在生产环境中，默认级别为 info(3)。
 * 可以通过在参数中加入 log_level 设置级别。
 */
const logger = {
    get debug() {
        if (logLevel > 3) {
            return console.log.bind(window.console);
        }
        return util.noop;
    },

    /**
     * @function log 和debug 相同的级别，为了保持与 console.log 的使用习惯相同
     */
    get log() {
        if (logLevel > 3) {
            return console.log.bind(window.console);
        }
        return util.noop;
    },

    get info() {
        if (logLevel > 2) {
            return console.info.bind(window.console);
        }
        return util.noop;
    },

    get warn() {
        if (logLevel > 1) {
            return console.warn.bind(window.console);
        }
        return util.noop;
    },

    get error() {
        if (logLevel > 1) {
            return console.error.bind(window.console);
        }
        return util.noop;
    }
};

export default logger;
/* eslint-enable no-console */
