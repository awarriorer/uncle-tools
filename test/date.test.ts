import date from '../src/date';

describe('date', () => {

    test('format', () => {
        let d  = new Date('2018-8-8');
        expect(date.format('yyyy-MM-dd', d)).toBe('2018-08-08');
        expect(date.format('yyyy-MM-dd hh:mm:ss:S', d)).toBe('2018-08-08 00:00:00:0');
        // expect(date.format()).toBe('Number');
    })

    test('secondToStr', () => {
        expect(date.secondToStr(60)).toBe('01:00');
        expect(date.secondToStr(666)).toBe('11:06');
        expect(date.secondToStr(3600)).toBe('01:00:00');
        expect(date.secondToStr(3700)).toBe('01:01:40');
    })
})