#  Alternative to _.result

An extended version of _.result call _.get which handles variable number of keys and handles nested objects. 

Documentation contains some usage examples.

## Objects 

### _.get(object[, keys])
Similiar to [_.result](http://lodash.com/docs#result).

```
var obj = {a: {b: {c: {d: 1}}}, e: {f: {g: 2}, c: 3}};
_.get(obj, 'a', 'b', 'c', 'd'); // => 1
_.get(obj, 'a', 'b', 'c', 'foo'); // => undefined (does not error out)

