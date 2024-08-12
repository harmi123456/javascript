let products = {
    Toys: [
      {
        id: 1,
        name: "Teddy Bear",
        quantity: 5,
        price: 10.0,
        description: "A soft and cuddly teddy bear",
        rating: 4.5,
        stars: "★★★★☆",
        image: "https://i.pinimg.com/236x/0c/23/0c/0c230c6d5a8c88d7f208667803b28c16.jpg"
      },
      {
        id: 2,
        name: "Toy Car",
        quantity: 10,
        price: 8.0,
        rating: 3.1,
        stars: "★★★★☆",
        description: "A miniature toy car",
        image: "https://i.pinimg.com/236x/3b/f5/d2/3bf5d2de9f10f77de23459642bb815ae.jpg"
      },
      {
        id: 3,
        name: "Action Figure",
        quantity: 3,
        price: 15.0,
        rating: 4.1,
        stars: "★★★★☆",
        description: "A superhero action figure",
        image: "https://fatcatcollectibles.in/cdn/shop/files/ToySnowman.com04_700x700_942b4e38-1108-4f69-8e4f-4b42688e1faf.webp?v=1719484988&width=700"
      },
      {
        id: 4,
        name: "Toy Gun",
        quantity: 7,
        price: 12.0,
        rating: 4.8,
        stars: "★★★★★",
        description: "A toy gun with sound effects",
        image: "https://icon2.cleanpng.com/20240326/aih/transparent-paint-splatter-colorful-paint-splattered-toy-gun-and-ground66027286cbf659.29517492.webp"
      },
      {
        id: 5,
        name: "Toy Aeroplane",
        quantity: 4,
        price: 20.0,
        rating: 4.7,
        stars: "★★★★★",
        description: "A toy aeroplane with lights",
        image: "https://i.pinimg.com/236x/68/90/71/689071dabdc2f2a5ec097972e96efbdf.jpg"
      },
      {
        id: 1,
        name: "Toy mobile",
        quantity: 5,
        price: 10.0,
        description: " Toy Phone for Kids,Musical Toys for Kids with 3D Light",
        rating: 4.5,
        stars: "★★★★★",
        image: "https://m.media-amazon.com/images/I/610ZbuQwL3L.jpg"
      },
      {
        id: 1,
        name: "Duck",
        quantity: 5,
        price: 10.0,
        description: "Yellow duck Kids Toy",
        rating: 4.5,
        stars: "★★★★★",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw2TdKIj4J-1T_uFLvVeK-rssEAyWeI0XDDvSBnZJ7MasXkA03cBbpK2CVUDj4xhSmjt8&usqp=CAU"
      },
      {
        id: 1,
        name: "Garden Slide",
        quantity: 5,
        price: 10.0,
        description: " Webby Foldable Baby Garden Slide",
        rating: 4.5,
        stars: "★★★★★",
        image: "https://www.webby.toys/cdn/shop/products/1_4c7dd998-5b71-4c45-a717-36f2ee9ceecb.jpg?v=1671191882&width=360"
      },
      {
        id: 1,
        name: "Unicorn",
        quantity: 5,
        price: 10.0,
        description: "Standing Unicorn Teddy Plush Soft Toy, 25CM (Pink)",
        rating: 4.5,
        stars: "★★★★★",
        image: "https://www.webby.toys/cdn/shop/products/51M1mjxQyXL._SL1500.jpg?v=1674452131&width=360"
      },
      {
        id: 1,
        name: "Elephant",
        quantity: 5,
        price: 10.0,
        description: " Soft Animal Plush Elephant Toy 20cm, Grey and Blue",
        rating: 4.5,
        stars: "★★★★★",
        image: "https://www.webby.toys/cdn/shop/products/1_e1969951-c727-448e-8de8-e97d1e937cd5.jpg?v=1674283152&width=1800"
      },
    ],
    Gifts: [
      {
        id: 6,
        name: "Gift Card",
        quantity: 10,
        price: 25.0,
        rating: 4.6,
        stars: "★★★★★",  
        description: "A versatile gift card",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXR-QP9OL-eEFfjti8pxJTSkDjyXUcq3JkkA&s"
      },
      {
        id: 7,
        name: "Photo Frame",
        quantity: 5,
        price: 15.0,
        rating: 4.2,
        stars: "★★★★☆",
        description: "A beautiful photo frame",
        image: "https://nestasia.in/cdn/shop/files/photoframe_1_1f7cee91-2feb-4b62-86a1-5741cd75acd4.jpg?v=1698666841"
      },
      {
        id: 8,
        name: "Chocolate Box",
        quantity: 20,
        price: 30.0,
        rating: 4.4,
        stars: "★★★★☆",
        description: "A box of assorted chocolates",
        image: "https://i.pinimg.com/236x/ae/41/36/ae4136f0ece4891122b63c27f86ea0c2.jpg"
      },
      {
        id: 9,
        name: "Bouquet",
        quantity: 7,
        rating: 4.7,
        stars: "★★★★★",  
        price: 20.0,
        description: "A bouquet of fresh flowers",
        image: "https://i.etsystatic.com/47099982/r/il/a133df/5996236590/il_570xN.5996236590_ev9f.jpg"
      },
      {
        id: 10,
        name: "Perfume",
        quantity: 8,
        price: 40.0,
        rating: 4.7,
        stars: "★★★★☆",
        description: "A bottle of fragrant perfume",
        image: "data:image/jpeg;base64,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"
      }
    ],
    Jeans: [
      {
        id: 11,
        name: "Skinny Jeans",
        quantity: 7,
        price: 40.0,
        stars: "★★★★☆",
        rating: 3.1,
        description: "A pair of stylish skinny jeans",
        image: "https://i.pinimg.com/236x/33/b8/24/33b824b48e6692ca4a38333f0d5ccdbc.jpg"
      },
      {
        id: 12,
        name: "Regular Fit Jeans",
        quantity: 10,
        price: 35.0,
        rating: 4.3,
        stars: "★★★★☆",
        description: "A pair of regular fit jeans",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBXW1U8433wtgAFGBGncrpKncHHh52XfJAsqsOS9TGUVPRYNBsnOpfkibHyAZcd6gX4u4&usqp=CAU"
      },
      {
        id: 13,
        name: "Ripped Jeans",
        quantity: 5,
        price: 45.0,
        rating: 3.2,
        stars: "★★★☆☆",
        description: "A pair of trendy ripped jeans",
        image: "https://i.pinimg.com/236x/48/92/01/4892015af517921491ba424a7e5a77a8.jpg"
      },
      {
        id: 14,
        name: "Bootcut Jeans",
        quantity: 4,
        rating: 3.4,
        stars: "★★★☆☆",
        price: 38.0,
        description: "A pair of classic bootcut jeans",
        image: "https://cdn11.bigcommerce.com/s-wn2v0pw28v/images/stencil/1280x1280/products/25167/3371659/ibka7sutw7lihslbsajw__82989.1713571402.jpg?c=1"
      },
      {
        id: 15,
        name: "High Waisted Jeans",
        quantity: 6,
        price: 42.0,
        rating: 4.6,
        stars: "★★★★★",
        description: "A pair of high waisted jeans",
        image: "https://ae01.alicdn.com/kf/He7dd5a9d06334ee69c699410f4e0399cL.jpg_640x640q90.jpg?width=750&height=957&hash=1707"
      }
    ],
    TShirts: [
      {
        id: 16,
        name: "V-Neck T-Shirt",
        quantity: 20,
        price: 15.0,
        rating: 4.6,
        stars: "★★★★★",
        description: "A comfortable V-neck t-shirt",
        image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2383699/2018/2/10/11518245053359-HERENOW-Men-Grey-Solid-V-Neck-T-shirt-9591518245053163-1.jpg"
      },
      {
        id: 17,
        name: "Round Neck T-Shirt",
        quantity: 25,
        price: 12.0,
        rating: 3.5,
        stars: "★★★☆☆",
        description: "A classic round neck t-shirt",
        image: "https://assets.ajio.com/medias/sys_master/root/20231211/fzAH/65773b27ddf7791519c3e325/-473Wx593H-466872702-black-MODEL4.jpg"
      },
      {
        id: 18,
        name: "Graphic T-Shirt",
        quantity: 18,
        price: 20.0,
        rating: 4.6,
        stars: "★★★★★",
        description: "A trendy graphic t-shirt",
        image: "https://assets.ajio.com/medias/sys_master/root/20230609/qGCr/6483189cd55b7d0c635cfc03/-473Wx593H-466247935-black-MODEL.jpg"
      },
      {
        id: 19,
        name: "Polo T-Shirt",
        quantity: 15,
        rating: 4.6,
        stars: "★★★★★",
        price: 22.0,
        description: "A stylish polo t-shirt",
        image: "https://rukminim2.flixcart.com/image/850/1000/l2tcfbk0/t-shirt/e/x/p/l-krs-plan-polo-tee-maroon-rabby-original-image2v3cc3mrrjy.jpeg?q=90&crop=false"
      },
      {
        id: 20,
        name: "Henley T-Shirt",
        quantity: 10,
        price: 18.0,
        rating: 4.3,
        stars: "★★★★☆",
        description: "A casual Henley t-shirt",
        image: "https://assets.ajio.com/medias/sys_master/root/20240326/6oCF/6602d18016fd2c6e6a81b2de/-473Wx593H-467203737-green-MODEL.jpg"
      }
    ],
    Tops: [
      {
        id: 21,
        name: "Tank Top",
        quantity: 12,
        price: 20.0,
        rating: 4.3,
        stars: "★★★★☆",
        description: "A trendy tank top",
        image: "https://assets.ajio.com/medias/sys_master/root/20230624/5vVH/64961f0ba9b42d15c9d266a4/-473Wx593H-465155459-maroon-MODEL2.jpg"
      },
      {
        id: 22,
        name: "Blouse",
        quantity: 8,
        rating: 2.6,
        stars: "★★☆☆☆",
        price: 25.0,
        description: "A stylish blouse",
        image: "https://cpimg.tistatic.com/07854402/b/4/Chinese-Collar-Sleeveless-Blouse.jpg"
      },
      {
        id: 23,
        name: "Crop Top",
        quantity: 10,
        price: 18.0,
        rating: 4.6,
        stars: "★★★★★",
        description: "A fashionable crop top",
        image: "https://i.pinimg.com/236x/9e/ca/e4/9ecae4d7c8ac7b28f5d57287705bc996.jpg"
      },
      {
        id: 24,
        name: "Peplum Top",
        quantity: 6,
        price: 28.0,
        rating: 4.8,
        stars: "★★★★★",
        description: "A chic peplum top",
        image: "https://jilmil.co.in/cdn/shop/files/1_63ece773-91d5-4d75-b195-430ad57bfe9d.jpg?v=1683954899"
      },
      {
        id: 25,
        name: "Off-Shoulder Top",
        quantity: 7,
        price: 22.0,
         rating: 4.6,
        stars: "★★★★★",
        description: "A trendy off-shoulder top",
        image: "https://www.sassafras.in/cdn/shop/products/SFTOPS41325-1.jpg?v=1682091215"
      }
    ],
  Bracelets: [
      {
        id: 26,
        name: "Charm Bracelet",
        quantity: 8,
        price: 30.0,
        rating: 4.6,
        stars: "★★★★★",
        description: "A beautiful charm bracelet",
        image: "https://i.pinimg.com/736x/87/cb/78/87cb78788873e7cf0eed5edf768a9e3d.jpg"
      },
      {
        id: 27,
        name: "Beaded Bracelet",
        quantity: 12,
        price: 18.0,
        rating: 4.5,
        stars: "★★★★★",
        description: "A stylish beaded bracelet",
        image: "https://i.etsystatic.com/18204207/r/il/f73269/3323625187/il_570xN.3323625187_f4t4.jpg"
      },
      {
        id: 28,
        name: "Cuff Bracelet",
        quantity: 6,
        rating: 4.6,
        stars: "★★★★★",
        price: 25.0,
        description: "A trendy cuff bracelet",
        image: "https://assets.ajio.com/medias/sys_master/root/20231010/8hdX/65247feaafa4cf41f5366038/-473Wx593H-466690172-gold-MODEL.jpg"
      },
      {
        id: 29,
        name: "Leather Bracelet",
        quantity: 10,
        price: 20.0,
        rating: 4.6,
        stars: "★★★★★",
        description: "A fashionable leather bracelet",
        image: "https://m.media-amazon.com/images/I/41XS6Q-243L._AC_SY300_.jpg"
      },
      {
        id: 30,
        name: "Bangle Bracelet",
        quantity: 7,
        price: 28.0,
        rating: 5.1,
        stars: "★★★★★",
        description: "A classic bangle bracelet",
        image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/21384892/2023/1/2/0f654a98-cfcb-4bda-9a70-9a44de00974f1672650128350Bracelet2.jpg"
      }
    ],
    Makeup: [
      {
        id: 31,
        name: "Foundation",
        quantity: 15,
        rating: 4.6,
        stars: "★★★★★",
        price: 35.0,
        description: "A high-coverage foundation",
        image: "https://beautiful.store/cdn/shop/files/07_b4290c8d-6760-45ac-9888-37de53b12dea.jpg?v=1697272213"
      },
      {
        id: 32,
        name: "Mascara",
        quantity: 20,
        price: 18.0,
        rating: 4.2,
        stars: "★★★★★",
        description: "A volumizing mascara",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/files/Blacklash-Volumizing-Mascara-01-Black-Up.jpg?v=1719892096"
      },
      {
        id: 33,
        name: "Lipstick",
        quantity: 25,
        rating: 4.6,
        stars: "★★★★★",
        price: 20.0,
        description: "A long-lasting lipstick",
        image: "https://m.media-amazon.com/images/I/51c8XB9W-oL._AC_UF350,350_QL80_.jpg"
      },
      {
        id: 34,
        name: "Blush",
        quantity: 10,
        price: 25.0,
        rating: 4.6,
        stars: "★★★★★",
        description: "A natural-looking blush",
        image: "https://m.media-amazon.com/images/I/41vFJQBUElL.jpg"
      },
    {
      id: 35,
      name: "Eyeshadow Palette",
      quantity: 8,
      price: 40.0,
      rating: 4.3,
      stars: "★★★★★",
      description: "A versatile eyeshadow palette",
      image: "https://m.media-amazon.com/images/I/41tb01stzOL.jpg"
    },
    {
      id: 31,
      name: "Compact",
      quantity: 15,
      rating: 4.6,
      stars: "★★★★★",
      price: 35.0,
      description: "MyGlamm Super Serum Compact",
      image: "https://files.myglamm.com/site-images/800x800/Ltte.jpg"
    },
    {
      id: 32,
      name: "Makeup Blender",
      quantity: 20,
      price: 18.0,
      rating: 4.2,
      stars: "★★★★★",
      description: "Multitasking Makeup Sponge",
      image: "https://files.myglamm.com/site-images/800x800/a46a4320.jpeg"
    },
    {
      id: 33,
      name: "MyGlamm LIT 2 in 1 Liquid Matte Lipstick",
      quantity: 25,
      rating: 4.6,
      stars: "★★★★★",
      price: 20.0,
      description: "Intense, transfer-proof, long-lasting liquid lipstick duos",
      image: "https://files.myglamm.com/site-images/800x800/hearth-breaker-11.jpeg"
    },
    {
      id: 34,
      name: "Primer",
      quantity: 10,
      price: 25.0,
      rating: 4.6,
      stars: "★★★★★",
      description: "Manish Malhotra Luminous Moisturising Primer",
      image: "https://www.myglamm.com/_next/image?url=https%3A%2F%2Ffiles.myglamm.com%2Fsite-images%2F800x800%2FLumins1.jpg&w=384&q=75"
    },
  {
    id: 35,
    name: "Foundation Palette",
    quantity: 8,
    price: 40.0,
    rating: 4.3,
    stars: "★★★★★",
    description: "Total Makeover FF Cream Foundation Palette",
    image: "https://files.myglamm.com/site-images/800x800/Hnyy1.jpg"
  }
  ]
}



