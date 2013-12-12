var chai = require('chai');
var assert = chai.assert;
var _ = require('lodash');
_.mixin(require('../src/lodash-get'));

describe('_.get', function() {
  it('should return 1', function() {
    var obj = {a: {b: {c: {d: 1}}}, e: {f: {g: 2}, c: 'hello world'}};
    var result = _.get(obj, 'a', 'b', 'c', 'd');
    assert(result, 1);
  });

  it('should return undefined if no variable in object', function() {
    var obj = {a: {b: {c: {d: 1}}}, e: {f: {g: 2}, c: 3}};
    var result = _.get(obj, 'a', 'b', 'c', 'd');
    assert(result, undefined);
  });
  
  it('should return undefined when no arguments are specified', function() {
    var obj = {a: {b: {c: {d: 1}}}, e: {f: {g: 2}, c: 3}};
    var result = _.get(obj);
    assert(result, undefined);
  });
  
  it('should return string \'hello world\'', function() {
    var obj = {a: {b: {c: {d: 1}}}, e: {f: {g: 2}, c: 'hello world'}};
    var result = _.get(obj, 'e', 'c');
    assert(result, 'hello world');
  });
});

