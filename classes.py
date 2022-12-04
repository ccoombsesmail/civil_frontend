from datetime import date


class Dog:
  animal_type = "mamel"
  def __init__(self, w, bd):
    self.weight = w
    self.birth_date = bd
  def eat(self):
    self.weight += 1
  def compute_age(self):
    birth_year = int(self.birth_date[-4:])
    current_year = date.today().year
    dog_age = current_year - birth_year
    print(dog_age)
    return dog_age


# September 13, 2018



a = 10
b = a   # b = 10
b = 5   # b = 5
print(a) # a = 10


dog1 = Dog(34)  
dog2 = dog1     

dog2.weight = 50 
print(dog1.weight)



