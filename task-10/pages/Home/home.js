const products = [
    {
      id: 1,
      name: 'Caesar Salad',
      price: 8,
      category: 'salad',
      image: '../assets/food_1.png',
      description: 'Fresh romaine lettuce with Caesar dressing and croutons.'
    },
    {
      id: 2,
      name: 'Greek Salad',
      price: 7,
      category: 'salad',
      image: '../assets/food_2.png',
      description: 'Crispy vegetables with feta cheese and olives.'
    },
    {
      id: 3,
      name: 'Spring Rolls',
      price: 6,
      category: 'rolls',
      image: '../assets/food_3.png',
      description: 'Crispy vegetable spring rolls with dipping sauce.'
    },
    {
      id: 4,
      name: 'Chicken Rolls',
      price: 7,
      category: 'rolls',
      image: '../assets/food_4.png',
      description: 'Spicy grilled chicken wrapped in a soft roll.'
    },
    {
      id: 5,
      name: 'Chocolate Cake',
      price: 5,
      category: 'dessert',
      image: '../assets/food_5.png',
      description: 'Rich and moist chocolate cake with fudge icing.'
    },
    {
      id: 6,
      name: 'Ice Cream Sundae',
      price: 4,
      category: 'dessert',
      image: '../assets/food_6.png',
      description: 'Vanilla ice cream topped with syrup and nuts.'
    },
    {
      id: 7,
      name: 'Club Sandwich',
      price: 6,
      category: 'sandwich',
      image: '../assets/food_7.png',
      description: 'Triple layered sandwich with chicken and veggies.'
    },
    {
      id: 8,
      name: 'Grilled Cheese',
      price: 4,
      category: 'sandwich',
      image: '../assets/food_8.png',
      description: 'Classic grilled cheese sandwich with cheddar.'
    },
    {
      id: 9,
      name: 'Fruit Salad',
      price: 5,
      category: 'salad',
      image: '../assets/food_9.png',
      description: 'Refreshing mix of seasonal fruits.'
    },
    {
      id: 10,
      name: 'Veggie Wrap',
      price: 6,
      category: 'rolls',
      image: '../assets/food_9.png',
      description: 'Healthy wrap filled with fresh veggies.'
    }
  ];
    function displayProducts(productsToShow) {
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = ''; // Clear current products
  
    productsToShow.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product-item');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
            <div class="product-info">

        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <div>

      `;
      productContainer.appendChild(productElement);
    });
  }
  
  displayProducts(products); // Display all products initially
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const productInCart = cart.find(p => p.id === productId);
  
    if (productInCart) {
      productInCart.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
  }
  
  function filterProducts(category) {
    const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
    displayProducts(filteredProducts);
  }
  
  document.getElementById('search-bar').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    const filteredProducts = products.filter(p => p.name.toLowerCase().includes(query));
    displayProducts(filteredProducts);
  });
  let menu = 'home';
  const setMenu = (newMenu) => {
    menu = newMenu;
    updateMenuState();
  };

    const updateMenuState = () => {
      document.querySelectorAll('.Navbar-menu a').forEach(link => {
        link.classList.remove('active');
      });

      const activeLink = document.getElementById(menu + '-link');
      if (activeLink) {
        activeLink.classList.add('active');
      }
    };

    // Add click event listeners to menu items
    document.getElementById('home-link').addEventListener('click', (e) => {
      e.preventDefault();
      setMenu('home');
    });
    document.getElementById('menu-link').addEventListener('click', (e) => {
      e.preventDefault();
      setMenu('menu');
    });
    document.getElementById('mobile-app-link').addEventListener('click', (e) => {
      e.preventDefault();
      setMenu('mobile-app');
    });
    document.getElementById('contact-us-link').addEventListener('click', (e) => {
      e.preventDefault();
      setMenu('contact us');
    });


        