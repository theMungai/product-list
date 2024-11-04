const addCartButton  = document.querySelectorAll(".add-to-cart-button");
let count = 0

addCartButton.forEach(button => {
    button.addEventListener('click', () => {
        button.innerHTML = `<i class="fa-solid fa-circle-minus"></i> <p>${count}</p> <i class="fa-solid fa-circle-plus"></i>`
        button.style.backgroundColor = "hsl(14, 86%, 42%)";
        button.style.color = "white";
        button.classList.add('add-cart-button-after-click');


        // accessing plus icon to open cart
        
        const plusIcon = button.querySelector(".fa-circle-plus");
        plusIcon.addEventListener('click', () => {

            if(plusIcon.classList.contains("fa-circle-plus")){
                count++
            }
            const itemQuantity = button.querySelector("p");
            itemQuantity.textContent = count

        })


        // accessing minus icon to reduce products in the cart

        const minusIcon = button.querySelector(".fa-circle-minus");
        minusIcon.addEventListener('click', () => {

            if(minusIcon.classList.contains("fa-circle-minus") && count > 0){
                count--
            }
            const itemQuantity = button.querySelector("p");
            itemQuantity.textContent = count
        })


    });

    
})





