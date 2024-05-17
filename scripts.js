document.getElementById('pizza-btn').addEventListener('click', function() {
    showSection('pizza-section');
});
document.getElementById('bebida-btn').addEventListener('click', function() {
    showSection('bebida-section');
});
document.getElementById('sobremesa-btn').addEventListener('click', function() {
    showSection('sobremesa-section');
});

function showSection(sectionClass) {
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('active');
    });
    document.querySelector('.' + sectionClass).classList.remove('hidden');
    document.querySelector('.' + sectionClass).classList.add('active');
    
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(button => button.classList.remove('active'));
    
    if (sectionClass === 'pizza-section') {
        document.getElementById('pizza-btn').classList.add('active');
    } else if (sectionClass === 'bebida-section') {
        document.getElementById('bebida-btn').classList.add('active');
    } else if (sectionClass === 'sobremesa-section') {
        document.getElementById('sobremesa-btn').classList.add('active');
    }
}

let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    console.log(cart);
    alert(item + ' adicionado ao carrinho!');
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(({ item, price }, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('menu-item');
        cartItem.innerHTML = `
            <div class="item-details">
                <p>${item}</p>
                <p>R$ ${price},00</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">-</button>
        `;
        cartItems.appendChild(cartItem);
        total += price;
    });
    document.getElementById('total-price').innerText = `Total: R$ ${total},00`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    alert('Compra finalizada!');
    cart = [];
    updateCart();
    showSection('pizza-section');
}