//background image

let productImages = {
  Toys: [
      'https://png.pngtree.com/thumb_back/fh260/background/20230625/pngtree-toys-cot-bed-adorned-3d-baby-room-image_3680108.jpg',
  ],
  Gifts: [
      'https://img.freepik.com/free-photo/front-view-little-presents_140725-130185.jpg?w=996&t=st=1723381303~exp=1723381903~hmac=2aff6efc84d67245c809e62ebc7ae4bb4ff597f7274b7f2a69dd5bcf1aac1712',
  ],
  Jeans: [
      'https://www.shutterstock.com/image-photo/denim-blue-jeans-fabric-frame-600nw-2321328051.jpg',
  ],
  TShirts: [
      'https://static.vecteezy.com/system/resources/thumbnails/029/609/884/small/clean-clothes-on-hangers-in-the-laundry-room-neural-network-ai-generated-photo.jpg',
  ],
  Tops: [
      'https://png.pngtree.com/background/20210711/original/pngtree-fashion-women-s-products-investment-joining-poster-background-material-picture-image_1103973.jpg',
  ],
  Bracelets: [
      'https://silvero.co.uk/cdn/shop/products/IMG_1424.jpg?v=1692562370&width=1445',
  ],
  Makeup: [
      'https://c0.wallpaperflare.com/preview/835/84/849/flatlay-makeup-beauty-cosmetics.jpg',
  ]
};



