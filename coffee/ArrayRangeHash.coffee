# Arrays
languages = [
  "JavaScript",
  "Ruby",
  "Python",
  "PHP"
]

console.log languages[0]
# for loop
for name in languages
  console.log name

# Ranges
months = [1..12]
# Slicing
march_to_may = months[2..4]
console.log mon for mon in march_to_may


# A simple hash & its iterator
simple_hash = 
  one: 1
  "two": 2
  three: '3 in string'

# Outputs a single key-value pair  
console.log "one ==> #{simple_hash['one']}"

# Iterators  
for key, value of simple_hash
    console.log "#{key} => #{value}"
# Or
for k, v of simple_hash
    console.log('%s -> %s', k, v)
 
 
# A nested hash
nested_hash =
  voice:
	  name: "Josh Timonen"
	  age: 30
  tech:
	  name: "Andrew Chalkley",
	  age: 28

# An iterator to output all
for k, v of nested_hash
    console.log('%s => %s', k, v)

# Outputs a single key-value pair  
console.log "voice: name => #{nested_hash['voice']['name']}"
