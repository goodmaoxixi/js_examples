var Block, a, x, y, z,
  __slice = [].slice;

x = {
  la: {
    li: {
      lu: {
        chunky: {
          bacon: {
            foo: 'bar'
          }
        }
      }
    }
  }
};

console.log("x['la']['li']['lu']['chunky']['bacon']['foo'] is ", x['la']['li']['lu']['chunky']['bacon']['foo']);

y = {
  la: {
    li: {
      lu: {
        chunky: {
          bacon: {
            foo: 'bary'
          }
        }
      }
    }
  }
};

console.log("y['la']['li']['lu']['chunky']['bacon']['foo'] is ", y['la']['li']['lu']['chunky']['bacon']['foo']);

Block = function() {
  var key, obj, rest;
  obj = arguments[0], rest = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  if (typeof obj === "undefined") {
    obj = {};
  }
  if (rest.length >= 2) {
    key = rest[0];
    obj[key] = Block.apply(null, [obj[key]].concat(__slice.call(rest.slice(1))));
    return obj;
  } else if (rest.length === 1) {
    return obj = rest[0];
  }
};

z = Block(z, 'la', 'li', 'lu', 'chunky', 'bacon', 'foo', 'barz');

console.log(z['la']['li']['lu']['chunky']['bacon']['foo']);

z = Block(z, 'la', 'li', 'lu', 'chunky', 'bacon', 'fooz', 'ball');

console.log('z is');

console.log(JSON.stringify(z));

a = z['la']['li']['lu'];

a = Block(a, 'chunky', 'bacon', 'another', 'node');

console.log('a is');

console.log(JSON.stringify(a));

console.log('z is');

console.log(JSON.stringify(z));
