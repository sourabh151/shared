const menu = [
  { name: 'Margherita', price: 9 },
  { name: 'Pepperoni', price: 11 },
  { name: 'Vegetarian', price: 10 }
];

const orderQueue: { id: number, pizza: { name: string, price: number }, status: string }[] = [];
let nextOrderId = 1;
let cashInRegister = 100;

function addPizza(newPizza: { name: string, price: number }) {
  menu.push(newPizza)
}

function placeOrder(pizza: string): { id: number, pizza: { name: string, price: number }, status: string } {
  const found = menu.find(item => item.name === pizza);
  if (!found) {
    throw new Error("no pizza by that name")
  }
  cashInRegister += found.price || 0;
  const newOrder = { id: nextOrderId++, pizza: found, status: "ordered" }
  orderQueue.push(newOrder)
  return newOrder;
}

function completeOrder(orderId: number): { id: number, pizza: { name: string, price: number }, status: string } {
  const order = orderQueue.find(order => order.id === orderId);
  if (!order) {
    throw new Error("no order with that id");
  }
  order.status = "completed"
  return order;
}

// Example usage:
addPizza({ name: "chicken BBQ Pizza", price: 12 });
addPizza({ name: "mushroom mania", price: 12 });
addPizza({ name: "onion garlic salsa", price: 11 });
const newOrder = placeOrder("chicken BBQ Pizza")
console.log(newOrder);
setTimeout(() => {
  console.log(completeOrder(newOrder.id));
}, 5000);
