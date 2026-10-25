// Practice: solve the comment the trainer left in 04-arrays.js using reduce 
// comment: display products having price > 20000 

const products = [
  {
    "id": 1,
    "name": "Oppo mobile A10",
    "price": 20000,
    "category": "mobiles"
  },
  {
    "id": 2,
    "name": "Samsung Galaxy M14",
    "price": 14999,
    "category": "mobiles"
  },
  {
    "id": 3,
    "name": "Redmi Note 12",
    "price": 16999,
    "category": "mobiles"
  },
  {
    "id": 4,
    "name": "Realme Narzo 60",
    "price": 17999,
    "category": "mobiles"
  },
  {
    "id": 5,
    "name": "Vivo T2x",
    "price": 12999,
    "category": "mobiles"
  },
  {
    "id": 6,
    "name": "OnePlus Nord CE 3 Lite",
    "price": 19999,
    "category": "mobiles"
  },
  {
    "id": 7,
    "name": "PCO X5 Pro",
    "price": 22999,
    "category": "mobiles"
  },
  {
    "id": 8,
    "name": "Moto G54",
    "price": 13999,
    "category": "mobiles"
  },
  {
    "id": 9,
    "name": "iQOO Z7s",
    "price": 18999,
    "category": "mobiles"
  },
  {
    "id": 10,
    "name": "Infinix Zero 30",
    "price": 21999,
    "category": "mobiles"
  }
]

// reduce can do the job of filter : keep pushing matching elements in an accumulator array 
const costlyProducts = products.reduce((acc, p) => {
  if (p.price > 20000) acc.push(p)
  return acc
}, [])

costlyProducts.length > 0 ? costlyProducts.forEach(p => console.log(p))
  : console.log('No matching products')

// reduce can also count them 
const costlyCount = products.reduce((cnt, p) => (p.price > 20000 ? cnt + 1 : cnt), 0)
console.log(`Products above 20000 : ${costlyCount}`)

// reduce can also total just those prices (same idea as the trainer's sum, but only above 20000) 
const costlyTotal = products.reduce((sum, p) => (p.price > 20000 ? sum + p.price : sum), 0)
console.log(`Total price of products above 20000: ${costlyTotal}`)

// reduce can also find the maximum : keep whichever price is larger so far 
// comment solved from 04-arrays.js : Compute the max price of the products in the array. 
const maxPrice = products.reduce((max, p) => (p.price > max ? p.price : max), products[0].price)
console.log(`Max price: ${maxPrice}`)

// same reduce, keeping the whole product instead of just the number 
const maxProduct = products.reduce((top, p) => (p.price > top.price ? p : top), products[0])
console.log(`Product with max price: ${maxProduct.name} , price= ${maxProduct.price}`)
