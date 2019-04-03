import type from '../src/type';

describe('type', () => {
    test('is', () => {
        expect(type.is('', 'String')).toBe(true);
        expect(type.is(1, 'Number')).toBe(true);
        expect(type.is(false, 'Boolean')).toBe(true);
        expect(type.is(undefined, 'Undefined')).toBe(true);
        expect(type.is({}, 'Object')).toBe(true);
        expect(type.is([], 'Array')).toBe(true);
        expect(type.is(function(){}, 'Function')).toBe(true);
        expect(type.is(new Promise(() => {}), 'Promise')).toBe(true);
        expect(type.is(new Date(), 'Date')).toBe(true);
        expect(type.is(new Error(), 'Error')).toBe(true);
        expect(type.is(new Map(), 'Map')).toBe(true);
        expect(type.is(new Set(), 'Set')).toBe(true);
        
        function a(arg: any){
            expect(type.is(arguments, 'Arguments')).toBe(true);
        }
        a(12);
    })

    test('get', () => {
        expect(type.getType('')).toBe('String');
        expect(type.getType(1)).toBe('Number');
    })

    test('is string', () => {
        expect(type.isString('')).toBe(true);
        expect(type.isString('1')).toBe(true);
        expect(type.isString(1)).toBe(false);
    })

    test('is number', () => {
        expect(type.isNumber('')).toBe(false);
        expect(type.isNumber('1')).toBe(false);
        expect(type.isNumber(1)).toBe(true);
    })

    afterAll(() => {
        // 后处理
        console.log('测试结束');
    })
})