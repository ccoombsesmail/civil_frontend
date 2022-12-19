# Type code here
class ItemToPurchase:
    def __init__(self,item_name = "none",item_price = 0,item_quantity = 0, item_description = "none"):
        self.item_name = item_name
        self.item_price = item_price
        self.item_quantity = item_quantity
        self.item_description = item_description
    
    def print_item_descripton(self, item):
        print(item.item_description)

    def print_item_cost(self):
        print("{} {} @ ${} = ${}".format(self.item_name,self.item_quantity,self.item_price,self.item_quantity*self.item_price))
        return self.item_quantity * self.item_price
        
        
        
        
class ShoppingCart:
    def __init__(self,customer_name = "none",current_date = "January 1, 2016",cart_items = []):
        self.customer_name = customer_name
        self.current_date = current_date
        self.cart_items = cart_items
    def add_item(self, item):
        self.cart_items.append(item)
    
    def remove_item(self, item_name):
        for i in range(len(self.cart_items)):
            if self.cart_items[i].item_name == item_name:
                self.cart_items.pop(i)
                return
        print("Item not found in cart. Nothing removed.")
    
    def modify_item(self, item):
        for i in range(len(self.cart_items)):
            if self.cart_items[i].item_name == item.item_name:
                self.cart_items[i].item_quantity = item.item_quantity
                return
        print("Item not found in cart. Nothing modifned.")
    
    def get_num_items_in_cart(self):
        count = 0
        for item in self.cart_items:
            count += item.item_quantity
        return count
    
    def get_cost_of_cart(self):
        total_cost = 0
        for item in self.cart_items:
            total_cost = total_cost + item.print_item_cost()
        return total_cost
    
    def print_total(self):
        if len(self.cart_items) == 0:
            print("SHOPPING CART IS EMPTY") 
            return
        print("{}'s Shopping Cart - {}".format(self.customer_name, self.current_date))
        print("Number of Items: {}".format(self.get_num_items_in_cart()))
        print()
        for item in self.cart_items:
            item.print_item_cost()
        print()
        print("Total: ${}".format(self.get_cost_of_cart()))
    
    def print_descriptions(self):
        print("{}'s Shopping Cart - {}".format(self.customer_name, self.current_date))
        print("Item Descriptions")
        for item in self.cart_items:
            print(item.item_description)
        
        
def print_menu():
    print("MENU")
    print("a - Add item to cart\n", end="")
    print("r - Remove item from cart\n", end="")
    print("c - Change item quantity\n", end="")
    print("i - Output items' descriptions\n", end="")
    print("o - Output shopping cart\n", end="")
    print("q - Quit\n", end="")

def execute_menu(option, cart):
    if option == "a":
         print("ADD ITEM TO CART")
         print("Enter the item name:")
         item_name = input()
         print("Enter the item description:")
         item_description = input()
         print("Enter the item price:")
         item_price = input()
         print("Enter the item quantity:")
         item_quantity = input()
         item = ItemToPurchase(item_name, int(item_price), int(item_quantity), item_description)
         cart.add_item(item)
         return False
    elif option ==  "r":
         print("REMOVE ITEM FROM CART")
         print("Enter name of item to remove:")
         name = input()
         cart.remove_item(name)
         return False
    elif option ==  "c":
         print("CHANGE ITEM QUANTITY")
         print("Enter the item name:")
         item_name = input()
         print("Enter the item quantity:")
         item_quantity = input()
         item = ItemToPurchase(item_name, None, item_quantity, None)
         cart.modify_item(item)
         return False
    elif option ==   "i":
         print("OUTPUT ITEMS' DESCRIPTIONS")
         cart.print_descriptions()
         return False
    elif option ==  "o":
         print("OUTPUT SHOPPING CART")
         cart.print_total()
         return False
    elif option ==  "q":
         return True
    else:
        return False
    
    

        
if __name__ == "__main__":
    commands = ['a', 'o', 'i', 'r', 'c', 'q']
    print("Enter customer's name:")
    name = input()
    print("Enter today's date:")
    date = input()
    print()
    print("Customer name: {}".format(name))
    print("Today's date: {}\n".format(date))

    cart = ShoppingCart(name, date)
    quit = False
    
    while not quit:
        print_menu()
        user_selection = input()
        
        while(user_selection not in commands):
            user_selection = input("Choose an option:\n")
        quit = execute_menu(user_selection, cart)
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    