//place script

document.addEventListener('DOMContentLoaded', function() {
    const cartContainer = document.getElementById('cartContainer');
    const productsContainer = document.getElementById('productsContainer');
    const totalPriceElement = document.getElementById('totalPrice');
    const orderSection = document.getElementById('orderSection');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalPrice = 0;

    function updateTotalPrice() {
        totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        totalPriceElement.innerText = `Total Price: ₹${totalPrice}`;
    }

    function renderCartItems() {
        productsContainer.innerHTML = '';
        cartItems.forEach((item, index) => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';

            const img = document.createElement('img');
            img.src = item.image;

            const productDetails = document.createElement('div');
            productDetails.className = 'product-details';

            const name = document.createElement('h2');
            name.innerText = item.name;

            const description = document.createElement('p');
            description.innerText = item.description;

            const rating = document.createElement('p');
            rating.innerHTML = `Rating: <b>${item.rating}</b> ${item.stars}`;

            const price = document.createElement('p');
            price.className = 'price';
            price.innerHTML = `cost: ₹<span id="price-${index}">${item.price * item.quantity}</span>`;

            const quantityLabel = document.createElement('p');
            quantityLabel.innerText = `Quantity: `;

            const quantityInput = document.createElement('input');
            quantityInput.type = 'number';
            quantityInput.value = item.quantity;
            quantityInput.min = 1;
            quantityInput.addEventListener('input', function() {
                const newQuantity = parseInt(quantityInput.value);
                item.quantity = newQuantity;
                const newPrice = item.price * newQuantity;
                document.getElementById(`price-${index}`).innerText = newPrice;
                updateTotalPrice();
            });

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-btn';
            deleteButton.innerText = 'Delete';
            deleteButton.addEventListener('click', function() {
                cartItems.splice(index, 1);
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                renderCartItems();
                updateTotalPrice();
                if (cartItems.length === 0) {
                    orderSection.classList.add('hidden');
                }
            });

            quantityLabel.appendChild(quantityInput);
            productDetails.append(name, description, rating, price, quantityLabel);
            productDiv.append(img, productDetails, deleteButton);
            productsContainer.append(productDiv);
        });

        updateTotalPrice();
    }

    renderCartItems();

    if (cartItems.length > 0) {
        orderSection.classList.remove('hidden');
    }

    document.getElementById('finalOrderButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zip = document.getElementById('zip').value;

    if (name && address && city && zip) {
        alert(`Order placed successfully!\n\nName: ${name}\nAddress: ${address}\nCity: ${city}\nZip Code: ${zip}`);
        document.querySelector(".truck").style.display = 'block'; // Show the GIF
        document.getElementById("cartContainer").style.display = "none"
    } else {
        alert('Please fill in all fields.');
    }
});
});



