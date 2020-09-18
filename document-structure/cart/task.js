const addButtons = Array.from(document.getElementsByClassName("product__add"));
let cart = document.getElementsByClassName("cart__products")[0];
let productsInCart = [];

addButtons.forEach(addButton => {
    addButton.addEventListener('click', event => {
        const product = event.currentTarget.closest('.product');
        const productId = product.dataset.id;
        const productCount = product.querySelector('.product__quantity-value').innerText;
        
        if (! productsInCart.includes(productId)) {
            const productImg = product.querySelector('.product__image').getAttribute('src');
            cart.insertAdjacentHTML('afterbegin',
                `<div class="cart__product" data-id="${productId}">
                    <img class="cart__product-image" src=${productImg}>
                    <div class="cart__product-count">${Number(productCount)}</div>
                </div>`);
            productsInCart.push(productId);
        } else {
            let selectedProducts = Array.from(cart.querySelectorAll('.cart__product'));
            let neededProduct = selectedProducts.find((selectedProduct) => {
                        if (selectedProduct.dataset.id == productId)
                            return true;
                    });
            if (neededProduct) {
                let neededProductCount = neededProduct.querySelector('.cart__product-count');
                neededProductCount.innerText = Number(neededProductCount.innerText) + Number(productCount);
            }
        }
    })
});

const incControls = Array.from(document.getElementsByClassName("product__quantity-control_inc"));

incControls.forEach(incControl => {
    incControl.addEventListener('click', event => {
        incControl.parentElement.querySelector(".product__quantity-value").textContent ++;
    })
});

const decControls = Array.from(document.getElementsByClassName("product__quantity-control_dec"));

decControls.forEach(decControl => {
    decControl.addEventListener('click', event => {
        let count = decControl.parentElement.querySelector(".product__quantity-value");
        if (Number(count.textContent) == 1) 
            alert('Нельзя добавить в корзину меньше одного товара');
        else 
            count.textContent --;
    })
});