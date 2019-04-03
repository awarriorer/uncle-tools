import regexp from '@/regexp';

let stateCfg = {
    error: 0,
    success: 1,
    empty: 2
}

export default {
    isEmpty(str: string, name: string = '该项'): Object {

        let status = str === '' ? stateCfg.empty : stateCfg.success;

        return {
            status,
            warning: ''
        }
    },

    isEmail(str: string, name: string = '邮箱'): Object {
        let reg = regexp.email;

        if (!str || str.length <= 0) {
            return {
                state: stateCfg.empty,
                warning: `${name}为空！`,
            }
        }
    
        if (!reg.test(str)) {
            return {
                state: stateCfg.error,
                warning: `${name}格式不正确！`,
            }
        } else {
            return {
                state: stateCfg.success,
            }
        }
    },

    isPhone(str: string, name: string = '手机号'): Object {
        let reg = regexp.phone;

        if (!str || str.length <= 0) {
            return {
                state: stateCfg.empty,
                warning: `${name}为空！`,
            }
        }
    
        if (!reg.test(str)) {
            return {
                state: stateCfg.error,
                warning: `${name}格式不正确！`,
            }
        } else {
            return {
                state: stateCfg.success,
            }
        }
    },

    isFixedPhone(str: string, name: string = '座机号码'): Object {
        let reg = regexp.fixedPhone;

        if (!str || str.length <= 0) {
            return {
                state: stateCfg.empty,
                warning: `${name}为空！`,
            }
        }
    
        if (!reg.test(str)) {
            return {
                state: stateCfg.error,
                warning: `${name}格式不正确！`,
            }
        } else {
            return {
                state: stateCfg.success,
            }
        }
    },

    isIDNumber(str: string, name: string = '身份证号'): Object {
        let reg = regexp.iDNumber;

        if (!str || str.length <= 0) {
            return {
                state: stateCfg.empty,
                warning: `${name}为空！`,
            }
        }
    
        if (!reg.test(str)) {
            return {
                state: stateCfg.error,
                warning: `${name}格式不正确！`,
            }
        } else {
            return {
                state: stateCfg.success,
            }
        }
    },

    isIP(str: string, name: string = 'IP地址'): Object {
        let reg = regexp.ip;

        if (!str || str.length <= 0) {
            return {
                state: stateCfg.empty,
                warning: `${name}为空！`,
            }
        }
    
        if (!reg.test(str)) {
            return {
                state: stateCfg.error,
                warning: `${name}格式不正确！`,
            }
        } else {
            return {
                state: stateCfg.success,
            }
        }
    },

    isLink(str: string, name: string = '链接'): Object {
        let reg = regexp.link;

        if (!str || str.length <= 0) {
            return {
                state: stateCfg.empty,
                warning: `${name}为空！`,
            }
        }
    
        if (!reg.test(str)) {
            return {
                state: stateCfg.error,
                warning: `${name}格式不正确！`,
            }
        } else {
            return {
                state: stateCfg.success,
            }
        }
    },

    isAccount(str: string, name: string = '帐号'): Object {
        let reg = regexp.account;

        if (!str || str.length <= 0) {
            return {
                state: stateCfg.empty,
                warning: `${name}为空！`,
            }
        }
    
        if (!reg.test(str)) {
            return {
                state: stateCfg.error,
                warning: `${name}格式不正确！`,
            }
        } else {
            return {
                state: stateCfg.success,
            }
        }
    },

    isPassword(str: string, name: string = '密码'): Object {
        let reg = regexp.account;

        if (!str || str.length <= 0) {
            return {
                state: stateCfg.empty,
                warning: `${name}为空！`,
            }
        }
    
        if (!reg.test(str)) {
            return {
                state: stateCfg.error,
                warning: `${name}格式不正确！`,
            }
        } else {
            return {
                state: stateCfg.success,
            }
        }
    },

    isSpecialCharacters(str: string, name: string = '该项'): Object {
        let reg = regexp.specialCharacters;

        if (!str || str.length <= 0) {
            return {
                state: stateCfg.empty,
                warning: `${name}为空！`,
            }
        }
    
        if (!reg.test(str)) {
            return {
                state: stateCfg.error,
                warning: `${name}格式不正确！`,
            }
        } else {
            return {
                state: stateCfg.success,
            }
        }
    }    
}
