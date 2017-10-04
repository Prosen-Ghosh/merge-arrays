const merge = (function(){
    'use strict';
    const fn = function(){
        if(arguments.length < 2)throw new Error('expect at least 2 argument');
        return Array.from(arguments).reduce((p,c) => {
            if(Object.prototype.toString.call(c).toLowerCase() === '[object array]')return [...p, ...c];
            else throw new TypeError('expets array arguments got ' + typeof c);
        },[]);
    }
    return fn;
})();

if (typeof module === 'object' && module.exports) {
    module.exports = merge;
}