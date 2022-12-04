def root(n, number, accuracy = 0.001):
  '''This function returns the nth root of number within the given accuracy'''
  if not isinstance(n, int) or n <= 1: ## if n is not an instance of an int, or n less than or equal to 1, we should return -1 to signify disallowed user input 
    return -1
  if not (isinstance(number, int) or isinstance(number, float)) or number < 1:
    return -1
  if not isinstance(accuracy, float) or (accuracy < 0.0 or accuracy > 1.0):
    return -1
  ## in the above error checks, I put the type checks (e.g isInstance) first becuase if we compare unsupported types like (string < int) an error is thrown
  ## and we should be returning -1 as appose to throwing an error.



  ## we are going to guess numbers in a certain fashion, raise them to the nth power, and check if it's the correct answer
  ## abs(guess^(nth) - number) < accuracy    <--- this conditions signifies when we reach the correct answer

  
  lower = 1 ## This is the lowest possible answer for any input of number
  upper = number ## The root of any number is always less than (or equal) to that number
  guess = (upper + lower) / 2.0 ## Picking the middle between the upper and lower bounds is the most sensible guess
  while abs(guess**n - number) > accuracy: ## This will loop while the guess results in a number whose difference with the target number is greater than the desired accuracy
    if guess**n < number:
      ## increase lower bound because our guess was too low
      lower = guess
    else:
      ## decrease upper bound because our guess was too high
      upper = guess
    guess = (lower + upper) / 2.0 ## Picking the middle between the upper and lower bounds is STILL the most sensible guess
  return guess



