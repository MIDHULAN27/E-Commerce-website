// Shared Data Source for all pages

window.products = [
    // --- MEN (10 products) ---
    {
        id: 'm1', name: "Men's Classic T-Shirt", brand: "Roadster", category: "men", subcategory: "tshirts",
        price: 499, originalPrice: 999, discount: 50, hotDeal: true, rating: 4.5,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400",
        description: "A comfortable, breathable classic cotton t-shirt perfect for everyday wear."
    },
    {
        id: 'm2', name: "Slim Fit Denim Jacket", brand: "Levi's", category: "men", subcategory: "jackets",
        price: 2499, originalPrice: 4999, discount: 50, hotDeal: false, rating: 4.8,
        image: "https://i.pinimg.com/736x/ba/81/41/ba814129cd9b1efd8188cbb7b53b620c.jpg",
        description: "Premium denim jacket featuring a classic slim fit design and rugged finish."
    },
    {
        id: 'm3', name: "Casual Sneakers", brand: "Puma", category: "men", subcategory: "sneakers",
        price: 1899, originalPrice: 3999, discount: 52, hotDeal: true, rating: 4.3,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=400",
        description: "Lightweight and stylish casual sneakers designed for maximum comfort."
    },
    {
        id: 'm4', name: "Formal Oxford Shoes", brand: "Hush Puppies", category: "men", subcategory: "formalshoes",
        price: 2999, originalPrice: 5999, discount: 50, hotDeal: false, rating: 4.6,
        image: "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwa32d4e06/images/large/8354037_1.jpeg?sw=800&sh=800",
        description: "Elegant genuine leather oxford shoes for formal occasions and office wear."
    },
    {
        id: 'm5', name: "Slim Fit Chinos", brand: "Wrogn", category: "men", subcategory: "casualtrousers",
        price: 1299, originalPrice: 2499, discount: 48, hotDeal: false, rating: 4.2,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=400",
        description: "Versatile slim fit chinos that transition seamlessly from work to weekend."
    },
    {
        id: 'm6', name: "Checked Casual Shirt", brand: "Highlander", category: "men", subcategory: "casualshirts",
        price: 799, originalPrice: 1599, discount: 50, hotDeal: true, rating: 4.1,
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=400",
        description: "100% cotton checked shirt with a modern tailored fit."
    },
    {
        id: 'm7', name: "Sports Active Wear", brand: "Nike", category: "men", subcategory: "tshirts",
        price: 1499, originalPrice: 2999, discount: 50, hotDeal: false, rating: 4.7,
        image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=400",
        description: "Dri-FIT technology active wear to keep you cool during intense workouts."
    },
    {
        id: 'm8', name: "Premium Leather Belt", brand: "Tommy Hilfiger", category: "men", subcategory: "belts",
        price: 1199, originalPrice: 1999, discount: 40, hotDeal: false, rating: 4.4,
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&q=80&w=400",
        description: "Reversible genuine leather belt with a sleek metallic buckle."
    },
    {
        id: 'm9', name: "Winter Pullover Hoodie", brand: "H&M", category: "men", subcategory: "jackets",
        price: 1599, originalPrice: 2499, discount: 36, hotDeal: true, rating: 4.6,
        image: "https://medias.spotern.com/products/w310/663/663100-1696754795.jpg",
        description: "Warm and cozy fleece-lined hoodie perfect for winter."
    },
    {
        id: 'm10', name: "Cargo Pants", brand: "Superdry", category: "men", subcategory: "jeans",
        price: 2199, originalPrice: 3999, discount: 45, hotDeal: false, rating: 4.5,
        image: "https://oldnavy.gap.com/webcontent/0054/727/977/cn54727977.jpg",
        description: "Durable multi-pocket cargo pants built for urban exploration."
    },

    // --- WOMEN (10 products) ---
    {
        id: 'w1', name: "Floral Summer Dress", brand: "H&M", category: "women", subcategory: "dresses",
        price: 1299, originalPrice: 2499, discount: 48, hotDeal: true, rating: 4.7,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=400",
        description: "A breezy, lightweight floral dress perfect for summer outings."
    },
    {
        id: 'w2', name: "Classic Tote Bag", brand: "Allen Solly", category: "women", subcategory: "accessories",
        price: 1499, originalPrice: 2999, discount: 50, hotDeal: false, rating: 4.4,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=400",
        description: "Spacious vegan leather tote bag with multiple compartments."
    },
    {
        id: 'w3', name: "High-Waist Mom Jeans", brand: "Levi's", category: "women", subcategory: "jeans",
        price: 1999, originalPrice: 3999, discount: 50, hotDeal: true, rating: 4.8,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=400",
        description: "Retro-inspired high-waisted denim mom jeans with a relaxed fit."
    },
    {
        id: 'w4', name: "Elegant Silk Saree", brand: "Biba", category: "women", subcategory: "sarees",
        price: 3499, originalPrice: 6999, discount: 50, hotDeal: false, rating: 4.9,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400",
        description: "Traditional and luxurious silk saree with intricate zari work."
    },
    {
        id: 'w5', name: "Running Shoes", brand: "Adidas", category: "women", subcategory: "flats",
        price: 2499, originalPrice: 4999, discount: 50, hotDeal: true, rating: 4.6,
        image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&q=80&w=400",
        description: "High-performance running shoes with superior cushioning."
    },
    {
        id: 'w6', name: "Printed Kurta Set", brand: "Palazzo", category: "women", subcategory: "kurtas",
        price: 1599, originalPrice: 3199, discount: 50, hotDeal: false, rating: 4.5,
        image: "https://www.lakshita.com/cdn/shop/products/22AWLK02943-S-6_2.jpg?v=1686740594&width=1026",
        description: "Beautifully printed ethnic kurta set suitable for festive occasions."
    },
    {
        id: 'w7', name: "Leather Jacket", brand: "Mango", category: "women", subcategory: "tops",
        price: 3999, originalPrice: 7999, discount: 50, hotDeal: true, rating: 4.8,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400",
        description: "Edgy faux leather biker jacket with metallic zipper detailing."
    },
    {
        id: 'w8', name: "Block Heel Sandals", brand: "Bata", category: "women", subcategory: "heels",
        price: 999, originalPrice: 1999, discount: 50, hotDeal: false, rating: 4.2,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=400",
        description: "Comfortable and stylish block heels for all-day wear."
    },
    {
        id: 'w9', name: "Oversized Sunglasses", brand: "Fastrack", category: "women", subcategory: "accessories",
        price: 799, originalPrice: 1599, discount: 50, hotDeal: false, rating: 4.3,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=400",
        description: "Chic oversized sunglasses offering 100% UV protection."
    },
    {
        id: 'w10', name: "Crop Top", brand: "Forever 21", category: "women", subcategory: "tops",
        price: 499, originalPrice: 999, discount: 50, hotDeal: true, rating: 4.1,
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=400",
        description: "Trendy ribbed crop top ideal for casual styling."
    },

    // --- KIDS (10 products) ---
    {
        id: 'k1', name: "Boys Graphic T-Shirt", brand: "Max", category: "kids", subcategory: "tshirts",
        price: 399, originalPrice: 799, discount: 50, hotDeal: true, rating: 4.5,
        image: "https://www.gap.com/webcontent/0055/271/926/cn55271926.jpg",
        description: "Fun and vibrant graphic t-shirt for active boys."
    },
    {
        id: 'k2', name: "Girls Party Dress", brand: "Allen Solly Junior", category: "kids", subcategory: "dresses",
        price: 999, originalPrice: 1999, discount: 50, hotDeal: false, rating: 4.7,
        image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/22066152a.webp",
        description: "Adorable party dress with tulle skirt and sequin details."
    },
    {
        id: 'k3', name: "Kids Velcro Sneakers", brand: "Puma", category: "kids", subcategory: "sneakers",
        price: 1299, originalPrice: 2499, discount: 48, hotDeal: true, rating: 4.6,
        image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/21971635a.webp",
        description: "Easy-to-wear velcro sneakers designed for growing feet."
    },
    {
        id: 'k4', name: "Boys Denim Shorts", brand: "Mothercare", category: "kids", subcategory: "jeans",
        price: 599, originalPrice: 1199, discount: 50, hotDeal: false, rating: 4.3,
        image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/21550093a.webp",
        description: "Comfortable and durable denim shorts for playtime."
    },
    {
        id: 'k5', name: "Girls Floral Top", brand: "Gini & Jony", category: "kids", subcategory: "tops",
        price: 499, originalPrice: 999, discount: 50, hotDeal: false, rating: 4.4,
        image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/20750374a.webp",
        description: "Cute floral printed top with ruffle sleeves."
    },
    {
        id: 'k6', name: "Kids Winter Jacket", brand: "United Colors of Benetton", category: "kids", subcategory: "tops",
        price: 1499, originalPrice: 2999, discount: 50, hotDeal: true, rating: 4.8,
        image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/20857255a.webp",
        description: "Warm puffer jacket to keep your little ones cozy."
    },
    {
        id: 'k7', name: "Boys Cotton Pajamas", brand: "Jockey", category: "kids", subcategory: "jeans",
        price: 449, originalPrice: 899, discount: 50, hotDeal: false, rating: 4.5,
        image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/21959509a.webp",
        description: "Soft and breathable cotton pajamas for a good night's sleep."
    },
    {
        id: 'k8', name: "Girls Ballet Flats", brand: "Bata", category: "kids", subcategory: "sneakers",
        price: 699, originalPrice: 1399, discount: 50, hotDeal: false, rating: 4.2,
        image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/21172376a.webp",
        description: "Sparkly ballet flats perfect for special occasions."
    },
    {
        id: 'k9', name: "School Backpack", brand: "Puma", category: "kids", subcategory: "learning",
        price: 899, originalPrice: 1799, discount: 50, hotDeal: true, rating: 4.6,
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/079392/03/fnd/IND/fmt/png/School-Backpack",
        description: "Ergonomic and spacious school backpack with fun prints."
    },
    {
        id: 'k10', name: "Kids Sunglasses", brand: "Fastrack", category: "kids", subcategory: "learning",
        price: 399, originalPrice: 799, discount: 50, hotDeal: false, rating: 4.1,
        image: "https://th.bing.com/th/id/R.04f090c72be964a8961887480a10b2e3?rik=4pk3%2bWqJ5GkSTw&riu=http%3a%2f%2fmulco.com%2fcdn%2fshop%2fproducts%2fmulco-sunglasses-TRUSS_TOP_Pink.jpg%3fv%3d1604411112&ehk=ss1TcOtuO6mP6rS9j1t6XTZwNVgdPbCwzyIr3XNvtZg%3d&risl=&pid=ImgRaw&r=0",
        description: "UV protected sunglasses to keep their eyes safe."
    },

    // --- HOME (10 products) ---
    {
        id: 'h1', name: "Luxury Cotton Bedsheet", brand: "Bombay Dyeing", category: "home", subcategory: "bedsheets",
        price: 999, originalPrice: 1999, discount: 50, hotDeal: true, rating: 4.6,
        image: "https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/300TC_Bedsheet/WFLBSGABRIEL/WFLBSGABRIEL_LS_2.jpg?tr=w-1200",
        description: "Premium 300 TC pure cotton king size bedsheet with two pillow covers."
    },
    {
        id: 'h2', name: "Ceramic Coffee Mug Set", brand: "Chumbak", category: "home", subcategory: "decor",
        price: 599, originalPrice: 1199, discount: 50, hotDeal: false, rating: 4.5,
        image: "https://ik.imagekit.io/2xkwa8s1i/img/npl_raw_images/Coffee-Mugs-14-04-2026/WCMPTSMGS4VEL/WCMPTSMGS4VEL_1.jpg?tr=w-1200",
        description: "Set of 2 beautifully handcrafted ceramic coffee mugs."
    },
    {
        id: 'h3', name: "Aromatic Scented Candles", brand: "Home Centre", category: "home", subcategory: "decor",
        price: 349, originalPrice: 699, discount: 50, hotDeal: true, rating: 4.3,
        image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=400",
        description: "Lavender infused scented candles for a relaxing ambiance."
    },
    {
        id: 'h4', name: "Fluffy Bath Towel", brand: "Trident", category: "home", subcategory: "blankets",
        price: 499, originalPrice: 999, discount: 50, hotDeal: false, rating: 4.7,
        image: "https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/Towel_new/WTWLTRYBTCN1.jpg?tr=w-1200",
        description: "Ultra-soft and highly absorbent 100% cotton bath towel."
    },
    {
        id: 'h5', name: "Bohemian Throw Blanket", brand: "FabIndia", category: "home", subcategory: "blankets",
        price: 1299, originalPrice: 2599, discount: 50, hotDeal: false, rating: 4.8,
        image: "https://m.media-amazon.com/images/I/91DJVLLlEsL.jpg",
        description: "Handwoven throw blanket with intricate tassel details."
    },
    {
        id: 'h6', name: "Decorative Wall Clock", brand: "Titan", category: "home", subcategory: "clocks",
        price: 899, originalPrice: 1799, discount: 50, hotDeal: true, rating: 4.4,
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=400",
        description: "Modern minimalist wall clock with silent sweep movement."
    },
    {
        id: 'h7', name: "Indoor Potted Plant", brand: "Ugaoo", category: "home", subcategory: "plants",
        price: 399, originalPrice: 799, discount: 50, hotDeal: false, rating: 4.5,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=400",
        description: "Low-maintenance indoor snake plant with a ceramic pot."
    },
    {
        id: 'h8', name: "Velvet Cushion Covers", brand: "Swayam", category: "home", subcategory: "decor",
        price: 449, originalPrice: 899, discount: 50, hotDeal: false, rating: 4.2,
        image: "https://ik.imagekit.io/2xkwa8s1i/img/npl_raw_images/WFCC/WFCCDVTBP4040S1/WFCCDVTBP4040S1_1.jpg?tr=w-1200",
        description: "Set of 2 luxurious velvet cushion covers (16x16 inches)."
    },
    {
        id: 'h9', name: "Table Lamp", brand: "Philips", category: "home", subcategory: "lamps",
        price: 1199, originalPrice: 2399, discount: 50, hotDeal: true, rating: 4.6,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=400",
        description: "Elegant bedside table lamp with warm LED lighting."
    },
    {
        id: 'h10', name: "Non-Stick Cookware Set", brand: "Prestige", category: "home", subcategory: "decor",
        price: 2499, originalPrice: 4999, discount: 50, hotDeal: false, rating: 4.8,
        image: "https://ik.imagekit.io/2xkwa8s1i/img/npl_raw_images/Cookwarecombofinallot/WCKCWALIB5P1/1.jpg?tr=w-1200",
        description: "3-piece non-stick cookware set including pan, kadhai, and tawa."
    },

    // --- BEAUTY (10 products) ---
    {
        id: 'b1', name: "Matte Lipstick", brand: "MAC", category: "beauty", subcategory: "lipstick",
        price: 1599, originalPrice: 1999, discount: 20, hotDeal: true, rating: 4.8,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=400",
        description: "Iconic matte lipstick known for its highly pigmented, long-lasting formula."
    },
    {
        id: 'b2', name: "Hydrating Moisturizer", brand: "Clinique", category: "beauty", subcategory: "moisturizers",
        price: 2199, originalPrice: 2999, discount: 26, hotDeal: false, rating: 4.7,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400",
        description: "100-hour auto-replenishing hydrator for glowing skin."
    },
    {
        id: 'b3', name: "Vitamin C Serum", brand: "Plum", category: "beauty", subcategory: "skincare",
        price: 549, originalPrice: 1099, discount: 50, hotDeal: true, rating: 4.5,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=400",
        description: "15% Vitamin C serum for a radiant and even skin tone."
    },
    {
        id: 'b4', name: "Liquid Foundation", brand: "Maybelline", category: "beauty", subcategory: "foundation",
        price: 499, originalPrice: 799, discount: 37, hotDeal: false, rating: 4.4,
        image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=400",
        description: "Fit Me matte + poreless liquid foundation for a natural finish."
    },
    {
        id: 'b5', name: "Volumizing Mascara", brand: "L'Oreal Paris", category: "beauty", subcategory: "makeup",
        price: 699, originalPrice: 999, discount: 30, hotDeal: false, rating: 4.6,
        image: "https://image-optimizer-reg.production.sephora-asia.net/eyJlZGl0cyI6eyJyZXNpemUiOnt9fX0=/images/product_images/zoom_1_Product_689304140843-Anastasia-Beverly-Hills-Lash-Sculpt-Lengthening-Volumizing-Mascara-_fc8173a819fa44aa71827ade95cd0ca2261a72a6_1690549583.png",
        description: "Lash paradise mascara for intense volume and spectacular length."
    },
    {
        id: 'b6', name: "Sunscreen SPF 50", brand: "Minimalist", category: "beauty", subcategory: "sunscreens",
        price: 399, originalPrice: 499, discount: 20, hotDeal: true, rating: 4.8,
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=400",
        description: "Broad-spectrum SPF 50 sunscreen with zero white cast."
    },
    {
        id: 'b7', name: "Luxury Perfume", brand: "Dior", category: "beauty", subcategory: "makeup",
        price: 7999, originalPrice: 9999, discount: 20, hotDeal: false, rating: 4.9,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=400",
        description: "A floral and fresh signature fragrance for women."
    },
    {
        id: 'b8', name: "Eyeshadow Palette", brand: "Huda Beauty", category: "beauty", subcategory: "makeup",
        price: 4999, originalPrice: 6599, discount: 24, hotDeal: false, rating: 4.7,
        image: "https://cdn.img.yiiall.com/20240829/4d7/b85/4d7b85e226f30f203ff05ccead3e0eb1.jpg",
        description: "18 highly pigmented shades ranging from matte to shimmer."
    },
    {
        id: 'b9', name: "Hair Repair Shampoo", brand: "L'Oreal Paris", category: "beauty", subcategory: "shampoo",
        price: 2499, originalPrice: 2999, discount: 16, hotDeal: true, rating: 4.8,
        image: "https://m.media-amazon.com/images/I/510FAdhUiCL._SL1200_.jpg",
        description: "No.4 bond maintenance shampoo that repairs and protects hair."
    },
    {
        id: 'b10', name: "Makeup Brushes Set", brand: "Real Techniques", category: "beauty", subcategory: "makeup",
        price: 1499, originalPrice: 2499, discount: 40, hotDeal: false, rating: 4.5,
        image: "https://m.media-amazon.com/images/I/71hMhFrd6IL.jpg",
        description: "Set of 4 essential makeup brushes for a flawless base."
    },

    // --- GENZ (10 products) ---
    {
        id: 'g1', name: "Oversized Anime Tee", brand: "Bewakoof", category: "genz", subcategory: "oversizedtees",
        price: 599, originalPrice: 1199, discount: 50, hotDeal: true, rating: 4.6,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=400",
        description: "Trendy oversized drop-shoulder t-shirt with aesthetic anime print."
    },
    {
        id: 'g2', name: "Baggy Cargo Pants", brand: "Urban Monkey", category: "genz", subcategory: "cargopants",
        price: 1499, originalPrice: 2999, discount: 50, hotDeal: true, rating: 4.7,
        image: "https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?auto=format&fit=crop&q=80&w=400",
        description: "Streetwear essential multi-pocket baggy cargo pants."
    },
    {
        id: 'g3', name: "Chunky Sneakers", brand: "Fila", category: "genz", subcategory: "sneakers",
        price: 2499, originalPrice: 4999, discount: 50, hotDeal: false, rating: 4.5,
        image: "https://www.fila.de/out/pictures/generated/product/1/370_370_100/fila_collene_cb_wmn_white_fair_orch_1715011_1840.jpg",
        description: "Retro-inspired chunky dad sneakers for peak streetwear style."
    },
    {
        id: 'g4', name: "Bucket Hat", brand: "H&M", category: "genz", subcategory: "accessories",
        price: 399, originalPrice: 799, discount: 50, hotDeal: false, rating: 4.3,
        image: "https://screenlab.com.au/wp-content/uploads/2022/11/1117_BUCKET_HAT_BLACK.jpg",
        description: "Reversible cotton bucket hat for summer vibes."
    },
    {
        id: 'g5', name: "Ribbed Crop Top", brand: "Zara", category: "genz", subcategory: "tops",
        price: 699, originalPrice: 1299, discount: 46, hotDeal: true, rating: 4.4,
        image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&q=80&w=400",
        description: "Seamless ribbed crop top with a flattering square neckline."
    },
    {
        id: 'g6', name: "Fanny Pack / Crossbody", brand: "Nike", category: "genz", subcategory: "accessories",
        price: 999, originalPrice: 1999, discount: 50, hotDeal: false, rating: 4.8,
        image: "https://i.ebayimg.com/images/g/8QcAAOSwTyRnF1--/s-l500.jpg",
        description: "Essential utility fanny pack that doubles as a crossbody."
    },
    {
        id: 'g7', name: "Tie-Dye Hoodie", brand: "Souled Store", category: "genz", subcategory: "tops",
        price: 1199, originalPrice: 2399, discount: 50, hotDeal: false, rating: 4.5,
        image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80&w=400",
        description: "Cozy fleece hoodie featuring a vibrant tie-dye pattern."
    },
    {
        id: 'g8', name: "Varsity Jacket", brand: "Forever 21", category: "genz", subcategory: "tops",
        price: 1999, originalPrice: 3999, discount: 50, hotDeal: true, rating: 4.6,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400",
        description: "Classic college varsity jacket with faux leather sleeves."
    },
    {
        id: 'g9', name: "Y2K Sunglasses", brand: "Fastrack", category: "genz", subcategory: "accessories",
        price: 599, originalPrice: 1199, discount: 50, hotDeal: false, rating: 4.2,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=400",
        description: "Rimless tinted sunglasses giving ultimate Y2K aesthetics."
    },
    {
        id: 'g10', name: "Graphic Skateboard", brand: "Oxelo", category: "genz", subcategory: "accessories",
        price: 2499, originalPrice: 4999, discount: 50, hotDeal: false, rating: 4.7,
        image: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&q=80&w=400",
        description: "Pro skateboard deck featuring cool urban graffiti graphics."
    }
];

window.brands = [
    {
        name: "Nike", tagline: "Just Do It.", offer: "Up to 40% Off",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "H&M", tagline: "Fashion and quality at the best price.", offer: "Flat 50% Off",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "MAC", tagline: "All Ages, All Races, All Genders.", offer: "Buy 1 Get 1",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Levi's", tagline: "Quality never goes out of style.", offer: "Min 30% Off",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Puma", tagline: "Forever Faster.", offer: "Extra 10% Off",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800"
    }
];
