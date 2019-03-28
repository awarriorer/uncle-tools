export default {

    is(checkVal: any, expectation: string): boolean{
        return Object.prototype.toString.call(checkVal) === `[object ${expectation}]`;
    },

    isString(str: any): boolean {
        return typeof str === 'string';
    },

    isNumber(num: any): boolean {
        return typeof num === 'number';
    },
    
    isBoolean(bool: any): boolean {
        return typeof bool === 'boolean';
    },

    isUndefined(undef: any): boolean {
        return typeof undef === 'boolean';
    },

    isFunction(fun: any): boolean {
        return this.is(fun, 'Function');
    },

    isObject(obj: any): boolean {
        return this.is(obj, 'Function');
    },

    isArray(arr: any): boolean {
        return this.is(arr, 'Array');
    },

    isDate(arr: any): boolean {
        return this.is(arr, 'Date');
    },

    isRegExp(reg: any): boolean {
        return this.is(reg, 'RegExp');
    },

    isError(err: any): boolean {
        return this.is(err, 'Error');
    },

    isMath(math: any): boolean {
        return this.is(math, 'Math');
    },

    isJSON(json: any): boolean {
        return this.is(json, 'Json');
    },

    isPromise(promise: any): boolean {
        return this.is(promise, 'Promise');
    },

    isMap(map: any): boolean {
        return this.is(map, 'Map');
    },

    isSet(set: any): boolean {
        return this.is(set, 'Set');
    },

    isArguments(arg: any): boolean {
        return this.is(arg, 'Arguments');
    }
}
