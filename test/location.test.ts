import localtion from '../src/location'

describe('localtion', () => {
    test('query', () => {
        let url = 'https://developers.weixin.qq.com/miniprogram/dev/api/wx.getSystemInfoSync.html?name=uncle-yang';
        let url1 = 'https://developers.weixin.qq.com/miniprogram/dev/api/wx.getSystemInfoSync.html';

        expect(localtion.query('name', url)).toBe('uncle-yang');        
        expect(localtion.query('1', url)).toBe(undefined);        
        expect(localtion.query('1', url1)).toBe(undefined);        
    })

    test('domin', () => {
        let url = 'https://developers.weixin.qq.com/miniprogram/dev/api/wx.getSystemInfoSync.html?name=uncle-yang';
        
        expect(localtion.domin(url)).toBe('qq.com');  
    })

    test('isCrossDomin', () => {
        let url = 'https://developers.weixin.qq.com/miniprogram/dev/api/wx.getSystemInfoSync.html?name=uncle-yang';
        let ur1 = 'https://developers.weixin.qq.com/miniprogram/dev/api/wx.getSystemInfoSync.html?name=uncle-yang';
        let ur2 = 'https://www.uncle-yang.com/miniprogram/dev/api/wx.getSystemInfoSync.html?name=uncle-yang';
        
        expect(localtion.isCrossDomin(url, ur1)).toBe(false);
        expect(localtion.isCrossDomin(url, ur2)).toBe(true);
    })

})