//cart script(main)

let cartItemsList = [];
let totalPrice = 0;

document.getElementById("submit").addEventListener("click", function() {
    let category = document.getElementById("category").value;
    let productDetails = products[category];

    let main = document.getElementById("main");
    main.innerHTML = ""; // Clear previous products


    productDetails.forEach(product => {
        let div = document.createElement("div");
        div.className = 'product';

        let name = document.createElement("h4");
        name.innerHTML = `${product.name}`;

        let img_div = document.createElement("div");
        img_div.className = "img_div";
        let img = document.createElement("img");
        img.src = `${product.image}`;
        img.style.width = "100%";
        img_div.appendChild(img);

        let rate_div = document.createElement("div");
        rate_div.className = "rate_div";
        let rating = document.createElement("p");
        rating.innerHTML = `<b>${product.rating}</b>`;
        let star = document.createElement("span");
        star.innerHTML = `${product.stars}`;
        star.style.color = "grey";
        rate_div.append(rating, star);

        let des_div = document.createElement("div");
        des_div.className = "des_div";
        let description = document.createElement("p");
        description.innerHTML = `${product.description}`;
        des_div.append(description);

        let price = document.createElement("h5");
        price.innerHTML = ` ₹${product.price}`;
        price.style.marginLeft = "-140px"

        let submit = document.createElement("button");
        submit.innerHTML = "Add to Cart";
        submit.className = "add_cart"

        submit.addEventListener("click", function() {
            let cartSection = document.getElementById("cartSection");
            let cartItems = document.getElementById("cartItems");
            let cartTotal = document.getElementById("cartTotal");

            cartSection.classList.add("visible"); // Show the cart section

            let cartItem = document.createElement("tr");
            cartItem.innerHTML = `
                <td>${product.name}</td>
                <td class="price"> - ₹${product.price}</td>
                <td>&nbsp; Quantity : </td>
                <td>
                    <input type="number" class="quantity-input" value="1" min="1">
                </td>
                <td><button class="delete-btn">Delete</button></td>
            `;
            cartItems.appendChild(cartItem);

            // Update total price
            totalPrice += product.price;
            cartTotal.innerHTML = `Total: ₹${totalPrice}`;

            // Add product to cartItemsList
            cartItemsList.push({...product, quantity: 1});

            // Add event listener to the delete button
            cartItem.querySelector(".delete-btn").addEventListener("click", function() {
                let quantity = cartItem.querySelector(".quantity-input").value;
                totalPrice -= product.price * quantity;
                cartItems.removeChild(cartItem);
                cartTotal.innerHTML = `Total: ₹${totalPrice}`;

                // Remove product from cartItemsList
                cartItemsList = cartItemsList.filter(item => item.name !== product.name);
            });

            // Add event listener to the quantity input
            cartItem.querySelector(".quantity-input").addEventListener("change", function() {
                let newQuantity = cartItem.querySelector(".quantity-input").value;
                let oldQuantity = cartItem.querySelector(".quantity-input").getAttribute('data-old-value') || 1;

                let priceDifference = (newQuantity - oldQuantity) * product.price;
                totalPrice += priceDifference;
                cartTotal.innerHTML = `Total: ₹${totalPrice}`;

                // Update product quantity in cartItemsList
                let cartItemObj = cartItemsList.find(item => item.name === product.name);
                if (cartItemObj) {
                    cartItemObj.quantity = newQuantity;
                }

                // Update old quantity
                cartItem.querySelector(".quantity-input").setAttribute('data-old-value', newQuantity);
            });

            // Set initial old quantity
            cartItem.querySelector(".quantity-input").setAttribute('data-old-value', 1);
        });

        div.append(name, img_div, rate_div, des_div, price, submit);
        main.appendChild(div);
    });

    // Update the body's background image
    let imageUrl = productImages[category][0]; // Directly get the image URL for the selected category
    document.body.style.backgroundImage = `url(${imageUrl})`;


});

document.querySelector(".exit_cart").addEventListener("click", function() {
    document.querySelector(".cart-section").classList.remove("visible");
});

// Store cart items in localStorage and navigate to place.html
document.getElementById("place_order").addEventListener("click", function() {
    localStorage.setItem('cartItems', JSON.stringify(cartItemsList));
    location.href = 'place.html';
});

// Inside the submit button event listener
submit.addEventListener("click", function() {
// ...existing code...

// Print the cart items list to the console
console.log("Cart Items List:", cartItemsList);
});


