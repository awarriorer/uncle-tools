export default {
    getItem: function(t: string) {
        return t ? decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(t).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null: null;
    },
    setItem: function(key: string, val: string, time: any, path: string, domain: string, secure: boolean) {
        if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)){
            return !1;
        };

        let expiresTime = '';

        if (time) {
            switch (time.constructor) {
            case Number:
                expiresTime = time === 1 / 0 ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT': '; expires=' + new Date((new Date).getTime() + 1e3 * time).toUTCString();
                break;
            case String:
                expiresTime = `; expires=${time}`;
                break;
            case Date:
                expiresTime = `; expires=${time.toUTCString()}`;
            default:
                expiresTime = '';
            }
        };
        return document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(val)}${expiresTime}${(domain ? '; domain=' + domain: '')}${(path ? '; path=' + path: '')}${(secure ? '; secure': '')}`,
        !0;
    },
    removeItem: function(t: string, path: string, domain: string) {
        return this.hasItem(t) ? (document.cookie = encodeURIComponent(t) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (domain ? '; domain=' + domain: '') + (path ? '; path=' + path: ''), !0) : !1;
    },
    hasItem: function(t: string) {
        return t ? new RegExp('(?:^|;\\s*)' + encodeURIComponent(t).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=').test(document.cookie) : !1;
    },
    keys: function() {
        let t = {};

        for (let t = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/), e = t.length, r = 0; e > r; r++){
            t[r] = decodeURIComponent(t[r]);
        };
        
        return t;
    }
};

