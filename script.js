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
let cartQuantity = document.querySelector("#cart-quantity")



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
     plusWaffle.addEventListener('click', () => {
        waffleCount = waffleCount + 1;
        waffleQuantity.textContent = waffleCount

        emptyCart.style.display = 'none'
        cartQuantity.innerHTML = `${waffleCount}`
        cartQuantity = cartQuantity + 1;
        cartQuantity.textContent = waffleCount
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
let vanillaCount = 0;
vanillaBeanButton.addEventListener('click', () => {
    
    vanillaBeanButton.innerHTML = `<i class="fa-solid fa-circle-minus"></i> <p>${vanillaCount}</p> <i class="fa-solid fa-circle-plus"></i>`
    vanillaBeanButton.style.backgroundColor = "hsl(14, 86%, 42%)";
    vanillaBeanButton.style.color = "white";
    vanillaBeanButton.classList.add('add-cart-button-after-click');
    
    // increasing product when plus icon is clicked
    const vanillaQuantity= vanillaBeanButton.querySelector("p");
    const plusVanilla = vanillaBeanButton.querySelector(".fa-circle-plus");
    plusVanilla.addEventListener('click', () => {
       vanillaCount = vanillaCount + 1
       vanillaQuantity.textContent = vanillaCount
       cartQuantity.innerHTML = `${vanillaCount}`
        cartQuantity = cartQuantity + 1;
        cartQuantity.textContent = vanillaCount
    })
    

    // decreasing product when minus icon is clicked
    const minusVanilla = vanillaBeanButton.querySelector(".fa-circle-minus");
    minusVanilla.addEventListener('click', () => {

       if(vanillaCount > 0){
           vanillaCount = vanillaCount - 1
       }
    })


})








