const addCartButton  = document.querySelectorAll(".add-to-cart-button")

addCartButton.forEach(button => {
    button.addEventListener('click', () => {
        button.innerHTML = `<i class="fa-solid fa-circle-minus"></i>
        <span> 0 </span>
        <i class="fa-solid fa-circle-plus"></i>`
        button.style.backgroundColor = "hsl(14, 86%, 42%)";
        button.style.color = "white";
        button.classList.add('add-cart-button-after-click');


        // accessing plus icon to open cart
        
        const plusIcon = button.querySelector(".fa-circle-plus");
        plusIcon.addEventListener('click', () => {
            let itemQuantity = button.querySelector("span");
            let body = document.querySelector("body");
            let count = 0;
            itemQuantity.innerHTML =  3;
            console.log("clicked");
            body.style.backgroundColor = "black"
            body.style.color = "white"

        })


        // accessing minus icon to reduce products in the cart

        const minusIcon = button.querySelector(".fa-circle-minus");
        let body = document.querySelector("body");
        minusIcon.addEventListener('click', () => {
            body.style.backgroundColor = "white"
            body.style.color = "green"
        })

    });

    
})





