const merge = require('../merge');
const assert = require('chai').assert;
describe('Merge Arrays',function(){
    it('Function Shuld Return An Array',function(){
        assert.equal(Object.prototype.toString.call(merge([],[])).toLowerCase(),'[object array]');
    });
    it('Function Shuld Return A Merged Array',function(){
        assert.deepEqual(merge([1,2],[3,4]),[1, 2, 3, 4]);
    });
});