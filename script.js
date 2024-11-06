const addCartButton  = document.querySelectorAll(".add-to-cart-button");

const waffleButton = document.querySelector("#waffle-button");
const vanillaBeanButton = document.querySelector("#vanilla-bean-button");
const macaronButton = document.querySelector("#macaron-button");
const tiramisuButton = document.querySelector("#tiramisu-button");
const baklavaButton = document.querySelector("#baklava-button");
const pieButton = document.querySelector("#pie-button");
const cakeButton = document.querySelector("#cake-button");
const brownieButton = document.querySelector("#brownie-button");
const pannaCottaButton = document.querySelector("#panna-cotta-button");


// Cart
const emptyCart = document.querySelector(".empty-cart");
const cartWithItems = document.querySelector(".cart-with-items")
let cartQuantity = document.querySelector("#cart-quantity");
const unorderList = document.querySelector("#unordered-list");
let listItems = document.createElement("li");
const removeItemButton = document.querySelector("#remove-item");
const removeNotification = document.querySelector(".remove-section");
const body = document.querySelector("body")

removeItemButton.addEventListener('click', () => {
   unorderList.removeChild(listItems);
   // removeItemButton.style.display = "none"
   removeNotification.style.display = "block"
})

listItems.appendChild(removeItemButton)





// accessing waffle button
let waffleCount = 0
waffleButton.addEventListener('click', () => {
    
    waffleButton.innerHTML = `<i class="fa-solid fa-circle-minus"></i> <p>${waffleCount}</p> <i class="fa-solid fa-circle-plus"></i>`;
    waffleButton.style.backgroundColor = "hsl(14, 86%, 42%)";
    waffleButton.style.color = "white";
    waffleButton.classList.add('add-cart-button-after-click');

     const waffleQuantity = waffleButton.querySelector("p");
     

     // increasing product when plus icon is clicked
     const plusWaffle = waffleButton.querySelector(".fa-circle-plus");
     const fullProductWaffle = document.querySelector("#full-product");
     const calculationOrderedList = document.querySelector(".calculation-unordered-list");
     const waffleItemNumber = document.querySelector(".number-of-items");
     let waffleTotalPrice = document.querySelector("#unordered-price-total");
     const wafflePrice = document.querySelector("#unordered-price");

   //   calculating for the cart
     waffleItemNumber.innerHTML = `${waffleCount}x`     
     wafflePrice.innerHTML = `$@${(6.50).toFixed(2)}`    
     waffleTotalPrice.innerHTML = `${(6.50 * waffleCount).toFixed(2)}`

     calculationOrderedList.append(waffleItemNumber, wafflePrice,waffleTotalPrice);
     listItems.appendChild(calculationOrderedList)
     fullProductWaffle.innerHTML = `Waffle with Berries`
     listItems.append(fullProductWaffle)
     unorderList.appendChild(listItems)
     plusWaffle.addEventListener('click', () => {
        waffleCount = waffleCount + 1;
        waffleQuantity.textContent = waffleCount

        
        emptyCart.style.display = 'none';
        cartWithItems.style.display = "block"
        
        cartQuantity.innerHTML = `${waffleCount}`
     })
     
 
     // decreasing product when minus icon is clicked
     const minusWaffle = waffleButton.querySelector(".fa-circle-minus");
     minusWaffle.addEventListener('click', () => {
        
        if(waffleCount > 0){
            waffleCount = waffleCount - 1;
        }
        
     })
})


