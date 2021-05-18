/*

This is how an item object should look like

{
      id: "001-beetroot", <- the item id matches the icon name in the assets/icons folder
      name: "beetroot",
      price: 0.35 <- You can come up with your own prices
    }

*/

// Description
// In this exercise we explore a common scenario in eCommerce, adding and removing items from the cart, and calculating the total.

// Deliverables
// - A user can view a selection of items in the store
// - From the store, a user can add an item to their cart
// - From the cart, a user can view and adjust the number of items in their cart
//     - If an item's quantity equals zero it is removed from the cart
// - A user can view the current total in their cart

// Instructions
// - Use this template as a starting point => https://codesandbox.io/s/js-exercise-greengrocer-template-grqi6
// - Create a state object
// - Create action functions that update state
// - Create render functions that read from state

// Tips
// - Start with the logic first, use console.log(state) to check your logic is working; when the logic is working as expected move onto styling
// - Taking HTML semantics into consideration, use a button when an action is happening on the same page

// <ul class="item-list cart--item-list"></ul>
// get above with query selctor
// append below to it

let state = {
  products: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.55,
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.15,
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.25,
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.95,
    },
    {
      id: "005-avocado",
      name: "avacado",
      price: 1.5,
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.75,
    },
    {
      id: "007-bell-pepper",
      name: "bell-pepper",
      price: 0.95,
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.25,
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.55,
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.85,
    },
  ],
  cart: [
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.15,
      quantity: 1,
    },
  ],
}

console.log("this is our state :", state)

// input:  state food objects
// action: rendering each food item
// output: nothing

function makeStore(food) {
  const storeItemEl = document.querySelector(".store--item-list")
  const storeItemListEl = document.createElement("li")

  const storeItemIcon = document.createElement("div")
  storeItemIcon.setAttribute("class", "store--item-icon")

  const itemEl = document.createElement("img")
  itemEl.setAttribute("src", `assets/icons/${food.id}.svg`)
  itemEl.setAttribute("alt", `${food.name}`)

  storeItemIcon.append(itemEl)

  const addToCartBtnEl = document.createElement("button")
  addToCartBtnEl.innerText = "Add to cart"

  addToCartBtnEl.addEventListener("click", function (food) {
    // const addItem = state.products[food]
    // IN PROGRESSS << START HEREEEEE
    const addItem = {
      id: `food.id`,
      name: `${food.name}`,
      price: `food.price`,
      quantity: 1,
    }
    state.cart.push(addItem)
    makeCartItem(food)
    console.log("HELLO")
    console.log(state)
  })

  storeItemListEl.append(storeItemIcon, addToCartBtnEl)
  storeItemEl.append(storeItemListEl)
}

function makeStoreItems(foods) {
  for (const food of foods) {
    makeStore(food)
  }
}

function makeCartItem() {
  const cartList = document.querySelector(".cart--item-list")

  const liEl = document.createElement("li")

  const imgEl = document.createElement("img")
  imgEl.setAttribute("class", "cart--item-icon")
  imgEl.setAttribute("src", `assets/icons/${state.cart[0].id}.svg`)
  imgEl.setAttribute("alt", `${state.cart[0].name}`)

  const pEl = document.createElement("p")
  pEl.innerText = state.cart[0].name

  const quantityButtonRemove = document.createElement("button")
  quantityButtonRemove.setAttribute("class", "quantity-btn remove-btn center")
  quantityButtonRemove.innerText = "-"

  quantityButtonRemove.addEventListener("click", function () {
    state.cart[0].quantity--
    spanEl.innerText = state.cart[0].quantity
  })

  const spanEl = document.createElement("span")
  spanEl.setAttribute("class", "quantity-text center")
  spanEl.innerText = state.cart[0].quantity

  const quantityButtonAdd = document.createElement("button")
  quantityButtonAdd.setAttribute("class", "quantity-btn add-btn center")
  quantityButtonAdd.innerText = "+"

  quantityButtonAdd.addEventListener("click", function () {
    state.cart[0].quantity++
    spanEl.innerText = state.cart[0].quantity
  })

  liEl.append(imgEl, pEl, quantityButtonRemove, spanEl, quantityButtonAdd)
  cartList.append(liEl)
}

// input:   cart of objects
// action:  take each object and make one list item
// output:  nothing
function putItemsInCart(cartFoods) {
  for (const food of cartFoods) makeCartItem()
}

// calling functions
makeCartItem()
// makeStore()
makeStoreItems(state.products)
putItemsInCart(state.cart)
