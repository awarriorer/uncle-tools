export default {
    getLen(num: number, len: number): string {
        return (Array(len).join('0') + num).slice(-len);
    }
};