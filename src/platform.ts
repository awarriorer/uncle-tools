
function isMobile(): boolean {
    let userAgent = navigator.userAgent;

    return !!(userAgent && (userAgent.toLowerCase().indexOf('mobile') >= 0
    || userAgent.toLowerCase().indexOf('ipad') >= 0
    || userAgent.toLowerCase().indexOf('android') >= 0
    || userAgent.toLowerCase().indexOf('iphone') >= 0
    || userAgent.toLowerCase().indexOf('ipod') >= 0));
};

let platform = {
    name: '',
    version: '',
    layout: '',
    os: 'windows',
    description: '',
    product: '',
    netWork: '',
    system: '',
    platform: '',
    language: '',
    isMobile: isMobile(),
    isWechat: '',
};

export default platform;