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


  // --------FORMULARIO--------
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    // Validación del nombre
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        valid = false;
        document.getElementById('nameError').innerText = 'El nombre es obligatorio.';
    } else {
        document.getElementById('nameError').innerText = '';
    }

    // Validación del correo electrónico
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        valid = false;
        document.getElementById('emailError').innerText = 'Ingrese un correo electrónico válido.';
    } else {
        document.getElementById('emailError').innerText = '';
    }

    // Validación del asunto
    const subject = document.getElementById('subject').value;
    if (subject === '') {
        valid = false;
        document.getElementById('subjectError').innerText = 'Seleccione un asunto.';
    } else {
        document.getElementById('subjectError').innerText = '';
    }

    // Validación del mensaje
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        valid = false;
        document.getElementById('messageError').innerText = 'El mensaje es obligatorio.';
    } else {
        document.getElementById('messageError').innerText = '';
    }

    if (valid) {
        alert('Formulario enviado correctamente.');
        // Aquí puedes agregar la lógica para enviar el formulario
        document.getElementById('contactForm').reset();
    }
});


  //Función para linkear dentro de la página
  
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

    function navigate(event) {
        event.preventDefault();
        const page = event.target.dataset.page;
        contentDiv.innerHTML = contents[page];
        updateActiveLink(event.target);
        history.pushState({page}, '', `#${page}`);
    }

    function updateActiveLink(activeLink) {
        links.forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }

    links.forEach(link => {
        link.addEventListener('click', navigate);
    });

    window.addEventListener('popstate', (event) => {
        const page = event.state ? event.state.page : 'home';
        contentDiv.innerHTML = contents[page];
        const activeLink = Array.from(links).find(link => link.dataset.page === page);
        updateActiveLink(activeLink);
    });

    const initialPage = location.hash.substring(1) || 'home';
    contentDiv.innerHTML = contents[initialPage];
    const initialLink = Array.from(links).find(link => link.dataset.page === initialPage);
    updateActiveLink(initialLink);
});
  
//-------BANNER--------//

document.addEventListener("DOMContentLoaded", () => {
  const bannerimgs = document.querySelectorAll('.bannerimg');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;

  function updateBanner(index) {
      bannerimgs.forEach((bannerimg, i) => {
          bannerimg.classList.toggle('active', i === index);
      });
  }

  prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + bannerimgs.length) % bannerimgs.length;
      updateBanner(currentIndex);
  });

  nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % bannerimgs.length;
      updateBanner(currentIndex);
  });

  // Initialize banner
  updateBanner(currentIndex);
});