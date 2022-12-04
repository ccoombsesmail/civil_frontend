def recurse(n,s):
  if n == 0:
    print(s)
  else:
    recurse(n, s)








# recurse(3, 0)  n == 3, s == 0

# recurse(2, 3)  n == 2, s == 3

# recurse(1, 5) n == 1 s == 5

# recurse(0, 6) n == 0 s == 6

# 6

## 1! = 1

## 4! = 4*3*2*1

def factorial(n):
  if n == 1:
    return 1
  else:
    return n * factorial(n-1)



# print(factorial(4)) 


##  [1, [2, 3], 4]

def sumOfListsOfList(listOfLists):
  total = 0
  for numOrList in listOfLists:
    if isinstance(numOrList, list):
      total += sumOfListsOfList(numOrList)
    else:
      total += numOrList
  print(total)
  return total


# print(sumOfListsOfList([1, [2, 3], 4]))

## total = total + 1 //  For the iteration over 1

## total = total + sumOfListsOfList([2, 3]) = 1 + sumOfListsOfList([2, 3])  = 1 + 5 = 6 // For the iteration over [2, 3]

## total = total + 4 = 6 + 4 = 10


#---------------------- sumOfListsOfList([2, 3]) ------------------------------

# sumOfListsOfList([2, 3])

# total = total + 2 = 2   // For the iteration over 2

## total = total + 3 = 2 + 3 = 5 // For the iteration over 3


## sumOfListsOfList([2, 3]) = 5




#  *
# ***

#  draw_triangle(3):

#  BASE CASE ? draw_triangle(0)




## draw_triangle_non_isoceles(0)

## draw_triangle_non_isoceles(1) = *

# *
# **
# ***
# ****

def draw_triangle_non_isoceles(length):
  if length > 1:
    draw_triangle_non_isoceles(length - 1)
  print('*' * length)


## draw_triangle_non_isoceles(2)  // on hold ->> "**"

## draw_triangle_non_isoceles(1)  // '*'



## draw_triangle_non_isoceles(3) -> Can't finish this call until we finish draw_triangle_non_isoceles(2)


## draw_triangle_non_isoceles(2) -> Can't finish this call until we finish draw_triangle_non_isoceles(1)

## draw_triangle_non_isoceles(1) -> "*"

## Now that draw_triangle_non_isoceles(1) has finished, we can contiue the call for draw_triangle_non_isoceles(2)

## draw_triangle_non_isoceles(2) -> '*' * 2 = '**'

## Now that draw_triangle_non_isoceles(2) has finished, we can contiue the call for draw_triangle_non_isoceles(3)

## draw_triangle_non_isoceles(3) -> '*' 3 = '***'

## draw_triangle_non_isoceles(4)

# def find(low, high):
#   mid = (high + low) / 2
#   answer = input(f'Is it {mid}?, (l/h/y)')



# def number_to_words(n):
#   if n==0:
#     return ""
#   else:
#     small_ans = arr[n%10]
#     ans = number_to_words(int(n/10)) + small_ans + " "
#   return ans


# def number_to_words(n):
#   result = ""
#   while n > 0:
#     small_ans = arr[n%10]
#     result = small_ans + result
#     n = n // 10
#   return result


# number_to_words(1356)

# result = small_ans + result ## result = "six"

# result = small_ans + result ## result five six 


def test_func(n):
  try:
    return 10 / n
  except ZeroDivisionError:
    return print("oh no")
  except:
    print("Other errors")
  


# my_dict = {1:"one", 2:"two"}

# my_dict[1]


# my_string = "asdfasdf"

# my_tuple = (1,3,"342")

# my_list = list(1,3, "342")

# my_tuple[2] = 44 ## cannot re-asign

# my_list[2] = 44  ## CAN re-asign




############################### Dictionaries #####################

# a_list = (1,2,3,4,5,12, 234)

# a_dict = {1: "this vlasdf", 2: "asdfadf", 12: "i exist"}

# del a_dict[12]  ## after deletion -> {1: "this vlasdf", 2: "asdfadf"}

# a_dict.get(12, "oh no doest no exist")



def string_to_int(stringNum):
  return int(stringNum)


#  User inputs string w/ numbers  -> 12 15 23 9 -> "12 15 23 9"
# user_input = input()
# # Split into separate strings
# string_inputs = user_input.split(" ")  # -> ["12", "15", "23", "9"]
# print("string_inputs")
# print(string_inputs)
# # Convert strings to integers
# input_data = list(map(string_to_int, string_inputs)) # -> [12, 15, 23, 9]
# print("input_data")
# print(input_data)

# average_value = sum(input_data)/len(input_data)
# max_value = max(input_data)
# print(average_value)
# print(max_value)





### Dictionary lecture problem
## words = ["hey", "hi", "Mark", "hi", "mark"]

def get_frequencies(words):
  freq = {}
  for word in words:
    if word in freq: 
      freq[word] += 1
    else:
      freq[word] = 1 ## {"hey": 1}
  return freq








### ZY-BOOK problem 

# Joe, 123-5432 Linda, 983-4123 Frank, 867-5309
# get the input as above and then print the number associated with a name
user_input = input()

formatted_user_input = user_input.replace(",", "").split(" ")

user_contacts = {}

for i in range(len(formatted_user_input) - 1):
  if i % 2 == 0:
    user_contacts[formatted_user_input[i]] = formatted_user_input[i+1]
  else:
    continue

print(user_contacts)
name = input()

print(user_contacts[name])
