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


//FUNCION PARA LINKS DEL MENU PRINCIPAL
document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const links = document.querySelectorAll('.navbar-link');

    const contents = {
        home: '<h2>Inicio</h2><p>primera página</p>',
        women: '<h2>Mujeres</h2><p>Ropa para mujeres.</p>',
        men: '<h2>Hombres</h2><p>Ropa para hombres.</p>',
        kids: '<h2>Juveniles</h2><p>Ropa para chicos</p>',
        sustainable: '<h2>Sustentable</h2><p>Ropa sustentable</p>'
    };
    function updateActiveLink(activeLink) {
        links.forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }


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
  
  //Función para linkear dentro de la página
  function scrollToSection(event, sectionId) {
    event.preventDefault();
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
