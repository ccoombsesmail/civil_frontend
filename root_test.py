from root import *
def run_test(n, number, invalid_input, accuracy = 0.001):
  '''run_test takes paramters that are used in the root function, and prints a summary of the paramters passed as well as the expected and actual return values of
    the root function being tested. The return value is a boolean indcating whether the test passed or failedd (True if passed)
  '''
  actual = root(n, number, accuracy)
  passed = False
  if (invalid_input): 
    expected = -1
    passed = actual == expected
  else:
    expected = number**(1/n)
    passed = abs(expected - actual) < accuracy
  print("n = {}, number = {}, accuracy = {}, expected return = {}, actual return = {}, test passed = {}".format(n, number, accuracy, expected, actual, passed))
  return passed


test_cases = [
  (3, 2, False, None), ## standard input with number as int
  (10, 7.2, False, 0.01), ## another standars input with number as float and different accuracy
  (2, 1, False, .00001), ## boundry case with number == 1
  (55, 5, False, None), ## very large value for nth root
  (-1, 3.0, True, None), ## negative number is an invalid input for n
  (0, 3.0, True, None), ## zero is a invalid input for n
  (2, -3.0, True, None), ## negative number is an invalid input for number,
  (2, 0.0, True, None), ## 0 is an invalid input for number
  (2, 3, True, 2.0), ## accuracy must be less than 1 and greater than 0
  (2, 3, True, -1.0), ## accuracy must be less than 1 and greater than 0
  (2.0, 3, True, None), ## n cannot be a float so should fail
  (2.0, "3", True, None), ## number cannot be a string
  (2, 4, False, None), ## required test case from rubric
  (3, 27.0, False, 0.01),  ## required test case from rubric
  (100, 1, False, None),  ## required test case from rubric
  (5, 32, False, None),  ## required test case from rubric
  (2, -1, True, None),  ## required test case from rubric
]


def main():
  num_passed = 0  ## variable to keep track of the number of passing tests
  num_failed = 0 ## variable to keep track of the number of failing tests
  passed = False ## variable that stores whether an individual test has passed
  for test_case in test_cases:
    (n, number, invalid_input, accuracy) = test_case ## unpackes test_case which is a tuple from the test_cases array
    if accuracy is not None: ## If not testing a value of accuracy, None is provided
      passed = run_test(n, number, invalid_input, accuracy) ## run_test returns a boolean indicating whether the test passed or failed
    else:
      passed = run_test(n, number, invalid_input)
    if passed:
      num_passed +=1 ## if test passed, increment num_passed
    else:
      num_failed +=1 ## if test failed, increment num_failed
  print("number passed = {}, number failed = {}, number test cases = {}".format(num_passed, num_failed, num_passed + num_failed)) ## num_passed + num_failed will be the total number of tests


if __name__ == "__main__":
    main()

