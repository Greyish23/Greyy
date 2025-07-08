/** Furniture E-commerce JavaScript **/

// Hamburger Menu Toggle 
const hamburger = document.getElementById('hamburger-menu'); 
const sideNav = document.getElementById('side-nav');

hamburger.addEventListener('click', () => { 
    sideNav.style.right = sideNav.style.right === '0px' ? '-250px' : '0px'; 
    hamburger.classList.toggle('active'); });

// Shopping Cart Sidebar Toggle 
const cartIcon = document.querySelector('.cart-icon'); 
const cartSidebar = document.getElementById('cart-sidebar');

cartIcon.addEventListener('click', () => { 
    cartSidebar.style.right = cartSidebar.style.right === '0px' ? '-300px' : '0px'; });

// Add to Cart Buttons 
const addToCartButtons = document.querySelectorAll('.add-to-cart'); 
const cartCount = document.querySelector('.cart-count'); 
const cartItemsContainer = document.querySelector('.cart-items');

let cartCountValue = 0;

addToCartButtons.forEach(button => { 
    button.addEventListener('click', () => { 
        cartCountValue++; 
        cartCount.textContent = cartCountValue;

    const productItem = button.closest('.product-item');
    const productName = productItem.querySelector('h3').textContent;
    const productPrice = productItem.querySelector('.price').textContent;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <p>${productName} - ${productPrice}</p>
    `;

    cartItemsContainer.appendChild(cartItem);
});

});

// Checkout Modal Toggle 
const checkoutBtn = document.querySelector('.checkout-btn'); 
const checkoutModal = document.getElementById('checkout-modal');

checkoutBtn.addEventListener('click', () => { 
    checkoutModal.style.display = 'flex'; 
});

checkoutModal.addEventListener('click', (e) => { 
    if (e.target === checkoutModal) { 
        checkoutModal.style.display = 'none'; } });

// Hamburger Animation (Optional) 
hamburger.addEventListener('click', () => { 
    hamburger.classList.toggle('open'); 
});