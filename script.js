document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Restore Header with Mega Menus & Dark Mode Toggle ---
    const headerHTML = `
        <div class="header-container">
            <!-- Left: Logo & Brand -->
            <a href="index.html" class="brand">
                <div class="logo">
                    <i class="fa-solid fa-bag-shopping"></i>
                </div>
                <span class="brand-name">Tap to Buy</span>
            </a>

            <!-- Mobile Hamburger -->
            <button class="hamburger" id="hamburger-btn" aria-label="Toggle menu">
                <i class="fa-solid fa-bars"></i>
            </button>

            <!-- Center: Navigation -->
            <nav class="nav" id="main-nav">
                <ul class="nav-list">
                    <!-- Men -->
                    <li class="nav-item">
                        <a href="men.html" class="nav-link">Men</a>
                        <div class="mega-menu">
                            <div class="mega-menu-grid">
                                <div class="mega-column">
                                    <h4>Topwear</h4>
                                    <ul>
                                        <li><a href="products.html?category=tshirts">T-Shirts</a></li>
                                        <li><a href="products.html?category=casualshirts">Casual Shirts</a></li>
                                        <li><a href="products.html?category=formalshirts">Formal Shirts</a></li>
                                        <li><a href="products.html?category=jackets">Jackets</a></li>
                                    </ul>
                                </div>
                                <div class="mega-column">
                                    <h4>Bottomwear</h4>
                                    <ul>
                                        <li><a href="products.html?category=jeans">Jeans</a></li>
                                        <li><a href="products.html?category=casualtrousers">Casual Trousers</a></li>
                                        <li><a href="products.html?category=shorts">Shorts</a></li>
                                    </ul>
                                </div>
                                <div class="mega-column">
                                    <h4>Footwear</h4>
                                    <ul>
                                        <li><a href="products.html?category=sneakers">Sneakers</a></li>
                                        <li><a href="products.html?category=formalshoes">Formal Shoes</a></li>
                                    </ul>
                                </div>
                                <div class="mega-column">
                                    <h4>Accessories</h4>
                                    <ul>
                                        <li><a href="products.html?category=watches">Watches</a></li>
                                        <li><a href="products.html?category=belts">Belts</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                    <!-- Women -->
                    <li class="nav-item">
                        <a href="women.html" class="nav-link">Women</a>
                        <div class="mega-menu">
                            <div class="mega-menu-grid">
                                <div class="mega-column">
                                    <h4>Indian & Fusion Wear</h4>
                                    <ul>
                                        <li><a href="products.html?category=kurtas">Kurtas & Suits</a></li>
                                        <li><a href="products.html?category=sarees">Sarees</a></li>
                                    </ul>
                                </div>
                                <div class="mega-column">
                                    <h4>Western Wear</h4>
                                    <ul>
                                        <li><a href="products.html?category=dresses">Dresses</a></li>
                                        <li><a href="products.html?category=tops">Tops</a></li>
                                    </ul>
                                </div>
                                <div class="mega-column">
                                    <h4>Footwear</h4>
                                    <ul>
                                        <li><a href="products.html?category=flats">Flats</a></li>
                                        <li><a href="products.html?category=heels">Heels</a></li>
                                    </ul>
                                </div>
                                <div class="mega-column">
                                    <h4>Beauty & Care</h4>
                                    <ul>
                                        <li><a href="products.html?category=makeup">Makeup</a></li>
                                        <li><a href="products.html?category=skincare">Skincare</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <!-- Kids -->
                    <li class="nav-item">
                        <a href="kids.html" class="nav-link">Kids</a>
                        <div class="mega-menu">
                            <div class="mega-menu-grid">
                                <div class="mega-column">
                                    <h4>Boys Clothing</h4>
                                    <ul>
                                        <li><a href="products.html?category=tshirts">T-Shirts</a></li>
                                        <li><a href="products.html?category=jeans">Jeans</a></li>
                                    </ul>
                                </div>
                                <div class="mega-column">
                                    <h4>Girls Clothing</h4>
                                    <ul>
                                        <li><a href="products.html?category=dresses">Dresses</a></li>
                                        <li><a href="products.html?category=tops">Tops</a></li>
                                    </ul>
                                </div>
                                <div class="mega-column">
                                    <h4>Toys</h4>
                                    <ul>
                                        <li><a href="products.html?category=learning">Learning</a></li>
                                        <li><a href="products.html?category=actionfigures">Action Figures</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <!-- Home -->
                    <li class="nav-item">
                        <a href="home.html" class="nav-link">Home</a>
                        <div class="mega-menu">
                            <div class="mega-menu-grid">
                                <div class="mega-column">
                                    <h4>Furnishing</h4>
                                    <ul>
                                        <li><a href="products.html?category=bedsheets">Bedsheets</a></li>
                                        <li><a href="products.html?category=blankets">Blankets</a></li>
                                    </ul>
                                </div>
                                <div class="mega-column">
                                    <h4>Decor</h4>
                                    <ul>
                                        <li><a href="products.html?category=plants">Plants</a></li>
                                        <li><a href="products.html?category=clocks">Clocks</a></li>
                                    </ul>
                                </div>
                                <div class="mega-column">
                                    <h4>Lighting</h4>
                                    <ul>
                                        <li><a href="products.html?category=lamps">Lamps</a></li>
                                        <li><a href="products.html?category=smartlighting">Smart Lighting</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <!-- Beauty -->
                    <li class="nav-item">
                        <a href="beauty.html" class="nav-link">Beauty</a>
                        <div class="mega-menu">
                            <div class="mega-menu-grid">
                                <div class="mega-column">
                                    <h4>Makeup</h4>
                                    <ul>
                                        <li><a href="products.html?category=lipstick">Lipstick</a></li>
                                        <li><a href="products.html?category=foundation">Foundation</a></li>
                                    </ul>
                                </div>
                                <div class="mega-column">
                                    <h4>Skincare</h4>
                                    <ul>
                                        <li><a href="products.html?category=moisturizers">Moisturizers</a></li>
                                        <li><a href="products.html?category=sunscreens">Sunscreens</a></li>
                                    </ul>
                                </div>
                                <div class="mega-column">
                                    <h4>Haircare</h4>
                                    <ul>
                                        <li><a href="products.html?category=shampoo">Shampoo</a></li>
                                        <li><a href="products.html?category=conditioner">Conditioner</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <!-- Genz -->
                    <li class="nav-item">
                        <a href="genz.html" class="nav-link">Genz</a>
                        <div class="mega-menu">
                            <div class="mega-menu-grid">
                                <div class="mega-column">
                                    <h4>Budget Fashion</h4>
                                    <ul>
                                        <li><a href="products.html?category=under499">Under ₹499</a></li>
                                        <li><a href="products.html?category=under999">Under ₹999</a></li>
                                    </ul>
                                </div>
                                <div class="mega-column">
                                    <h4>Trending Now</h4>
                                    <ul>
                                        <li><a href="products.html?category=oversizedtees">Oversized Tees</a></li>
                                        <li><a href="products.html?category=cargopants">Cargo Pants</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>

            <!-- Right: Search & Icons -->
            <div class="header-actions">
                <div class="search-container">
                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
                    <input type="text" class="search-input" id="search-input" placeholder="Search products...">
                </div>

                <div class="icons-group">
                    <div class="icon-item" id="theme-toggle" style="cursor: pointer;">
                        <div class="cart-wrapper">
                            <i class="fa-solid fa-moon"></i>
                        </div>
                        <span class="icon-text">Theme</span>
                    </div>

                    <!-- Profile Dropdown -->
                    <div class="icon-item profile-dropdown-container" id="profile-container">
                        <div class="icon-link" id="profile-trigger" style="cursor: pointer;">
                            <div class="cart-wrapper">
                                <i class="fa-regular fa-user"></i>
                            </div>
                            <span class="icon-text">Profile</span>
                        </div>
                        
                        <div class="profile-dropdown" id="profile-dropdown">
                            <div class="dropdown-header">
                                <div class="welcome-text" id="profile-welcome">Welcome</div>
                                <div class="user-name" id="profile-name" style="display: none;">Hello, User</div>
                                <button class="btn-login-signup" id="btn-login">Login / Sign Up</button>
                            </div>
                            <ul class="dropdown-menu-list">
                                <li><a href="orders.html"><i class="fa-solid fa-box-open"></i> Orders</a></li>
                                <li><a href="wishlist.html"><i class="fa-regular fa-heart"></i> Wishlist</a></li>
                                <li><a href="giftcards.html"><i class="fa-solid fa-gift"></i> Gift Cards</a></li>
                                <li><a href="contact.html"><i class="fa-solid fa-headset"></i> Contact Support</a></li>
                                <li><a href="insider.html"><i class="fa-solid fa-crown"></i> Tap to Buy Insider</a></li>
                                <hr>
                                <li><a href="coupons.html"><i class="fa-solid fa-ticket"></i> Coupons</a></li>
                                <li><a href="cards.html"><i class="fa-regular fa-credit-card"></i> Saved Cards</a></li>
                                <li><a href="address.html"><i class="fa-solid fa-location-dot"></i> Saved Addresses</a></li>
                                <hr class="logout-divider" style="display: none;">
                                <li class="logout-item" style="display: none;"><a href="#" id="btn-logout"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="icon-item">
                        <a href="wishlist.html" class="icon-link">
                            <div class="cart-wrapper">
                                <i class="fa-regular fa-heart"></i>
                                <span class="cart-badge" id="wishlist-counter">0</span>
                            </div>
                            <span class="icon-text">Wishlist</span>
                        </a>
                    </div>
                    <div class="icon-item">
                        <a href="cart.html" class="icon-link">
                            <div class="cart-wrapper">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span class="cart-badge" id="cart-counter">0</span>
                            </div>
                            <span class="icon-text">Cart</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    const headerElement = document.querySelector('.header');
    if (headerElement) {
        headerElement.innerHTML = headerHTML;
    }

    // --- 1.2 Dark Mode Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
    
    // Check saved theme
    const savedTheme = localStorage.getItem('tapTheme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeIcon) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('tapTheme', isDark ? 'dark' : 'light');
            
            if (isDark) {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            } else {
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            }
        });
    }

    // --- 1.3 Profile Dropdown & Login Logic ---
    const profileTrigger = document.getElementById('profile-trigger');
    const profileDropdown = document.getElementById('profile-dropdown');
    const btnLogin = document.getElementById('btn-login');
    const btnLogout = document.getElementById('btn-logout');
    const profileWelcome = document.getElementById('profile-welcome');
    const profileName = document.getElementById('profile-name');
    const logoutDivider = document.querySelector('.logout-divider');
    const logoutItem = document.querySelector('.logout-item');

    // Toggle dropdown on mobile click
    if (profileTrigger && profileDropdown) {
        profileTrigger.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                profileDropdown.classList.toggle('show');
            }
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!profileTrigger.contains(e.target) && !profileDropdown.contains(e.target)) {
                profileDropdown.classList.remove('show');
            }
        });
    }

    // Function to update UI based on login state
    const updateProfileUI = () => {
        const isLoggedIn = localStorage.getItem('tapUser') === 'loggedIn';
        
        if (isLoggedIn) {
            if(profileWelcome) profileWelcome.style.display = 'none';
            if(profileName) profileName.style.display = 'block';
            if(btnLogin) btnLogin.style.display = 'none';
            if(logoutDivider) logoutDivider.style.display = 'block';
            if(logoutItem) logoutItem.style.display = 'block';
        } else {
            if(profileWelcome) profileWelcome.style.display = 'block';
            if(profileName) profileName.style.display = 'none';
            if(btnLogin) btnLogin.style.display = 'block';
            if(logoutDivider) logoutDivider.style.display = 'none';
            if(logoutItem) logoutItem.style.display = 'none';
        }
    };

    // Initial check
    updateProfileUI();

    // Login Action
    if (btnLogin) {
        btnLogin.addEventListener('click', (e) => {
            e.preventDefault();
            // Simulate Login
            localStorage.setItem('tapUser', 'loggedIn');
            
            // Visual feedback
            btnLogin.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Logging in...';
            setTimeout(() => {
                updateProfileUI();
            }, 800);
        });
    }

    // Logout Action
    if (btnLogout) {
        btnLogout.addEventListener('click', (e) => {
            e.preventDefault();
            // Simulate Logout
            localStorage.removeItem('tapUser');
            updateProfileUI();
            btnLogin.innerHTML = 'Login / Sign Up'; // Reset button text
            if (profileDropdown) profileDropdown.classList.remove('show'); // Hide dropdown on mobile if open
        });
    }

    // --- 1.5 Restore Professional Footer ---
    const footerHTML = `
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-grid">
                    <!-- Column 1 -->
                    <div class="footer-col">
                        <h4>Online Shopping</h4>
                        <ul>
                            <li><a href="men.html">Men</a></li>
                            <li><a href="women.html">Women</a></li>
                            <li><a href="kids.html">Kids</a></li>
                            <li><a href="home.html">Home</a></li>
                            <li><a href="beauty.html">Beauty</a></li>
                            <li><a href="genz.html">Genz</a></li>
                            <li><a href="#">Gift Cards</a></li>
                            <li><a href="#">Insider Program</a></li>
                        </ul>
                    </div>

                    <!-- Column 2 -->
                    <div class="footer-col">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Site Map</a></li>
                            <li><a href="#">Corporate Info</a></li>
                            <li><a href="#">Partner Services</a></li>
                            <li><a href="#">Global Shopping</a></li>
                        </ul>
                    </div>

                    <!-- Column 3 -->
                    <div class="footer-col">
                        <h4>Customer Policies</h4>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Track Orders</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Cancellation</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Grievance Officer</a></li>
                        </ul>
                    </div>

                    <!-- Column 4 -->
                    <div class="footer-col">
                        <h4>Experience Tap to Buy</h4>
                        <p style="color: #9ca3af; font-size: 0.9rem; margin-bottom: 10px;">Download our mobile app</p>
                        <div class="app-store-btns">
                            <a href="#" class="app-btn"><i class="fa-brands fa-google-play"></i> Google Play</a>
                            <a href="#" class="app-btn"><i class="fa-brands fa-apple"></i> App Store</a>
                        </div>
                    </div>

                    <!-- Column 5 -->
                    <div class="footer-col">
                        <h4>Keep in Touch</h4>
                        <div class="social-icons">
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>

                <!-- Trust Strip -->
                <div class="trust-strip">
                    <div class="trust-item">
                        <i class="fa-solid fa-medal"></i>
                        <div>
                            <strong>100% Original</strong>
                            <span>Products guarantee for all brands</span>
                        </div>
                    </div>
                    <div class="trust-item">
                        <i class="fa-solid fa-arrow-rotate-left"></i>
                        <div>
                            <strong>Easy Returns</strong>
                            <span>Within 14 days of receiving order</span>
                        </div>
                    </div>
                    <div class="trust-item">
                        <i class="fa-solid fa-truck-fast"></i>
                        <div>
                            <strong>Express Shipping</strong>
                            <span>Free delivery on orders over ₹999</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                &copy; 2026 Tap to Buy. All rights reserved.
            </div>
        </footer>
    `;
    const oldFooter = document.querySelector('.footer');
    if (oldFooter) {
        oldFooter.outerHTML = footerHTML;
    }


    // --- 2. State Management (Refactored for Quantities) ---
    // Handle data migration from string IDs to objects if needed
    let rawCart = JSON.parse(localStorage.getItem('tapCart')) || [];
    let cart = rawCart.map(item => typeof item === 'string' ? { id: item, qty: 1 } : item);
    
    let wishlist = JSON.parse(localStorage.getItem('tapWishlist')) || [];

    const saveState = () => {
        localStorage.setItem('tapCart', JSON.stringify(cart));
        localStorage.setItem('tapWishlist', JSON.stringify(wishlist));
        updateCounters();
    };

    const updateCounters = () => {
        const cartCounter = document.getElementById('cart-counter');
        const wishCounter = document.getElementById('wishlist-counter');
        if (cartCounter) {
            const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
            cartCounter.textContent = totalQty;
            cartCounter.style.transform = 'scale(1.5)';
            setTimeout(() => cartCounter.style.transform = 'scale(1)', 200);
        }
        if (wishCounter) {
            wishCounter.textContent = wishlist.length;
            wishCounter.style.transform = 'scale(1.5)';
            setTimeout(() => wishCounter.style.transform = 'scale(1)', 200);
        }
    };

    window.addToCart = (id, quantity = 1, btnElement = null) => {
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.qty += quantity;
        } else {
            cart.push({ id, qty: quantity });
        }
        saveState();
        
        // UI Feedback
        const targetBtn = btnElement || window.event?.target;
        if (targetBtn && targetBtn.tagName === 'BUTTON') {
            const originalHTML = targetBtn.innerHTML;
            const originalBg = targetBtn.style.backgroundColor;
            targetBtn.innerHTML = '<i class="fa-solid fa-check"></i> Added';
            targetBtn.style.backgroundColor = '#10b981';
            setTimeout(() => {
                targetBtn.innerHTML = originalHTML;
                targetBtn.style.backgroundColor = originalBg;
            }, 1500);
        }
    };

    window.updateCartQuantity = (id, newQty) => {
        if (newQty < 1) newQty = 1;
        const item = cart.find(i => i.id === id);
        if (item) {
            item.qty = newQty;
            saveState();
            if(window.renderCart) window.renderCart();
        }
    };

    window.addToWishlist = (id) => {
        if (!wishlist.includes(id)) {
            wishlist.push(id);
            saveState();
            const targetBtn = window.event?.target;
            if (targetBtn && targetBtn.tagName === 'BUTTON') {
                targetBtn.innerHTML = '<i class="fa-solid fa-heart" style="color:red;"></i> Added';
                setTimeout(() => {
                    targetBtn.innerHTML = '<i class="fa-regular fa-heart"></i> Add to Wishlist';
                }, 1500);
            }
        }
    };

    window.removeFromCart = (id) => {
        cart = cart.filter(item => item.id !== id);
        saveState();
        if(window.renderCart) window.renderCart();
    };

    window.removeFromWishlist = (id) => {
        wishlist = wishlist.filter(itemId => itemId !== id);
        saveState();
        if(window.renderWishlist) window.renderWishlist();
    };

    updateCounters();


    // --- 3. UI Helpers ---
    const createProductCard = (product) => `
        <div class="product-card">
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.name}" draggable="false">
                <div class="product-overlay">
                    <button class="btn-quick-view" onclick="openQuickView('${product.id}')">
                        <i class="fa-solid fa-eye"></i> Quick View
                    </button>
                    <button class="btn-overlay-cart" onclick="addToCart('${product.id}', 1, this)">
                        <i class="fa-solid fa-cart-plus"></i> Add to Cart
                    </button>
                    <button class="btn-overlay-wish" onclick="addToWishlist('${product.id}')">
                        <i class="fa-regular fa-heart"></i> Add to Wishlist
                    </button>
                </div>
            </div>
            <div class="product-details">
                <h4>${product.brand}</h4>
                <p class="product-name">${product.name}</p>
                <div class="price">
                    <span class="current-price">₹${product.price}</span>
                    <span class="original-price">₹${product.originalPrice}</span>
                    <span class="discount">(${product.discount}% OFF)</span>
                </div>
            </div>
        </div>
    `;

    const createBrandCard = (brand) => `
        <div class="brand-card">
            <img src="${brand.image}" alt="${brand.name}" draggable="false">
            <div class="brand-card-content">
                <h3 class="brand-card-title">${brand.name}</h3>
                <p class="brand-card-tagline">${brand.tagline}</p>
                <div class="brand-card-offer">${brand.offer}</div>
            </div>
        </div>
    `;


    // --- 3.5 Quick View Modal ---
    const modalHTML = `
        <div class="modal-overlay" id="quick-view-modal">
            <div class="modal-content">
                <button class="modal-close" id="modal-close-btn"><i class="fa-solid fa-xmark"></i></button>
                <div class="modal-body" id="modal-body-content">
                    <!-- Populated via JS -->
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    const modal = document.getElementById('quick-view-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    window.openQuickView = (id) => {
        const product = window.products.find(p => p.id === id);
        if (!product) return;

        const modalBody = document.getElementById('modal-body-content');
        modalBody.innerHTML = `
            <div class="modal-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-details">
                <div class="modal-brand">${product.brand}</div>
                <h3>${product.name}</h3>
                <div class="price modal-price">₹${product.price} <span style="font-size: 1rem; color: var(--gray); text-decoration: line-through;">₹${product.originalPrice}</span></div>
                <p class="modal-desc">${product.description || 'A premium quality product offering excellent value and style.'}</p>
                
                <div class="qty-selector">
                    <span style="font-weight: 600;">Quantity:</span>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="document.getElementById('modal-qty').value = Math.max(1, parseInt(document.getElementById('modal-qty').value) - 1)">-</button>
                        <input type="number" id="modal-qty" class="qty-input" value="1" min="1">
                        <button class="qty-btn" onclick="document.getElementById('modal-qty').value = parseInt(document.getElementById('modal-qty').value) + 1">+</button>
                    </div>
                </div>

                <button class="btn-primary" style="width: 100%; font-size: 1.1rem; padding: 15px;" onclick="addToCart('${product.id}', parseInt(document.getElementById('modal-qty').value), this)">
                    <i class="fa-solid fa-cart-shopping"></i> Add to Cart
                </button>
            </div>
        `;
        modal.classList.add('active');
    };

    const closeModal = () => modal.classList.remove('active');
    modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });


    // --- 4. Carousel Manager ---
    const setupCarousel = (wrapperId, trackId, dotsId, dataArray, renderHTML, isBrandCarousel = false) => {
        const wrapper = document.getElementById(wrapperId);
        const track = document.getElementById(trackId);
        const dotsContainer = document.getElementById(dotsId);
        if (!wrapper || !track || !dotsContainer) return;

        track.innerHTML = dataArray.map(renderHTML).join('');
        const slides = Array.from(track.children);
        let currentIndex = 0;
        let isDragging = false;
        let startPos = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
        let animationID;
        let autoSlideInterval;

        const getItemsPerView = () => {
            if (window.innerWidth <= 600) return isBrandCarousel ? 1 : 2;
            if (window.innerWidth <= 900) return isBrandCarousel ? 2 : 3;
            if (window.innerWidth <= 1024) return isBrandCarousel ? 2 : 4;
            return isBrandCarousel ? 3 : 5;
        };

        const maxIndex = () => Math.max(0, slides.length - getItemsPerView());

        const updateDots = () => {
            const numDots = maxIndex() + 1;
            let dotsHtml = '';
            for (let i = 0; i < numDots; i++) {
                dotsHtml += `<div class="dot ${i === currentIndex ? 'active' : ''}" data-index="${i}"></div>`;
            }
            dotsContainer.innerHTML = dotsHtml;

            Array.from(dotsContainer.children).forEach(dot => {
                dot.addEventListener('click', (e) => {
                    currentIndex = parseInt(e.target.getAttribute('data-index'));
                    setPositionByIndex();
                    resetInterval();
                });
            });
        };

        const setPositionByIndex = () => {
            const gap = 25;
            const slideWidth = slides[0].offsetWidth + gap;
            currentTranslate = currentIndex * -slideWidth;
            prevTranslate = currentTranslate;
            track.style.transform = `translateX(${currentTranslate}px)`;
            
            Array.from(dotsContainer.children).forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        };

        const slideNext = () => {
            if (currentIndex < maxIndex()) currentIndex++;
            else currentIndex = 0;
            setPositionByIndex();
        };

        const slidePrev = () => {
            if (currentIndex > 0) currentIndex--;
            else currentIndex = maxIndex();
            setPositionByIndex();
        };

        const startInterval = () => autoSlideInterval = setInterval(slideNext, 4000);
        const resetInterval = () => { clearInterval(autoSlideInterval); startInterval(); };

        const prevArrow = wrapper.querySelector('.prev-arrow');
        const nextArrow = wrapper.querySelector('.next-arrow');
        
        if(prevArrow) prevArrow.addEventListener('click', () => { slidePrev(); resetInterval(); });
        if(nextArrow) nextArrow.addEventListener('click', () => { slideNext(); resetInterval(); });

        wrapper.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        wrapper.addEventListener('mouseleave', startInterval);

        const touchStart = (index) => (event) => {
            isDragging = true;
            startPos = getPositionX(event);
            animationID = requestAnimationFrame(animation);
            track.style.transition = 'none';
            clearInterval(autoSlideInterval);
        };

        const touchMove = (event) => {
            if (isDragging) {
                const currentPosition = getPositionX(event);
                currentTranslate = prevTranslate + currentPosition - startPos;
            }
        };

        const touchEnd = () => {
            isDragging = false;
            cancelAnimationFrame(animationID);
            track.style.transition = 'transform 0.4s ease-in-out';

            const movedBy = currentTranslate - prevTranslate;
            const threshold = slides[0].offsetWidth / 4;

            if (movedBy < -threshold && currentIndex < maxIndex()) currentIndex += 1;
            else if (movedBy > threshold && currentIndex > 0) currentIndex -= 1;

            setPositionByIndex();
            startInterval();
        };

        const getPositionX = (event) => event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;

        const animation = () => {
            track.style.transform = `translateX(${currentTranslate}px)`;
            if (isDragging) requestAnimationFrame(animation);
        };

        const viewport = wrapper.querySelector('.carousel-viewport');
        viewport.addEventListener('mousedown', touchStart());
        viewport.addEventListener('touchstart', touchStart(), {passive: true});
        viewport.addEventListener('mousemove', touchMove);
        viewport.addEventListener('touchmove', touchMove, {passive: true});
        viewport.addEventListener('mouseup', touchEnd);
        viewport.addEventListener('mouseleave', () => { if(isDragging) touchEnd() });
        viewport.addEventListener('touchend', touchEnd);

        window.addEventListener('resize', () => {
            if(currentIndex > maxIndex()) currentIndex = Math.max(0, maxIndex());
            updateDots();
            setPositionByIndex();
        });
        
        updateDots();
        setPositionByIndex();
        startInterval();
    };


    // --- 4.5 Hero Slider Logic ---
    const heroSlider = document.getElementById('hero-slider');
    if (heroSlider) {
        const slides = heroSlider.querySelectorAll('.slide');
        const nextBtn = heroSlider.querySelector('.hero-next');
        const prevBtn = heroSlider.querySelector('.hero-prev');
        const dots = heroSlider.querySelectorAll('.hero-dot');
        let currentSlide = 0;
        let slideInterval;

        const goToSlide = (index) => {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            currentSlide = (index + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        };

        const nextSlide = () => goToSlide(currentSlide + 1);
        const prevSlide = () => goToSlide(currentSlide - 1);

        const startSlideShow = () => {
            slideInterval = setInterval(nextSlide, 4000); // 4 seconds
        };

        const stopSlideShow = () => {
            clearInterval(slideInterval);
        };

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                stopSlideShow();
                startSlideShow();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                stopSlideShow();
                startSlideShow();
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                goToSlide(index);
                stopSlideShow();
                startSlideShow();
            });
        });

        heroSlider.addEventListener('mouseenter', stopSlideShow);
        heroSlider.addEventListener('mouseleave', startSlideShow);

        startSlideShow();
    }


    // --- 5. Scroll Animations ---
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeSections = document.querySelectorAll('.fade-in-section');
    fadeSections.forEach(sec => observer.observe(sec));

    // --- 5.5 Global Search Logic ---
    const globalSearchInput = document.getElementById('search-input');
    if (globalSearchInput) {
        // Pre-fill if there is a search query
        const urlParams = new URLSearchParams(window.location.search);
        const currentQuery = urlParams.get('search');
        if (currentQuery) {
            globalSearchInput.value = currentQuery;
        }

        globalSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = e.target.value.trim();
                if (query) {
                    // Save to recent searches
                    let recentSearches = JSON.parse(localStorage.getItem('tapRecentSearches') || '[]');
                    if (!recentSearches.includes(query)) {
                        recentSearches.unshift(query);
                        if (recentSearches.length > 5) recentSearches.pop();
                        localStorage.setItem('tapRecentSearches', JSON.stringify(recentSearches));
                    }
                    window.location.href = `products.html?search=${encodeURIComponent(query)}`;
                }
            }
        });
    }

    // --- 6. Page Routing Logic ---
    const pageId = document.body.getAttribute('data-page');

    if (pageId === 'index') {
        if (window.products) {
            const exclusiveProducts = window.products.filter(p => p.hotDeal);
            setupCarousel('exclusive-deals', 'exclusive-track', 'exclusive-dots', exclusiveProducts, createProductCard, false);
            
            const budgetProducts = window.products.filter(p => p.price < 999);
            setupCarousel('budget-picks', 'budget-track', 'budget-dots', budgetProducts, createProductCard, false);
        }

        if (window.brands) {
            setupCarousel('top-brands', 'brands-track', 'brands-dots', window.brands, createBrandCard, true);
        }
        
        const indexSearchInput = document.getElementById('search-input');
        const searchResultsSection = document.getElementById('search-results-section');
        const searchGrid = document.getElementById('search-grid');
        const heroSection = document.querySelector('.hero');
        const categoryShowcase = document.getElementById('shop-by-category');
        const advancedSections = document.querySelectorAll('.advanced-carousel-section');

        if (indexSearchInput) {
            indexSearchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();
                if (query.length > 0) {
                    if(heroSection) heroSection.style.display = 'none';
                    if(categoryShowcase) categoryShowcase.style.display = 'none';
                    advancedSections.forEach(s => s.style.display = 'none');
                    searchResultsSection.style.display = 'block';

                    const results = window.products.filter(p => 
                        p.name.toLowerCase().includes(query) || 
                        p.brand.toLowerCase().includes(query) || 
                        p.category.toLowerCase().includes(query)
                    );

                    if (results.length > 0) {
                        searchGrid.innerHTML = results.map(createProductCard).join('');
                    } else {
                        searchGrid.innerHTML = '<div class="empty-state" style="grid-column: 1/-1;"><i class="fa-solid fa-magnifying-glass" style="font-size: 3rem; color: var(--gray); margin-bottom: 15px; display: block;"></i><h3>No results found</h3><p>Try different keywords or categories.</p></div>';
                    }
                } else {
                    if(heroSection) heroSection.style.display = 'block';
                    if(categoryShowcase) categoryShowcase.style.display = 'block';
                    advancedSections.forEach(s => s.style.display = 'block');
                    searchResultsSection.style.display = 'none';
                }
            });
        }
        
    } else if (['men', 'women', 'kids', 'home', 'beauty', 'genz'].includes(pageId)) {
        const grid = document.getElementById('category-grid');
        if (grid && window.products) {
            const categoryProducts = window.products.filter(p => p.category === pageId);
            grid.innerHTML = categoryProducts.map(createProductCard).join('');
        }
    } else if (pageId === 'products') {
        const urlParams = new URLSearchParams(window.location.search);
        const subcat = urlParams.get('category');
        const searchQuery = urlParams.get('search');
        
        const grid = document.getElementById('category-grid');
        const titleElement = document.getElementById('dynamic-page-title');

        if (grid && window.products) {
            let filteredProducts = window.products;

            if (searchQuery) {
                if (titleElement) {
                    titleElement.textContent = `Search Results for "${searchQuery}"`;
                }
                const query = searchQuery.toLowerCase().trim();
                filteredProducts = window.products.filter(p => 
                    p.name.toLowerCase().includes(query) || 
                    p.brand.toLowerCase().includes(query) || 
                    p.category.toLowerCase().includes(query)
                );
            } else if (subcat) {
                if (titleElement) {
                    titleElement.textContent = subcat.charAt(0).toUpperCase() + subcat.slice(1);
                }
                filteredProducts = window.products.filter(p => p.subcategory === subcat);
            }

            if (filteredProducts.length > 0) {
                grid.innerHTML = filteredProducts.map(createProductCard).join('');
            } else {
                grid.innerHTML = `
                    <div class="empty-state" style="grid-column: 1 / -1;">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <h3>No products found</h3>
                        <p>We couldn't find any products matching your criteria.</p>
                        <a href="index.html" class="btn-primary" style="margin-top:15px">Back to Home</a>
                    </div>
                `;
            }
        }
    } else if (pageId === 'cart') {
        window.renderCart = () => {
            const cartItemsContainer = document.getElementById('cart-items');
            const cartTotal = document.getElementById('cart-total');
            const cartSubtotal = document.getElementById('cart-subtotal');
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `
                    <div class="empty-state">
                        <i class="fa-solid fa-cart-arrow-down"></i>
                        <h3>Your cart is empty</h3>
                        <p>Looks like you haven't added anything yet.</p>
                        <a href="index.html" class="btn-primary" style="margin-top:15px">Start Shopping</a>
                    </div>
                `;
                cartSubtotal.textContent = '₹0';
                cartTotal.textContent = '₹0';
                return;
            }

            let html = '';
            let total = 0;

            cart.forEach(item => {
                const product = window.products.find(p => p.id === item.id);
                if (product) {
                    const itemTotal = product.price * item.qty;
                    total += itemTotal;
                    html += `
                        <div class="cart-item">
                            <img src="${product.image}" alt="${product.name}">
                            <div class="cart-item-details">
                                <div class="cart-item-title">${product.name}</div>
                                <div class="product-tagline" style="margin-bottom:10px">${product.brand}</div>
                                <div class="cart-item-price">₹${product.price} <span style="font-size:0.8rem; color:var(--gray); font-weight:normal;">x ${item.qty} = ₹${itemTotal}</span></div>
                                
                                <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 15px;">
                                    <div class="qty-controls" style="margin-bottom:0; height:30px;">
                                        <button class="qty-btn" style="height:30px; width:30px;" onclick="updateCartQuantity('${product.id}', ${item.qty - 1})">-</button>
                                        <input type="number" class="qty-input" style="height:30px; width:40px;" value="${item.qty}" readonly>
                                        <button class="qty-btn" style="height:30px; width:30px;" onclick="updateCartQuantity('${product.id}', ${item.qty + 1})">+</button>
                                    </div>
                                    <button class="btn-remove" onclick="removeFromCart('${product.id}')">
                                        <i class="fa-solid fa-trash"></i> Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                }
            });

            cartItemsContainer.innerHTML = html;
            cartSubtotal.textContent = `₹${total}`;
            cartTotal.textContent = `₹${total}`;
        };
        window.renderCart();
    } else if (pageId === 'wishlist') {
        window.renderWishlist = () => {
            const grid = document.getElementById('wishlist-grid');
            
            if (wishlist.length === 0) {
                grid.innerHTML = `
                    <div class="empty-state" style="grid-column: 1 / -1;">
                        <i class="fa-regular fa-heart"></i>
                        <h3>Your wishlist is empty</h3>
                        <a href="index.html" class="btn-primary" style="margin-top:15px">Explore Products</a>
                    </div>
                `;
                grid.style.display = 'block';
                return;
            }
            grid.style.display = 'grid'; 

            let html = '';
            wishlist.forEach(id => {
                const product = window.products.find(p => p.id === id);
                if (product) {
                    html += `
                        <div class="product-card">
                            <div class="product-img-wrapper">
                                <img src="${product.image}" alt="${product.name}">
                                <div class="product-overlay">
                                    <button class="btn-quick-view" onclick="openQuickView('${product.id}')">
                                        <i class="fa-solid fa-eye"></i> Quick View
                                    </button>
                                    <button class="btn-overlay-cart" onclick="addToCart('${product.id}', 1, this)">
                                        <i class="fa-solid fa-cart-plus"></i> Move to Cart
                                    </button>
                                    <button class="btn-overlay-wish" style="color:red; border-color:red" onclick="removeFromWishlist('${product.id}')">
                                        <i class="fa-solid fa-trash"></i> Remove
                                    </button>
                                </div>
                            </div>
                            <div class="product-details">
                                <h4>${product.brand}</h4>
                                <p class="product-name">${product.name}</p>
                                <div class="price">
                                    <span class="current-price">₹${product.price}</span>
                                </div>
                            </div>
                        </div>
                    `;
                }
            });
            grid.innerHTML = html;
        };
        window.renderWishlist();
    }

    // --- 7. Mobile Hamburger Menu ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mainNav = document.getElementById('main-nav');
    
    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const icon = hamburgerBtn.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- Mobile Accordion Mega Menu ---
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const megaMenu = item.querySelector('.mega-menu');
        
        if (link && megaMenu) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 900) {
                    e.preventDefault(); 
                    navItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('open')) {
                            otherItem.classList.remove('open');
                        }
                    });
                    item.classList.toggle('open');
                }
            });
        }
    });

});
