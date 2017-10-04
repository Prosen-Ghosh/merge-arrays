const merge = (function(){
    'use strict';
    const fn = function(arr){
        let len = arguments.length,
            res = [];
        if(len < 2)throw new Error('expect at least 2 argument');
        for(let i = 0; i < len; i++){
            if(Object.prototype.toString.call(arguments[i]).toLowerCase() === '[object array]')res = [...res, ...arguments[i]];
            else throw new TypeError('expets array arguments got ' + typeof arguments[i]);
        }
        return res;
    }
    return fn;
})();

if (typeof module === 'object' && module.exports) {
    module.exports = merge;
}