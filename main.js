let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Baphomet',
        tag: 'baphomet',
        price: 500,
        inCart: 0
    },
    {
        name: 'Khufra',
        tag: 'khufra',
        price: 500,
        inCart: 0
    },
    {
        name: '420 Kush',
        tag: '420kush',
        price: 500,
        inCart: 0
    },
    {
        name: 'Saitama',
        tag: 'saitama',
        price: 500,
        inCart: 0
    },
    {
        name: 'Eimi Fukada',
        tag: 'eimi fukada',
        price: 480,
        inCart: 0
    },
    {
        name: 'Daryl Dixon',
        tag: 'daryl dixon',
        price: 480,
        inCart: 0
    },
    {
        name: 'Negan TWD',
        tag: 'negan twd',
        price: 480,
        inCart: 0
    },
    {
        name: 'Emperor Kogie',
        tag: 'emperor kogie',
        price: 480,
        inCart: 0
    }
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
        document.querySelector('.carte span').textContent = productNumbers;
    }
}

function cartNumbers(product) { 
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.carte span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.carte span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag] : product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    //console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost );

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }

    
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="./image/cart/${item.tag}.png">
                <span>${item.name}</span>
            </div>
            <div class="price">₱${item.price}.00</div>
            <div class="quantity">
                <ion-icon name="arrow-back-circle"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon name="arrow-forward-circle"></ion-icon>
            </div>
            <div class="total">
                ₱${item.inCart * item.price}.00
            </div>
            `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Cart Total:
                </h4>
                <h4 class="basketTotal">
                ₱${cartCost}.00
                </h4>
        `
    }
}

onLoadCartNumbers();
displayCart();