// accessing vanilla bean button
let vanillaCount = 0
vanillaBeanButton.addEventListener('click', () => {
    
   vanillaBeanButton.innerHTML = `<i class="fa-solid fa-circle-minus"></i> <p>${vanillaCount}</p> <i class="fa-solid fa-circle-plus"></i>`;
   vanillaBeanButton.style.backgroundColor = "hsl(14, 86%, 42%)";
   vanillaBeanButton.style.color = "white";
   vanillaBeanButton.classList.add('add-cart-button-after-click');

    const vanillaQuantity = vanillaBeanButton.querySelector("p");
    

    // increasing product when plus icon is clicked
    const plusVanilla = vanillaBeanButton.querySelector(".fa-circle-plus");
    const fullProductVanilla = document.querySelector("#full-product");
    const calculationOrderedList = document.querySelector(".calculation-unordered-list");
    const vanillaItemNumber = document.querySelector(".number-of-items");
    let vanillaTotalPrice = document.querySelector("#unordered-price-total");
    const vanillaPrice = document.querySelector("#unordered-price");

  //   calculating for the cart
    vanillaItemNumber.innerHTML = `${vanillaCount}x`     
    vanillaPrice.innerHTML = `$@${(7.00).toFixed(2)}`    
    vanillaTotalPrice.innerHTML = `${(7.00 * vanillaCount).toFixed(2)}`

    calculationOrderedList.append(vanillaItemNumber, vanillaPrice,vanillaTotalPrice);
    listItems.appendChild(calculationOrderedList)
    fullProductVanilla.innerHTML = `Vanilla Bean Crème Brûlée`
    listItems.append(fullProductVanilla)
    unorderList.appendChild(listItems)
    plusVanilla.addEventListener('click', () => {
       vanillaCount = vanillaCount + 1;
       vanillaQuantity.textContent = vanillaCount

       
       emptyCart.style.display = 'none';
       cartWithItems.style.display = "block"
       
       cartQuantity.innerHTML = `${vanillaCount}`
    })
    

    // decreasing product when minus icon is clicked
    const minusVanilla = vanillaBeanButton.querySelector(".fa-circle-minus");
    minusVanilla.addEventListener('click', () => {
       
       if(vanillaCount > 0){
         vanillaCount = vanillaCount - 1;
       }
       
    })
})


// accessing macaron button
let macaronCount = 0
macaronButton.addEventListener('click', () => {
    
   macaronButton.innerHTML = `<i class="fa-solid fa-circle-minus"></i> <p>${macaronCount}</p> <i class="fa-solid fa-circle-plus"></i>`;
   macaronButton.style.backgroundColor = "hsl(14, 86%, 42%)";
   macaronButton.style.color = "white";
   macaronButton.classList.add('add-cart-button-after-click');

    const macaronQuantity = macaronButton.querySelector("p");
    

    // increasing product when plus icon is clicked
    const plusMacaron = macaronButton.querySelector(".fa-circle-plus");
    const fullProductMacaron = document.querySelector("#full-product");
    const calculationOrderedList = document.querySelector(".calculation-unordered-list");
    const macaronItemNumber = document.querySelector(".number-of-items");
    let macaronTotalPrice = document.querySelector("#unordered-price-total");
    const macaronPrice = document.querySelector("#unordered-price");

  //   calculating for the cart
    macaronItemNumber.innerHTML = `${macaronCount}x`     
    macaronPrice.innerHTML = `$@${(8.00).toFixed(2)}`    
    macaronTotalPrice.innerHTML = `${(8.00 * macaronCount).toFixed(2)}`

    fullProductMacaron.innerHTML = `Macaron Mix of Five`
    listItems.append(macaronItemNumber, macaronPrice,macaronTotalPrice,fullProductMacaron);
    unorderList.appendChild(listItems)
    plusMacaron.addEventListener('click', () => {
       macaronCount = macaronCount + 1;
       macaronQuantity.textContent = macaronCount

       
       emptyCart.style.display = 'none';
       cartWithItems.style.display = "block"
       
       cartQuantity.innerHTML = `${macaronCount}`
    })
    

    // decreasing product when minus icon is clicked
    const minusMacaron = macaronButton.querySelector(".fa-circle-minus");
    minusMacaron.addEventListener('click', () => {
       
       if(macaronCount > 0){
         macaronCount = macaronCount - 1;
       }
       
    })
})


// Popup modal 
const popup = document.querySelector(".pop-up-modal");
const confirmButton = document.querySelector(".confirm-order");
const startNewOrderButton = document.querySelector(".start-new-order");
const cancelOrderButton = document.querySelector("#cancel-order")

// Showing Popup Modal
confirmButton.addEventListener('click', () => {
   popup.style.display = "block"
 
});

// Hiding Popup Modal
cancelOrderButton.addEventListener('click', () => {
   popup.style.display = "none"
})

startNewOrderButton.addEventListener('click', () => {
   location.reload(true)
});










