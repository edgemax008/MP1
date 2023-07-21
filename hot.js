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
        tag: '420 kush',
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
    console.log("The product clicked is", product);
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
}

onLoadCartNumbers();