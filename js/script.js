const products = [
    { name: 'Product 1', description:'Campera Cuero Masculina', precio: 19.99, image: '#' },
    { name: 'Product 2', description:'Saco y Suéter cuello alto', precio: 29.99, image: '#' },
    { name: 'Product 3', description:'Buzos para ell@s', precio: 39.99, image: '#' }
];

// Función para mostrar productos en la página.
function displayProducts() {
    const productsContainer = document.querySelector('.products');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');

        productCard.innerHTML = `
            <img src="imgs/${product.name}.jpg" alt="${product.name}">
            <p>${product.description}</p>
            <p>$${product.precio}</p>
            <button>Add to Cart</button>
        `;

        productsContainer.appendChild(productCard);
    });
}

// Llame a la función displayProducts cuando se carga la página
window.addEventListener('load', displayProducts);


  // FORMULARIO
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var jsonData = {};
    formData.forEach(function(value, key){
      jsonData[key] = value;
    });
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          document.getElementById('response').innerText = 'MENSAJE ENVIADO EXITOSAMENTE!';
          document.getElementById('contactForm').reset();
        } else {
          document.getElementById('response').innerText = 'HA OCURRIDO UN ERROR. POR FAVOR, VUELVA A INTENTAR.';
        }
      }
    };
    xhr.open('POST', 'your-server-endpoint-url', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(jsonData));
  });
  
