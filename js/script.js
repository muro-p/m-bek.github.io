document.addEventListener('DOMContentLoaded', function() {
    // Qidiruv paneli va tugmasini topish
    const searchInput = document.querySelector('.search-box input[type="text"]');
    const searchButton = document.querySelector('.search-box button');

    // Material kartochkalarini topish (faqat mavjud bo'lsa)
    const materialGrid = document.querySelector('.material-grid');
    let materialCards = [];
    if (materialGrid) {
        materialCards = materialGrid.querySelectorAll('.material-card');
    }

    // Qidiruv funksiyasi
    function performSearch() {
        if (!materialGrid) {
            // Agar sahifada .material-grid bo'lmasa, qidiruv funksiyasini ishga tushirmaymiz
            return;
        }

        const searchTerm = searchInput.value.toLowerCase(); // Kiritilgan matnni kichik harflarga o'tkazamiz

        materialCards.forEach(card => {
            const cardTitle = card.querySelector('h4').textContent.toLowerCase(); // Kartochka sarlavhasini olamiz
            if (cardTitle.includes(searchTerm)) {
                card.style.display = 'block'; // Agar mos kelsa, ko'rsatamiz
            } else {
                card.style.display = 'none'; // Aks holda yashiramiz
            }
        });
    }

    // Qidiruv tugmasi bosilganda
    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }

    // Input maydoniga yozilganda (Enter tugmasi bosilganda ham)
    if (searchInput) {
        searchInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            } else {
                // Har bir harf kiritilganda dinamik qidiruv
                performSearch();
            }
        });
    }

    // Navbar (navigatsiya paneli) uchun aktiv sinfini belgilash
    const currentLocation = location.pathname.split('/').pop(); // Hozirgi fayl nomini oladi (masalan: index.html)
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentLocation) {
            link.classList.add('active-nav-link'); // Aktiv sahifa uchun sinf qo'shish
        }
    });
});
