# Created on May 27, 2015 Wed.
# Defines function coffee
# Highly recommend to install extenstion CoffeeConsole from the Chrome App Store to try CoffeeScript.

# Defines a function with a default argument value
coffee = (message = "Ready for some Coffee?") ->
  answer = confirm(message)
  "Your answer is #{answer}"
        
coffee("Ready for a cup of coffee?")
alert coffee "Hi, CoffeeScript"
