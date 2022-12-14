"""
Output the Fibonacci sequence step-by-step.
Fibonacci sequence starts as:
0 1 1 2 3 5 8 13 21 ... in which the first
two numbers are 0 and 1 and each additional
number is the sum of the previous two numbers
"""
def fibonacci(v1, v2, run_cnt):
    print(f'{v1} + {v2} = {v1+v2}')

    if run_cnt <= 1:  
        pass  
    else:             
        fibonacci(v2, v1+v2, run_cnt-1)




# print ('This program outputs the\n'
#        'Fibonacci sequence step-by-step,\n'
#        'starting after the first 0 and 1.\n')

# run_for = int(input('How many steps would you like?'))



# fibonacci(0, 1, run_for)



"""
0 1 1 2 3 5 8 13 21 34 ... 
"""

# Given a number n, print the n-th Fibonacci Number.

# Input  : n = 2
# Output : 1

# Input  : n = 9
# Output : 34

## fibb(0) => 0
## fibb(1) => 1

## fibb(5)

## F_n = F_n-1 + F_n-2
## fibb(n) = fibb(n-1) + fibb(n-2)

# def fibb(n):
#   if n == 0:
#     return 0
#   if n == 1:
#     return 1
  
#   return fibb(n-1) + fibb(n-2)






def scramble(r_letters, s_letters):
    """
    Output every possible combination of a word.
    Each recursive call moves a letter from
    r_letters (remaining letters) to
    s_letters (scrambled letters)
    """
    if len(r_letters) == 0:
        # Base case: All letters used
        print(s_letters) 
    else:
        # Recursive case: For each call to scramble()
        # move a letter from remaining to scrambled
        'bc'
        for i in range(len(r_letters)):    
            # The letter at index i will be scrambled
            scramble_letter = r_letters[i]   ## r_letters[0] = a
            # Remove letter to scramble from remaining letters list
            remaining_letters = r_letters[:i] + r_letters[i+1:]  ## r_letters[:0] + r_letters[0+1:] = "bc"
            # Scramble letter
            scramble(nameList, s_letters + scramble_letter)    
            ##  for i = 0 scramble("bc", "a"),  for i = 1 scramble("ac", "b") for i=2 scramble("ab", "c")

# word = input('Enter a word to be scrambled: ')
# scramble(word, '') 



## gettting rid of a charecter at index i in a_string

## factorial(1) = 1
## factorial(0) = 1


# 5! = 5 * 4!

## n * n-1 * n-2 ...    

# n-1 * n-2 ... 

## n * factorial(n-1)

# def factorial(n):
#   if n == 1:
#     return 1
#   if n == 0:
#     return 1
  
#   return n * factorial(n-1)


# print(factorial(5))


# "hello"

# a_string[0] = "h"

# a_string[1:] = 'ello'


# def reverse_string(a_string):
#   if len(a_string) == 0:
#     return
#   else:
#     return reverse_string(a_string[1:])  + a_string[0]


  ## reverse_string(ello) + h
  ## reverse_string(llo)   e + h
  ## reverse_string(lo) l + e + h
  ## reverse_string(o) + l + l + e + h
  ## reverse_string() + o + l + l + e + h = > olleh

def bsearch(nums, target):

  upper = len(nums) - 1

  mid = upper // 2

  if nums[mid] == target:
    return True
  if len(nums) == 0:
    return False
  

  if nums[mid] < target:
    bsearch(nums[mid+1:], target)
  return bsearch(nums[0:mid], target)



