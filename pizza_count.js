let orderCount = 1;

const takeOrder = (topping, crustType) => {
    orderCount = orderCount + 1;
    console.log('Order: ' + crustType +' crust pizza topped with ' + topping)
  }

let getSubTotal = (itemCount) => {
    return itemCount * 7.5;
  }

const getTax = () => {
    return getSubTotal(orderCount) * 0.06;
  }

let getTotal = () => {
      return getSubTotal(orderCount) + getTax()
    }

takeOrder('bacon', 'thin');
takeOrder('mozzarella', 'grand');
takeOrder('pepperoni', 'thin');

console.log(getSubTotal(orderCount))
console.log(getTotal())
