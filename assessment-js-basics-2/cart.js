///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

function cartCb(sum, num) {
    return sum + num.price
}

const summedPrice = cart.reduce(cartCb, 0)  // second argument sets an initial value? even though third arg for reduce should be index...
console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

function calcFinalPrice(cartTotal, couponValue, tax) {
    return (cartTotal + cartTotal * tax) - couponValue
}


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    Customer properties would be: bill(number, total cost of order), name(string), couponCode(string), order(string)
    I think it's hard to determine exactly what we are looking for, but when I think of an online checkout cart, the important parts would be an identifier, total cost, items being ordered,
    and last would be the coupon code. I'm just making a stab at that one, as most stores barely utilize the feature.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    name: 'Fred',
    order: 'Cheesesteak',
    coupon: 'A5Y3Y',
    total: 13.57
}