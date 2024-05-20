  //CARGA EN HTML DIV ID="CONTENT"

document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const links = document.querySelectorAll('.navbar-link');

    const contents = {
        home: '<h2>Inicio</h2><p>primera página</p>',
        women: '<h2>Mujeres</h2><p>Ropa para mujeres.</p>',
        men: '<h2>Hombres</h2><p>Ropa para hombres.</p>',
        kids: '<h2>Juveniles</h2><p>Ropa para chicos</p>',
        sustainable: '<h2>Sustentable</h2><p>Ropa sustentable</p>',
        faq: '<h2>FAQ</h2><p>Preguntas Frecuentes</p>'
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