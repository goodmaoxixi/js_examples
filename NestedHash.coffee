# https://gist.github.com/victusfate/4401625
# Install extenstion CoffeeConsole 2 onto Chrome (Windows) or Chromium(Linux) to try.

x = 
  la:  
    li :  
      lu:  
        chunky:  
          bacon:  
            foo: 'bar'
console.log "x['la']['li']['lu']['chunky']['bacon']['foo'] is ", x['la']['li']['lu']['chunky']['bacon']['foo']


y = { la: { li: { lu: { chunky: { bacon: { foo:'bary' } } } } } }  
console.log "y['la']['li']['lu']['chunky']['bacon']['foo'] is ", y['la']['li']['lu']['chunky']['bacon']['foo']

Block = (obj,rest...) ->
  # console.log 'obj',obj
  # console.log 'rest',rest
  obj = {} if (typeof obj is "undefined") 
  if rest.length >= 2
    key = rest[0]
    obj[key] = Block(obj[key],rest[1...]...)
    obj
  else if rest.length is 1
    obj = rest[0]

z = Block(z,'la','li','lu','chunky','bacon','foo','barz')
console.log z['la']['li']['lu']['chunky']['bacon']['foo']
# >> barz

z = Block(z,'la','li','lu','chunky','bacon','fooz','ball')
console.log 'z is'
console.log JSON.stringify(z)
# >> {"la":{"li":{"lu":{"chunky":{"bacon":{"foo":"barz","fooz":"ball"}}}}}}

a = z['la']['li']['lu']
a = Block(a,'chunky','bacon','another','node')
console.log 'a is'
console.log JSON.stringify(a)
# >> a is {"chunky":{"bacon":{"foo":"barz","fooz":"ball","another":"node"}}}

console.log 'z is'
console.log JSON.stringify(z)
# >> z is {"la":{"li":{"lu":{"chunky":{"bacon":{"foo":"barz","fooz":"ball","another":"node"}}}}}}
